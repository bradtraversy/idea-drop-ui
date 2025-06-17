import { Link } from '@tanstack/react-router';
import { Lightbulb } from 'lucide-react';

const Header = () => {
  return (
    <header className='bg-white shadow'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <div className='flex items-center space-x-2 text-gray-800'>
          <Link to='/' className='flex items-center space-x-2 text-gray-800'>
            <Lightbulb className='w-6 h-6 text-yellow-500' />
            <h1 className='text-2xl font-bold'>IdeaDrop</h1>
          </Link>
        </div>

        <nav className='flex items-center space-x-4'>
          <Link
            to='/ideas'
            className='text-gray-600 hover:text-gray-900 font-medium transition px-3 py-2 leading-none'
          >
            Ideas
          </Link>
          <Link
            to='/ideas/new'
            className='bg-blue-600 hover:bg-blue-700 text-white font-medium transition px-4 py-2 rounded-md leading-none'
          >
            + New Idea
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
