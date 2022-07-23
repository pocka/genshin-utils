import { css, html, nothing, LitElement } from "lit";
import { state } from "lit/decorators/state.js";
import { createRef, ref } from "lit/directives/ref.js";

export class AdwInput extends LitElement {
  static defaultTagName = "adw-input" as const;

  static get styles() {
    return css`
      :host {
        --_button-size: calc(2.8 * var(--adw-unit));

        display: inline-flex;
        min-width: 0;
        border: 1px solid
          hsl(
            var(--adw-color-border-hue),
            var(--adw-color-border-saturation),
            var(--adw-color-border-lightness)
          );

        background: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) + var(--adw-lightness-step) * 0.5)
        );
        border-radius: var(--adw-radius-medium);
        color: hsl(
          var(--adw-color-fg-hue),
          var(--adw-color-fg-saturation),
          var(--adw-color-fg-lightness)
        );
        overflow: hidden;
      }
      :host(:focus-within) {
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
      }

      ::slotted(input) {
        -moz-appearance: textfield;
        display: inline-block;
        min-width: 0;
        max-width: 100%;
        flex-shrink: 1;
        flex-grow: 1;
        font-size: calc(1.6 * var(--adw-unit));
        line-height: var(--adw-lineheight-medium);
        border: none;
        padding: calc(var(--adw-spacing-xsmall) * 0.5) var(--adw-spacing-small);
        margin: 0;

        background: inherit;
        border-radius: 0;
        color: inherit;
      }
      ::slotted(input)::-webkit-inner-spin-button,
      ::slotted(input)::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      ::slotted(input:focus) {
        outline: none;
      }

      .button {
        display: block;
        width: var(--_button-size);
        height: var(--_button-size);
        padding: 0;
        margin: 0;
        flex-shrink: 0;
        flex-grow: 0;
        border: none;
        border-left: 1px solid
          hsl(
            var(--adw-color-bg-hue),
            var(--adw-color-bg-saturation),
            calc(
              var(--adw-color-bg-lightness) - var(--adw-lightness-step) * 0.5
            )
          );

        background: inherit;
        border-radius: 0;
        color: inherit;
        cursor: pointer;
      }
      .button:hover {
        background-color: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          var(--adw-color-bg-lightness)
        );
      }
      .button:focus {
        outline: none;
      }
      .button:focus-visible {
        color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
      }
    `;
  }

  #slot = createRef<HTMLSlotElement>();

  @state()
  __type?: string;

  public render() {
    // Both increment and decrement buttons are out of tab focus order because
    // browsers provide keyborad shortcuts for incrementing/decrementing number input.
    return html`
      <slot ${ref(this.#slot)} @slotchange=${this.#syncType}></slot>
      ${this.__type === "number"
        ? html`
            <button
              class="button"
              tabindex="-1"
              aria-label="Decrement"
              @click=${this.#decrement}
            >
              -
            </button>
            <button
              class="button"
              tabindex="-1"
              aria-label="Increment"
              @click=${this.#increment}
            >
              +
            </button>
          `
        : nothing}
    `;
  }

  #syncType = () => {
    this.#getSlottedInput();
  };

  #getSlottedInput = (): HTMLInputElement | null => {
    if (!this.#slot.value) {
      return null;
    }

    const [el] = this.#slot.value.assignedElements();
    if (!el || !(el instanceof HTMLInputElement)) {
      return null;
    }

    this.__type = el.type;

    return el;
  };

  #decrement = () => {
    const input = this.#getSlottedInput();
    if (!input) {
      return;
    }

    input.stepDown();
    // `stepDown` method fires neither `input` nor `change` event
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  };

  #increment = () => {
    const input = this.#getSlottedInput();
    if (!input) {
      return;
    }

    input.stepUp();
    // `stepUp` method fires neither `input` nor `change` event
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  };
}
