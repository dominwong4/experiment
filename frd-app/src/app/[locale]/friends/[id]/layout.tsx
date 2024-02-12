import { ErrorBoundary } from "next/dist/client/components/error-boundary"
import FriendDatailPageError from "./error"
import { Suspense } from "react"
import Loading from "./loading"

export default function FriendDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <Suspense fallback={<Loading/>}> <ErrorBoundary errorComponent={FriendDatailPageError}>
            <section>{children}</section>
        </ErrorBoundary></Suspense>
}