import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SomeCheckbox from './SomeCheckbox.vue';

describe('SomeCheckbox', () => {
  it('supports v-model updates and emits change', async () => {
    const wrapper = mount(SomeCheckbox, {
      props: { modelValue: false },
      slots: { default: 'Accept terms' },
    });

    await wrapper.get('input').setValue(true);

    expect(wrapper.get('input').element.checked).toBe(true);
    expect(wrapper.emitted('update:modelValue')).toEqual([[true]]);
    expect(wrapper.emitted('change')).toHaveLength(1);
  });

  it('prevents interaction when disabled', () => {
    const wrapper = mount(SomeCheckbox, { props: { disabled: true } });

    expect(wrapper.get('input').element.disabled).toBe(true);
    expect(wrapper.classes()).toContain('tvc:cursor-not-allowed');
  });
});