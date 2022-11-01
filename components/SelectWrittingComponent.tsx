import React from 'react';

interface Props {
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectWrittingComponent = ({ onSelectChange }: Props) => {
  return (
    <div className='w-full flex flex-col flex-start mx-10'>
      <div className=''>
        <div className='mb-5'>
          <h2 className='text-xl'>
            Select the type of writting you want to generate
          </h2>
        </div>
        <select
          id='countries_disabled'
          onChange={(event) => onSelectChange(event)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        >
          <option>Conclusión practica</option>
          <option selected>Conclusión ensayo</option>
          <option>Introducción ensayo</option>
        </select>

        <button
          type='submit'
          className='mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SelectWrittingComponent;
