/**
 * Load Module Federation Remote Entry script.
 *
 * @example
 * loadRemoteEntry("https://example.com/remoteEntry.js")
 */
function loadRemoteEntry(url) {
  const el = document.createElement("script");

  el.src = url;
  el.type = "text/javascript";
  el.async = true;

  return new Promise((resolve, reject) => {
    const unload = () => {
      document.head.removeChild(el);
    };

    el.onload = () => {
      resolve(unload);
    };

    el.onerror = () => {
      reject(new Error(`Failed to load remote entry: ${url}`));
      unload();
    };

    document.head.appendChild(el);
  });
}

/**
 * Load a remote container.
 */
export async function loadRemoteContainer(remoteEntryUrl, remoteName) {
  const unloadRemoteEntry = await loadRemoteEntry(remoteEntryUrl);

  await __webpack_init_sharing__("default");

  const container = window[remoteName];

  await container.init(__webpack_share_scopes__.default);

  return {
    getModule(moduleName = ".") {
      return container.get(moduleName).then((factory) => factory());
    },
    unloadRemoteEntry,
  };
}
