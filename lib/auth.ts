import NextAuth from "next-auth"
import bcrypt from "bcryptjs"
import Credentials from "next-auth/providers/credentials"
import dbConnect from "./dbConnect";
import User from "@/models/User";
import { authConfig } from "./auth.config";

const login = async (credentials: any) => {
	try {
		dbConnect();
		const user = await User.findOne({ username: credentials.username });

		if (!user) throw new Error("Wrong credentials!");

		const isPasswordCorrect = await bcrypt.compare(
			credentials.password,
			user.password
		);

		if (!isPasswordCorrect) throw new Error("Wrong credentials!");

		return user;
	} catch (err) {
		console.log(err);
		throw new Error("Failed to login!");
	}
};

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				try {
					const user = await login(credentials);
					return user;
				} catch (err) {
					return null;
				}
			},
		}),

	],
	callbacks: {
		async signIn({ user, account, profile }) {
			return true;
		},
		...authConfig.callbacks,
	},
});