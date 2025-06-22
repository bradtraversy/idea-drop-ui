import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/(auth)/register/')({
  component: RegisterPage,
});

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='max-w-md mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Register</h1>
      <form className='space-y-4'>
        <input
          type='text'
          placeholder='Name'
          className='w-full border border-gray-300 rounded-md p-2'
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete='off'
        />
        <input
          type='email'
          placeholder='Email'
          className='w-full border border-gray-300 rounded-md p-2'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='off'
        />
        <input
          type='password'
          placeholder='Password'
          className='w-full border border-gray-300 rounded-md p-2'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='off'
        />
        <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md w-full disabled:opacity-50'>
          Register
        </button>
      </form>

      <p className='text-sm text-center mt-4'>
        Already have an account?{' '}
        <Link
          to='/login'
          className='text-blue-600 hover:text-blue-700 hover:underline font-medium'
        >
          Login
        </Link>
      </p>
    </div>
  );
}
