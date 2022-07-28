import { RadixIconsBackpack } from "./Backpack";
import { RadixIconsCheck } from "./Check";
import { RadixIconsCrossCircled } from "./CrossCircled";
import { RadixIconsDotsVertical } from "./DotsVertical";
import { RadixIconsPencil2 } from "./Pencil2";
import { RadixIconsTimer } from "./Timer";
import { RadixIconsTrash } from "./Trash";

interface RadixIconsComponent {
  defaultTagName: string;
}

export const components: readonly (CustomElementConstructor &
  RadixIconsComponent)[] = [
  RadixIconsBackpack,
  RadixIconsCheck,
  RadixIconsCrossCircled,
  RadixIconsDotsVertical,
  RadixIconsPencil2,
  RadixIconsTimer,
  RadixIconsTrash,
];

export function register() {
  components.forEach((component) => {
    if (customElements.get(component.defaultTagName)) {
      return;
    }

    customElements.define(component.defaultTagName, component);
  });
}
