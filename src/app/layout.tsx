import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { BookingProvider } from "@/context/BookingContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

// আধুনিক প্রিমিয়াম এজেন্সি ফন্ট কনফিগারেশন
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"]
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "600"]
});

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
    <html lang="bn" suppressHydrationWarning className={`${jakarta.variable} ${mono.variable}`}>
      <body className="font-sans min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 transition-colors duration-200 antialiased selection:bg-sky-500 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <BookingProvider>
            {/* সমন্বিত ফিক্সড হেডার (টপ ব্যানার + গ্লাস ন্যাভবার) */}
            <Header />

            {/* গ্লোবাল রেসপন্সিভ র‍্যাপার */}
            <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden pt-36">
              <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
              </main>
              <Footer />
            </div>

            {/* ফ্লোটিং হোয়াটসঅ্যাপ বাটন */}
            <WhatsAppFloat />
          </BookingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}