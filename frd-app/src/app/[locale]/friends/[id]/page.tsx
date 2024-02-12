import BackButton from '@/components/back-button';
import FriendDetail from '@/components/friend-detail';
import { getFriendById } from '@/actions/friends';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const friend = await getFriendById(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = friend?.picture || [];

  return {
    title: `${friend.name.first} ${friend.name.last}`,
    description: `This is a friend named ${friend.name.first} ${friend.name.last}`,
    openGraph: {
      images: [previousImages],
    },
  };
}

export default async function FriendByIDPage({
  params,
}: {
  params: { id: string; locale: string };
}) {
  const friendId = params.id;
  return (
    <div className="px-2 py-2">
      <BackButton path={`/${params.locale}`} />
      <FriendDetail id={friendId} />
    </div>
  );
}
