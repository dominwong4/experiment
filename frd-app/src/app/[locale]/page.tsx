'use client';

import AvatarCard from '@/components/avatar-card';
import SkeletonAvatarCard from '@/components/skeletons/avatar-card';
import useFriendListHook from '@/hooks/use-friend-list-hook';
import { useTranslations } from 'next-intl';

export default function Home({ params: { locale } }: any) {
  const t = useTranslations('Index');
  const { data , isLoading} = useFriendListHook();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t('friendList')}</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading && 
          Array.from({ length: 30 }).map((_, i) => <SkeletonAvatarCard key={i} />)
        }
        {data &&
          data.map((friend: any) => (
            <AvatarCard
              key={friend._id}
              friend={friend}
              path={`${locale}/friends/${friend._id}`}
              showDetailButton={true}
            />
          ))}
      </div>
    </main>
  );
}
