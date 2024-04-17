import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let defaultLocale = "en";
let locales = ["bn", "en"];

function getLocal(request) {
  const acceptedLanguages = request.headers.get("accept-language") ?? undefined;

  const headers = { "accept-language": acceptedLanguages };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const pathName = request.nextUrl.pathname;

  const pathNameIsMissingLocale = locales.every(
    (locale) =>
      !pathName.startsWith(`/${locale}`) && !pathName.startsWith(`/${locale}`)
  );

  if (pathNameIsMissingLocale) {
    const locale = getLocal(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathName}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
