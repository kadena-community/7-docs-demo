# template-next-supabase

Starterkit for OpenAI chat client based on your own content. Main ingredients:

- [Next.js](https://nextjs.org)
- [Supabase](https://supabase.com) + [pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- [@7-docs/edge](https://www.npmjs.com/package/@7-docs/edge)
- TypeScript
- Tailwind

## Install

- [Use this template](https://github.com/7-docs/template-next-supabase/generate)
- Clone your new repo
- `npm install`
- [Prepare vector database](#prepare-db)
- [Ingest content](#ingest)
- `cp .env.example .env.local` and paste your tokens: `OPENAI_API_KEY`, `SUPABASE_URL`, `SUPABASE_API_KEY`

The following commands are using `my-namespace` as set in [config.ts](./config.ts) and ingest content from the
`reactjs/react.dev` repository. By all means, you're encouraged to change them to something more original.

## Prepare db

Create a Pinecone account if you don't have one already. Then create an index:

```shell
npx 7-docs pinecone-create-index --index my-namespace
```

## Ingest

```shell
npx 7-docs ingest --source github --repo kadena-community/docs --files 'docs/**/*.md' --namespace kadena-docs
```

## Run

```shell
npm run dev
```

## Deploy

This application can be deployed on platforms with support for Next.js + edge functions. Examples:

- [Vercel](https://vercel.com)
- [Fly.io](https://fly.io)

Make sure to add the environment variables to the platform first.
