import { LitElement } from "lit";
import type { PropertyValues } from "lit";
import { property } from "lit/decorators/property.js";
import { createRef } from "lit/directives/ref.js";

/**
 * An abstract class for custom element that wraps action element such as
 * `<button>` or `<a>`.
 *
 * This class adds two properties: `disabled` and `loading`. Both attributes
 * disables click/press action but keeps focus tab order.
 *
 * - Make sure to set `actionSlot` to the slot element where action elements
 *   will be assigned to.
 * - Make sure to call `super.updated(changedProperties)` if you override
 *   `updated` lifecycle hook.
 * - This class does not provide any styles.
 */
export abstract class AdwAction extends LitElement {
  protected actionSlot = createRef<HTMLSlotElement>();

  @property({
    type: Boolean,
    attribute: true,
    reflect: true,
  })
  disabled: boolean = false;

  @property({
    type: Boolean,
    attribute: true,
    reflect: true,
  })
  loading: boolean = false;

  updated(changedProperties: PropertyValues<this>) {
    super.updated(changedProperties);

    if (changedProperties.has("disabled")) {
      this.setAttribute("aria-disabled", String(this.disabled));
    }

    if (changedProperties.has("loading")) {
      this.setAttribute("aria-busy", String(this.loading));
    }
  }

  constructor() {
    super();

    this.addEventListener(
      "click",
      (ev) => {
        if (this.disabled || this.loading) {
          ev.preventDefault();
          ev.stopPropagation();
          return;
        }
      },
      {
        capture: true,
      }
    );
  }

  public getActionInstance(): HTMLButtonElement | HTMLAnchorElement | null {
    if (!this.actionSlot.value) {
      return null;
    }

    const elements = this.actionSlot.value.assignedElements();
    for (const el of elements) {
      if (el instanceof HTMLButtonElement || el instanceof HTMLAnchorElement) {
        return el;
      }
    }

    return null;
  }

  public override get tabIndex() {
    const el = this.getActionInstance();
    if (el) {
      return el.tabIndex;
    }

    return super.tabIndex;
  }

  public override set tabIndex(i) {
    const el = this.getActionInstance();
    if (el) {
      el.tabIndex = i;
      return;
    }

    super.tabIndex = i;
  }

  public override focus(opts?: FocusOptions) {
    const el = this.getActionInstance();
    if (el) {
      el.focus(opts);
      return;
    }

    super.focus.call(this, opts);
  }
}
