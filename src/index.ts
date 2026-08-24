import SomeButton from './components/SomeButton.vue';
import SomeCheckbox from './components/SomeCheckbox.vue';
import './style.css';

export type SomeButtonProps = InstanceType<typeof SomeButton>['$props'];
export type SomeCheckboxProps = InstanceType<typeof SomeCheckbox>['$props'];

export { SomeButton, SomeCheckbox };