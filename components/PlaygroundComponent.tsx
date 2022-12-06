import { useState } from 'react';

interface Props {
  onBackClick: () => void;
}

const PlaygroundComponent = ({ onBackClick }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');
  const [prompt, setPrompt] = useState('');

  async function onSubmit(event: any) {
    event.preventDefault();
    setResult('');
    setIsLoading(true);
    const response = await fetch('/api/playground', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    const data = await response.json();
    setIsLoading(false);
    setResult(data.result);
  }
  return (
    <div className='flex flex-1 flex-col items-center'>
      <div className='flex items-center'>
        <button
          onClick={onBackClick}
          className='mt-2 mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
        >
          BACK
        </button>
        <h2 className='text-3xl'>Genera una introducción para un ensayo</h2>
      </div>
      <div className='w-1/2'>
        <form className='w-full' onSubmit={onSubmit}>
          <div className='w-full'>
            <div>
              <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                Escribe la hipotesis de tu ensayo
              </label>
              <textarea
                id='steps'
                className='resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Los robots serán 10,000 más capaces que los humanos y nos llevarán a una era de abundancia'
                required={true}
                onChange={(e) => setPrompt(e.target.value)}
                value={prompt}
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

      <div className='w-full h-full mt-10 flex items-center flex-col '>
        {isLoading && <p>Loading...</p>}
        <h3 className='text-xl'>Resultado: </h3>
        <textarea
          className='w-1/2 resize-none focus:outline-none h-48'
          value={result}
        />
      </div>
    </div>
  );
};

export default PlaygroundComponent;
