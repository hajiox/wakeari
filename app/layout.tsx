import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "【訳あり1kg】ラーメン屋が作る本物のチャーシュー｜送料無料・即日発送｜会津ブランド館",
  description:
    "楽天・Yahoo焼豚部門1位獲得！ラーメン屋が作る本物のチャーシュー訳あり1kg（200g×5個）。個包装＋特製タレ付きで送料無料・即日発送。累計10万食突破の人気商品を会津ブランド館からお届けします。",
  keywords: [
    "チャーシュー",
    "訳あり",
    "ラーメン",
    "送料無料",
    "即日発送",
    "会津ブランド館",
    "焼豚",
    "個包装",
    "冷凍",
    "特製タレ",
    "楽天1位",
    "Yahoo1位",
  ],
  authors: [{ name: "会津ブランド館" }],
  creator: "会津ブランド館",
  publisher: "会津ブランド館",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://wakeari.aizu-syokubura.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "【訳あり1kg】ラーメン屋が作る本物のチャーシュー｜送料無料",
    description: "楽天・Yahoo焼豚部門1位！累計10万食突破。個包装＋特製タレ付き。即日発送でお届けします。",
    url: "https://wakeari.aizu-syokubura.com",
    siteName: "会津ブランド館 チャーシュー専門店",
    images: [
      {
        url: "/images/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "ラーメン屋が作る本物のチャーシュー",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "【訳あり1kg】ラーメン屋が作る本物のチャーシュー｜送料無料",
    description: "楽天・Yahoo焼豚部門1位！累計10万食突破。個包装＋特製タレ付き。即日発送でお届けします。",
    images: ["/images/ogp.jpg"],
    creator: "@aizubrandhall",
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
    google: "google-site-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans antialiased`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QF0C5C17LW" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QF0C5C17LW');
          `}
        </Script>

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
