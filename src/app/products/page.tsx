import type { Metadata } from "next";
import ProductsClient from "@/components/ProductsClient";

export const metadata: Metadata = {
  title: "サービス一覧｜ワンストップ（便利屋）",
  description:
    "群馬県渋川市の便利屋『ワンストップ』のサービス一覧ページ。片付け、軽作業、修繕、家事代行など、暮らしを支える各種サービスを写真付きでご紹介します。",
  openGraph: {
    title: "サービス一覧｜ワンストップ（便利屋）",
    description:
      "ワンストップのサービス紹介ページ。片付け・軽作業・修繕・家事代行などを写真付きで掲載し、自由に編集できます。",
    url: "https://onestopgunma.shop/products", // 本番URLに差し替え可能
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

export default function ProductsPage() {
  return <ProductsClient />;
}
