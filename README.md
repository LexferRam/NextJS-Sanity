This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Sanity instalation

* Create sanity project 

```cmd
npx create sanity@latest
```

* In the config file copy de the **projectId**

* In the nextJS project install:

```cmd
sudo npm i sanity next-sanity
```

* Create sanity.config,ts

```ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: "vrmd1yl0",

    dataset: "production",

    title: "My personal website",

    apiVersion: "2023-11-24",

    basePath: "/admin",

    plugins: [deskTool()]
})

export default config;
```

* Inside app folder create a route Admin, which is gonna be the NextStudio component from sanity:

```ts
'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

const AdmiPage = () => {
  return (
    <NextStudio
        config={config}
    />
  )
}

export default AdmiPage
```

## Images Sanity

* install 

```cmd
npm install --save next-sanity-image
```

* add: 

```ts
// next.config.js
module.exports = {
	images: {
		domains: ['cdn.sanity.io']
	}
};
```