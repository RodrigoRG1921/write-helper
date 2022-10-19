import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default async function (req: any, res: any) {
  const completion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: generatePrompt(req.subject, req.objective, req.steps),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices![0].text });
}

function generatePrompt(tema: string, objetivo: string, pasos: string) {
  return `Crea una conclusión de un ensayo del siguiente tema.
tema: Flex Sim
objetivo: trazar ruta y almacenar objetos en racks en nuestra simulacion
pasos: simulamos un proceso de calidad de tres productos diferentes
conclusión: Flex Sim nos permite trazar rutas y almacenar objetos en racks en nuestras simulaciones.
En esta práctica simulamos un proceso de calidad de tres productos diferentes al igual que la practica anterior, con la diferencia de que al final, un transportador lleva cada producto a su rack correspondiente.
Utilizando los nodos de red podemos trazar cualquier tipo de ruta para que nuestro transportador la siga y pueda llegar a su rack correspondiente. Flex sim nos permite trazar curvas y líneas rectas para que el transportador pueda seguir.
Es por esto que Flex Sim es un programa bastante útil, permitiéndonos trazar rutas similares al mundo real.
tema:
tema: ${tema}
objetivo: ${objetivo}
pasos: ${pasos}
conclusión:
`;
}
