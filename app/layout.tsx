import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Amar - Full Stack Developer | Modern Portfolio",
  description:
    "Modern portfolio showcasing full-stack development expertise with cutting-edge technologies. Specializing in React, Next.js, TypeScript, and modern web development.",
  generator: "v0.app",
  keywords: [
    "developer",
    "portfolio",
    "full-stack",
    "react",
    "nextjs",
    "typescript",
    "web development",
    "frontend",
    "backend",
    "javascript",
    "node.js",
  ],
  authors: [{ name: "Amar", url: "https://github.com/ITSAMARHERE" }],
  creator: "Amar",
  openGraph: {
    title: "Amar - Full Stack Developer",
    description: "Modern portfolio showcasing full-stack development expertise with cutting-edge technologies",
    type: "website",
    locale: "en_US",
    siteName: "Amar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amar - Full Stack Developer",
    description: "Modern portfolio showcasing full-stack development expertise",
    creator: "@amar_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f0f23" />
        <meta name="color-scheme" content="dark light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body 
        className={`
          font-sans ${GeistSans.variable} ${GeistMono.variable} 
          antialiased selection:bg-primary/20 selection:text-primary
          transition-colors duration-300 ease-in-out
          overflow-x-hidden
        `}
      >
        <Suspense fallback={
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="flex space-x-2">
              <div className="h-3 w-3 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]"></div>
              <div className="h-3 w-3 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]"></div>
              <div className="h-3 w-3 animate-bounce rounded-full bg-primary"></div>
            </div>
          </div>
        }>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="dark" 
            enableSystem 
            disableTransitionOnChange={false}
            themes={["light", "dark", "system"]}
          >
            <div className="relative">
              {/* Ambient background effects replaced with a more subtle grid/radial gradient approach */}
              <div className="fixed inset-0 -z-10 overflow-hidden background-effect"></div>
              <div className="fixed inset-0 -z-20 grid-background"></div>
              
              {/* Subtle grain texture overlay - kept this as it's a great effect */}
              <div className="fixed inset-0 -z-5 opacity-[0.015] pointer-events-none">
                <div 
                  className="h-full w-full opacity-25"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                  }}
                ></div>
              </div>

              {children}
            </div>
          </ThemeProvider>
        </Suspense>
        
        <Analytics />
      </body>
    </html>
  )
}