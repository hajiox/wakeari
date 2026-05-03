"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Script from "next/script"
import { track, trackMallClick, trackViewContent } from "@/lib/metaPixel"
import { useEffect } from "react"

export default function ChashuLandingPage() {
  // Track ViewContent on page load
  useEffect(() => {
    trackViewContent()
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
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-red-600 text-white">訳あり商品</Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  訳ありチャーシュー
                  <br />
                  <span className="text-red-600">800g</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  ラーメン屋が作る本物のチャーシュー。
                  <br />
                  小分け真空パック＋特製タレ付きで
                  <br />
                  送料無料・即日発送。
                </p>

                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 mb-8">
                  <p className="text-gray-600 text-sm mb-2">通常価格</p>
                  <p className="text-4xl font-bold text-red-600 mb-2">4,290円</p>
                  <p className="text-xs text-gray-600">（税・送料込み）</p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                    <span className="text-gray-700 font-semibold">楽天・Yahoo焼豚部門1位獲得</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                    <span className="text-gray-700 font-semibold">200g×4個の小分けセット</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                    <span className="text-gray-700 font-semibold">特製タレ付き</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://item.rakuten.co.jp/aizubrandhall/10000013/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={handleMallClick}
                  >
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors">
                      楽天で購入する
                    </button>
                  </a>
                  <a
                    href="https://store.shopping.yahoo.co.jp/aizubrandhall/b08rxs3zdl.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={handleMallClick}
                  >
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors">
                      Yahooで購入する
                    </button>
                  </a>
                  <a
                    href="https://www.amazon.co.jp/dp/B08RXS3ZDL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={handleMallClick}
                  >
                    <button className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors">
                      Amazonで購入する
                    </button>
                  </a>
                </div>
              </div>

              <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%93%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB%EF%BC%88%E6%96%87%E5%AD%97%E3%81%AA%E3%81%97%EF%BC%89_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201-TFA0OLz6aZFzbJNi850HUJ2iRGTqeq.jpg"
                  alt="訳ありチャーシュー"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-gray-300 text-center py-8">
                <CardContent>
                  <div className="mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%A8%B3%E3%81%82%E3%82%8A1%E4%BD%8D-fJlUq4F4vJUqD1Fh5ulzwSO67sGbJ6.jpg"
                      alt="楽天訳あり1位"
                      width={300}
                      height={200}
                      className="mx-auto rounded"
                    />
                  </div>
                  <p className="font-bold text-gray-800">楽天訳あり部門1位</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-300 text-center py-8">
                <CardContent>
                  <div className="mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A4%E3%83%95%E3%83%BC%E8%A8%B3%E3%81%82%E3%82%8A1%E4%BD%8D-qwaddhtND3DS4ZHbIEgY01wON2d1DJ.jpg"
                      alt="Yahoo訳あり1位"
                      width={300}
                      height={200}
                      className="mx-auto rounded"
                    />
                  </div>
                  <p className="font-bold text-gray-800">Yahoo訳あり部門1位</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* こだわりセクション */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              旨み・食感・バランス、<br />そのすべてに理由があります。
            </h2>

            <div className="relative w-full aspect-auto overflow-hidden rounded-lg shadow-lg mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%93%E3%81%A0%E3%82%8F%E3%82%8A%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3-uRwYgrR20EZosR8r2NzOXD6hBRe1py.jpg"
                alt="こだわりセクション"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* 旨み・食感 */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%97%A8%E3%81%BF%E3%83%BB%E9%A3%9F%E6%84%9F%E3%83%BB%E3%83%90%E3%83%A9%E3%83%B3%E3%82%B9%E3%80%81%E3%81%9D%E3%81%AE%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AB%E7%90%86%E7%94%B1%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82-X0tHD1aNcWgX3VR2fKI7wfas8agztu.jpg"
                alt="旨み・食感・バランス"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* 個包装セクション */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              小分け真空パック＋特製タレで、<br />いつでも作りたての美味しさ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6c1c363e-32eb-4e1f-a2eb-ad4f499b7732-Jug7n3DHuC5gGzYkz3eJkG5aJu55gB.jpg"
                  alt="小分け真空パック＋特製タレ"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  たっぷり800g入りのチャーシューを、200gずつ小分け真空パックにしてお届けします。
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  ラーメンやチャーシュー丼なら、約8杯分の大容量。
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <span className="text-gray-700 font-semibold">食べたい分だけ解凍できる</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <span className="text-gray-700 font-semibold">特製タレでそのまま使える</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <span className="text-gray-700 font-semibold">冷凍庫に常備しやすい</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* おすすめの食べ方 */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              おすすめの食べ方
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-gray-300 text-center overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E4%B8%BC-01aNPGPjVAP0D526w2WvKhDuwpIZe8.jpg"
                    alt="チャーシュー丼"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="font-bold text-gray-800">チャーシュー丼</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-300 text-center overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%82%92%E9%A3%AF-S17CVHOQU1ukxtnk64HVUxRbjZ1GqM.jpg"
                    alt="炒飯"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="font-bold text-gray-800">炒飯</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-300 text-center overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E3%81%A4%E3%81%BE%E3%81%BF%E3%81%AB%E3%82%82-kG2SMBKH3lnbYaJhWbHaCiQkl1uE0c.jpg"
                    alt="おつまみにも"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="font-bold text-gray-800">おつまみにも</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* お客様の声 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              お客様の声
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-gray-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 overflow-hidden rounded-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E5%A3%B0%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89-4VY3lNrk40YW6ueUJPDE34dSE1rPTc.jpg"
                        alt="男性の声"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">スーパーのチャーシューとは違う</p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    市販品のハムのようなチャーシューに不満で購入。付属のタレが格別で、白米にもよく合う。ぜひ定番化してほしいほど美味しいです。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 overflow-hidden rounded-full bg-gray-300">
                      <span className="flex items-center justify-center w-full h-full text-2xl">👩</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">リピーターです</p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    端っこの切り落としがむしろ一番美味しい。小分け冷凍で使いやすく、タレも絶品。夏に煮込みを避けたい時にありがたい存在。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              よくあるご質問
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "何が訳ありなのですか？",
                  a: "形が不揃いな部分や、端の部分を含むため訳ありとして販売しています。味や品質には問題ありません。むしろ端の部分はタレがよく絡み、ご飯やラーメンとの相性も抜群です。まれに脂が多い部分が入る場合がありますが、チャーシューならではの旨みとしてお楽しみください。",
                },
                {
                  q: "合計1kg（200g×5パック）ですか？",
                  a: "合計800g（200g×4パック）の小分けセットです。ラーメンやチャーシュー丼で1パックが約2杯分となります。必要な分だけ解凍でき、無駄がありません。",
                },
                {
                  q: "送料はかかりますか？",
                  a: "全国送料無料です。沖縄・離島地域除く。",
                },
                {
                  q: "即日発送されますか？",
                  a: "14時までのご注文で即日発送いたします。12月31日〜1月2日はお休みさせていただいております。急なご欠品・SALE等で即日発送できない場合がありますのでご了承ください。",
                },
              ].map((faq, idx) => (
                <Card key={idx} className="border-2 border-gray-300">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 最後のメインビジュアル */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E4%BB%96%E7%94%A8TOP%E7%94%BB%E5%83%8F%EF%BC%88%E8%A8%B3%E3%82%A2%E3%83%AA800%EF%BC%89-01-38TIihrmbi2l3pS9oUbjQJf6JrJqw8.jpg"
                alt="訳ありチャーシュー最終ビジュアル"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center mb-8">
              <p className="text-3xl md:text-4xl font-bold text-red-600 mb-2">4,290円</p>
              <p className="text-gray-600">（税・送料込み）</p>
            </div>

            <div className="space-y-3">
              <a
                href="https://item.rakuten.co.jp/aizubrandhall/10000013/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={handleMallClick}
              >
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors">
                  楽天で購入する
                </button>
              </a>
              <a
                href="https://store.shopping.yahoo.co.jp/aizubrandhall/b08rxs3zdl.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={handleMallClick}
              >
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors">
                  Yahooで購入する
                </button>
              </a>
              <a
                href="https://www.amazon.co.jp/dp/B08RXS3ZDL"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={handleMallClick}
              >
                <button className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors">
                  Amazonで購入する
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">店舗案内</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="font-semibold">会津ブランド館</p>
                  <p>〒965-0044</p>
                  <p>福島県会津若松市七日町6-15</p>
                  <p>TEL: 0242-25-1441</p>
                  <p>営業時間: 11時〜16時</p>
                  <p>定休日: 12月31日・1月1日</p>
                </div>
              </div>

              <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BC%9A%E6%B4%A5%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8%E5%A4%96%E8%A6%B3-bnjMP40CUTli5X50PCHHlgzGiqMQM3.jpg"
                  alt="会津ブランド館"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-lg shadow-md mb-8">
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

            <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-8">
              <p>© 2025 AIZU BRAND HALL. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
