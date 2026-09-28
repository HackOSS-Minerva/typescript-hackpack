# typescript-hackpack

A small calculator library and demo, written in TypeScript and run with [Bun](https://bun.com).

## Project structure

```
src/
├── index.ts   # Entry point, runs a demo of the utilities
└── utils.ts   # Arithmetic utilities
```

## Development

To install dependencies:

```bash
bun install
```

To run the demo:

```bash
bun run src/index.ts
```

To check formatting and lint:

```bash
bun run check
bun run lint
```

This project was created using `bun init` in bun v1.3.14. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
