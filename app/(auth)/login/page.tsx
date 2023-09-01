import LoginForm from "@/components/Forms/LoginForm";
import Link from "next/link";

async function LoginPage() {

	return (
		<div className="flex items-center justify-center">
			<div className="w-[500px] bg-dark-soft p-12 flex flex-col text-center gap-7 rounded-md ">
				<h3 className="text-3xl uppercase">Login</h3>
				<LoginForm />

				<span>
					Don't have an account?&nbsp;
					<Link href="/register" className="font-bold">
						Register here!
					</Link>
				</span>
			</div>
		</div>
	)
}

export default LoginPage