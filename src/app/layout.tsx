// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Script from "next/script";
import ThemeBackground from "@/components/ThemeBackground";
import WallpaperBackground from "@/components/WallpaperBackground";
import SubscriptionOverlay from "@/components/SubscriptionOverlay";
import { SITE_KEY } from "@/lib/atoms/siteKeyAtom";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "ワンストップ｜便利屋サービス",
  description:
    "ワンストップは群馬県渋川市を拠点に、暮らしをサポートする便利屋サービスを提供。日常のちょっとしたお困りごとから大掛かりな作業まで、丁寧に対応します。",
  keywords: [
    "ワンストップ",
    "便利屋",
    "群馬",
    "渋川市",
    "日常サポート",
    "片付け",
    "修繕",
    "家事代行",
  ],
  authors: [{ name: "ワンストップ（オーナー：永島大樹）" }],
  metadataBase: new URL("https://onestopgunma.shop"), // ←そのまま使うか、新ドメインが決まれば変更
  alternates: {
    canonical: "https://onestopgunma.shop/",
  },
  openGraph: {
    title: "ワンストップ｜便利屋サービス",
    description:
      "群馬県渋川市で便利屋サービスを提供。日常のちょっとした作業からお困りごとまで幅広く対応します。",
    url: "https://onestopgunma.shop/",
    siteName: "ワンストップ",
    type: "website",
    images: [
      {
        url: "https://onestopgunma.shop/ogpLogo.jpeg", // ← ファイル名厳守
        width: 1200,
        height: 630,
        alt: "ワンストップ OGP",
      },
    ],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ワンストップ｜便利屋サービス",
    description: "群馬県渋川市で暮らしのお困りごとに対応する便利屋サービス。",
    images: ["https://onestopgunma.shop/ogpLogo.jpeg"], // ← ファイル名厳守
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=4" }, // ← ファイル名厳守
      { url: "/icon.png", type: "image/png", sizes: "any" }, // ← ファイル名厳守
    ],
    apple: "/icon.png", // ← ファイル名厳守（Apple Touch）
    shortcut: "/favicon.ico?v=4",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        {/* OGP画像の事前読み込み（ファイル名そのまま） */}
        <link rel="preload" as="image" href="/ogpLogo.jpeg" type="image/jpeg" />
        <meta name="google-site-verification" content="-MJUKuKrdXOupHJiGKh6n6CSd2wEY9zLoIB24dRze2U" />
      </head>

      <body className="relative min-h-screen bg-[#ffffff]">
        <SubscriptionOverlay siteKey={SITE_KEY} />
        <WallpaperBackground />
        <ThemeBackground />
        <Header />
        {children}

        {/* 構造化データ（ファイル名そのまま使用） */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ワンストップ",
            url: "https://onestopgunma.shop/",
            image: "https://onestopgunma.shop/ogpLogo.jpeg", // ← ファイル名厳守
            description:
              "群馬県渋川市で便利屋サービスを提供。暮らしのお困りごとをサポートします。",
            email: "onestopgunma@gmail.com",
            telephone: "+812795188553",
            address: {
              "@type": "PostalAddress",
              addressRegion: "群馬県",
              addressLocality: "渋川市行幸田",
              streetAddress: "3216-12",
              postalCode: "377-0006",
            },
            founder: {
              "@type": "Person",
              name: "永島大樹",
            },
            serviceType: ["便利屋サービス"],
          })}
        </Script>
      </body>
    </html>
  );
}
