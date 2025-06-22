import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Lightbulb } from 'lucide-react';

export const Route = createFileRoute('/(auth)')({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <div className='flex flex-col md:flex-row items-start justify-between gap-10 p-6 text-blue-600'>
      <div className='flex flex-col items-start gap-4'>
        <Lightbulb className='w-16 h-16 text-yellow-400' />
        <h1 className='text-4xl font-bold text-gray-800'>
          Welcome to IdeaDrop
        </h1>
        <p className='text-gray-600 max-w-xs'>
          Share, explore, and build on the best startup ideas and side hustles.
        </p>
      </div>

      <section className='flex-1 text-gray-600'>
        <Outlet />
      </section>
    </div>
  );
}
