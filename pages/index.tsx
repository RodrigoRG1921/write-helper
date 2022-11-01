import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ai from '../public/ai.png';

const Home: NextPage = () => {
  return (
    <div className='flex mx-10 mt-10'>
      <div className='flex flex-1 h-full flex-col p-5'>
        <h1 className='text-7xl mb-8'>Welcome to Easy Writting!</h1>
        <p className=' mb-8'>
          If you're looking to write full texts, or if you're just looking for
          inspiration, this website can help. Using artificial intelligence, we
          can help you write better, faster, and more efficiently.
        </p>
        <Link href={'/create'}>
          <button
            type='button'
            className='w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Get started
          </button>
        </Link>
      </div>
      <div className='md:flex flex-1 h-full flex-col p-5 hidden'>
        <div className='mx-auto'>
          <Image
            src={ai}
            alt='robot writting'
            height={500}
            className='rounded-full '
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
