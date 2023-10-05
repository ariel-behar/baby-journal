import Link from "next/link"

import RegisterForm from "@/components/Forms/RegisterForm"
import FormStylesWrapper from "@/components/Forms/FormComponents/FormStylesWrapper"

function RegisterPage() {
	return (
		<div className="flex items-center justify-center">
			<FormStylesWrapper title="Register" classes="p-12 flex flex-col gap-7">
				<RegisterForm />
				<span>
					Already an existing user?&nbsp;
					<Link href="/login" className="font-bold">
						Login here!
					</Link>
				</span>
			</FormStylesWrapper>
		</div>
	)
}

export default RegisterPage