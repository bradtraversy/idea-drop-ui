import { Link, useNavigate } from '@tanstack/react-router';
import { Lightbulb } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { logoutUser } from '@/api/auth';

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser, setAccessToken } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();
      setAccessToken(null);
      setUser(null);
      navigate({ to: '/' });
    } catch (err: any) {
      console.log('Logout failed: ', err);
    }
  };

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
          {user && (
            <Link
              to='/ideas/new'
              className='bg-blue-600 hover:bg-blue-700 text-white font-medium transition px-4 py-2 rounded-md leading-none'
            >
              + New Idea
            </Link>
          )}
        </nav>

        {/* Auth Buttons */}
        <div className='flex items-center space-x-2'>
          {!user ? (
            <>
              <Link
                to='/login'
                className='text-gray-600 hover:text-gray-700 font-medium transition px-3 py-2 leading-none'
              >
                Login
              </Link>
              <Link
                to='/register'
                className='bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition px-4 py-2 rounded-md leading-none'
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className='hidden sm:block text-gray-700 font-medium px-2'>
                Welcome, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className='text-red-600 hover:text-red-900 font-medium transition px-3 py-2 leading-none'
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
