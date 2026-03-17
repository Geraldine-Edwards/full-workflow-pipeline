# 🚀 My Full Workflow
Learning CI/CD with Test, Build, and Deploy

This workshop guide builds on your first two pipelines and shows a **full workflow** in action:
- run tests automatically
- build a production app
- deploy to GitHub Pages
- use job dependencies (`needs`) so steps happen in the right order

By the end, you will have:
- a forked repo, with an optional local clone for manual deployment practice
- a GitHub Actions pipeline run from start to finish
- a live deployment flow you can reuse in your own projects

---
## ✅ Prerequisites
- GitHub account
- Git installed
- Node.js 20+
- Terminal (or VS Code terminal)

---
## 🍴 1. Fork and clone the app
First, fork `jourzy/full-workflow-pipeline` on GitHub.

If you only want to run the GitHub Actions workflow from the GitHub UI, you can stop at the fork.
You only need to clone if you want to try the manual deployment workflow in step 2.

In your terminal, run:
```bash
git clone https://github.com/<your-username>/full-workflow-pipeline.git
cd full-workflow-pipeline
```

---
## 🛠️ 2. Manual deployment workflow (without Actions)
If you were deploying manually after app changes, the steps could look like this:

0. If dependencies changed during development, install again before testing/building:
```bash
npm install
```

1. Run tests:
```bash
npm test
```

2. Build the production files:
```bash
npm run build
```

3. (Optional) Preview the built app locally in your browser:
```bash
npm run preview
```
Then open: http://localhost:4173/

4. Publish the `dist` folder to a `gh-pages` branch:
```bash
npx gh-pages -d dist
```

5. In your repo on GitHub, go to `Settings` → `Pages` and set:
- **Source**: Deploy from a branch
- **Branch**: `gh-pages` / `(root)`

You would repeat this manual flow each time you make new changes to the app and want to redeploy.

This helps you understand what GitHub Actions is automating in the full pipeline.

---
## ⚙️ 3. Review the workflow file
Open this file:
```text
.github/workflows/full-workflow.yml
```

This is the pipeline you are running in this workshop.

---
## 📤 4. Push your first change

Simple change idea: add one line near the top of `README.md` such as `Workshop run on 17 March 2026`, then commit and push.

Choose the option that matches how you are working.

### Option A: You forked but did not clone (working from GitHub browser)
1. Open your fork on GitHub
2. Open a file (for example `README.md`) and click the pencil icon
3. Make a small edit
4. Commit directly to `main`

This browser commit also triggers the workflow on push.

### Option B: You cloned your fork (working from local terminal)
Since you cloned your fork, `origin` already points to your GitHub repo.

After making a change locally, push it:
```bash
git add .
git commit -m "Your change message"
git push
```

---
## ▶️ 5. Run the pipeline
You can run it in either of these ways:

### Option A: Manual run from Actions tab
1. Open your forked repo on GitHub
2. Go to **Actions**
3. Select **Full Workflow Pipeline**
4. Click **Run workflow**

### Option B: Push-triggered run
Make a small change (for example in `README.md`), then:
```bash
git add .
git commit -m "Trigger workflow run"
git push
```

The workflow runs on push to `main`.

---
## 🌐 6. Enable GitHub Pages (one-time setup)
If deploy fails with a Pages 404/not found error:
1. Go to `Settings` → `Pages`
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Save and re-run the workflow

---
## 🔍 7. Understand the workflow stages
The pipeline has 3 jobs:

1. **test**
- checks out code
- sets up Node.js
- installs dependencies
- runs unit tests

2. **build**
- waits for `test` to pass
- builds production files into `dist`
- uploads deployment artifact

3. **deploy**
- waits for `build` to finish
- deploys artifact to GitHub Pages

This creates a safe flow: only tested and built code is deployed.

---
## 🧠 8. What this teaches
Compared with pipeline 1 and 2, this full workflow introduces:
- multi-job CI/CD orchestration
- job dependencies with `needs`
- artifact upload for deployment
- GitHub Pages deployment with `actions/deploy-pages`

---
## ⭐ Extra challenges
### 1) Break a test on purpose
Edit a test to fail, push, and observe:
- `test` fails
- `build` and `deploy` do not run

### 2) Add deployment message
After deploy, add a step that prints the Pages URL.

### 3) Remove version warnings
Check the latest releases for each action used in `.github/workflows/full-workflow.yml`, then update action versions and the Node.js version so the workflow has no version warnings.

Use the **Using Actions** notes below to find where to check Marketplace listings, release versions, and trust signals.

---
🎉 You now have a complete CI/CD pipeline: **test → build → deploy**.

---
## 🔧 Using Actions

In GitHub Actions, a step can either run a shell command with `run:` or use a pre-built **action** with `uses:`.

An action is a reusable unit of code — maintained by GitHub, the community, or yourself — that packages up a common task so you don't have to write it from scratch.

### Actions used in this workflow

| Action | What it does |
|---|---|
| `actions/checkout@v4` | Checks out your repository code onto the runner |
| `actions/setup-node@v4` | Installs a specific version of Node.js |
| `actions/configure-pages@v5` | Configures the environment for a GitHub Pages deployment |
| `actions/upload-pages-artifact@v3` | Saves the built `dist` folder as a deployment artifact |
| `actions/deploy-pages@v4` | Deploys the uploaded artifact to GitHub Pages |

### How to find actions and check versions
- In your GitHub repo, open a workflow file and click the pencil icon to edit it. When you add or edit a `uses:` step in the web editor, GitHub opens an Actions panel where you can search Marketplace actions.
- In that panel, you can compare actions by popularity and trust signals, including star count and whether the publisher is a verified creator.
- Open the action listing to confirm the latest release version before choosing which major tag to use (for example `@v4` or `@v5`).
- Browse community actions at the [GitHub Marketplace](https://github.com/marketplace?type=actions)
- Check the latest version of an action on its releases page, for example [actions/checkout releases](https://github.com/actions/checkout/releases)
- Using `@v4` pins to the latest patch within that major version, which is the recommended approach for most workflows