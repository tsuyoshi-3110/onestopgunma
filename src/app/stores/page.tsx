import type { Metadata } from "next";
import StoresClient from "@/components/StoresClient";
import { PhoneSection } from "@/components/PhoneSection";

export const metadata: Metadata = {
  title: "店舗一覧｜ワンストップ（便利屋）",
  description:
    "群馬県渋川市の便利屋『ワンストップ』の店舗一覧ページ。地域ごとのサービス対応エリアや拠点情報をご紹介します。",
  openGraph: {
    title: "店舗一覧｜ワンストップ（便利屋）",
    description:
      "ワンストップ各拠点の情報。対応エリア、店舗紹介、連絡先を掲載しています。",
    url: "https://onestopgunma.shop/stores", // 本番URLに合わせて使用
    siteName: "ワンストップ",
    images: [
      {
        url: "/ogpLogo.jpeg", // ← ファイル名は厳守
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function StoresPage() {
  return (
    <main className="px-4 py-16">
      {/* ページタイトル・説明文 */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-2xl lg:text-3xl font-extrabold mb-4 text-white text-outline">
          ワンストップ ─ 店舗一覧
        </h1>
        <p className="leading-relaxed text-white text-outline">
          <strong>ワンストップ</strong> は
          <strong>群馬県（渋川市を中心）</strong>の便利屋サービスです。
          片付け・軽作業・修繕・家事代行など、暮らしの「困った」に幅広く対応します。
          <br className="hidden lg:block" />
          各拠点のサービス対応エリアや詳細情報をこちらからご確認いただけます。
        </p>
      </section>

      {/* 電話番号や連絡先セクション（サイト設定に紐付いていれば自動表示） */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <PhoneSection />
      </section>

      {/* 店舗カードのクライアントレンダリング（Firestore対応） */}
      <StoresClient />
    </main>
  );
}
