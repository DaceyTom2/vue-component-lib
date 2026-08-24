# Vue Component Library

A small Vue 3 component library built with TypeScript, Vite, and Tailwind CSS.

## Installation

```sh
npm install @daceytom2/vue-component-lib vue
```

Vue is declared as a peer dependency, so the consuming application supplies the Vue instance.

## Usage

Import the components and the library stylesheet in your application entry point:

```ts
import { SomeButton, SomeCheckbox } from "@daceytom2/vue-component-lib";
import "@daceytom2/vue-component-lib/style.css";
```

```vue
<script setup lang="ts">
import { ref } from "vue";
import { SomeButton, SomeCheckbox } from "@daceytom2/vue-component-lib";

const accepted = ref(false);
const save = () => {
  accepted.value = true;
};
</script>

<template>
  <SomeButton variant="primary" @click="save">Save</SomeButton>
  <SomeCheckbox v-model="accepted">Accept the terms</SomeCheckbox>
</template>
```

## Components

### `SomeButton`

| Prop       | Type                                  | Default     |
| ---------- | ------------------------------------- | ----------- |
| `variant`  | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` |
| `size`     | `'sm' \| 'md' \| 'lg'`                | `'md'`      |
| `disabled` | `boolean`                             | `false`     |

The component forwards native button attributes and emits `click` and `someFocus` events. Use the default slot for the button label.

### `SomeCheckbox`

| Prop         | Type      | Default |
| ------------ | --------- | ------- |
| `modelValue` | `boolean` | `false` |
| `disabled`   | `boolean` | `false` |

The component supports `v-model` and emits `update:modelValue`, `change`, and `focus` events. Use the default slot for the checkbox label.

Both components export their prop types from the package entry point:

```ts
import type {
  SomeButtonProps,
  SomeCheckboxProps,
} from "@daceytom2/vue-component-lib";
```

## Development

Install dependencies:

```sh
npm install
```

Start the Vite demo application:

```sh
npm run dev
```

Start Storybook:

```sh
npm run storybook
```

Run unit tests:

```sh
npm run test:unit
```

Build the library:

```sh
npm run build
```

Build Storybook for deployment:

```sh
npm run build-storybook
```
