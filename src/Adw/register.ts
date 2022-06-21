import { AdwButton } from "./Button";
import { AdwGlowDot } from "./GlowDot";
import { AdwNavItem } from "./NavItem";

interface AdwComponent {
  defaultTagName: string;
}

export const components: readonly (CustomElementConstructor & AdwComponent)[] =
  [AdwButton, AdwGlowDot, AdwNavItem];

export function register() {
  components.forEach((component) => {
    if (customElements.get(component.defaultTagName)) {
      return;
    }

    customElements.define(component.defaultTagName, component);
  });
}
