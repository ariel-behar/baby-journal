import RegisterForm from "@/components/Forms/RegisterForm"
import Link from "next/link"

function RegisterPage() {
	return (
		<div className="flex items-center justify-center">
			<div className="w-[500px] bg-dark-soft p-12 flex flex-col text-center gap-7 rounded-md ">
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