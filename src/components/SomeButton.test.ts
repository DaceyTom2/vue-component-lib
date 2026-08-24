import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SomeButton from './SomeButton.vue';

describe('SomeButton', () => {
  it('renders the configured variant and size', () => {
    const wrapper = mount(SomeButton, {
      props: { variant: 'ghost', size: 'lg' },
      slots: { default: 'Continue' },
    });

    expect(wrapper.text()).toBe('Continue');
    expect(wrapper.classes()).toContain('tvc:border-blue-600/35');
    expect(wrapper.classes()).toContain('tvc:text-base');
  });

  it('emits click events and forwards native attributes', async () => {
    const wrapper = mount(SomeButton, {
      attrs: { 'aria-label': 'Save changes', type: 'submit' },
    });

    await wrapper.trigger('click');

    expect(wrapper.attributes('aria-label')).toBe('Save changes');
    expect(wrapper.attributes('type')).toBe('submit');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });
});