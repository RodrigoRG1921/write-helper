import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default async function (req: any, res: any) {
  const completion = await openai.createCompletion({
    model: 'text-curie-001',
    max_tokens: 340,
    prompt: generatePrompt(req.body.subject, req.body.hypothesis),
    temperature: 0.7,
  });
  res.status(200).json({ result: completion.data.choices![0].text });
}

function generatePrompt(subject: string, hypothesis: string) {
  return `
Crea una introducción a un ensayo sobre el tema "${subject}" con la hipótesis "${hypothesis}".

`;
}
