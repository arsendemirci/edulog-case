import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  //protect the pages except login, from unauthenticated users
  //if user has no session cookie means user is not logged in so redirect them to login page
  const cookies: RequestCookie[] = request.cookies.getAll();

  const sessionCookie = cookies.find((c) =>
    c.name.includes("next-auth.session-token")
  );

  if (request.nextUrl.pathname == "/login") {
    if (sessionCookie && sessionCookie.value) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  } else {
    if (!sessionCookie || !sessionCookie.value) {
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
