import { RadixIconsTimer } from "./Timer";

interface RadixIconsComponent {
  defaultTagName: string;
}

export const components: readonly (CustomElementConstructor &
  RadixIconsComponent)[] = [RadixIconsTimer];

export function register() {
  components.forEach((component) => {
    if (customElements.get(component.defaultTagName)) {
      return;
    }

    customElements.define(component.defaultTagName, component);
  });
}
