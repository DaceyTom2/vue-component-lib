import type { Preview } from '@storybook/vue3-vite';
import '../src/style.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
} satisfies Preview;

export default preview;