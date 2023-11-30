"use client"
import { useTranslations } from "next-intl"

import IconClose from "../Icons/IconClose"

interface Props {
	className?: string
	onClick?: () => void
}

function CancelButton({
	className = "btn-error",
	onClick,
}: Props) {
	const t = useTranslations("Common")

	return (
		<button type="button" className={`btn ${className} btn-sm btn-min-width`} onClick={onClick}>
			{t('cancel')} <IconClose />
		</button>
	)
}

export default CancelButton