import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { AuthProvider } from "@/context/auth.context";
import NextUIProv from "./NextUiProv";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Safari Royale",
  description: "Tu centro de apuestas 100% seguro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <NextUIProv>{children}</NextUIProv>
        </body>
      </html>
    </AuthProvider>
  );
}
