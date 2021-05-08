import destyle from "destyle.css?raw";
import { css, html, unsafeCSS } from "lit";

export const view = (slot: unknown) => html`
  <div class="layout">${slot}</div>
`;

export const styles = [
  unsafeCSS(destyle),
  css`
    .layout {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
    }
  `,
];
