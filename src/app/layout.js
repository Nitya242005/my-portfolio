import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/LenisScroll";
import CustomCursor from "@/components/Cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nitya | Portfolio",
  description: "High-end, immersive, animated portfolio of a Senior Frontend Engineer & UI/UX Specialist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="bg-background text-text-primary selection:bg-accent/30 selection:text-white">
        <SmoothScrolling>
          <CustomCursor />
          <div className="relative z-10">{children}</div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
