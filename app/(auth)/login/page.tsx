import { handleGithubLogin, login } from "@/lib/serverActions";

async function LoginPage() {

	return (
		<div>
			<form action={handleGithubLogin}>
				<button>Login with Github</button>
			</form>

			<form action={login}>
				<input className="form-input" type="text" placeholder="Username" name="username" />
				<input className="form-input" type="password" placeholder="password" name="password" />
				<button className="blue-button">Login with Credentials</button>
			</form>
		</div>
	)
}

export default LoginPage