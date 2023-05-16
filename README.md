# 7-docs demo

Starterkit for OpenAI chat client based on your own content. Main ingredients:

- [Next.js](https://nextjs.org)
- [Pinecone](https://www.pinecone.io)
- [@7-docs/edge](https://www.npmjs.com/package/@7-docs/edge)
- TypeScript
- Tailwind

## Install

- Clone this repo
- `npm install`
- [Prepare vector database](#prepare-db)
- [Ingest content](#ingest)
- `cp .env.example .env.local` and paste your tokens: `OPENAI_API_KEY`, `PINECONE_URL`, `PINECONE_API_KEY`

The following commands are using `kadena-docs` as set in [config.ts](./config.ts) and ingest content from the
`kadena-community/docs` repository.

## Prepare db

Create a Pinecone account if you don't have one already. Then create an index:

```shell
npx 7-docs pinecone-create-index --index kadena
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

Netlify

Make sure to add the environment variables to the platform first.
