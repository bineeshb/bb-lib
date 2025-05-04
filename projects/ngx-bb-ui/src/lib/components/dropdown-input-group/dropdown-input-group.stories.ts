import { argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownInputGroupComponent } from './dropdown-input-group.component';

const meta: Meta<DropdownInputGroupComponent> = {
  title: 'Example/Dropdown Input Group',
  component: DropdownInputGroupComponent,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text'
    },
    name: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    },
  },
};

export default meta;
type Story = StoryObj<DropdownInputGroupComponent>;

const DEFAULT: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    id: 'sb',
    name: 'sb',
    disabled: false,
  },
};

export const ReactiveForm: Story = {
  args: {
    ...DEFAULT.args,
  },
  render: args => ({
    props: {
      ...args,
      storyForm: new FormGroup({
        digControl: new FormControl({ selectedOption: 'option1', input: 'Option1' }),
      }),
    },
    template: `
      <form [formGroup]="storyForm">
        <bb-dropdown-input-group ${argsToTemplate(args)} formControlName="digControl" />
      </form>
      <br />
      @if(storyForm.get('digControl').value) {
        <div>{{ storyForm.get('digControl').value | json }}</div>
      }
    `,
  }),
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule]
    }),
  ],
};

export const TemplateDrivenForm: Story = {
  args: {
    ...DEFAULT.args,
  },
  render: args => ({
    props: {
      ...args,
      digValue: { selectedOption: 'option1', input: 'Option1' },
    },
    template: `
      <bb-dropdown-input-group ${argsToTemplate(args)} [(ngModel)]="digValue" />
      <br />
      @if(digValue) {
        <div>{{ digValue | json }}</div>
      }
    `,
  }),
  decorators: [
    moduleMetadata({
      imports: [FormsModule]
    }),
  ],
};
