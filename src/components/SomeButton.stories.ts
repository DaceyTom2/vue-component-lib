import type { Meta, StoryObj } from '@storybook/vue3-vite';
import SomeButton from './SomeButton.vue';

const meta = {
  title: 'Components/SomeButton',
  component: SomeButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof SomeButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => ({
    components: { SomeButton },
    setup: () => ({ args }),
    template: '<SomeButton v-bind="args">Primary action</SomeButton>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
  },
  render: (args) => ({
    components: { SomeButton },
    setup: () => ({ args }),
    template: '<SomeButton v-bind="args">Secondary action</SomeButton>',
  }),
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'lg',
  },
  render: (args) => ({
    components: { SomeButton },
    setup: () => ({ args }),
    template: '<SomeButton v-bind="args">Ghost action</SomeButton>',
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { SomeButton },
    setup: () => ({ args }),
    template: '<SomeButton v-bind="args">Unavailable</SomeButton>',
  }),
};