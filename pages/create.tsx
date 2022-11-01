import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, useState } from 'react';
import ConclusionComponent from '../components/ConclusionComponent';
import SelectWrittingComponent from '../components/SelectWrittingComponent';
import NavigationBar from '../components/NavigationBar';
import IntroductionComponent from '../components/IntroductionComponent';

const Home: NextPage = () => {
  const [selectedComponent, setSelectedComponent] = useState('index');
  const onSubmit = () => {};
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
          }[selectedComponent]
        }
      </div>

      <div className='flex flex-col flex-1'>
        <textarea name='text' className=' h-full focus:outline-none'></textarea>
      </div>
    </div>
  );
};

export default Home;
