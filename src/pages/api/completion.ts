import { getCompletionHandler, pinecone } from '@7-docs/edge';
import { namespace, prompt, system } from '../../../config';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const PINECONE_URL = process.env.PINECONE_URL;
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;

if (!OPENAI_API_KEY) throw new Error('Env var OPENAI_API_KEY missing');
if (!PINECONE_URL) throw new Error('Env var PINECONE_URL missing');
if (!PINECONE_API_KEY) throw new Error('Env var PINECONE_API_KEY missing');

const query = (vector: number[]) => pinecone.query({ url: PINECONE_URL, token: PINECONE_API_KEY, namespace, vector });

export const config = {
  runtime: 'edge'
};

export default getCompletionHandler({ OPENAI_API_KEY, query, system, prompt });
