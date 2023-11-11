import { locales } from "@/i18n"

export const testPathNameRegex = (pages: string[], pathName: string): boolean => {
	return RegExp(
		`^(/(${locales.join("|")}))?(${pages.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
		"i"
	).test(pathName)
}