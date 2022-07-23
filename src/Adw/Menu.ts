import { css, html, LitElement } from "lit";
import { createRef, ref } from "lit/directives/ref.js";

import { AdwMenuItem } from "./MenuItem";

/**
 * @slot default - A list of `<adw-menu-item>` or element inherits it.
 */
export class AdwMenu extends LitElement {
  static defaultTagName = "adw-menu" as const;

  static get styles() {
    return css`
      :host {
        --_border-color: hsl(
          var(--adw-color-border-hue),
          var(--adw-color-border-saturation),
          calc(
            var(--adw-color-border-lightness) + var(--adw-lightness-step) * 0.7
          )
        );

        display: inline-flex;
        flex-direction: column;
        align-items: stretch;
        border: 1px solid var(--_border-color);

        border-radius: var(--adw-radius-medium);
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
        overflow: hidden;
      }

      :host(:focus) {
        border-color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
        box-shadow: 0 0 0 var(--adw-spacing-xsmall)
          hsla(
            var(--adw-color-primary-hue),
            var(--adw-color-primary-saturation),
            var(--adw-color-primary-lightness),
            0.6
          );
        outline: none;
      }

      ::slotted(:not(:first-child)) {
        border-top: 1px solid var(--_border-color);
      }
    `;
  }

  constructor() {
    super();

    this.addEventListener("keydown", (ev) => {
      if (ev.isComposing) {
        return;
      }

      switch (ev.key) {
        case "ArrowUp":
          this.#focusDown(-1);
          ev.preventDefault();
          ev.stopPropagation();
          return;
        case "ArrowDown":
          this.#focusDown(1);
          ev.preventDefault();
          ev.stopPropagation();
          return;
      }
    });

    this.addEventListener("focusin", (ev) => {
      const items = this.getMenuItems();

      const focusedItem = this.querySelector(":scope > :focus-within");
      if (!focusedItem) {
        return;
      }

      items.forEach((item) => {
        item.tabIndex = item === focusedItem ? 0 : -1;
      });
    });
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "list");
    }
  }

  #slot = createRef<HTMLSlotElement>();

  public render() {
    return html` <slot ${ref(this.#slot)}></slot> `;
  }

  public getMenuItems = (): readonly AdwMenuItem[] => {
    if (!this.#slot.value) {
      return [];
    }

    return this.#slot.value
      .assignedElements()
      .filter((el): el is AdwMenuItem => {
        if (!(el instanceof AdwMenuItem)) {
          return false;
        }

        return true;
      });
  };

  #focusDown = (amount: number) => {
    const items = this.getMenuItems();
    if (!items.length) {
      return;
    }

    const focusedItem = this.querySelector(":scope > :focus-within");

    const focusedIndex =
      focusedItem && focusedItem instanceof AdwMenuItem
        ? items.indexOf(focusedItem)
        : -1;

    const unclippedNextIndex = focusedIndex < 0 ? 0 : focusedIndex + amount;
    const nextIndex =
      unclippedNextIndex < 0
        ? items.length - 1
        : unclippedNextIndex >= items.length
        ? 0
        : unclippedNextIndex;

    items.forEach((el, i) => {
      if (i === nextIndex) {
        el.focus();
        el.tabIndex = 0;
        return;
      }

      // https://web.dev/control-focus-with-tabindex/#create-accessible-components-with-%22roving-tabindex%22
      el.tabIndex = -1;
    });
  };
}
