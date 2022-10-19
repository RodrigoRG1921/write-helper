import React from 'react'

const SelectWrittingComponent = () => {
  return (
    <div>
      <div className='w-full flex flex-col'>
              <h2>Select the type of writting you want to generate</h2>
              <select
                id='countries_disabled'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option selected>Choose a country</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
              <h2 className='mt-5'>Let´s generate an Essay introduction</h2>
            </div>
            <textarea
              name='text'
              className='w-3/4 h-48 border border-stone-900 resize-none '
              value={animalInput}
              onChange={(e) => setAnimalInput(e.target.value)}
            ></textarea>
            <button
              className='border bg-green-600 w-48 h-10 rounded border-stone-900 mt-3 self-center'
              onClick={(event) => onSubmit(event)}
            >
              Submit
            </button>
          </div>
    </div>
  )
}

export default SelectWrittingComponent