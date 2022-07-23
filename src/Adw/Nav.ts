import { css, html, LitElement } from "lit";

export class AdwNav extends LitElement {
  static defaultTagName = "adw-nav" as const;

  static get styles() {
    return css`
      :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--adw-spacing-medium);
        padding: var(--adw-spacing-small);
        border: 1px solid
          hsl(
            calc(var(--adw-color-bg-hue) - 10),
            var(--adw-color-bg-saturation),
            calc(
              var(--adw-color-bg-lightness) - var(--adw-lightness-step) * 0.5
            )
          );

        background-color: hsl(
          calc(var(--adw-color-bg-hue) + 10),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) + var(--adw-lightness-step) * 0.5)
        );
        border-radius: var(--adw-radius-medium);
        box-shadow: 1px 1px 8px hsla(0, 0%, 0%, 0.07);
      }

      .items {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        gap: var(--adw-spacing-small);
      }

      .item::slotted(*) {
        min-width: calc(6 * var(--adw-unit));
        flex-shrink: 0;
        flex-grow: 0;
      }

      .action::slotted(*) {
        align-self: center;
      }
    `;
  }

  public render() {
    return html`
      <div class="items">
        <slot class="item"></slot>
      </div>

      <slot class="action" name="action"></slot>
    `;
  }
}
