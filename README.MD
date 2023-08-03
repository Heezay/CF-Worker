# Cloudflare Worker with tRPC integration

This is a sample project that showcases how to integrate a Cloudflare Worker with tRPC, a strong type safe end-to-end RPC framework.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a recent version of Node.js installed (>=14.0.0).
- You have a [Cloudflare](https://dash.cloudflare.com) account. 

## Installing dependencies

Install the necessary dependencies:

```bash
npm install @trpc/server zod
```

## Deploying to Cloudflare

1. Install wrangler globally:

```bash
npm install -g wrangler
```

2. Log in to your Cloudflare account:

```bash
wrangler login
```

3. Deploy to Cloudflare Workers:

```bash
wrangler deploy
```