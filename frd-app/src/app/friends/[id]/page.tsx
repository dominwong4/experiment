import AvatarCard from "@/components/avatar-card";
import BackButton from "@/components/back-button";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Metadata, ResolvingMetadata } from "next";

const getFriendById = async (id: string) => {
    try {
        const data = await fetch(`http://localhost:3002/friends/${id}`);
        const json = await data.json();
        return json;
    } catch (e) {
        throw e;
    }

}

export async function generateMetadata(
    { params }: { params: { id: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id

    // fetch data
    const friend = await getFriendById(id);

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = friend?.picture || []

    return {
        title: `${friend.name.first} ${friend.name.last}`,
        description: `This is a friend named ${friend.name.first} ${friend.name.last}`,
        openGraph: {
            images: [previousImages],
        },
    }
}

export default async function FriendByIDPage({ params }: { params: { id: string } }) {
    const friend = await getFriendById(params.id);
    return <div className="px-2 py-2">
        <BackButton path='/'/>
        <AvatarCard friend={friend} showDetailButton={false}/>
    </div>
}