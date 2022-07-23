import { css, html, LitElement } from "lit";
import { property } from "lit/decorators/property.js";

export class AdwProgress extends LitElement {
  static defaultTagName = "adw-progress" as const;

  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }

      :host {
        --_size: var(--adw-progress--size, calc(1.8 * var(--adw-unit)));
        --_zindex: var(--adw-progress--zindex, 0);
        --_bg: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          var(--adw-color-bg-lightness)
        );

        display: inline-flex;
        width: var(--_size);
        height: var(--_size);
        padding: 1px;
        justify-content: stretch;
        align-items: stretch;
        border: 1px solid currentColor;

        border-radius: 50%;
        color: hsl(
          var(--adw-color-fg-hue),
          var(--adw-color-fg-saturation),
          var(--adw-color-primary-lightness)
        );
        z-index: var(--_zindex);
      }

      :host([value^="0"]) {
        padding: 2px;

        background-color: var(--_bg);
        color: hsl(
          var(--adw-color-fg-hue),
          var(--adw-color-fg-saturation),
          calc(var(--adw-color-fg-lightness) + var(--adw-lightness-step) * 0.5)
        );
      }

      :host([value]:not([value^="0"])) {
        color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
      }

      .progress {
        display: none;
        flex: 1;
        position: relative;
        transform: rotate(45deg);
      }
      :host([value^="0"]) > .progress {
        display: block;
      }

      .inner-fill,
      .inner-mask {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: calc((var(--_size) - 6px) * 0.5) solid transparent;

        border-radius: 50%;
        border-bottom-color: currentColor;
        border-left-color: currentColor;
      }
      .inner-fill {
        transform: scale(0.98) rotate(var(--_rotation));
      }
      .inner-mask {
        color: var(--_bg);
        z-index: calc(var(--_zindex) + 1);

        transform: scale(1.15);
      }

      .check {
        display: none;
      }
      :host([value]:not([value^="0"])) > .check {
        display: block;
        flex-basis: 100%;

        fill: currentColor;
      }
    `;
  }

  @property({
    attribute: true,
    reflect: true,
    type: Number,
  })
  value?: number;

  public render() {
    if (typeof this.value !== "number") {
      return html``;
    }

    const firstRotation = Math.min(this.value * 360, 180);
    const secondRotation = Math.min(this.value * 360, 360);
    const secondZIndex =
      this.value > 0.5 ? "calc(var(--_zindex) + 2)" : "var(--_zindex)";

    return html`
      <div class="progress" role="presentation">
        <div class="inner-fill" style="--_rotation: ${firstRotation}deg;"></div>
        <div
          class="inner-fill"
          style="--_rotation: ${secondRotation}deg; z-index: ${secondZIndex};"
        ></div>
        <div class="inner-mask"></div>
      </div>

      <svg
        class="check"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.7253 3.44353C11.0142 3.63242 11.0953 4.01976 10.9064 4.30866L6.93969 10.3753C6.83953 10.5285 6.67727 10.6301 6.49572 10.6533C6.31417 10.6764 6.13159 10.6189 5.99617 10.4958L3.4295 8.16243C3.17409 7.93024 3.15526 7.53496 3.38746 7.27954C3.61965 7.02413 4.01493 7.00531 4.27034 7.2375L6.29462 9.07776L9.86015 3.6246C10.049 3.3357 10.4364 3.25463 10.7253 3.44353Z"
        />
      </svg>
    `;
  }
}
