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
  <label class="checkbox" :class="{ 'checkbox--disabled': disabled }">
    <input
      class="checkbox__input"
      type="checkbox"
      :checked="props.modelValue"
      :disabled="disabled"
      v-bind="$attrs"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked); emit('change', $event)"
      @focus="emit('focus', $event)"
    />
    <span class="checkbox__box" aria-hidden="true"></span>
    <span class="checkbox__label"><slot /></span>
  </label>
</template>

<style scoped>
.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: #0f172a;
}

.checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.checkbox__input {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  clip-path: inset(50%);
}

.checkbox__box {
  display: inline-grid;
  width: 1.125rem;
  height: 1.125rem;
  place-items: center;
  border: 2px solid #64748b;
  border-radius: 4px;
  background: #fff;
}

.checkbox__input:checked + .checkbox__box {
  border-color: #2563eb;
  background: #2563eb;
}

.checkbox__input:checked + .checkbox__box::after {
  width: 0.35rem;
  height: 0.625rem;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) translate(-1px, -1px);
  content: "";
}

.checkbox__input:focus-visible + .checkbox__box {
  outline: 3px solid rgba(37, 99, 235, 0.3);
  outline-offset: 2px;
}
</style>
