# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run serve    # Dev server with hot-reload
npm run build    # Production build (outputs to /docs for GitHub Pages)
npm run lint     # Lint and auto-fix
```

## Architecture

This is a **Vue 2** personal portfolio site for Ung Sotheary (interior designer), built with Vue CLI. It uses hash-based routing (`mode: 'hash'`).

### Routing

All routes are defined inline in `src/main.js`. Public routes: `/`, `/profile`, `/projects`, `/projects/:id`. Admin routes under `/admin/*` (dashboard, profile, projects) are protected by login at `/login`.

### Data

Content is driven by two JSON files in `src/views/`:
- `datasetProfile.json` — profile info (name, bio, software skills, social links)
- `datasetProject.json` — projects list with images, names, and detail data

Images are loaded dynamically via `require('../assets/images/${img}')`. Project images are organized in per-project subdirectories under `src/assets/images/`.

### Layout

`src/layouts/LayoutDefault.vue` wraps all public-facing views. It renders the top navbar with navigation links and a language switcher (en/kh/fr). All page views use `<LayoutDefault><slot/></LayoutDefault>` pattern.

### Internationalization

`src/utils/i18n.js` sets up vue-i18n, auto-loading all JSON files from `src/locales/` (en, fr, kh). Locale is switched at runtime via the navbar dropdown — no page reload. Translation keys are accessed in templates via `$t('key')`.

### Styling

Global CSS variables and animations are defined in `src/assets/styles/themes/theme-default.css` and imported in `App.vue`. CSS variable names: `--firstColor`, `--secondColor`, `--thirdColor`, `--fourthColor`, `--lightGrey`, `--darkGrey`. The custom font "Eloquia" is loaded from `src/fonts/Eloquia/`. Component-specific styles use `<style scoped>`.

### Page Titles

`src/mixins/titleMixin.js` is globally mixed in via `main.js`. Set `title: 'Page Title'` in a component's options to update `document.title` on mount.

### Build Output

`npm run build` outputs to `/docs` (not the default `/dist`), configured for GitHub Pages deployment on the `gh-pages` branch.
