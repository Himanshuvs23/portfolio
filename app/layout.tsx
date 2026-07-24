import type { Metadata } from "next";
import Script from "next/script";
import "../styles/main.css";

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export const metadata: Metadata = {
  title: "Himanshu Vilas Shivde",
  description:
    "Portfolio of Himanshu Vilas Shivde...",
  icons: {
    icon: "/hs-favicon.png",
  },
  alternates: {
    canonical: "https://himanshushivde.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-theme="dark">
        {children}

        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />

            <Script id="ga" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}