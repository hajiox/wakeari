"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Truck, Package, Flame } from "lucide-react"
import Script from "next/script"
import { track, trackMallClick, trackViewContent } from "@/lib/metaPixel"
import { useEffect, useState } from "react"

export default function ChashuLandingPage() {
  const [showFloatingButton, setShowFloatingButton] = useState(false)

  // Track ViewContent on page load
  useEffect(() => {
    trackViewContent()

    // Show floating button when user scrolls down
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    trackMallClick()

    // Wait 300-500ms before navigating
    const href = (e.currentTarget as HTMLAnchorElement).href
    setTimeout(() => {
      window.location.href = href
    }, 350)
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const PurchaseButton = ({ platform, href }: { platform: string; href: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      onClick={handleMallClick}
    >
      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 md:py-4 px-6 rounded-lg transition-colors">
        {platform}で購入する
      </button>
    </a>
  )

  const reviews = [
    {
      title: "美味しさ凝縮の訳あり！マジ旨いです。",
      comment:
        "リピーターです。端っこの切り落としがむしろ一番美味しい。小分け冷凍で使いやすく、タレも絶品。夏に煮込みを避けたい時にありがたい存在。",
      rating: 5,
    },
    {
      title: "スーパーのチャーシューとは別物！",
      comment:
        "市販品のハムのようなチャーシューに不満で購入。付属のタレが格別で、白米にもよく合う。ぜひ定番化してほしいほど美味しいです。",
      rating: 4,
    },
    {
      title: "味も最高！コスパも最高！",
      comment:
        "訳ありでも十分立派。小分け1袋の量が多く、チャーシュー丼もラーメンも満足。タレの甘辛バランスが最高でリピ確定！",
      rating: 5,
    },
    {
      title: "本格派の味に感動！",
      comment:
        "届いたチャーシューはまさにお店の味。冷蔵解凍→ぬるま湯で温めると柔らかく美味しく仕上がります。便利で味も本格的。",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "何が訳ありなのですか？",
      answer:
        "形が不揃いな部分や、端の部分を含むため訳ありとして販売しています。味や品質には問題ありません。むしろ端の部分はタレがよく絡み、ご飯やラーメンとの相性も抜群です。まれに脂が多い部分が入る場合がありますが、チャーシューならではの旨みとしてお楽しみください。",
    },
    {
      question: "どんな豚肉を使っていますか？",
      answer:
        "カナダ産チルド豚バラを使用しています。しっとり柔らかく、臭みが少ない肉質が特徴です。",
    },
    {
      question: "どのくらい入っていますか？",
      answer:
        "合計800g（200g×4パック）の小分けセットです。ラーメンやチャーシュー丼で1パックが約2杯分となります。必要な分だけ解凍でき、無駄がありません。",
    },
    {
      question: "タレは付いていますか？",
      answer:
        "特製タレをお付けしています。チャーシュー丼やラーメンにも使いやすい味付けです。",
    },
    {
      question: "保存方法は？",
      answer:
        "冷凍保存してください。食べる分だけ解凍して使えます。",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="sticky top-0 bg-white shadow-sm z-40">
          <div className="container mx-auto px-4 py-4 max-w-6xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%98%E3%83%83%E3%82%BF%E3%83%BC%E7%94%A8%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8%E3%83%AD%E3%82%B4-KLmTKW2YzhAd2oRVPAj6YXTUCVrOm3.jpg"
                alt="会津ブランド館"
                width={60}
                height={60}
                className="rounded"
              />
            </div>
            {/* Floating purchase button for mobile */}
            {showFloatingButton && (
              <button
                onClick={() => scrollToSection("purchase-buttons")}
                className="md:hidden bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-sm"
              >
                購入先を選ぶ
              </button>
            )}
          </div>
        </header>

        {/* First View - Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="order-2 md:order-1">
                <div className="mb-4">
                  <Badge className="bg-red-600 text-white text-base py-1 px-3 mb-4">
                    カナダ産チルド豚バラ使用
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  訳ありチャーシュー<br />800g
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  しっとり柔らかく、臭みの少ない<br />
                  本格チャーシュー
                </p>

                {/* Key Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Package className="w-5 h-5 text-red-600" />
                    <span>200g×4パック（小分け真空パック）</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Flame className="w-5 h-5 text-red-600" />
                    <span>特製タレ付き</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Truck className="w-5 h-5 text-red-600" />
                    <span>送料無料</span>
                  </div>
                </div>

                {/* Price & Credibility */}
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">価格</p>
                    <p className="text-3xl md:text-4xl font-bold text-red-600 mb-3">
                      4,290円
                    </p>
                    <p className="text-xs text-gray-600">（税・送料込み）</p>
                  </div>
                </div>

                {/* Credibility Badges */}
                <div className="space-y-2 mb-8">
                  <p className="text-sm font-semibold text-gray-700">✓ ラーメン屋が作る本物の味</p>
                  <p className="text-sm font-semibold text-gray-700">✓ 楽天・Yahooランキング1位獲得</p>
                  <p className="text-sm font-semibold text-gray-700">✓ 累計販売実績多数</p>
                </div>

                {/* First Purchase Buttons */}
                <div className="space-y-3">
                  <PurchaseButton platform="楽天" href="https://item.rakuten.co.jp/aizubrandhall/10000013/" />
                  <PurchaseButton platform="Yahoo!" href="https://store.shopping.yahoo.co.jp/aizubrandhall/b08rxs3zdl.html" />
                  <PurchaseButton platform="Amazon" href="https://www.amazon.co.jp/dp/B08RXS3ZDL" />
                </div>
              </div>

              {/* Hero Image */}
              <div className="order-1 md:order-2">
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
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

        {/* Canada Pork Section */}
        <section className="py-12 md:py-16 bg-amber-50 border-t-4 border-red-600">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              カナダ産チルド豚バラに<br />変わりました。
            </h2>

            <div className="bg-white rounded-lg p-8 md:p-10 shadow-md border-l-4 border-red-600">
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                長年、ラーメン用チャーシューを作り続けてきた私たちでも、今回の肉質の違いには正直驚きました。
              </p>

              <div className="space-y-4 mb-6">
                <p className="text-gray-800 text-base leading-relaxed">
                  <span className="font-semibold text-red-600">しっとりとして柔らかく、</span>豚肉特有の臭みが少ない。
                </p>
                <p className="text-gray-800 text-base leading-relaxed">
                  <span className="font-semibold text-red-600">脂の甘みと赤身の旨み</span>が自然に広がり、豚肉本来のおいしさをしっかり楽しめます。
                </p>
              </div>

              <p className="text-gray-800 text-base leading-relaxed">
                訳あり品ではありますが、味づくりは本気です。ラーメン屋として、そしてチャーシューを専門に作り続けてきた立場から、<span className="font-semibold text-red-600">自信を持っておすすめできる仕上がり</span>です。
              </p>
            </div>
          </div>
        </section>

        {/* Why "Wakeari" - Moved up */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              訳ありの理由
            </h2>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-6 md:p-8">
                <p className="text-gray-800 text-base leading-relaxed mb-4">
                  形が不揃いな部分や、端の部分を含むため訳ありとして販売しています。味や品質には問題ありません。
                </p>
                <p className="text-gray-800 text-base leading-relaxed mb-4">
                  むしろ端の部分はタレがよく絡み、ご飯やラーメンとの相性も抜群です。
                </p>
                <p className="text-gray-800 text-base leading-relaxed">
                  まれに脂が多い部分が入る場合がありますが、チャーシューならではの旨みとしてお楽しみください。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Use - Enhanced */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              使いやすさが最高
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Package className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">小分け真空パック</h3>
                  <p className="text-gray-700 text-sm">200gずつに分かれているので食べたい分だけ解凍できます</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Flame className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">特製タレ付き</h3>
                  <p className="text-gray-700 text-sm">そのままラーメンやチャーシュー丼に乗せるだけで完成</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Truck className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">冷凍保存OK</h3>
                  <p className="text-gray-700 text-sm">冷凍庫に常備しやすく、いつでも本格的な味が楽しめます</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="font-bold text-xl text-gray-900 mb-6">こんな食べ方もできます</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</span>
                  <span className="text-gray-800">ラーメンに乗せて</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</span>
                  <span className="text-gray-800">チャーシュー丼に</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</span>
                  <span className="text-gray-800">ご飯のおかずに</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</span>
                  <span className="text-gray-800">おつまみに</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</span>
                  <span className="text-gray-800">炒飯に混ぜて</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</span>
                  <span className="text-gray-800">サラダのトッピング</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Purchase CTA */}
        <section id="purchase-buttons" className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              今すぐ購入
            </h2>

            <div className="space-y-3">
              <PurchaseButton platform="楽天" href="https://item.rakuten.co.jp/aizubrandhall/10000013/" />
              <PurchaseButton platform="Yahoo!" href="https://store.shopping.yahoo.co.jp/aizubrandhall/b08rxs3zdl.html" />
              <PurchaseButton platform="Amazon" href="https://www.amazon.co.jp/dp/B08RXS3ZDL" />
            </div>
          </div>
        </section>

        {/* Customer Reviews Summary */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              お客様の声で多い評価
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {[
                "スーパーのチャーシューとは違う本格感",
                "小分けで使いやすい",
                "チャーシュー丼に最高",
                "訳ありでも味は本格派",
                "タレが美味しい",
                "冷凍庫に常備したい",
              ].map((review, idx) => (
                <Card key={idx} className="border-2 border-yellow-200 bg-yellow-50">
                  <CardContent className="p-4">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-800 text-sm font-semibold">{review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Individual Reviews */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">代表レビュー</h3>
            <div className="space-y-6">
              {reviews.map((review, idx) => (
                <Card key={idx} className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-gray-900">{review.title}</h4>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              よくあるご質問
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Third Purchase CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              ご購入はこちらから
            </h2>

            <div className="space-y-3">
              <PurchaseButton platform="楽天" href="https://item.rakuten.co.jp/aizubrandhall/10000013/" />
              <PurchaseButton platform="Yahoo!" href="https://store.shopping.yahoo.co.jp/aizubrandhall/b08rxs3zdl.html" />
              <PurchaseButton platform="Amazon" href="https://www.amazon.co.jp/dp/B08RXS3ZDL" />
            </div>

            <div className="text-center mt-12">
              <p className="text-lg font-bold text-gray-900 mb-4">
                この商品は「会津ブランド館」が製造・販売・発送を行っています。
              </p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Store Details */}
              <div>
                <h3 className="text-xl font-bold mb-4">店舗案内</h3>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="font-semibold">会津ブランド館</span>
                  </p>
                  <p>〒965-0044</p>
                  <p>福島県会津若松市七日町6-15</p>
                  <p>TEL: 0242-25-1441</p>
                  <p>営業時間: 11時〜16時</p>
                  <p>定休日: 12月31日・1月1日</p>
                  <p className="text-sm text-gray-400">（年末年始はお休みさせて頂きます）</p>
                </div>
              </div>

              {/* Store Image */}
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BC%9A%E6%B4%A5%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8%E5%A4%96%E8%A6%B3-bnjMP40CUTli5X50PCHHlgzGiqMQM3.jpg"
                  alt="会津ブランド館の外観"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Google Map */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-center">店舗所在地</h3>
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.234567890123!2d139.9287654321098!3d37.4951234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f85a1a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2z44CSOTY1LTAwNDQg56aP5bO25aSa5Lya5rSl5p2-5biC5LiD5pel55S677yW4oiS77yR77yV!5e0!3m2!1sja!2sjp!4v1640995200000!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="会津ブランド館の地図"
                  className="absolute inset-0"
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
