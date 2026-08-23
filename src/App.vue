<script setup lang="ts">
import SomeButton from "./components/SomeButton.vue";
import SomeCheckbox from "./components/SomeCheckbox.vue";
</script>

<template>
  <main class="grid min-h-screen place-items-center gap-6 bg-slate-50 p-8 text-slate-900">
    <h1 class="m-0 text-4xl font-semibold sm:text-5xl">Vue Components</h1>

    <div class="flex flex-wrap justify-center gap-4">
      <SomeButton @some-focus="()=>{console.log('test123')}">Primary</SomeButton>
      <SomeButton variant="secondary">Secondary</SomeButton>
      <SomeButton variant="ghost" size="lg">Ghost</SomeButton>
      <SomeButton disabled>Disabled</SomeButton>
      <SomeCheckbox>Click me</SomeCheckbox>
    </div>
  </main>
</template>
