import { css, html } from "lit";
import { ref } from "lit/directives/ref.js";

import { AdwAction } from "./Action";

export class AdwMenuItem extends AdwAction {
  static defaultTagName = "adw-menu-item" as const;

  static get styles() {
    return css`
      :host {
        --_icon-size: calc(1.6 * var(--adw-unit));
        --_left-padding: 8px;
        --_gap: 8px;
        --_spinner-size: calc(var(--adw-fontsize-medium) * 0.8);

        position: relative;
        display: inline-block;

        color: hsl(
          var(--adw-color-fg-hue),
          var(--adw-color-fg-saturation),
          var(--adw-color-fg-lightness)
        );
      }

      :host(:focus-within) {
        color: hsl(
          var(--adw-color-onprimary-hue),
          var(--adw-color-onprimary-saturation),
          var(--adw-color-onprimary-lightness)
        );
      }

      .button::slotted(button),
      .button::slotted(a) {
        appearance: none;
        display: block;
        width: 100%;
        padding: 12px;
        padding-left: calc(
          var(--_left-padding) + var(--_icon-size) + var(--_gap)
        );
        border: none;
        font-family: var(--adw-fontfamily-sans);
        font-size: var(--adw-fontsize-medium);
        line-height: var(--adw-lineheight-dense);

        background-color: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) - var(--adw-lightness-step) * 0.1)
        );
        color: inherit;
        cursor: pointer;
        text-align: start;
        text-decoration: none;
        outline: none;
        white-space: nowrap;
      }

      .button::slotted(button:hover),
      .button::slotted(a:hover) {
        background-color: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) - var(--adw-lightness-step) * 0.3)
        );
      }

      .button::slotted(button:focus),
      .button::slotted(a:focus) {
        background-color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
      }

      :host([disabled]),
      :host([loading]) {
        color: hsl(
          var(--adw-color-fg-hue),
          var(--adw-color-fg-saturation),
          calc(
            (var(--adw-color-fg-lightness) + var(--adw-color-bg-lightness)) / 2
          )
        );
      }
      :host([disabled]) > .button::slotted(button),
      :host([disabled]) > .button::slotted(a),
      :host([loading]) > .button::slotted(button),
      :host([loading]) > .button::slotted(a) {
        background-color: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) - var(--adw-lightness-step) * 0.1)
        );
        cursor: default;
      }
      :host([disabled]) > .button::slotted(button:focus),
      :host([disabled]) > .button::slotted(a:focus),
      :host([loading]) > .button::slotted(button:focus),
      :host([loading]) > .button::slotted(a:focus) {
        background-color: hsl(
          var(--adw-color-primary-hue),
          calc(
            (
                var(--adw-color-primary-saturation) +
                  var(--adw-color-bg-saturation)
              ) / 2
          ),
          calc(
            (var(--adw-color-primary-lightness) + var(--adw-color-bg-lightness)) /
              2
          )
        );
      }

      :host([loading]) > .button::slotted(button),
      :host([loading]) > .button::slotted(a) {
        cursor: wait;
      }

      .icon::slotted(*),
      .spinner {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        left: var(--_left-padding);
        width: var(--_icon-size);
        height: var(--_icon-size);

        pointer-events: none;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }

      .spinner {
        display: none;
        box-sizing: border-box;
        border: 2px solid
          hsl(
            var(--adw-color-fg-hue),
            var(--adw-color-fg-saturation),
            var(--adw-color-fg-lightness)
          );

        border-top-color: transparent;
        border-radius: 50%;
      }

      :host([loading]) > .spinner {
        display: block;

        animation: 1.2s ease-in-out infinite both spin;
      }
      :host([loading]) > .icon::slotted(*) {
        display: none;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "listitem");
    }
  }

  render() {
    return html`
      <slot class="button" ${ref(this.actionSlot)}></slot>
      <slot class="icon" name="icon"></slot>
      <div class="spinner"></div>
    `;
  }
}
