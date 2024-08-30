import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  //protect the pages except login, from unauthenticated users
  //if user has no session token means user is not logged in so redirect them to login page
  const session = request.cookies.get("next-auth.session-token");
  console.log("reques login", request.nextUrl.pathname);
  if (request.nextUrl.pathname == "/login") {
    if (session && session.value) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  } else {
    if (!session || !session.value) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
