<script setup lang="ts">
import SomeButton from "./components/SomeButton.vue";
import SomeCheckbox from "./components/SomeCheckbox.vue";
</script>

<template>
  <main class="tvc:grid tvc:min-h-screen tvc:place-items-center tvc:gap-6 tvc:bg-slate-50 tvc:p-8 tvc:text-slate-900">
    <h1 class="tvc:m-0 tvc:text-4xl tvc:font-semibold tvc:sm:text-5xl">Vue Components</h1>

    <div class="tvc:flex tvc:flex-wrap tvc:justify-center tvc:gap-4">
      <SomeButton @some-focus="()=>{console.log('test123')}">Primary</SomeButton>
      <SomeButton variant="secondary">Secondary</SomeButton>
      <SomeButton variant="ghost" size="lg">Ghost</SomeButton>
      <SomeButton disabled>Disabled</SomeButton>
      <SomeCheckbox>Click me</SomeCheckbox>
    </div>
  </main>
</template>
