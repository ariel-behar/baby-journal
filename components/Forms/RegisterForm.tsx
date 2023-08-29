"use client";

import { register } from "@/lib/serverActions"

function RegisterForm() {

    return (
        <form action={register} className="flex flex-col text-center gap-7">
            <input className="form-input" type="text" placeholder="Username" name="username" />
            <input className="form-input" type="text" placeholder="First Name" name="firstName" />
            <input className="form-input" type="text" placeholder="Last Name" name="lastName" />
            <input className="form-input" type="email" placeholder="Email" name="email" />
            <input className="form-input" type="password" placeholder="Password" name="password" />
            <input className="form-input" type="password" placeholder="Repeat Password" name="repeatPassword" />

            <button className="btn btn-lg btn-primary">Register</button>
        </form>
    )
}

export default RegisterForm