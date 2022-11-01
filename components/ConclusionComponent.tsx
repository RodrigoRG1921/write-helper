import React, { useState } from 'react';

interface Props {
  onBackClick: () => void;
}

const ConclusionComponent = ({ onBackClick }: Props) => {
  const [subject, setSubject] = useState('');
  const [objective, setObjective] = useState('');
  const [steps, setSteps] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultList, setResultList] = useState<string[]>([]);
  async function onSubmit(event: any) {
    event.preventDefault();
    setResult('');
    setIsLoading(true);
    const response = await fetch('/api/spanish/conclusion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject,
        objective,
        steps,
      }),
    });
    const data = await response.json();
    setIsLoading(false);
    setResult(data.result);
    setObjective('');
    setSteps('');
    setSubject('');
    setResultList((prevResults) => [...prevResults, result]);
  }

  return (
    <div className='flex flex-1 flex-col mx-10'>
      <div className='flex'>
        <button
          onClick={onBackClick}
          className='mt-2 mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
        >
          BACK
        </button>
        <h2 className='text-3xl'>Genera una conclusión para una práctica</h2>
      </div>
      <div className=''>
        <form onSubmit={onSubmit}>
          <div>
            <div>
              <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                Tema
              </label>
              <input
                type='text'
                id='subject'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Flex Sim'
                required={true}
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
            </div>
            <div>
              <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                Objetivo
              </label>
              <textarea
                id='objective'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none'
                placeholder='trazar ruta y almacenar objetos en racks en nuestra simulacion'
                required={true}
                onChange={(e) => setObjective(e.target.value)}
                value={objective}
              />
            </div>
            <div>
              <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                ¿Qué se realizó en la práctica?
              </label>
              <textarea
                id='steps'
                className='resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='simulamos un proceso de calidad de tres productos diferentes'
                required={true}
                onChange={(e) => setSteps(e.target.value)}
                value={steps}
              />
            </div>
            <button
              type='submit'
              className='mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className='flex flex-col '>
        {isLoading && <p>Loading...</p>}
        <h3 className='text-xl'>Resultado: </h3>
        <textarea
          className='w-full resize-none focus:outline-none h-40'
          value={result}
        />
      </div>
    </div>
  );
};

export default ConclusionComponent;
