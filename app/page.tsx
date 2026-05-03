"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Star, Truck, Package, Flame, ChevronDown } from "lucide-react"
import Script from "next/script"
import { track, trackMallClick, trackViewContent } from "@/lib/metaPixel"
import { useEffect, useState } from "react"

export default function ChashuLandingPage() {
  const [showFloatingButton, setShowFloatingButton] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  useEffect(() => {
    trackViewContent()

    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    trackMallClick()

    const href = (e.currentTarget as HTMLAnchorElement).href
    setTimeout(() => {
      window.location.href = href
    }, 350)
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const PurchaseButton = ({ platform, href }: { platform: string; href: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block" onClick={handleMallClick}>
      <button className="w-full bg-gradient-to-b from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white font-bold py-4 px-6 rounded transition-all shadow-lg hover:shadow-xl text-lg">
        {platform}で購入する
      </button>
    </a>
  )

  const faqs = [
    {
      question: "何が訳ありなのですか？",
      answer: "形が不揃いな部分や、端の部分を含むため訳ありとして販売しています。味や品質には問題ありません。むしろ端の部分はタレがよく絡み、ご飯やラーメンとの相性も抜群です。",
    },
    {
      question: "どんな豚肉を使っていますか？",
      answer: "カナダ産チルド豚バラを使用しています。しっとり柔らかく、臭みが少ない肉質が特徴です。",
    },
    {
      question: "どのくらい入っていますか？",
      answer: "合計800g（200g×4パック）の小分けセットです。ラーメンやチャーシュー丼で1パックが約2杯分となります。",
    },
    {
      question: "保存方法は？",
      answer: "冷凍保存してください。食べる分だけ解凍して使えます。",
    },
  ]

  const reviews = [
    {
      title: "美味しさ凝縮の訳あり！マジ旨いです。",
      text: "リピーターです。端っこの切り落としがむしろ一番美味しい。小分け冷凍で使いやすく、タレも絶品。",
      rating: 5,
    },
    {
      title: "スーパーのチャーシューとは別物！",
      text: "市販品のハムのようなチャーシューに不満で購入。付属のタレが格別で、白米にもよく合う。",
      rating: 5,
    },
    {
      title: "味も最高！コスパも最高！",
      text: "訳ありでも十分立派。小分け1袋の量が多く、チャーシュー丼もラーメンも満足。タレの甘辛バランスが最高。",
      rating: 5,
    },
  ]

  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: "#F5F1E8" }}>
        {/* Header */}
        <header className="sticky top-0 bg-white shadow-md z-40">
          <div className="container mx-auto px-4 max-w-7xl py-3 flex items-center justify-between">
            <div className="font-bold text-xl" style={{ color: "#8B2E1F" }}>
              訳ありチャーシュー
            </div>
            {showFloatingButton && (
              <button
                onClick={() => scrollToSection("purchase-section")}
                className="block md:hidden text-white font-bold py-2 px-4 rounded text-sm transition-all"
                style={{ backgroundColor: "#8B2E1F" }}
              >
                購入する
              </button>
            )}
          </div>
        </header>

        {/* ============ FIRST VIEW ============ */}
        <section className="py-8 md:py-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left: Copy */}
              <div className="order-2 md:order-1 flex flex-col justify-center">
                {/* Quality Badge */}
                <div className="mb-6">
                  <span
                    className="inline-block px-4 py-2 rounded text-sm font-semibold text-white mb-6"
                    style={{ backgroundColor: "#B8860B" }}
                  >
                    カナダ産チルド豚バラ使用
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4" style={{ color: "#3C2415" }}>
                  訳あり<br />チャーシュー<br />800g
                </h1>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl mb-6 leading-relaxed" style={{ color: "#5C3D30" }}>
                  しっとり柔らかく、<br />臭みの少ない<br />本格チャーシュー
                </p>

                {/* Specs Box */}
                <div
                  className="p-6 rounded-lg mb-8 space-y-2"
                  style={{ backgroundColor: "#F5F1E8" }}
                >
                  <p className="font-bold text-lg" style={{ color: "#3C2415" }}>
                    200g×4パック
                  </p>
                  <p className="font-semibold" style={{ color: "#5C3D30" }}>
                    特製タレ付き
                  </p>
                  <p className="font-semibold" style={{ color: "#5C3D30" }}>
                    送料無料
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <p className="text-gray-600 text-sm mb-2">価格</p>
                  <p className="text-5xl font-black" style={{ color: "#8B2E1F" }}>
                    4,290円
                  </p>
                  <p className="text-xs text-gray-600 mt-1">（税・送料込み）</p>
                </div>

                {/* Purchase Buttons */}
                <div className="space-y-3">
                  <PurchaseButton platform="楽天" href="https://item.rakuten.co.jp/aizubrandhall/10000013/" />
                  <PurchaseButton platform="Yahoo!" href="https://store.shopping.yahoo.co.jp/aizubrandhall/b08rxs3zdl.html" />
                  <PurchaseButton platform="Amazon" href="https://www.amazon.co.jp/dp/B08RXS3ZDL" />
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="order-1 md:order-2">
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%93%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB%EF%BC%88%E6%96%87%E5%AD%97%E3%81%AA%E3%81%97%EF%BC%89_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201-TFA0OLz6aZFzbJNi850HUJ2iRGTqeq.jpg"
                    alt="訳ありチャーシュー"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CANADA PORK SECTION ============ */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "#E8DCC8" }}>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%97%A8%E3%81%BF%E3%83%BB%E9%A3%9F%E6%84%9F%E3%83%BB%E3%83%90%E3%83%A9%E3%83%B3%E3%82%B9%E3%80%81%E3%81%9D%E3%81%AE%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AB%E7%90%86%E7%94%B1%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82-X0tHD1aNcWgX3VR2fKI7wfas8agztu.jpg"
                  alt="カナダ産チルド豚バラ"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: "#3C2415" }}>
                  カナダ産<br />チルド豚バラに<br />変わりました
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-white rounded">
                    <p className="font-bold text-lg mb-2" style={{ color: "#8B2E1F" }}>
                      しっとり、柔らかい
                    </p>
                    <p style={{ color: "#5C3D30" }}>
                      豚肉特有の臭みが少なく、食べやすい食感が特徴です。
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded">
                    <p className="font-bold text-lg mb-2" style={{ color: "#8B2E1F" }}>
                      脂の甘み＆赤身の旨み
                    </p>
                    <p style={{ color: "#5C3D30" }}>
                      豚肉本来の味わいをしっかり感じられます。
                    </p>
                  </div>
                </div>

                <p style={{ color: "#3C2415" }} className="text-lg">
                  訳あり品ではありますが、味づくりは本気です。ラーメン屋として自信を持っておすすめできる仕上がりです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHY WAKEARI ============ */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "#F5F1E8" }}>
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-12" style={{ color: "#3C2415" }}>
              形は不揃い。<br />でも味は本気。
            </h2>

            <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#5C3D30" }}>
                訳ありは、形が不揃いな部分や、端の部分を含むため。味や品質には問題ありません。
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#5C3D30" }}>
                むしろ端の部分はタレがよく絡み、ご飯やラーメンとの相性も抜群です。
              </p>
            </div>
          </div>
        </section>

        {/* ============ PACKAGING ============ */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12" style={{ color: "#3C2415" }}>
              使いたい分だけ。<br />いつでも本格的。
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6c1c363e-32eb-4e1f-a2eb-ad4f499b7732-Jug7n3DHuC5gGzYkz3eJkG5aJu55gB.jpg"
                  alt="200g×4パック"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div className="p-6 bg-yellow-50 rounded-lg border-l-4" style={{ borderColor: "#B8860B" }}>
                  <p className="font-bold text-xl mb-2" style={{ color: "#3C2415" }}>
                    200g×4パック
                  </p>
                  <p style={{ color: "#5C3D30" }}>
                    食べたい分だけ解凍できる小分け真空パック。無駄がありません。
                  </p>
                </div>

                <div className="p-6 bg-yellow-50 rounded-lg border-l-4" style={{ borderColor: "#B8860B" }}>
                  <p className="font-bold text-xl mb-2" style={{ color: "#3C2415" }}>
                    特製タレ付き
                  </p>
                  <p style={{ color: "#5C3D30" }}>
                    そのままラーメンやチャーシュー丼に。味付けは完璧です。
                  </p>
                </div>

                <div className="p-6 bg-yellow-50 rounded-lg border-l-4" style={{ borderColor: "#B8860B" }}>
                  <p className="font-bold text-xl mb-2" style={{ color: "#3C2415" }}>
                    冷凍庫に常備
                  </p>
                  <p style={{ color: "#5C3D30" }}>
                    いつでも本格チャーシューが食べたくなったら、すぐに解凍。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ USE SCENES ============ */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "#E8DCC8" }}>
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12" style={{ color: "#3C2415" }}>
              こんな食べ方ができます
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Ramen */}
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%97%A8%E3%81%BF%E3%83%BB%E9%A3%9F%E6%84%9F%E3%83%BB%E3%83%90%E3%83%A9%E3%83%B3%E3%82%B9%E3%80%81%E3%81%9D%E3%81%AE%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AB%E7%90%86%E7%94%B1%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82-X0tHD1aNcWgX3VR2fKI7wfas8agztu.jpg"
                    alt="ラーメン"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="font-bold text-lg" style={{ color: "#3C2415" }}>
                    ラーメンに乗せて
                  </p>
                </div>
              </div>

              {/* Don */}
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E4%B8%BC-01aNPGPjVAP0D526w2WvKhDuwpIZe8.jpg"
                    alt="チャーシュー丼"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="font-bold text-lg" style={{ color: "#3C2415" }}>
                    チャーシュー丼に
                  </p>
                </div>
              </div>

              {/* Tsumami */}
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E3%81%A4%E3%81%BE%E3%81%BF%E3%81%AB%E3%82%82-kG2SMBKH3lnbYaJhWbHaCiQkl1uE0c.jpg"
                    alt="おつまみ"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="font-bold text-lg" style={{ color: "#3C2415" }}>
                    おつまみに
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ REVIEWS ============ */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "#F5F1E8" }}>
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12" style={{ color: "#3C2415" }}>
              選ばれている理由
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                "スーパーのチャーシューとは違う本格感",
                "小分けで使いやすい",
                "タレが美味しい",
              ].map((reason, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="font-bold" style={{ color: "#3C2415" }}>
                    {reason}
                  </p>
                </div>
              ))}
            </div>

            {/* Individual Reviews */}
            <div className="space-y-4">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg" style={{ color: "#3C2415" }}>
                      {review.title}
                    </h3>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p style={{ color: "#5C3D30" }}>{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PURCHASE CTA ============ */}
        <section id="purchase-section" className="py-16 md:py-20" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8" style={{ color: "#3C2415" }}>
              今すぐ購入
            </h2>

            <div className="space-y-3">
              <PurchaseButton platform="楽天" href="https://item.rakuten.co.jp/aizubrandhall/10000013/" />
              <PurchaseButton platform="Yahoo!" href="https://store.shopping.yahoo.co.jp/aizubrandhall/b08rxs3zdl.html" />
              <PurchaseButton platform="Amazon" href="https://www.amazon.co.jp/dp/B08RXS3ZDL" />
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "#E8DCC8" }}>
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12" style={{ color: "#3C2415" }}>
              よくあるご質問
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-6 flex items-center justify-between text-left font-bold transition-all"
                    style={{ color: "#3C2415" }}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}
                      style={{ color: "#8B2E1F" }}
                    />
                  </button>

                  {expandedFaq === idx && (
                    <div className="px-6 pb-6 pt-0" style={{ color: "#5C3D30" }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <footer className="bg-gray-900 text-white py-12" style={{ backgroundColor: "#3C2415" }}>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">会津ブランド館</h3>
                <div className="space-y-2 text-gray-300">
                  <p>〒965-0044</p>
                  <p>福島県会津若松市七日町6-15</p>
                  <p>TEL: 0242-25-1441</p>
                  <p>営業時間: 11時〜16時</p>
                  <p className="text-sm text-gray-400">定休日: 12月31日・1月1日</p>
                </div>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BC%9A%E6%B4%A5%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8%E5%A4%96%E8%A6%B3-bnjMP40CUTli5X50PCHHlgzGiqMQM3.jpg"
                  alt="会津ブランド館の外観"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-8">
              <p>© 2025 AIZU BRAND HALL. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
