import React, { useState } from 'react';

const ConclusionComponent = () => {
  const [subject, setSubject] = useState('');
  const [objective, setObjective] = useState('');
  const [steps, setSteps] = useState('');
  const [result, setResult] = useState('');

  async function onSubmit(event: any) {
    event.preventDefault();
    console.log(objective, subject, steps);
    const response = await fetch('/api/conclusion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: subject,
        objective: objective,
        steps: steps,
      }),
    });
    const data = await response.json();
    setResult(data.result);
  }

  return (
    <div className='flex flex-1 flex-col'>
      <h2 className='text-3xl'>Genera una conclusión</h2>
      <form className='w-full' onSubmit={onSubmit}>
        <div className='w-full'>
          <div>
            <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Tema
            </label>
            <input
              type='text'
              id='subject'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Flex Sim'
              required={true}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Objetivo
            </label>
            <textarea
              id='objective'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none'
              placeholder='trazar ruta y almacenar objetos en racks en nuestra simulacion'
              required={true}
              onChange={(e) => setObjective(e.target.value)}
            />
          </div>
          <div>
            <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Pasos a seguir en la practica
            </label>
            <textarea
              id='steps'
              className='resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='simulamos un proceso de calidad de tres productos diferentes'
              required={true}
              onChange={(e) => setSteps(e.target.value)}
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
      <div className='w-full h-full'>{result}</div>
    </div>
  );
};

export default ConclusionComponent;
