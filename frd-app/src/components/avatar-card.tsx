'use client'

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

//TODO - Add types
export default function AvatarCard({ friend, showDetailButton = true}: {
    friend: any,
    showDetailButton?: boolean
}) {
    const router = useRouter();
    return (
        <div key={friend.id} className="flex items-center space-x-2 py-2">
            <Card className={cn("w-full")}>
                <CardHeader>
                    <Avatar>
                        <AvatarImage src={friend.picture} alt={`${friend.name.first} ${friend.name.last}`} />
                        <AvatarFallback></AvatarFallback>
                    </Avatar>
                    <CardTitle>{`${friend.name.first} ${friend.name.last}`}</CardTitle>
                    <CardDescription>
                        <Link href={`mailto:${friend?.email}`}>{friend?.email}</Link></CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Location: {`${friend?.location?.latitude}`} {`${friend?.location?.longitude}`}</p>
                </CardContent>
                {showDetailButton && <CardFooter>
                    <Button onClick={()=>{
                        router.push(`/friends/${friend._id}`);
                    }}>
                        View User
                    </Button>
                </CardFooter>}
            </Card>
        </div>
    );
}