import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NeoPersianBackground from "../components/NeoPersianBackground";

const estedad = localFont({
  src: [
    {
      path: "./fonts/Estedad-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Estedad-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Estedad-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Estedad-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-estedad",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maya Academy | آکادمی مایا",
  description: "مرجع پریمیوم اکانت‌ها و ابزارهای هوش مصنوعی",
  openGraph: {
    title: "Maya Academy | آکادمی مایا",
    description: "مرجع پریمیوم اکانت‌ها و ابزارهای هوش مصنوعی",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maya Academy | آکادمی مایا",
    description: "مرجع پریمیوم اکانت‌ها و ابزارهای هوش مصنوعی",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${estedad.variable} font-sans`}>
        <NeoPersianBackground />
        {children}
      </body>
    </html>
  );
}
