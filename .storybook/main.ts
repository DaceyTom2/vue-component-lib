import type { StorybookConfig } from '@storybook/vue3-vite';

const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
} satisfies StorybookConfig;

export default config;