import { css, html, LitElement } from "lit";

export class AdwSelect extends LitElement {
  static defaultTagName = "adw-select" as const;

  static get styles() {
    return css`
      :host {
        position: relative;
        box-sizing: border-box;
        display: inline-block;
      }

      ::slotted(select) {
        --_bg-level: 1;

        --_gradient-start: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) * var(--_bg-level) + 1%)
        );
        --_gradient-end: hsl(
          var(--adw-color-bg-hue),
          calc(var(--adw-color-bg-saturation) + 1%),
          calc(var(--adw-color-bg-lightness) * var(--_bg-level) - 5%)
        );

        position: relative;
        width: 100%;
        appearance: none;
        padding: 4px 8px;
        padding-right: 20px;
        border: 1px solid
          hsl(
            var(--adw-color-border-hue),
            var(--adw-color-border-saturation),
            var(--adw-color-border-lightness)
          );
        box-sizing: border-box;
        font-size: var(--adw-fontsize-medium);

        background: linear-gradient(
          180deg,
          var(--_gradient-start) 0%,
          var(--_gradient-end) 100%
        );
        border-radius: var(--adw-radius-medium);
        box-shadow: none;
        color: currentColor;
        outline: none;
      }

      ::slotted(select:hover) {
        --_bg-level: 1.12;
      }

      ::slotted(select:active) {
        --_bg-level: 0.85;
      }

      ::slotted(select:focus-visible) {
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

      .caret {
        position: absolute;
        right: 8px;
        top: 50%;
        width: 8px;
        height: 6px;

        transform: translateY(-50%);
      }
    `;
  }

  public render() {
    return html`
      <slot></slot>

      <svg
        class="caret"
        role="presentation"
        viewBox="0 0 8 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 4.5.5359 0h6.9282L4 4.5Z" fill="currentColor" />
      </svg>
    `;
  }
}
