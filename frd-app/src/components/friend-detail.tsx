'use client';

import useFriendHook from '@/hooks/use-friend-hook';
import AvatarCard from './avatar-card';

export default function FriendDetail({ id }: { id: string }) {
  const { data } = useFriendHook(id);
  return (
    <div>
      {/* Map here */}
      {data?.location?.latitude && data?.location?.longitude && (
        <iframe
          className="w-full h-96"
          src={`https://maps.google.com/maps?q=${data.location.latitude},${data.location.longitude}&z=10&output=embed`}
        ></iframe>
      )}
      {data && <AvatarCard friend={data} showDetailButton={false} />}
    </div>
  );
}
