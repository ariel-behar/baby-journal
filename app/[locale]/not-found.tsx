import { Link } from "@/lib/i18nNavigation"
import Image from "next/image"

function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Sorry, the page you are looking for does not exist</p>
            <Link href='/'>Return Home</Link>
            <Image src="/img/baby-crying.png" alt="Not Found" width={300} height={300} />
        </div>
    )
}

export default NotFound