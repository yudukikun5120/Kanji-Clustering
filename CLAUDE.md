# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 3 application called "漢字凝集解析" (Kanji Clustering Analysis) that detects similar kanji characters using k-means clustering method. The app allows users to input a kanji character and find similar characters through cluster analysis of 6355 JIS Level 1 and 2 kanji characters.

## Development Commands

```bash
# Install dependencies
yarn install --frozen-lockfile

# Development server (localhost:3000)
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Generate static site
yarn generate

# Run tests
yarn test

# Lint and typecheck
yarn lint
yarn typecheck
```

## Architecture

- **Frontend**: Nuxt 3 + Vue 3 + TypeScript
- **Styling**: Nuxt UI 3 + Tailwind CSS 4
- **Testing**: Vitest with Nuxt Test Utils
- **API Proxy**: External API at `kanji-clustering.herokuapp.com` proxied through `/kanji-clustering-api/`
- **Analytics**: Google Analytics via nuxt-gtag
- **PWA**: Enabled with @vite-pwa/nuxt

## Key Components

- `AppSidebar.vue`: Main information panel with project description and input tutorial
- `SearchResult.vue`: Handles kanji input and displays clustering results
- `KanjiCard.vue`: Individual kanji result display component
- `AppTutorial.vue`: Usage instructions modal

## API Integration

The app uses a proxy configuration to communicate with the kanji clustering API:
- Local path: `/kanji-clustering-api/`
- External API: `https://kanji-clustering.herokuapp.com`

## Environment Variables

- `NUXT_PUBLIC_GOOGLE_ANALYTICS_ID`: Google Analytics tracking ID
- `NUXT_PUBLIC_GOOGLE_ADSENSE_ID`: Google AdSense client ID

## Testing

Tests are configured with Vitest and Nuxt Test Utils and located in the `test/` directory.
