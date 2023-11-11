import type { NextRequest } from "next/server"
import { intlMiddleware } from './middlewares/i18nMiddleware';
import authMiddleware from './middlewares/authMiddleware';
import { testPathNameRegex } from './utils/testPathNameRegex';

export const publicPages = [
	"/",
	"/about",
	"/contact",
	"/blog",
	"/blog/:postId",
]

export const authPages = [
	"/login", 
	"/register", 
	"/forgot-password"
]

const middleware = (req: NextRequest) => {
	const isPublicPage = testPathNameRegex(publicPages, req.nextUrl.pathname)
	const isAuthPage = testPathNameRegex(authPages, req.nextUrl.pathname)

	if (isAuthPage) {
		return (authMiddleware as any)(req)
	}

	if (isPublicPage) {
		return intlMiddleware(req)
	} else {
		return (authMiddleware as any)(req)
	}
}

export const config = {
	matcher: ["/((?!api|static|.*\\..*|_next).*)"]
}

export default middleware;