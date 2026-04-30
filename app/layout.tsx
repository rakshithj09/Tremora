import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import DevHtmlObserver from "../components/DevHtmlObserver";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase,
  title: "Tremora | Real-Time Neurostabilization",
  description:
    "Tremora is a wearable neurostabilization system designed to detect Parkinsonian tremor in real time and counteract it with active haptic stabilization.",
  icons: {
    icon: "/tremora-favicon.png",
    shortcut: "/tremora-favicon.png",
    apple: "/tremora-favicon.png",
  },
  openGraph: {
    title: "Tremora | Real-Time Neurostabilization",
    description:
      "Tremora is a wearable neurostabilization system designed to detect Parkinsonian tremor in real time and counteract it with active haptic stabilization.",
    images: [
      {
        url: "/tremora-logo-transparent.png",
        width: 1983,
        height: 556,
        alt: "Tremora logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tremora | Real-Time Neurostabilization",
    description:
      "Tremora is a wearable neurostabilization system designed to detect Parkinsonian tremor in real time and counteract it with active haptic stabilization.",
    images: ["/tremora-logo-transparent.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // Ensure the server renders the same inline opacity attribute the
      // client may inject at runtime to avoid hydration mismatch warnings.
      style={{ opacity: 'initial' }}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col bg-[var(--surface-base)] text-[var(--text-primary)]"
        // Suppress hydration warnings for the app subtree (body)
        suppressHydrationWarning
      >
        {/* Dev helper: observe mutations to <html> attributes to find hydration mismatches */}
        <DevHtmlObserver />
        <Header />
        <div className="flex-1 bg-[var(--surface-base)]">
          {children}
        </div>
      </body>
    </html>
  );
}
