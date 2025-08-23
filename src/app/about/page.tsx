import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "私たちの想い｜ワンストップ（便利屋）",
  description:
    "群馬県渋川市の便利屋『ワンストップ』の想いをご紹介します。地域に寄り添い、安心で快適な暮らしを支えるための理念と姿勢をお伝えします。",
  openGraph: {
    title: "私たちの想い｜ワンストップ（便利屋）",
    description:
      "群馬県渋川市を拠点に、片付け・修繕・家事代行など幅広い便利屋サービスを提供。お客様の安心と笑顔を第一に考えています。",
    url: "https://onestopgunma.shop/about", // 本番URLに差し替え可
    siteName: "ワンストップ",
    images: [
      {
        url: "/ogpLogo.jpeg", // ← ファイル名厳守
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mt-6 mb-6 text-center text-white/80">
        私たちの想い
      </h1>
      <AboutClient />
    </main>
  );
}
