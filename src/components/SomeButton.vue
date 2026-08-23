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
}>();
</script>

<template>
  <button
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`]"
    :disabled="disabled"
    v-bind="$attrs"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  appearance: none;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    opacity 0.15s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.btn--sm {
  padding: 0.5rem 0.875rem;
  font-size: 0.75rem;
}

.btn--md {
  padding: 0.75rem 1.1rem;
  font-size: 0.95rem;
}

.btn--lg {
  padding: 0.9rem 1.4rem;
  font-size: 1rem;
}

.btn--primary {
  background: #3b82f6;
  color: white;
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.25);
}

.btn--secondary {
  background: #e2e8f0;
  color: #0f172a;
}

.btn--ghost {
  background: transparent;
  color: #2563eb;
  border: 1px solid rgba(37, 99, 235, 0.35);
}
</style>
