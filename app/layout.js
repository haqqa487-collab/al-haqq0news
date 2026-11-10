import { Playfair_Display, Newsreader, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/format";

const mast = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"], variable: "--font-mast", display: "swap" });
const head = Newsreader({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-head", display: "swap" });
const body = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-body", display: "swap" });

export const dynamic = "force-dynamic";

export const metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: "AL-HAQQ — The Truth. Beyond the Headlines.", template: "%s — AL-HAQQ" },
  description:
    "AL-HAQQ is an independent publication of investigative journalism and analysis on East Africa, African conflicts and international affairs, edited by Abdi Fatah.",
  openGraph: { siteName: "AL-HAQQ", type: "website", locale: "en_GB" },
  twitter: { card: "summary_large_image" },
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
};

export const viewport = { themeColor: "#0B1F3A" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mast.variable} ${head.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
