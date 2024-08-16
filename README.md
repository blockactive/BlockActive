This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Smart contract - Scroll sepolia

Deployed and verified smart contract that we're going to use:

https://sepolia.scrollscan.com/address/0xaac42b52083678bca1c8bc248b832f6bfe6b165f#code

## The Graph 

We index the data of the corrupt addresses. We listen to the event when they are added to the array of addresses in the smart contract deployed on Scroll.

Link to Subrgraph Studio: https://api.studio.thegraph.com/query/86616/subgraphtest/version/latest

Deployment ID: QmPijdE4g7RzrmpaZUhigKX7oFnw2uz2TG6S9SV3gHsc33

## Deploy on ICP

App canister created on network ic with canister id: iuarl-viaaa-aaaag-qkexa-cai

Frontend canister via browser
    app: https://iuarl-viaaa-aaaag-qkexa-cai.icp0.io/   (first front-end version)

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




