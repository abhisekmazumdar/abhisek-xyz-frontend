# What is this?

This repository is for a website typically hosted at [abhisek.xyz](https://www.abhisek.xyz/). It utilizes Drupal as the backend for content and a Next.js codebase for the frontend.

## How to use

Follow the steps below for local development:

### Create the `.env.local` file

Copy the `.env.example` and create a `.env.local` file with the following content:

```
NEXT_PUBLIC_DRUPAL_BASE_URL=https://your-backend-site-url.come
NEXT_IMAGE_DOMAIN=your-backend-site-url.come
```

### Start Development Server

First, install the dependencies:

```
npm i
```


To start the Next.js development server, run `npm run dev` or `yarn dev`. This will launch the server on `http://localhost:3000`.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchapter-three%2Fnext-drupal-basic-starter&env=NEXT_PUBLIC_DRUPAL_BASE_URL,NEXT_IMAGE_DOMAIN,DRUPAL_PREVIEW_SECRET,DRUPAL_CLIENT_ID,DRUPAL_CLIENT_SECRET&envDescription=Learn%20more%20about%20environment%20variables&envLink=https%3A%2F%2Fnext-drupal.org%2Fdocs%2Fenvironment-variables&project-name=next-drupal&demo-title=Next.js%20for%20Drupal&demo-description=A%20next-generation%20front-end%20for%20your%20Drupal%20site.&demo-url=https%3A%2F%2Fdemo.next-drupal.org&demo-image=https%3A%2F%2Fnext-drupal.org%2Fimages%2Fdemo-screenshot.jpg)

## Documentation

For more information, visit [next-drupal.org](https://next-drupal.org).
