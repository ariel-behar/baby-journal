import NextAuth from "next-auth"

import { intlMiddleware } from "./i18nMiddleware"
import { authConfig } from "@/lib/auth.config"

const authMiddleware =  NextAuth(authConfig).auth((req: any) => {
	
	authConfig.callbacks.authorized({ auth: req.auth, request: req })

	return intlMiddleware(req)
})

export default authMiddleware