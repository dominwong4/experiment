'use client'
import { Skeleton } from "../ui/skeleton";

export default function SkeletonAvatarCard() {
    return (
        <div className="flex flex-col space-y-4 space-x-2">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <div>
            <Skeleton className="h-8 w-[100px]" />
          </div>
        </div>
      )
}