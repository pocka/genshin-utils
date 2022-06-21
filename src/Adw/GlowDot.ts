import { css, html, LitElement } from "lit";
import { property } from "lit/decorators/property.js";

export class AdwGlowDot extends LitElement {
  static defaultTagName = "adw-glow-dot" as const;

  static get styles() {
    return css`
      :host {
        --_size: calc(0.8 * var(--adw-unit));
        --_glow-color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );

        display: block;
        position: relative;
        width: var(--_size);
        height: var(--_size);
        border: 1px solid
          hsl(
            var(--adw-color-border-hue),
            var(--adw-color-border-saturation),
            var(--adw-color-border-lightness)
          );

        background-color: hsl(
          var(--adw-color-border-hue),
          var(--adw-color-border-saturation),
          calc(var(--adw-color-border-lightness) + var(--adw-lightness-step))
        );
        border-radius: 50%;
      }

      :host([glowing]) {
        background-color: var(--_glow-color);
        border-color: transparent;
        box-shadow: 0 0 calc(0.3 * var(--adw-unit)) var(--_glow-color);
      }

      .shiny {
        --_shiny-size: calc(var(--_size) * 0.5);

        position: absolute;
        top: calc(0.05 * var(--adw-unit));
        right: calc(0.05 * var(--adw-unit));
        width: var(--_shiny-size);
        height: var(--_shiny-size);

        background-color: hsla(0, 0%, 100%, 0.25);
        border-radius: 50%;
      }
    `;
  }

  @property({
    type: Boolean,
    attribute: true,
    reflect: true,
  })
  glowing: boolean = false;

  constructor() {
    super();

    // This is neither interaction element nor semantic element.
    this.setAttribute("aria-hidden", "true");
  }

  render() {
    return html` <div class="shiny"></div> `;
  }
}
