import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 4000)
    }, [])
    return (
        <div className="not__found">
            <h1>Oops...</h1>
            <h2>The page you Request for could not be Found</h2>
            <p>Go back to <Link href="/" legacyBehavior><a>Homepasge</a></Link></p>

        </div>
    );
}

export default NotFound;