import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import dbConnect from "./dbConnect";
import User from "@/models/User";

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
	providers: [GitHub({
		clientId: process.env.GITHUB_ID as string,
		clientSecret: process.env.GITHUB_SECRET as string,
	})],
	callbacks: {
		async signIn({ user, account, profile }): Promise<any> {

			if (account?.provider === 'github') {
				dbConnect()

				try {
					const user = await User.findOne({ email: profile?.email })

					if (!user) {
						const newUser = await new User({
							username: profile?.login,
							email: profile?.email,
							avatarImg: profile?.['avatar_url']
						})

						await newUser.save();
					} 
				} catch (error) {
					console.log(error);
					return false;
				}
			}
		}
	}
})
