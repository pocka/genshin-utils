self.addEventListener("notificationclick", (ev) => {
  ev.notification.close();

  ev.waitUntil(
    self.clients.matchAll({ type: "window" }).then((list) => {
      for (const client of list) {
        if ("focus" in client) {
          client.focus();
          return;
        }
      }

      if ("openWindow" in self.clients) {
        self.clients.openWindow(self.registration.scope);
      }
    })
  );
});
