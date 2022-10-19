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
    prompt: generatePrompt(
      req.body.subject,
      req.body.objective,
      req.body.steps
    ),
    temperature: 0.7,
  });
  res.status(200).json({ result: completion.data.choices![0].text });
}

function generatePrompt(subject: string, objective: string, steps: string) {
  console.log(subject);
  return `Crea una conclusión de un ensayo del siguiente tema.

tema: Flex Sim
objetivo: trazar ruta y almacenar objetos en racks en nuestra simulacion
pasos: simulamos un proceso de calidad de tres productos diferentes
conclusión: Flex Sim nos permite trazar rutas y almacenar objetos en racks en nuestras simulaciones.
En esta práctica simulamos un proceso de calidad de tres productos diferentes al igual que la practica anterior, con la diferencia de que al final, un transportador lleva cada producto a su rack correspondiente.
Es por esto que Flex Sim es un programa bastante útil, permitiéndonos trazar rutas similares al mundo real.
tema: ${subject}
objetivo: ${objective}
pasos: ${steps}
conclusión:
`;
}
