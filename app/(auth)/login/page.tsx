import { auth, signIn } from "@/lib/auth";

async function LoginPage() {
	const session = await auth();
	console.log('session:', session)

	const handleGithubLogin = async () => {
		"use server"

		await signIn("github");
	}

	return (
		<div>
			<form action={handleGithubLogin}>
				<button>Login with Github</button>
			</form>
		</div>
	)
}

export default LoginPage