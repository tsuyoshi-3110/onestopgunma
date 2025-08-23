// src/app/(routes)/home/page.tsx

import type { Metadata } from "next";
import BackgroundVideo from "@/components/backgroundVideo/BackgroundVideo";
import TopFixedText from "@/components/TopFixedText";

export const metadata: Metadata = {
  title: "ワンストップ｜便利屋サービス（群馬・渋川市）",
  description:
    "ワンストップは群馬県渋川市を拠点とする便利屋サービス。日常のちょっとしたお困りごとから片付け・修繕・家事代行まで、丁寧に対応します。",
  openGraph: {
    title: "ワンストップ｜便利屋サービス（群馬・渋川市）",
    description:
      "暮らしの「困った」をまるごとサポート。群馬県渋川市の便利屋ワンストップが、片付け・修繕・家事代行など幅広く対応します。",
    url: "https://onestopgunma.shop/",
    siteName: "ワンストップ",
    images: [
      {
        url: "/ogpLogo.jpeg", // ← ファイル名厳守（相対パスでもOK）
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://onestopgunma.shop/" },
};

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* ① ファーストビュー：背景動画または画像 */}
      <section className="relative h-screen overflow-hidden">
        <BackgroundVideo />
      </section>

      {/* ② テキスト紹介セクション */}
      <section className="relative z-10 text-white px-4 py-20">
        {/* 編集可能な固定テキストコンポーネント */}
        <TopFixedText />

        {/* ページタイトルとリード文 */}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center leading-tight mb-6 text-outline">
          ワンストップ
        </h1>

        <p className="max-w-3xl mx-auto text-center leading-relaxed text-outline">
          群馬県渋川市を拠点に、暮らしのお困りごとをまるっと解決する
          <strong>便利屋サービス</strong>です。片付け・軽作業・修繕・家事代行など、
          内容とご予算に合わせて臨機応変に対応します。まずはお気軽にご相談ください。
        </p>
      </section>

      {/* ③ JSON-LD（構造化データ） */}
      <script
        type="application/ld+json"
        // ファイル名は変更せず /ogpLogo.jpeg を明示
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ワンストップ",
              url: "https://onestopgunma.shop/",
              image: "https://onestopgunma.shop/ogpLogo.jpeg", // ← ファイル名厳守
              description:
                "群馬県渋川市の便利屋サービス。片付け・修繕・家事代行など暮らしのサポート全般に対応。",
              email: "onestopgunma@gmail.com",
              telephone: "+812795188553",
              address: {
                "@type": "PostalAddress",
                addressRegion: "群馬県",
                addressLocality: "渋川市行幸田",
                streetAddress: "3216-12",
                postalCode: "377-000",
              },
              founder: { "@type": "Person", name: "永島大樹" },
              serviceType: ["便利屋", "家事代行", "軽作業", "片付け", "修繕"],
              areaServed: [{ "@type": "AdministrativeArea", name: "群馬県" }],
              sameAs: [], // SNS等があれば配列にURLを追加
            },
          ]),
        }}
      />
    </main>
  );
}
