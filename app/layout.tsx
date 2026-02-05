import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Joyonto Kumar Das",
  description: "Frontend Developer & DevOps Intern - Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Joyonto Kumar Das",
    description: "Frontend Developer & DevOps Intern - Portfolio",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joyonto Kumar Das",
    description: "Frontend Developer & DevOps Intern - Portfolio",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="google-site-verification" content="RabEUvn87m487zBMY5dmdUBjUJpUOa_RgHsYWk5-64A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css" />
      </head>
      <body className="dark-theme">
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/toastify-js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
