import NextAuth from "next-auth"
import bcrypt from "bcryptjs"
import Credentials from "next-auth/providers/credentials"
import dbConnect from "./dbConnect";
import User from "@/models/User";
import { authConfig } from "./auth.config";
import { InvalidLoginError } from "@/models/Error";

const login = async (credentials: any) => {
	try {
		dbConnect();
		const user = await User.findOne({ username: credentials.username });

		if (!user) throw new InvalidLoginError();

		const isPasswordCorrect = await bcrypt.compare(
			credentials.password,
			user.password
		);

		if (!isPasswordCorrect) throw new InvalidLoginError();

		return user;
	} catch (error) {
		throw error;
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
				} catch (error) {
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