import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "../context/ThemeContext";

export const metadata: Metadata = {
  title: "Next starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
