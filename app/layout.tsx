import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { CrispChat } from "@/components/crisp-chat";
import { ModalProvider } from "@/components/dashboard/modal-provider";

const exo2 = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jarvis",
  description: "AI assistant Jarvis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispChat />
        <body className={exo2.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
