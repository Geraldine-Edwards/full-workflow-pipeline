## Playful ASCII Studio

This app is the "pipeline 3" project in the workshop. It turns pipeline 2's ASCII idea into an interactive editor.

### What it does
- Lets users type text in a textarea.
- Lets users choose one render mode at a time: `figlet` or `cowsay`.
- Shows a full cowsay character list.
- Lets users change text color, background color, and text size.
- Updates preview live as controls change.

### Run locally
```bash
npm install
npm run dev
```

### Test and build
```bash
npm test
npm run build
```

### File guide
- `.github/workflows/full-workflow.yml`: CI/CD workflow for test, build, and GitHub Pages deploy.
- `index.html`: Editor controls and preview container.
- `src/main.js`: UI controller and live preview event wiring.
- `src/ascii.js`: Figlet/cowsay helper functions and option loading.
- `src/render.js`: Preview rendering with chosen colors and size.
- `__tests__/render.test.js`: Unit test for render output.
- `__tests__/ascii.test.js`: Unit tests for ASCII helper functions.
- `vite.config.js`: Vite config for dev/build and deployment path.
