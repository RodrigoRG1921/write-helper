import type { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import ConclusionComponent from '../components/ConclusionComponent';
import SelectWrittingComponent from '../components/SelectWrittingComponent';
import IntroductionComponent from '../components/IntroductionComponent';
import PlaygroundComponent from '../components/PlaygroundComponent';

const Home: NextPage = () => {
  const [selectedComponent, setSelectedComponent] = useState('index');
  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponent(event.target.value);
  };
  return (
    <div className='flex flex-1 mt-10'>
      <div className='flex border-r-stone-90 flex-1 border-r-black border-r'>
        {/* <ConclusionComponent /> */}
        {
          {
            index: <SelectWrittingComponent onSelectChange={onSelectChange} />,
            'Conclusión practica': (
              <ConclusionComponent
                onBackClick={() => setSelectedComponent('index')}
              />
            ),
            'Introducción ensayo': (
              <IntroductionComponent
                onBackClick={() => setSelectedComponent('index')}
              />
            ),
            Playground: (
              <PlaygroundComponent
                onBackClick={() => setSelectedComponent('index')}
              />
            ),
          }[selectedComponent]
        }
      </div>

      <div className='flex flex-col flex-1'>
        <textarea
          name='text'
          className='h-3/4 focus:outline-none p-5'
        ></textarea>
        <button
          type='submit'
          className='ml-5 w-28 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
        >
          Save text
        </button>
      </div>
    </div>
  );
};

export default Home;
