import Image from "next/image"

function FooterPoweredBy() {
    return (
        <div className="mb-1 sm:mb-0 flex flex-row text-muted">
            <span >
                Powered by&nbsp;
                <a href="https://www.arielbehar.com" className="font-bold mr-2 underline" target="_blank">
                    Ariel Behar
                </a>
            </span>
            <a href="https://www.arielbehar.com" target="_blank">
                <Image src="/img/logo/arielbehar-logo.png" width={20} height={20} alt="Ariel Behar Logo" />
            </a>
        </div>
    )
}

export default FooterPoweredBy