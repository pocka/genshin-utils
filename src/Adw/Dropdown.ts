import { css, html, LitElement, PropertyValues } from "lit";
import { property } from "lit/decorators/property.js";
import { createRef, ref } from "lit/directives/ref.js";
import { AdwAction } from "./Action";

import { AdwMenu } from "./Menu";

interface Size {
  width: number;
  height: number;
}

interface Position {
  x: number;
  y: number;
}

/**
 * This element automatically set `aria-*` attributes only if an element assigned
 * to the default slot has non-empty `id` attribute.
 *
 * @example
 * <adw-dropdown>
 *   <adw-button slot="trigger"><button>Trigger</button></adw-button>
 *
 *   <div id="sample_popup">Popup</div>
 * </adw-dropdown>
 */
export class AdwDropdown extends LitElement {
  static defaultTagName = "adw-dropdown" as const;

  static get styles() {
    return css`
      :host {
        position: relative;

        overflow: visible;
      }

      .content {
        position: absolute;
        display: none;
        visibility: hidden;
        pointer-events: none;

        min-width: 0;
        max-width: none;
        z-index: 9999;
      }
    `;
  }

  #triggerSlot = createRef<HTMLSlotElement>();
  #content = createRef<HTMLDivElement>();
  #contentSlot = createRef<HTMLSlotElement>();

  constructor() {
    super();

    this.addEventListener("keydown", (ev) => {
      if (ev.isComposing) {
        return;
      }

      switch (ev.key) {
        case "Escape":
          this.close(true);
          ev.preventDefault();
          ev.stopPropagation();
          return;
      }
    });
  }

  public render() {
    return html`
      <slot
        name="trigger"
        @click=${this.#toggleOpened}
        @slotchange=${this.#updateAria}
        ${ref(this.#triggerSlot)}
      ></slot>

      <div class="content" ${ref(this.#content)}>
        <slot ${ref(this.#contentSlot)} @click=${this.close}></slot>
      </div>
    `;
  }

  @property({
    attribute: true,
    type: Boolean,
    reflect: true,
  })
  opened: boolean = false;

  updated(changedProperties: PropertyValues<this>) {
    super.updated(changedProperties);

    if (changedProperties.has("opened")) {
      this.#updateAria();
    }
  }

  #updateAria = () => {
    if (!this.#triggerSlot.value || !this.#contentSlot.value) {
      return;
    }

    const [trigger] = this.#triggerSlot.value.assignedElements();
    if (!trigger) {
      return;
    }

    const ariaTarget =
      (trigger instanceof AdwAction ? trigger.getActionInstance() : null) ||
      trigger;

    const [content] = this.#contentSlot.value.assignedElements();
    if (!content || !(content instanceof HTMLElement) || !content.id) {
      return;
    }

    ariaTarget.setAttribute("aria-expanded", String(this.opened));
    ariaTarget.setAttribute("aria-controls", content.id);
  };

  #toggleOpened = () => {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  };

  public close = (restoreFocus: boolean = false) => {
    if (!this.opened) {
      return;
    }

    document.removeEventListener(
      "focusout",
      this.#closeIfOutsideElementGetsFocus
    );

    if (this.#content.value) {
      this.#content.value.style.display = "none";
    }

    if (this.#triggerSlot.value) {
      const [el] = this.#triggerSlot.value.assignedElements();
      if (el && el instanceof HTMLElement) {
        el.tabIndex = 0;

        if (restoreFocus) {
          el.focus();
        }
      }
    }

    this.dispatchEvent(new CustomEvent("menuclose"));
    this.opened = false;
  };

  public open = () => {
    if (this.opened) {
      return;
    }

    if (this.#triggerSlot.value) {
      const [el] = this.#triggerSlot.value.assignedElements();
      if (el && el instanceof HTMLElement) {
        el.tabIndex = -1;
      }
    }

    document.addEventListener("focusout", this.#closeIfOutsideElementGetsFocus);

    if (this.#content.value) {
      this.#content.value.style.display = "block";
      this.#content.value.style.visibility = "hidden";
      this.#content.value.style.pointerEvents = "none";

      const contentsSize = this.#content.value.getBoundingClientRect();
      const triggerBox = this.getBoundingClientRect();
      const viewportSize: Size = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const position = getPopupPosition(viewportSize, triggerBox, contentsSize);

      this.#content.value.style.visibility = "visible";
      this.#content.value.style.pointerEvents = "all";
      this.#content.value.style.left = position.x + "px";
      this.#content.value.style.top = position.y + "px";

      // Move focus to the menu
      if (this.#contentSlot.value) {
        const [element] = this.#contentSlot.value.assignedElements();
        if (element instanceof AdwMenu) {
          element.tabIndex = 0;
          element.focus();
          element.addEventListener(
            "blur",
            (ev) => {
              // Remove menu container from tab order, so focus goes straight into
              // the top or last selected item.
              element.removeAttribute("tabindex");
            },
            { once: true }
          );
        }
      }
    }

    this.dispatchEvent(new CustomEvent("menuopen"));
    this.opened = true;
  };

  #closeIfOutsideElementGetsFocus = (ev: FocusEvent) => {
    if (
      ev.relatedTarget &&
      ev.relatedTarget instanceof HTMLElement &&
      this.contains(ev.relatedTarget)
    ) {
      return;
    }

    this.close();
  };
}

function getPopupPosition(
  viewport: Size,
  trigger: Size & Position,
  contentSize: Size,
  padding: number = 10
): Position {
  const x =
    trigger.x + contentSize.width + padding <= viewport.width
      ? // default to left align
        0
      : // fallback to right align
        -(contentSize.width - trigger.width);

  const y =
    trigger.y + trigger.height + contentSize.height + padding * 2 <=
    viewport.height
      ? // default to bottom
        trigger.height + padding
      : // fallback to top
        -(contentSize.height + padding * 2);

  return { x, y };
}
