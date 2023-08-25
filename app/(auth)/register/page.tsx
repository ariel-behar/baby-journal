import { register } from "@/lib/serverActions"

function RegisterPage() {
	return (
		<div className="flex items-center justify-center">
			<div className="w-[500px] bg-darkSoft p-12 flex flex-col text-center gap-7 rounded-md ">
				<form action={register} className="flex flex-col text-center gap-7">
					<input className="form-input" type="text" placeholder="Username" name="username" />
					<input className="form-input" type="text" placeholder="First Name" name="firstName" />
					<input className="form-input" type="text" placeholder="Last Name" name="lastName" />
					<input className="form-input" type="email" placeholder="Email" name="email" />
					<input className="form-input" type="password" placeholder="Password" name="password" />
					<input className="form-input" type="password" placeholder="Repeat Password" name="repeatPassword" />

					<button className="blue-button">Register</button>
				</form>
			</div>
		</div>
	)
}

export default RegisterPage