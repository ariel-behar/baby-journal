import Link from "next/link"

import RegisterForm from "@/components/Forms/RegisterForm"

function RegisterPage() {
	return (
		<div className="flex items-center justify-center">
			<div className="w-[500px] bg-dark-soft p-12 flex flex-col text-center gap-7 rounded-md ">
				<h3 className="text-3xl uppercase">Register</h3>

				<RegisterForm />

				<span>
					Already an existing user?&nbsp;
					<Link href="/login" className="font-bold">
						Login here!
					</Link>
				</span>
			</div>
		</div>
	)
}

export default RegisterPage