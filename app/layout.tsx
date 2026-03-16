import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yaniv Tenzer",
  description: "Academic website of Yaniv Tenzer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} min-h-screen`}>
        <div className="min-h-screen max-w-4xl mx-auto px-4 py-10 flex flex-col gap-0">
          <div className="bg-white rounded-t-sm shadow-xl flex flex-col flex-1">
            <Nav />
            <main className="flex-1 px-10 py-10">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
