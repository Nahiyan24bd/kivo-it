import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kivo IT | Next-Gen Web Engineering & Growth Agency",
  description: "High-speed Next.js web applications, enterprise management portals, and ROI-driven digital growth funnels.",
  keywords: [
    "Next.js Agency",
    "Web Engineering",
    "Enterprise Portals",
    "Tailwind CSS",
    "Performance Marketing",
    "Kivo IT"
  ],
  authors: [{ name: "Kivo IT Engineering Team" }],
  openGraph: {
    title: "Kivo IT | Web Engineering & Revenue Growth",
    description: "Production-grade full-stack architecture paired with high-converting marketing funnels.",
    url: "https://kivoit.com",
    siteName: "Kivo IT",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* গ্লোবাল রেসপন্সিভ র‍্যাপার */}
          <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
            <Navbar />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}