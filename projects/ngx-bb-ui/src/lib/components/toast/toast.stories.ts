import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ToastComponent } from './toast.component';

const meta: Meta<ToastComponent> = {
  title: 'Example/Toast',
  component: ToastComponent,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
    },
    type: {
      control: 'radio',
      options: ['success', 'error'],
    },
    life: {
      control: 'number',
    },
    closed: {
      type: 'function',
      control: false
    },
  },
};

export default meta;
type Story = StoryObj<ToastComponent>;

const DEFAULT: Story = {
  args: {
    message: 'Test Success Message',
    type: 'success',
    life: 5000,
    closed: () => console.log('Toast Closed !!!'),
  }
};

export const SuccessToast: Story = {
  args: {
    ...DEFAULT.args,
  },
};

export const ErrorToast: Story = {
  args: {
    ...DEFAULT.args,
    message: 'Test Error Message',
    type: 'error',
  },
};
