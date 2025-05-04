import { argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
        digControl1: new FormControl({ selectedOption: 'option1', input: 'Option1' }),
        digControl2: new FormControl({ value: { selectedOption: 'option1', input: 'Option1' }, disabled: true }),
        digControl3: new FormControl(null, Validators.required),
      }),
    },
    template: `
      <form [formGroup]="storyForm">
        <bb-dropdown-input-group ${argsToTemplate(args)} formControlName="digControl1" />
        @if(storyForm.get('digControl1').value) {
          <br />
          <div>Value: {{ storyForm.get('digControl1').value | json }}</div>
        }
        <br />
        <h3>Disabled</h3>
        <bb-dropdown-input-group ${argsToTemplate(args)} formControlName="digControl2" />
        <br />
        <h3>Validation - Required</h3>
        <bb-dropdown-input-group ${argsToTemplate(args)} formControlName="digControl3" />
        @if (storyForm.get('digControl3')?.errors?.required) {
          <div>This field is required</div>
        }
      </form>
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
    disabled: false,
  },
  render: args => ({
    props: {
      ...args,
      digValue1: { selectedOption: 'option1', input: 'Option1' },
      digValue2: { selectedOption: 'option1', input: 'Option1' },
      digValue3: null,
    },
    template: `
      <bb-dropdown-input-group ${argsToTemplate(args)} [(ngModel)]="digValue1" />
      @if(digValue1) {
        <br />
        <div>Value: {{ digValue1 | json }}</div>
      }
      <br />
      <h3>Disabled</h3>
      <bb-dropdown-input-group ${argsToTemplate(args)} [(ngModel)]="digValue2" [disabled]="true" />
      <br />
      <h3>Validation - Required</h3>
      <bb-dropdown-input-group ${argsToTemplate(args)} [(ngModel)]="digValue3" [required]="true" #dig3="ngModel" name="dig3" />
      @if (dig3.errors?.required) {
        <div>This field is required</div>
      }
    `,
  }),
  decorators: [
    moduleMetadata({
      imports: [FormsModule]
    }),
  ],
};
