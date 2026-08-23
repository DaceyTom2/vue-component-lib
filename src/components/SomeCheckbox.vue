<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    disabled?: boolean;
  }>(),
  {
    modelValue: false,
    disabled: false,
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
  change: [event: Event];
  focus: [event: FocusEvent];
}>();
</script>

<template>
  <label
    class="inline-flex cursor-pointer items-center gap-2 text-slate-900"
    :class="{ 'cursor-not-allowed opacity-60': disabled }"
  >
    <input
      class="size-[1.125rem] accent-blue-600"
      type="checkbox"
      :checked="props.modelValue"
      :disabled="disabled"
      v-bind="$attrs"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked); emit('change', $event)"
      @focus="emit('focus', $event)"
    />
    <span><slot /></span>
  </label>
</template>
