'use client'

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import Link from "next/link"

 
export default function FriendDatailPageError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex justify-center items-center min-h-screen">
  <Card className="w-1/2 max-w-xl min-w-1/4 mx-4">
    <CardTitle className="text-center py-3">Friend not exist!</CardTitle>
    <CardDescription className="text-center py-3">Please check again.</CardDescription>
    <CardFooter className="flex justify-center">
      <Button>
        <Link href="/">Go back To Friend List</Link>
      </Button>
    </CardFooter>
  </Card>
</div>
  )
}