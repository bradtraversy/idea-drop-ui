import {
  HeadContent,
  Link,
  Outlet,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { QueryClient } from '@tanstack/react-query';
import Header from '@/components/Header';

type RouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      {
        name: 'description',
        content:
          'Share, explore and build on the best startup ideas and side hustles',
      },
      {
        title: 'IdeaDrop - Your Idea Hub',
      },
    ],
  }),
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <HeadContent />
      <Header />
      <main className='flex justify-center p-6'>
        <div className='w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8'>
          <Outlet />
        </div>
      </main>
      <TanStackRouterDevtools />
    </div>
  );
}

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center text-center py-20'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>404</h1>
      <p className='text-lg text-gray-600 mb-6'>
        Ooops! The page you are looking for does not exist
      </p>
      <Link
        className='px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'
        to='/'
      >
        Go Back Home
      </Link>
    </div>
  );
}
