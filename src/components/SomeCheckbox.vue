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
    class="tvc:inline-flex tvc:cursor-pointer tvc:items-center tvc:gap-2 tvc:text-slate-900"
    :class="{ 'tvc:cursor-not-allowed tvc:opacity-60': disabled }"
  >
    <input
      class="tvc:size-[1.125rem] tvc:accent-blue-600"
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
