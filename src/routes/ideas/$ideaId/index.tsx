import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/ideas/$ideaId/')({
  component: IdeaDetailsPage,
});

function IdeaDetailsPage() {
  return <div>Hello "/ideas/$ideaId/"!</div>;
}
