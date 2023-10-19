interface Props {
    sizeClassName?: "size-1" | "size-2" | "size-3" | "size-4" | "size-5" | "size-6" | "size-7" | "size-8" | "size-9" | "size-10"
}
function IconCheck({
    sizeClassName = 'size-5'
}:Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={sizeClassName}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    )
}

export default IconCheck