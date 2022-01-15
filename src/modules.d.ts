declare module "*.module.css" {
  const modules: Record<string, string>;
  export default modules;
}

declare module "*.css" {
  const path: string;
  export default path;
}

declare module "*.elm" {
  interface App {
    init<Flags = undefined>(options: {
      node?: HTMLElement;
      flags?: Flags;
    }): {
      ports: any;
    };
  }

  export const Elm: {
    App: {
      App: App;
    };
  };
}

declare module "*?url" {
  const path: string;
  export default path;
}
