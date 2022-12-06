import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default async function (req: any, res: any) {
  const completion = await openai.createCompletion({
    model: 'text-curie-001',
    max_tokens: 400,
    prompt: req.body.prompt,
    temperature: 0.7,
  });
  res.status(200).json({ result: completion.data.choices![0].text });
}
