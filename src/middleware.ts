import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["es", "it"],

  // Used when no locale matches
  defaultLocale: "es",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(es|it)/:path*"],
};
