import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner'
import Providers from "@/providers/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maruf_Mart - Your Trusted Online Shop | আপনার নির্ভরযোগ্য অনলাইন শপ",
  description: "Maruf Mart offers a wide range of quality products at the best prices. Shop now for electronics, fashion, home essentials, and more. | মারুফ মার্টে সেরা দামে মানসম্মত পণ্য কেনাকাটা করুন। এখানে রয়েছে ইলেকট্রনিক্স, ফ্যাশন, হোম এসেনশিয়ালস এবং আরও অনেক কিছু।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster richColors />
          {children}
        </body>
      </html>
    </Providers>
  );
}
