import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  //  Check : webhook 401 error handling
  publicRoutes: ["/", "/api/webhook"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
