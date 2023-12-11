import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18nNavigation";

import FormStylesWrapper from "@/components/Forms/FormComponents/FormStylesWrapper";
import LoginForm from "@/components/Forms/LoginForm";

async function LoginPage() {
	const t = await getTranslations('LoginPage');

	return (
		<section className="flex-grow flex items-center justify-center">
			<FormStylesWrapper title={t('login')} className="login-register-form-styles-wrapper">
				
				<LoginForm />

				<span className="my-3">
					{t('dont-have-an-account')}&nbsp;
					<Link href="/register" className="font-bold">
						{t('register-here')}
					</Link>
				</span>
			</FormStylesWrapper>
		</section>
	)
}

export default LoginPage