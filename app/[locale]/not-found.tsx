import { Link } from "@/lib/i18nNavigation"
import Image from "next/image"

function NotFound() {
    return (
        <section>
            <h2>Not Found</h2>
            <p>Sorry, the page you are looking for does not exist</p>
            <Link href='/'>Return Home</Link>
            
            <figure className="relative w-full h-[150px] sm:h-[300px] flex flex-row items-center">
                <Image src="/img/baby-crying.png" alt="Not Found" fill className="object-contain" />
            </figure>

        </section>
    )
}

export default NotFound