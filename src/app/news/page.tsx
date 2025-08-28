// src/app/(routes)/news/page.tsx
import type { Metadata } from "next";
import NewsClient from "@/components/NewsClient";

export const metadata: Metadata = {
  title: "お知らせ｜ワンストップ（便利屋）",
  description:
    "群馬県渋川市の便利屋『ワンストップ』の最新情報・キャンペーン・営業時間や対応エリアに関するお知らせを掲載しています。",
  openGraph: {
    title: "お知らせ｜ワンストップ（便利屋）",
    description:
      "ワンストップからのお知らせやキャンペーン情報、営業時間・サービス対応エリアの変更などを随時ご案内します。",
    url: "https://onestopgunma.shop/news",
    siteName: "ワンストップ",
    images: [{ url: "/ogpLogo.jpeg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://onestopgunma.shop/news" },
};

export default function NewsPage() {
  return (
    <main className="px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mt-6 mb-6 text-center text-white/80 text-outline">
        お知らせ
      </h1>
      <NewsClient />
    </main>
  );
}
