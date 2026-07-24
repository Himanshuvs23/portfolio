import type { Metadata } from "next";
import Script from "next/script";
import "../styles/main.css";

export const metadata: Metadata = {
  title: "Himanshu Vilas Shivde",
  description:
    "Portfolio of Himanshu Vilas Shivde, a Full Stack Developer building scalable web applications with React, Next.js, Node.js, Express, MongoDB, PostgreSQL, CI/CD, and AI-powered tools.",
  authors: [{ name: "Himanshu Vilas Shivde", url: "https://github.com/Himanshuvs23" }],
  creator: "Himanshu Vilas Shivde",
  publisher: "Himanshu Vilas Shivde",
  keywords: [
    "Himanshu Vilas Shivde",
    "Himanshu Shivde",
    "Himanshu Shivde portfolio",
    "software developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "full-stack developer",
    "frontend engineer",
    "JavaScript developer",
    "Node.js developer",
    "MongoDB developer",
    "Java developer",
    "TypeScript developer",
    "AI application developer",
    "Amravati software developer",
    "Himanshuvs23",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/hs-favicon.png" },
  alternates: {
    canonical: "https://github.com/Himanshuvs23",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`}
      </Script>
    </html>
  );
}
