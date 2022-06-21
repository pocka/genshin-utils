import { css, html, LitElement } from "lit";
import { property } from "lit/decorators/property.js";

export class AdwNavItem extends LitElement {
  static defaultTagName = "adw-nav-item" as const;

  static get styles() {
    return css`
      :host {
        --_icon-size: var(--adw-spacing-large);
        --_padding: var(--adw-spacing-xsmall);
        --_gap: 2px;
        --_bg: transparent;

        position: relative;
        display: flex;

        color: hsl(
          var(--adw-color-fg-hue),
          var(--adw-color-fg-saturation),
          var(--adw-color-fg-lightness)
        );
      }

      :host([active]) {
        --_bg: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
        color: hsl(
          var(--adw-color-onprimary-hue),
          var(--adw-color-onprimary-saturation),
          var(--adw-color-onprimary-lightness)
        );
      }

      :host(:not([active]):focus-within) {
        color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
      }

      .link::slotted(*) {
        padding: var(--_padding);
        padding-top: calc(var(--_padding) + var(--_icon-size) + var(--_gap));
        font-size: var(--adw-fontsize-small);
        font-weight: var(--adw-fontweight-bold);

        background-color: var(--_bg);
        color: inherit;
        text-decoration: none;
        text-align: center;
        border-radius: var(--adw-radius-medium);
      }
      .link::slotted(:focus) {
        text-decoration: underline;
        outline: none;
      }

      .icon::slotted(*) {
        top: var(--_padding);
        left: 50%;
        margin: 0 auto;
        position: absolute;
        font-size: var(--_icon-size);

        pointer-events: none;

        transform: translateX(-50%);
      }
    `;
  }

  @property({
    type: Boolean,
    attribute: true,
    reflect: true,
  })
  active: boolean = false;

  public render() {
    return html`
      <slot class="icon" name="icon"></slot>
      <slot class="link"></slot>
    `;
  }
}
