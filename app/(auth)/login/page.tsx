import Link from "next/link";

import FormStylesWrapper from "@/components/Forms/FormComponents/FormStylesWrapper";
import LoginForm from "@/components/Forms/LoginForm";

async function LoginPage() {

	return (
		<div className="flex items-center justify-center">
			<FormStylesWrapper title="Login" classes="p-12 flex flex-col gap-7 w-[500px]">
				
				<LoginForm />

				<span>
					Don't have an account?&nbsp;
					<Link href="/register" className="font-bold">
						Register here!
					</Link>
				</span>
			</FormStylesWrapper>
		</div>
	)
}

export default LoginPage