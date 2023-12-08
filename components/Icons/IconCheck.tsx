import { IIconProps } from "@/types/types"

interface Props extends IIconProps {
    stroke?: string,
    strokeWidth?: number
}

function IconCheck({
    sizeClassName = 'size-5',
    stroke = 'currentColor',
    strokeWidth = 1.5
}:Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={sizeClassName}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    )
}

export default IconCheck