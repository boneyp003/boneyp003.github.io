# Boney Patel -- Personal Website

This repository contains the source code for my personal website.

The site showcases my experience as a Full-Stack Software Engineer
specializing in scalable cloud-native systems, enterprise modernization,
and high-performance web applications.

Live Site: https://boneyp003.github.io

------------------------------------------------------------------------

## Tech Stack

-   React
-   TypeScript
-   Vite
-   Custom CSS (Light/Dark theme support)
-   GitHub Pages (Deployment)

------------------------------------------------------------------------

## Purpose

This site serves multiple goals:

-   Professional portfolio
-   Technical credibility platform
-   Case study hub
-   Long-term foundation for consulting and product initiatives

The focus is on clean architecture, performance, clarity, and
simplicity.

------------------------------------------------------------------------

## Features

-   Responsive layout
-   Light / Dark theme toggle (system preference aware)
-   Structured experience section with measurable impact
-   Modular component architecture
-   Type-safe implementation with TypeScript
-   AI chatbot widget for visitor Q&A about my background/experience/projects

------------------------------------------------------------------------

## Chatbot widget

The floating chat launcher is powered by a separate project,
[portfolio-chatbot](https://github.com/boneyp003/portfolio-chatbot) (a React
widget + Cloudflare Worker backend on Workers AI's free tier). The built
widget files are vendored into `src/vendor/chatbot-widget/` rather than
installed as an npm dependency — see that repo's README for how to rebuild
and re-copy them after making changes to the widget.

------------------------------------------------------------------------

## Local Development

Clone the repository:

``` bash
git clone https://github.com/boneyp003/boneyp003.github.io.git
cd boneyp003.github.io
```

Install dependencies:

``` bash
npm install
```

Run development server:

``` bash
npm run dev
```

Build for production:

``` bash
npm run build
```

Preview production build locally:

``` bash
npm run preview
```

------------------------------------------------------------------------

## Deployment

The site is deployed using GitHub Pages.

Production builds are generated using Vite and published to the
`gh-pages` branch.

------------------------------------------------------------------------

## Roadmap

Planned improvements:

-   Project case studies with architectural breakdowns
-   Blog section for system design and cloud architecture topics
-   Resume download
-   SEO enhancements and social metadata
-   Performance optimizations and Lighthouse tuning

------------------------------------------------------------------------

## Contact

GitHub: https://github.com/boneyp003
LinkedIn: [https://www.linkedin.com/](https://www.linkedin.com/in/boneyp003)
