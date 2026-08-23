<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
  }>(),
  {
    variant: "primary",
    size: "md",
    disabled: false,
  },
);

const emit = defineEmits<{
  click: [event: MouseEvent];
  
  someFocus: [event: FocusEvent];
}>();
</script>

<template>
  <button
    class="inline-flex cursor-pointer items-center justify-center rounded-[10px] border-0 font-semibold transition duration-150 ease-in-out hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-60"
    :class="{
      'px-3.5 py-2 text-xs': size === 'sm',
      'px-[1.1rem] py-3 text-[0.95rem]': size === 'md',
      'px-[1.4rem] py-3.5 text-base': size === 'lg',
      'bg-blue-500 text-white shadow-[0_8px_20px_rgba(59,130,246,0.25)]': variant === 'primary',
      'bg-slate-200 text-slate-900': variant === 'secondary',
      'border border-blue-600/35 bg-transparent text-blue-600': variant === 'ghost',
    }"
    :disabled="disabled"
    v-bind="$attrs"
    @click="emit('click', $event)"
    @focusin="emit('someFocus', $event)"
  >
    <slot />
  </button>
</template>
