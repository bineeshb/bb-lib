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
  },
  args: { closed: fn() },
};

export default meta;
type Story = StoryObj<ToastComponent>;

export const SuccessToast: Story = {
  args: {
    message: 'Test Success Message',
    type: 'success',
    life: 10000,
  },
};

export const ErrorToast: Story = {
  args: {
    message: 'Test Error Message',
    type: 'error',
  },
};
