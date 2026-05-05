import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rise at Seven Clone",
  description: "Header, navbar and mobile hamburger recreation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}