import { AdwButton } from "./Button";
import { AdwDropdown } from "./Dropdown";
import { AdwGlowDot } from "./GlowDot";
import { AdwInput } from "./Input";
import { AdwMenu } from "./Menu";
import { AdwMenuItem } from "./MenuItem";
import { AdwNav } from "./Nav";
import { AdwNavItem } from "./NavItem";
import { AdwProgress } from "./Progress";
import { AdwSelect } from "./Select";
import { AdwSwitch } from "./Switch";

interface AdwComponent {
  defaultTagName: string;
}

export const components: readonly (CustomElementConstructor & AdwComponent)[] =
  [
    AdwButton,
    AdwDropdown,
    AdwGlowDot,
    AdwInput,
    AdwMenu,
    AdwMenuItem,
    AdwNav,
    AdwNavItem,
    AdwProgress,
    AdwSelect,
    AdwSwitch,
  ];

export function register() {
  components.forEach((component) => {
    if (customElements.get(component.defaultTagName)) {
      return;
    }

    customElements.define(component.defaultTagName, component);
  });
}
