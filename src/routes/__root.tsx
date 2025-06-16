import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
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
  component: () => (
    <>
      <HeadContent />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
