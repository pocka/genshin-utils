import { css, html } from "lit";
import { property } from "lit/decorators/property.js";
import { ref } from "lit/directives/ref.js";

import { AdwAction } from "./Action";

/**
 * Styles a slotted element to button-like looking.
 * This element itself does not act as button, but the slotted element does.
 * This element accept either `<button>` element or `<a>` element with `href` attribute set.
 */
export class AdwButton extends AdwAction {
  static defaultTagName = "adw-button" as const;

  static get styles() {
    return css`
      :host {
        --_bg-hue: var(--adw-color-bg-hue);
        --_bg-saturation: var(--adw-color-bg-saturation);
        --_bg-lightness: var(--adw-color-bg-lightness);

        --_fg-hue: var(--adw-color-fg-hue);
        --_fg-saturation: var(--adw-color-fg-saturation);
        --_fg-lightness: var(--adw-color-fg-lightness);

        --_spinner-size: calc(var(--adw-fontsize-medium) * 0.8);

        position: relative;
        display: inline-block;
      }
      :host([size="large"]) {
        --_spinner-size: calc(var(--adw-fontsize-large) * 0.8);
      }

      ::slotted(button),
      ::slotted(a[href]) {
        --_bg-level: 1;

        --_gradient-start: hsl(
          var(--_bg-hue),
          var(--_bg-saturation),
          calc(var(--_bg-lightness) * var(--_bg-level) + 1%)
        );
        --_gradient-end: hsl(
          var(--_bg-hue),
          calc(var(--_bg-saturation) + 1%),
          calc(var(--_bg-lightness) * var(--_bg-level) - 5%)
        );

        --_border-color: hsl(
          var(--_bg-hue),
          var(--_bg-saturation),
          calc(var(--_bg-lightness) - var(--adw-lightness-step))
        );

        display: block;
        width: 100%;
        padding: var(--adw-spacing-xsmall) var(--adw-spacing-small);
        font-size: var(--adw-fontsize-medium);
        line-height: var(--adw-lineheight-medium);
        border: 1px solid var(--_border-color);

        background-image: linear-gradient(
          180deg,
          var(--_gradient-start) 0%,
          var(--_gradient-end) 100%
        );
        border-radius: var(--adw-radius-medium);
        color: hsl(var(--_fg-hue), var(--_fg-saturation), var(--_fg-lightness));
        cursor: pointer;
        font-weight: var(--adw-fontweight-bold);
        text-align: center;
        text-decoration: none;
        user-select: none;
      }

      :host([variant="primary"]) {
        --_bg-hue: var(--adw-color-primary-hue);
        --_bg-saturation: var(--adw-color-primary-saturation);
        --_bg-lightness: var(--adw-color-primary-lightness);

        --_fg-hue: var(--adw-color-onprimary-hue);
        --_fg-saturation: var(--adw-color-onprimary-saturation);
        --_fg-lightness: var(--adw-color-onprimary-lightness);
      }

      :host([size="large"]) > ::slotted(button),
      :host([size="large"]) > ::slotted(a[href]) {
        font-size: var(--adw-fontsize-large);
        padding: var(--adw-spacing-small) var(--adw-spacing-medium);
      }

      ::slotted(button:hover),
      ::slotted(a[href]:hover) {
        --_bg-level: 1.12;
      }

      ::slotted(button:active),
      ::slotted(a[href]:active) {
        --_bg-level: 0.85;
      }

      ::slotted(button:focus),
      ::slotted(a[href]:focus) {
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

      :host([icon-only]) > ::slotted(button),
      :host([icon-only]) > ::slotted(a[href]) {
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1 / 1;
      }

      :host([disabled]) {
        --_bg-saturation: 1%;
        --_bg-lightness: calc(
          var(--adw-color-bg-lightness) - var(--adw-lightness-step) * 0.5
        );
      }
      :host([disabled]) > ::slotted(button),
      :host([disabled]) > ::slotted(a[href]) {
        background-image: none;
        background-color: hsl(
          var(--_bg-hue),
          1%,
          calc(var(--adw-color-bg-lightness) - var(--adw-lightness-step) * 0.5)
        );
        color: hsl(
          var(--_fg-hue),
          var(--_fg-saturation),
          calc(var(--_fg-lightness) + var(--adw-lightness-step) * 1.5)
        );
        cursor: default;
      }

      :host([loading]) > ::slotted(button),
      :host([loading]) > ::slotted(a[href]) {
        background-image: none;
        background-color: hsl(
          var(--_bg-hue),
          calc(var(--_bg-saturation) * 0.8),
          calc(var(--_bg-lightness) + var(--adw-lightness-step) * 0.5)
        );
        color: hsla(
          var(--_fg-hue),
          var(--_fg-saturation),
          var(--_fg-lightness),
          0.3
        );
        cursor: wait;
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
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: var(--_spinner-size);
        height: var(--_spinner-size);
        border: 2px solid
          hsl(var(--_fg-hue), var(--_fg-saturation), var(--_fg-lightness));

        border-top-color: transparent;
        border-radius: 50%;
        pointer-events: none;
      }

      :host([loading]) > .spinner {
        display: block;

        animation: 1.2s ease-in-out infinite both spin;
      }
    `;
  }

  @property({
    type: Boolean,
    attribute: "icon-only",
    reflect: true,
  })
  iconOnly: boolean = false;

  render() {
    return html`
      <slot ${ref(this.actionSlot)}></slot>
      <div class="spinner"></div>
    `;
  }
}
