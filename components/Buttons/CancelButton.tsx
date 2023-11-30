import { getTranslations } from "next-intl/server"

import IconClose from "../Icons/IconClose"

interface Props {
	className?: string
	onClick?: () => void
}

async function CancelButton({
	className = "btn-error",
	onClick,
}: Props) {
	const t = await getTranslations("Common")

	return (
		<button type="button" className={`btn ${className} btn-sm btn-min-width`} onClick={onClick}>
			{t('cancel')} <IconClose />
		</button>
	)
}

export default CancelButton