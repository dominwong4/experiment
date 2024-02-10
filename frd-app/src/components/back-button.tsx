'use client'

import { ChevronLeftIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function BackButton({path}: {path:string}) {
    const router = useRouter();
    return (
        <Button variant="outline" size="icon" onClick={()=>{
            router.replace(path);
        }}>
        <ChevronLeftIcon className="h-4 w-4" />
        </Button>
    );
}