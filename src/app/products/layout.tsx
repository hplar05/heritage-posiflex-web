import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import AlertDialog from "../../../components/Alert";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Products - Hmopi",
  description: " Heritage Multi-Office Products Inc. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AlertDialog />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
