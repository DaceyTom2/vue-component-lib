import type { Meta, StoryObj } from '@storybook/vue3-vite';
import SomeCheckbox from './SomeCheckbox.vue';

const meta = {
  title: 'Components/SomeCheckbox',
  component: SomeCheckbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Whether the checkbox is selected.',
    },
  },
} satisfies Meta<typeof SomeCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    modelValue: false,
  },
  render: (args) => ({
    components: { SomeCheckbox },
    setup: () => ({ args }),
    template: '<SomeCheckbox v-bind="args">Subscribe to updates</SomeCheckbox>',
  }),
};

export const Checked: Story = {
  args: {
    modelValue: true,
  },
  render: (args) => ({
    components: { SomeCheckbox },
    setup: () => ({ args }),
    template: '<SomeCheckbox v-bind="args">Subscribe to updates</SomeCheckbox>',
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { SomeCheckbox },
    setup: () => ({ args }),
    template: '<SomeCheckbox v-bind="args">Subscription unavailable</SomeCheckbox>',
  }),
};