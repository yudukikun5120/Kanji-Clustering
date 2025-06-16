# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 2 application called "漢字凝集解析" (Kanji Clustering Analysis) that detects similar kanji characters using k-means clustering method. The app allows users to input a kanji character and find similar characters through cluster analysis of 6355 JIS Level 1 and 2 kanji characters.

## Development Commands

```bash
# Install dependencies
yarn install

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
```

## Architecture

- **Frontend**: Nuxt 2 + Vue 2 + TypeScript
- **Styling**: TailwindCSS
- **Testing**: Jest with Vue Test Utils
- **API Proxy**: External API at `kanji-clustering.herokuapp.com` proxied through `/kanji-clustering-api/`
- **Analytics**: Google Analytics via @nuxtjs/google-gtag
- **PWA**: Enabled with @nuxtjs/pwa

## Key Components

- `Sidebar.vue`: Main information panel with project description and input tutorial
- `SearchResult.vue`: Handles kanji input and displays clustering results
- `KanjiCard.vue`: Individual kanji result display component
- `Tutorial.vue`: Usage instructions modal

## API Integration

The app uses a proxy configuration to communicate with the kanji clustering API:
- Local path: `/kanji-clustering-api/`
- External API: `https://kanji-clustering.herokuapp.com`

## Environment Variables

- `GOOGLE_ANALYTICS_ID`: Google Analytics tracking ID
- `GOOGLE_ADSENSE_ID`: Google AdSense client ID

## Testing

Tests are configured with Jest and located in the `test/` directory. The configuration includes coverage collection for components and pages.