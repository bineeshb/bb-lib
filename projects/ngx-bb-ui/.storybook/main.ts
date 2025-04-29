import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": ['../src/lib/components/**/*.stories.ts'],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  }
};
export default config;