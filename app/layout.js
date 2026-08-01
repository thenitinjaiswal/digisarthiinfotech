// app/layout.js
// Root layout for Digisarthi Info Tech website (Next.js 14 App Router).
// Configures HTML structure, meta tags, Google Fonts, global CSS, and root ClientShell.
// Props: children (React page components)

import "./globals.css";
import { ClientShell } from "@/components/ClientShell";

export const metadata = {
  title: "Digisarthi Info Tech — Websites Built Exclusively for Doctors & Clinics",
  description: "We design websites exclusively for doctors and clinics — homeopathy, dental, general physicians, dermatology, pediatrics and more. Turn patient searches into booked appointments.",
  authors: [{ name: "Digisarthi Info Tech" }],
  openGraph: {
    title: "Digisarthi Info Tech — Websites Built Exclusively for Doctors & Clinics",
    description: "The web design team built specifically for doctors. Mobile-first websites, WhatsApp booking, local SEO — for every speciality.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

/**
 * Root HTML layout component.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=IBM+Plex+Mono:wght@400;500;600&family=Domine:wght@500;600;700&family=Karla:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Digisarthi Info Tech",
              description: "Web design studio building websites exclusively for doctors and clinics.",
              telephone: "+91-8765610216",
              email: "hello@digisarthi.in",
              areaServed: "IN",
            }),
          }}
        />
      </head>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
