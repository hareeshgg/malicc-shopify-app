# Malicc - Neuromarketing Shopify App

**Malicc** is a Shopify embedded app designed to embed consumer psychology directly into stores, replacing cosmetic plugins with conversion-focused infrastructure.

## Overview

This app is built using the **Shopify App Template (React Router)** and customized with a "True Black" neuromarketing aesthetic. It moves away from standard Polaris styles to offer a distinct, premium dark mode experience using **Tailwind CSS**.

## Features

- **Neuromarketing Dashboard**: Central hub for app insights and configurations.
- **Pricing Tiers**: specialized plans (Maker, Growth, Scale) displayed with custom UI.
- **Waitlist & Engagement**: Integrated email capture types.
- **Smooth UX**: Global smooth scrolling and micro-interactions.
- **Dark Mode**: A generic-free, neutral black theme (`neutral-900`) avoiding blue undertones.

## Tech Stack

- **Framework**: [React Router v7](https://reactrouter.com/) (formerly Remix)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + PostCSS
- **Components**:
  - Custom UI Primitives (`Card`, `Button`, `Input`) in `components/ui`
  - [Shopify Polaris](https://polaris.shopify.com/) (for admin primitives where necessary)
- **Backend**: Node.js + Prisma (SQLite default)
- **Tooling**: Vite, Shopify CLI

## How to Run

### Prerequisites
- [Node.js](https://nodejs.org/) (v20.19.0 or higher recommended)
- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)
- A Shopify Partner account and Development Store.

### Installation

1. Clone the repository (if not already done).
2. Install dependencies:
   ```bash
   npm install
   ```

### Local Development

1. Start the local development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   shopify app dev
   ```

2. The CLI will prompt you to log in to Shopify and select an app/store.
3. Once running, press **`P`** to open the developer preview.
4. Install the app on your selected development store.

### Building for Production

To create a production build of the assets and server:

```bash
npm run build
```

This runs `react-router build` to compile the app.

## Project Structure

- **`app/routes/`**: Application routes.
  - `app._index.jsx`: The main embedded app dashboard.
  - `app.jsx`: The app layout wrapper.
- **`components/`**: React components.
  - **`ui/`**: Reusable primitives (`Card`, `Button`, `Input`) designed for the dark theme.
  - `*-section.jsx`: Feature-specific sections (Hero, Pricing, etc.).
- **`prisma/`**: Database schema and migrations.

## Customization

- **Tailwind Config**: Defined in `tailwind.config.js`.
- **Global Styles**: `app/tailwind.css` (includes overrides for Polaris styles).

---
*Generated for Malicc Project*
