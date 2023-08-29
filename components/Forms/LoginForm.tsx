import { login } from '@/lib/serverActions'

function LoginForm() {
    return (
        <form action={login} className="flex flex-col text-center gap-7">
            <input className="form-input" type="text" placeholder="Username" name="username" />
            <input className="form-input" type="password" placeholder="password" name="password" />
            <button className="btn btn-lg btn-primary">Login with Credentials</button>
        </form>
    )
}

export default LoginForm