import { Link } from "@/lib/i18nNavigation";

import FormStylesWrapper from "@/components/Forms/FormComponents/FormStylesWrapper";
import LoginForm from "@/components/Forms/LoginForm";

async function LoginPage() {

	return (
		<section className="flex-grow flex items-center justify-center">
			<FormStylesWrapper title="Login" className="p-3 md:p-12 flex flex-col w-full md:w-[500px]">
				
				<LoginForm />

				<span className="my-3">
					Don't have an account?&nbsp;
					<Link href="/register" className="font-bold">
						Register here!
					</Link>
				</span>
			</FormStylesWrapper>
		</section>
	)
}

export default LoginPage