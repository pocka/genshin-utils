WIP.

# genshin-utils

Utility web apps helps effectively plaing Genshin, made by/**for** me.
Less likely to accept your feature request.

## Motivations / Purposes / Goals

### As a Genshin player

- [x] Help counting random events/quests award remains
- [ ] Resin notification (with configurable threshold)
- [ ] Parametric Transformer availability / notification
- [ ] Tell me when materials spawned
- And more?

### As a developer

- [x] Try Module Federation
- [ ] Make a PWA
- [ ] Configure CI to only build changed packages, with Module Federation
  - Probably Lerna is needed

## Development

The site is built using Module Federation added in webpack 5.
Every apps expose app main page then `@genshin-timer/shell` aggregates them and use as pages.

- `app-*` ... Micro apps
- `module-federation` ... Utility scripts for Module Federation
- `shell` ... Outermost app
- `styles` ... Common styles (reset CSS, custom properties)
- `webpack` ... Common webpack configurations served as presets
