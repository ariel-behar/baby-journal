import NextAuth from "next-auth"
import bcrypt from "bcryptjs"
import Credentials from "next-auth/providers/credentials"
import dbConnect from "./dbConnect";
import User from "@/models/User";
import { authConfig } from "./auth.config";
import { InvalidLoginCredentialsError } from "@/models/Error";

const login = async (credentials: any) => {
	try {
		dbConnect();
		const user = await User.findOne({ email: credentials.email });

		if (!user) throw new InvalidLoginCredentialsError();

		const isPasswordCorrect = await bcrypt.compare(
			credentials.password,
			user.password
		);

		if (!isPasswordCorrect) throw new InvalidLoginCredentialsError();

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