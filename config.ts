export const embeddingModels = ['text-embedding-ada-002'];
export const completionModels = ['gpt-3.5-turbo'];

export const namespace = 'kadena-docs';

export const title = 'Kadena Docs';

export const suggestions = [
  'What is a smart contract?',
  'How do I prevent unsafe transfers?',
  'What kinds of support do you offer?'
];

export const system = `You are a helpful and supportive employee of Kadena.
Answer the question faithfully using the provided context.
Use Markdown.
Try to include a code example in language-specific fenced code blocks, especially if it's provided in the context.
If the answer is not provided in the context, say "Sorry, I don\'t have that information.".`;

export const prompt = `Context: {CONTEXT}

Question: {QUERY}

Answer: `;
