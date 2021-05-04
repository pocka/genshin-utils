import type { Profile } from "@genshin-utils/app-profile-types";
import destyle from "destyle.css?raw";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { StyleSheetManager } from "styled-components";
import dialogPolyfillCss from "dialog-polyfill/dist/dialog-polyfill.css?raw";

import { App } from "../containers/App";

export class AppProfile extends HTMLElement {
  #app?: HTMLElement;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (!this.isConnected || !this.shadowRoot) {
      return;
    }

    const style = document.createElement("style");
    style.textContent = destyle + dialogPolyfillCss;

    this.#app = document.createElement("div");

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(this.#app);

    ReactDOM.render(
      <StyleSheetManager target={(this.shadowRoot as unknown) as HTMLElement}>
        <App
          onSelectProfile={(profile) => {
            this.dispatchEvent(
              new CustomEvent<Profile | null>("selectprofile", {
                detail: profile,
              })
            );
          }}
        />
      </StyleSheetManager>,
      this.#app
    );
  }

  disconnectedCallback() {
    if (!this.#app) {
      return;
    }

    ReactDOM.unmountComponentAtNode(this.#app);
    this.#app = undefined;
  }
}
