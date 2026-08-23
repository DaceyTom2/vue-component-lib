import type { App } from 'vue';
import SomeButton from './components/SomeButton.vue';

export { SomeButton };

export function install(app: App) {
  app.component('SomeButton', SomeButton);
}

export default {
  install,
};