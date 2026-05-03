"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-40 py-4">
        <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%98%E3%83%83%E3%82%BF%E3%83%BC%E7%94%A8%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8%E3%83%AD%E3%82%B4-KLmTKW2YzhAd2oRVPAj6YXTUCVrOm3.jpg"
              alt="会津ブランド館"
              width={50}
              height={50}
              className="rounded"
            />
          </div>
          {showFloatingButton && (
            <button
              onClick={() => scrollToSection("purchase-buttons")}
              className="block md:hidden bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-sm"
            >
              購入先を選ぶ
            </button>
          )}
        </div>
      </header>

      {/* Main Hero Section with Black Background */}
      <section className="bg-black relative py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Banners */}
            <div className="space-y-4 md:space-y-6 order-2 md:order-1">
              {/* Shipping Banner */}
              <div className="bg-red-600 text-white p-6 md:p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">送料無料</h2>
                <p className="text-sm md:text-base">沖縄・離島地域除く</p>
              </div>

              {/* Same Day Shipping Banner */}
              <div className="bg-blue-500 text-white p-6 md:p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  14時までのご注文で<br className="hidden md:block" />
                  即日発送
                </h2>
                <p className="text-xs md:text-sm leading-relaxed">
                  12月31日-1月2日は発送をお休みさせて頂いております。
                  急な欠品・SALE等でまれに即日発送できない場合があります。
                </p>
              </div>

              {/* Purchase Buttons */}
              <div className="space-y-3 pt-4">
                <a
                  href="https://item.rakuten.co.jp/aizubrandhall/10000013/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMallClick}
                >
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    楽天で購入
                  </button>
                </a>
                <a
                  href="https://store.shopping.yahoo.co.jp/aizubrandhall/b08rxs3zdl.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMallClick}
                >
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    Yahoo!ショッピングで購入
                  </button>
                </a>
                <a
                  href="https://www.amazon.co.jp/dp/B08RXS3ZDL"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMallClick}
                >
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    Amazonで購入
                  </button>
                </a>
              </div>
            </div>

            {/* Right Side - Product Image */}
            <div className="order-1 md:order-2">
              <div className="relative aspect-square md:aspect-auto md:h-96 overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%93%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB%EF%BC%88%E6%96%87%E5%AD%97%E3%81%AA%E3%81%97%EF%BC%89_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201-TFA0OLz6aZFzbJNi850HUJ2iRGTqeq.jpg"
                  alt="訳ありチャーシュー800g"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 md:py-12 bg-gray-100 border-b-4 border-red-600">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">楽天市場ランキング</p>
              <p className="text-lg md:text-xl font-bold text-red-600">常々1位獲得</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Yahoo!ショッピング</p>
              <p className="text-lg md:text-xl font-bold text-red-600">焼豚部門1位</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <p className="text-sm text-gray-600 mb-2">販売実績</p>
              <p className="text-lg md:text-xl font-bold text-red-600">累計販売多数</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kodawari Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            こだわりセクション
          </h2>

          <div className="relative aspect-video md:aspect-auto md:h-96 overflow-hidden rounded-lg shadow-lg mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%93%E3%81%A0%E3%82%8F%E3%82%8A%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3-uRwYgrR20EZosR8r2NzOXD6hBRe1py.jpg"
              alt="こだわりセクション"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-center text-gray-700 text-lg leading-relaxed">
            ラーメン屋が作る本物のチャーシュー。旨み、食感、バランスにこだわり抜きました。
          </p>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            小分け真空パック＋特製タレで、いつでも作りたての美味しさ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
                たっぷり800g入りのチャーシューを、200gずつ小分け真空パックにしてお届けします。
              </p>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
                ラーメンやチャーシュー丼なら、約8杯分の大容量。
              </p>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                必要な分だけ解凍でき、いつでも作りたての美味しさが味わえます。
              </p>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6c1c363e-32eb-4e1f-a2eb-ad4f499b7732-Jug7n3DHuC5gGzYkz3eJkG5aJu55gB.jpg"
                  alt="小分け真空パック＋特製タレ"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Ideas */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            おすすめの食べ方
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E4%B8%BC-01aNPGPjVAP0D526w2WvKhDuwpIZe8.jpg",
                title: "チャーシュー丼",
              },
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%82%92%E9%A3%AF-S17CVHOQU1ukxtnk64HVUxRbjZ1GqM.jpg",
                title: "チャーシュー炒飯",
              },
              {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E3%81%A4%E3%81%BE%E3%81%BF%E3%81%AB%E3%82%82-kG2SMBKH3lnbYaJhWbHaCiQkl1uE0c.jpg",
                title: "おつまみにも",
              },
            ].map((item, idx) => (
              <Card key={idx} className="overflow-hidden border-0 shadow-lg">
                <div className="relative aspect-video">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            受賞実績
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E6%9C%80%E5%84%AA%E7%A7%80%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97-OonjkBckZHDCK14qRIQZc5S0JaaRnZ.png"
                  alt="楽天最優秀ショップ"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mercari-s2M50rbMkxPL5sTTRV6nKv4Ci7IMU1.png"
                  alt="メルカリShopsアワード"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="purchase-buttons" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            ご購入はこちらから
          </h2>

          <p className="text-center text-gray-700 text-base md:text-lg mb-8 font-semibold">
            4,290円（税・送料込）
          </p>

          <div className="space-y-3">
            <a
              href="https://item.rakuten.co.jp/aizubrandhall/10000013/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMallClick}
            >
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                楽天で購入する
              </button>
            </a>
            <a
              href="https://store.shopping.yahoo.co.jp/aizubrandhall/b08rxs3zdl.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMallClick}
            >
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Yahoo!ショッピングで購入する
              </button>
            </a>
            <a
              href="https://www.amazon.co.jp/dp/B08RXS3ZDL"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMallClick}
            >
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Amazonで購入する
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            よくあるご質問
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "何が訳ありなのですか？",
                answer:
                  "形が不揃いな部分や、端の部分を含むため訳ありとして販売しています。味や品質には問題ありません。むしろ端の部分はタレがよく絡み、ご飯やラーメンとの相性も抜群です。",
              },
              {
                question: "合計でどのくらい入っていますか？",
                answer:
                  "合計800g（200g×4パック）の小分けセットです。ラーメンやチャーシュー丼で1パックが約2杯分となります。",
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
            ].map((faq, idx) => (
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

      {/* Footer with Store Info */}
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
                <p>営業時間: 11時〜16時</p>
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

          <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-8">
            <p>© 2025 AIZU BRAND HALL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
