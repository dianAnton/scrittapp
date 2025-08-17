// src/middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(async (auth, req) => {
  // Esperar a que se resuelva la autenticación
  const { userId } = await auth();
  
  // Si el usuario está autenticado y está en la página de inicio, redirigir al dashboard
  if (userId && req.nextUrl.pathname === "/") {
    const url = new URL("/dashboard", req.url);
    return Response.redirect(url);
  }
  
  // Si el usuario no está autenticado y está intentando acceder al dashboard, redirigir a la página de inicio de sesión
  if (!userId && req.nextUrl.pathname.startsWith("/dashboard")) {
    const signInUrl = new URL("/sign-in", req.url);
    return Response.redirect(signInUrl);
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};