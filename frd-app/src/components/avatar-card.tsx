'use client'

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {useTranslations} from 'next-intl';

type AvatarCardProps = {
    friend: any,
    showDetailButton: true,
    path: string,
} | {
    friend: any,
    showDetailButton?: false,
    path?: never,
}

export default function AvatarCard({ friend, path, showDetailButton}: AvatarCardProps) {
    const t = useTranslations('Index');
    const router = useRouter();

    return (
        <div key={friend.id} className="flex items-center space-x-2 py-2 w-full">
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
                    <p>{t('location')}: {`${friend?.location?.latitude ?? "Unknown"}`} {`${friend?.location?.longitude ?? "Unknown"}`}</p>
                </CardContent>
                {showDetailButton && <CardFooter>
                    <Button onClick={()=>{
                        router.push(path);
                    }}>
                        {t("viewUser")}
                    </Button>
                </CardFooter>}
            </Card>
        </div>
    );
}