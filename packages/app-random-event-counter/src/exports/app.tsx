import type { Profile } from "@genshin-utils/app-profile/exports";
import destyle from "destyle.css?raw";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { StyleSheetManager } from "styled-components";

import { App } from "../containers/App";

export class AppRandomEventCounter extends HTMLElement {
  profile?: Profile;
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
    style.textContent = destyle;

    this.#app = document.createElement("div");

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(this.#app);

    // Mount App
    if (this.profile) {
      ReactDOM.render(
        <StyleSheetManager target={(this.shadowRoot as unknown) as HTMLElement}>
          <App profile={this.profile} />
        </StyleSheetManager>,
        this.#app
      );
    }
  }

  disconnectedCallback() {
    if (!this.#app) {
      return;
    }

    // Unmount App
    ReactDOM.unmountComponentAtNode(this.#app);
    this.#app = undefined;
  }
}
