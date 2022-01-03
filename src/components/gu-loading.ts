import { minireset } from "minireset.css/minireset.css.lit.js";
import { css, LitElement, html } from "lit";

/**
 * Generic loading placeholder. Love the slime.
 *
 * ## When to use this
 *
 * When a specific UI region is busy, and contents in the regsion changes when
 * the process is done. e.g. Scene transition with data fetching.
 *
 * ## When not to use this
 *
 * When the process was activated by a button press or form submit. You should
 * use a loading-appearance-button instead.
 */
export class GuLoading extends LitElement {
  static get styles() {
    return [
      minireset,
      css`
        :host {
          --slime-width: var(--gu-loading-width, 8rem);
          display: inline-block;
          font-size: 1.6rem;

          color: hsla(var(--color--tone--mono), var(--color--level--2), 0.8);
          cursor: wait;
        }

        @keyframes bounce {
          from {
            transform: scale(0.95, 1.05);
          }

          to {
            transform: scale(1.05, 0.95);
          }
        }

        .slime {
          display: block;
          margin: 0 auto;
          width: var(--slime-width);
          transform-origin: bottom center;
          animation: 0.5s ease infinite alternate both bounce;
        }

        .text {
          margin: 0;
          margin-top: 1em;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 0.2em;
          text-align: center;
        }
      `,
    ];
  }

  constructor() {
    super();

    this.setAttribute("aria-busy", "true");
  }

  render() {
    return html`
      <svg
        class="slime"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 193 130.32"
      >
        <mask id="genshin_loading_shape">
          <rect x="0" y="0" width="193" height="131" fill="black" />
          <path
            d="M214,87c-1,23-4,32-25,40-25,6-45.32,7-71,7-28,1-57,0-76-8-16-8-21-19.18-21-41S35.41,41.43,52.24,27.14,92.32,4,118,4s48.93,8.84,65.76,23.14S214,65.18,214,87Z"
            transform="translate(-21 -4)"
            fill="white"
          />
          <g>
            <ellipse
              cx="143.7"
              cy="64.32"
              rx="11.61"
              ry="22.5"
              transform="translate(-23.16 1.05) rotate(-2)"
              fill="black"
            />
            <g>
              <path
                d="M144.61,83.83c-4.46,0-8.64-8.75-9.14-19.1a34.8,34.8,0,0,1,2-14.2c1.41-3.52,3.39-5.59,5.45-5.69h.16c4.46,0,8.65,8.75,9.14,19.1a34.86,34.86,0,0,1-2,14.21c-1.41,3.51-3.4,5.59-5.46,5.69Z"
                transform="translate(-21 -4)"
                fill="white"
              />
              <path
                d="M143.07,45.83h0c3.44,0,7.63,7.46,8.14,18.15a33.82,33.82,0,0,1-1.91,13.78c-1.24,3.1-3,5-4.57,5.07h-.12c-3.44,0-7.63-7.45-8.14-18.15a34,34,0,0,1,1.91-13.78c1.24-3.09,3-5,4.58-5.06h.11m0-2h-.21c-5.17.25-8.93,9.62-8.38,20.94s5,20,10.13,20h.21c5.18-.25,8.93-9.63,8.39-20.95-.53-11.16-5.05-20.05-10.14-20.05Z"
                transform="translate(-21 -4)"
                fill="#000"
              />
            </g>
          </g>
          <g>
            <ellipse
              cx="89.7"
              cy="64.32"
              rx="22.5"
              ry="11.61"
              transform="translate(1.29 147.72) rotate(-88)"
              fill="black"
            />
            <g>
              <path
                d="M88.63,83.83c-2.06-.1-4-2.18-5.46-5.69a35,35,0,0,1-2-14.21c.5-10.35,4.68-19.1,9.14-19.1h.16c2.06.1,4.05,2.17,5.46,5.69a35,35,0,0,1,2,14.2c-.49,10.35-4.68,19.1-9.14,19.1Z"
                transform="translate(-21 -4)"
                fill="white"
              />
              <path
                d="M90.33,45.83h.11c1.63.07,3.34,2,4.58,5.06a33.84,33.84,0,0,1,1.91,13.78c-.51,10.7-4.7,18.15-8.14,18.15h-.11c-1.63-.08-3.34-2-4.58-5.07A33.82,33.82,0,0,1,82.19,64c.51-10.69,4.7-18.15,8.14-18.15m0-2c-5.09,0-9.6,8.89-10.14,20.05-.54,11.32,3.22,20.7,8.39,20.95h.21c5.09,0,9.6-8.88,10.14-20s-3.22-20.69-8.39-20.94Z"
                transform="translate(-21 -4)"
                fill="#000"
              />
            </g>
          </g>
        </mask>
        <rect
          x="0"
          y="0"
          width="193"
          height="131"
          fill="currentColor"
          mask="url(#genshin_loading_shape)"
        />
      </svg>

      <p class="text">Loading</p>
    `;
  }
}

if (!customElements.get("gu-loading")) {
  customElements.define("gu-loading", GuLoading);
}
