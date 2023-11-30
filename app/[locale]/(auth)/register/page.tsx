import { getTranslations } from "next-intl/server"
import { Link } from "@/lib/i18nNavigation"

import RegisterForm from "@/components/Forms/RegisterForm"
import FormStylesWrapper from "@/components/Forms/FormComponents/FormStylesWrapper"

async function RegisterPage() {
	const t = await getTranslations('RegisterPage')

	return (
		<section className="flex-grow flex items-center justify-center">
			<FormStylesWrapper title={t('register')} className="p-3 md:p-12 flex flex-col w-full md:w-[500px]">
				<RegisterForm />
				<span className="my-3">
					{t('already-an-existing-user')}&nbsp;
					<Link href="/login" className="font-bold">
						{t('login-here')}
					</Link>
				</span>
			</FormStylesWrapper>
		</section>
	)
}

export default RegisterPage