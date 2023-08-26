import LoginForm from "@/components/Forms/LoginForm";
import { handleGithubLogin } from "@/lib/serverActions";
import Link from "next/link";

async function LoginPage() {

	return (
		<div className="flex items-center justify-center">
			<div className="w-[500px] bg-darkSoft p-12 flex flex-col text-center gap-7 rounded-md ">
				<form action={handleGithubLogin}>
					<button className="gray-button w-full mb-5">Login with Github</button>
				</form>

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