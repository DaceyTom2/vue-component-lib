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
    class="tvc:inline-flex tvc:cursor-pointer tvc:items-center tvc:justify-center tvc:rounded-[10px] tvc:border-0 tvc:font-semibold tvc:transition tvc:duration-150 tvc:ease-in-out tvc:hover:-translate-y-px tvc:disabled:cursor-not-allowed tvc:disabled:opacity-60"
    :class="{
      'tvc:px-3.5 tvc:py-2 tvc:text-xs': size === 'sm',
      'tvc:px-[1.1rem] tvc:py-3 tvc:text-[0.95rem]': size === 'md',
      'tvc:px-[1.4rem] tvc:py-3.5 tvc:text-base': size === 'lg',
      'tvc:bg-blue-500 tvc:text-white tvc:shadow-[0_8px_20px_rgba(59,130,246,0.25)]': variant === 'primary',
      'tvc:bg-slate-200 tvc:text-slate-900': variant === 'secondary',
      'tvc:border tvc:border-blue-600/35 tvc:bg-transparent tvc:text-blue-600': variant === 'ghost',
    }"
    :disabled="disabled"
    v-bind="$attrs"
    @click="emit('click', $event)"
    @focusin="emit('someFocus', $event)"
  >
    <slot />
  </button>
</template>
