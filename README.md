## NodeJS Actions App File Guide

Use this as a quick reference for what each file is for.

- `.github/workflows/pages.yml`: CI/CD workflow that runs tests, builds the app, and deploys to GitHub Pages.
- `index.html`: Base HTML shell and source banner text (`#banner-text`) used by the app.
- `src/main.js`: App entry point. Reads text from HTML, runs figlet, then calls the renderer.
- `src/render.js`: Rendering module that injects banner UI into `#app`.
- `__tests__/render.test.js`: Jest test for render output.
- `vite.config.js`: Vite configuration for dev/build and deployment base path.
- `package.json`: Project metadata, scripts, and dependencies (including `figlet`).
- `.gitignore`: Excludes generated folders (`node_modules`, `dist`) from git.
