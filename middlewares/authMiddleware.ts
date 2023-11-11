import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

import { authPages } from "@/middleware"
import { intlMiddleware } from "./i18nMiddleware"
import { testPathNameRegex } from "@/utils/testPathNameRegex"

const authMiddleware = auth((req: any) => {
	const isAuthPage = testPathNameRegex(authPages, req.nextUrl.pathname)
	const session = req.auth

	// Redirect to sign-in page if not authenticated
	if (!session && !isAuthPage) {
		return NextResponse.redirect(new URL("/login", req.nextUrl))
	}

	// Redirect to home page if authenticated and trying to access auth pages
	if (session && isAuthPage) {
		return NextResponse.redirect(new URL("/", req.nextUrl))
	}

	return intlMiddleware(req)
})

export default authMiddleware