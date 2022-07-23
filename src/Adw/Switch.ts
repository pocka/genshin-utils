import { css, html, LitElement, PropertyValues } from "lit";
import { property } from "lit/decorators/property.js";
import { ref, createRef } from "lit/directives/ref.js";

/**
 * This element does not use form-association because of the current usage.
 */
export class AdwSwitch extends LitElement {
  static defaultTagName = "adw-switch" as const;

  static get styles() {
    return css`
      :host {
        --_saturation-adjust: 1;
        --_lightness-strength: 1;

        position: relative;
        display: inline-grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "on off";
        gap: 2px;
        border: 1px solid
          hsl(
            var(--adw-color-border-hue),
            var(--adw-color-border-saturation),
            calc(
              var(--adw-color-border-lightness) * var(--_lightness-strength) +
                var(--adw-color-bg-lightness) * (1 - var(--_lightness-strength))
            )
          );

        background-color: hsl(
          var(--adw-color-bg-hue),
          calc(var(--adw-color-bg-saturation) * var(--_saturation-adjust)),
          calc(
            var(--adw-color-bg-lightness) * 0.95 * var(--_lightness-strength) +
              (
                var(--_adw-color-bg-lightness) *
                  (1 - var(--_lightness-strength))
              )
          )
        );
        color: hsl(
          var(--adw-color-fg-hue),
          var(--adw-color-fg-saturation),
          calc(
            var(--adw-color-fg-lightness) * var(--_lightness-strength) +
              var(--adw-color-bg-lightness) * (1 - var(--_lightness-strength))
          )
        );
        border-radius: var(--adw-radius-medium);
        cursor: pointer;

        transition: background-color 0.2s ease, color 0.2s ease;
      }
      :host([aria-checked="true"]) {
        background-color: hsl(
          var(--adw-color-primary-hue),
          calc(var(--adw-color-primary-saturation) * var(--_saturation-adjust)),
          calc(
            var(--adw-color-primary-lightness) * var(--_lightness-strength) +
              var(--adw-color-bg-lightness) * (1 - var(--_lightness-strength))
          )
        );
        border-color: hsl(
          var(--adw-color-primary-hue),
          calc(var(--adw-color-primary-saturation) * var(--_saturation-adjust)),
          calc(
            (var(--adw-color-primary-lightness) * 0.8) *
              var(--_lightness-strength) + var(--adw-color-bg-lightness) *
              (1 - var(--_lightness-strength))
          )
        );
        color: hsl(
          var(--adw-color-onprimary-hue),
          var(--adw-color-onprimary-saturation),
          calc(
            var(--adw-color-onprimary-lightness) * var(--_lightness-strength) +
              var(--adw-color-bg-lightness) * (1 - var(--_lightness-strength))
          )
        );
      }
      :host([disabled]),
      :host([readonly]) {
        --_saturation-adjust: 0.2;
        --_lightness-strength: 0.3;

        cursor: not-allowed;
      }

      .on,
      .off {
        padding: calc(var(--adw-spacing-xsmall) * 0.5) var(--adw-spacing-small);
        font-size: var(--adw-fontsize-medium);
        line-height: var(--adw-fontsize-dense);
        text-align: center;

        user-select: none;
      }
      .on {
        grid-area: on;
      }
      .off {
        grid-area: off;
      }

      .block {
        --_gradient-start: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) * 0.85 + 100% * 0.15)
        );
        --_gradient-end: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) * 0.85 + 80% * 0.15)
        );
        background-image: linear-gradient(
          180deg,
          var(--_gradient-start) 0%,
          var(--_gradient-end) 100%
        );
        border: inherit;
        margin: -1px;
        grid-area: on;

        border-radius: inherit;
      }
      .block[data-state="on"] {
        grid-area: off;
      }
    `;
  }

  @property({
    attribute: true,
    type: Boolean,
  })
  checked: boolean = false;

  @property({
    attribute: true,
    type: Boolean,
    reflect: true,
  })
  readOnly: boolean = false;

  @property({
    attribute: true,
    type: Boolean,
    reflect: true,
  })
  disabled: boolean = false;

  #block = createRef<HTMLDivElement>();

  constructor() {
    super();

    this.addEventListener(
      "click",
      () => {
        this.#toggle();
      },
      { passive: true }
    );

    this.addEventListener("keypress", (ev) => {
      if (ev.isComposing) {
        return;
      }

      switch (ev.key) {
        case " ": {
          ev.preventDefault();
          this.scrollIntoView();
          this.#toggle();
        }
      }
    });
  }

  public connectedCallback() {
    super.connectedCallback();

    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "switch");
    }

    if (!this.hasAttribute("tabindex")) {
      this.tabIndex = 0;
    }

    this.#syncAriaAttrs();
  }

  public render() {
    return html`
      <div class="on"><slot name="on">ON</slot></div>
      <div class="off"><slot name="off">OFF</slot></div>
      <div class="block" ${ref(this.#block)}></div>
    `;
  }

  #toggle = () => {
    if (this.disabled || this.readOnly) {
      return;
    }

    this.checked = !this.checked;

    this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          checked: this.checked,
        },
      })
    );
  };

  #syncAriaAttrs = () => {
    this.setAttribute("aria-checked", String(this.checked));
    this.setAttribute("aria-readonly", String(this.readOnly));
    this.setAttribute("aria-disabled", String(this.disabled));
  };

  updated(changedProperties: PropertyValues<this>) {
    super.updated(changedProperties);

    if (changedProperties.has("checked")) {
      this.#syncAriaAttrs();

      if (this.#block.value) {
        const first = this.#block.value.getBoundingClientRect();

        this.#block.value.dataset.state = this.checked ? "on" : "off";

        const last = this.#block.value.getBoundingClientRect();

        const invert = first.left - last.left;

        this.#block.value.animate(
          [
            { transform: `translateX(${invert}px)` },
            { transform: "translateX(0)" },
          ],
          {
            duration: 200,
            easing: "ease",
          }
        );
      }
    }
  }
}
