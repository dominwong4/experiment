import AvatarCard from "@/components/avatar-card";
import { ModeToggle } from "@/components/mode-toggle";

const getFriendsData = async () => {
  const data = await fetch("http://localhost:3002/friends");
  const json = await data.json();
  return json;
}

export default async function Home() {
  const data = await getFriendsData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle/>
      <div>
        {data && data.map((friend: any) => (
          <AvatarCard key={friend._id} friend={friend} />
        ))}

      </div>
    </main>
  );
}
