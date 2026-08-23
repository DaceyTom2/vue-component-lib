<script setup lang="ts">
import SomeButton from "./components/SomeButton.vue";
</script>

<template>
  <main class="demo">
    <h1>Vue Button Component</h1>

    <div class="button-row">
      <SomeButton>Primary</SomeButton>
      <SomeButton variant="secondary">Secondary</SomeButton>
      <SomeButton variant="ghost" size="lg">Ghost</SomeButton>
      <SomeButton disabled>Disabled</SomeButton>
    </div>
  </main>
</template>

<style scoped>
.demo {
  min-height: 100vh;
  display: grid;
  place-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: #f8fafc;
  color: #0f172a;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
