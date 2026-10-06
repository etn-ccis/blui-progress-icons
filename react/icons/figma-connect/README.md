# Figma Code Connect

This project uses [Figma Code Connect](https://github.com/figma/code-connect) to link React components to their corresponding Figma designs.

## Setup

### Environment Variables

A `.env` file is required at the repository root (`blui-progress-icons/.env`). This file is **not committed to the repository**.

The `.env` file contains:

| Variable                       | Description                                                        |
| ------------------------------ | ------------------------------------------------------------------ |
| `FIGMA_ACCESS_TOKEN`           | Personal access token generated from your Figma account            |
| `HTTPS_PROXY`                  | Corporate proxy URL for HTTPS requests                             |
| `HTTP_PROXY`                   | Corporate proxy URL for HTTP requests                              |
| `NODE_TLS_REJECT_UNAUTHORIZED` | Set to `0` to bypass corporate SSL certificate verification issues |

### Generating a Figma Access Token

1. Go to [figma.com](https://www.figma.com)
2. Click your avatar (top-left) → **Settings**
3. Navigate to **Security** → **Personal access tokens**
4. Click **Generate new token**
5. Copy the token and add it to your `.env` file

## Publishing

To publish all Code Connect files to Figma:

```sh
yarn figma:publish
```

## Project Structure

All Code Connect files are organized under `react/icons/figma-connect/`:

```
react/icons/figma-connect/
├── figma-urls.ts         # Central registry of all Figma component URLs
├── Battery.figma.tsx
├── Donut.figma.tsx
├── Heart.figma.tsx
├── Pie.figma.tsx
├── Signal.figma.tsx
└── Ups.figma.tsx
└── BatteryLarge.figma.tsx
```

## Adding a New Component

1. Get the Figma component URL (right-click the component in Figma → **Copy link**)
2. Add the URL to `figma-urls.ts`
3. Create a new `<ComponentName>.figma.tsx` file in the `figma-connect/` folder
4. Run `yarn figma:publish`
