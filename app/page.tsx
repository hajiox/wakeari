"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Script from "next/script"

export default function ChashuLandingPage() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

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
    {
      title: "文句なしの良い商品です。",
      comment:
        "味・量・価格、どれも満足。脂多めですがそれが旨み。薄塩で上品な味わい。小分けで管理しやすくリピート確定。",
      rating: 4,
    },
    {
      title: "想像以上に本格的なチャーシュー。",
      comment:
        "通販とは思えないクオリティ。脂がとろけ、赤身もしっとり。レンチンで温めるだけでラーメン店の味。冷凍庫に常備決定です。",
      rating: 5,
    },
    {
      title: "贈答にもおすすめ。",
      comment:
        "義父への贈り物に購入。解凍してすぐ使える手軽さと、濃厚なのに後味さっぱりな味付けが大好評。リピート予定です。",
      rating: 4,
    },
    {
      title: "小分けパックが本当に便利！",
      comment:
        "200gごとに分かれていて必要な分だけ解凍できるのが最高。無駄なく使えて味も変わらない。タレの香ばしさも絶妙。",
      rating: 5,
    },
    {
      title: "チャーシュー丼が止まらない！",
      comment: "温かいご飯にのせるだけで店の味。脂の甘みがご飯に染みて最高。付属のタレを追いダレにするのがマイブーム。",
      rating: 5,
    },
    {
      title: "訳ありの名品。",
      comment:
        '"訳あり"の名の通り端切れ中心ですが味は一級品。しっかり味が染みていて柔らかい。お得感と美味しさどちらも満点。',
      rating: 4,
    },
  ]

  const faqs = [
    {
      question: "「訳あり」とはどういう意味ですか？",
      answer:
        "味や品質には一切問題ありません。形が不揃いだったり、端の部分を含むため「訳あり」と表記しています。むしろ旨みが凝縮している部位も多く、リピーター様から好評です。まれに脂が多いところが当たる場合がございます。ご了承ください。",
    },
    {
      question: "チャーシューの保存方法と賞味期限は？",
      answer:
        "真空冷凍でお届けします。冷凍庫で約1年間保存可能。解凍後は冷蔵で保管し、なるべくお早めにお召し上がりください。",
    },
    {
      question: "どのくらいの量が入っていますか？",
      answer:
        "合計1kg（200g×5パック）の小分けセットです。ラーメンやチャーシュー丼で1パックが約2杯分となります。必要な分だけ解凍でき、無駄がありません。",
    },
    {
      question: "使用している豚肉の産地と品質は？",
      answer:
        "当店のチャーシューは、世界的に評価の高いスペイン産豚バラ肉を使用しています。EU基準の厳格な品質管理のもと育てられ、安全性と信頼性が確立されています。赤身と脂身のバランスが秀逸で、脂肪にはオレイン酸が豊富。ジューシーで旨みのある食感が特長です。日本市場でも高評価で、2025年の最新データでは輸入量が前年比8.69％増。ラーメン用チャーシューとしての需要が高まり、日本の食文化とも好相性です。",
    },
    {
      question: "解凍方法のおすすめを教えてください。",
      answer:
        "冷蔵庫での一晩、自然解凍が最適です。食べる前にフライパンやレンジで軽く温めるとより美味しく召し上がれます。（加熱し過ぎると固くなります。ご注意ください）",
    },
    {
      question: "付属のタレはどんな味ですか？",
      answer:
        "会津の清酒と本みりんを使った甘辛バランスの良い秘伝ダレです。チャーシューに絡めるのはもちろん、ごはん・炒飯・和え物の味付けにも相性抜群。今だけ無料プレゼント中です。",
    },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "訳ありチャーシュー 1kg（200g×5個）",
    image: "https://wakeari.aizu-syokubura.com/images/ogp.jpg",
    description:
      "ラーメン屋が作る本物のチャーシュー。楽天・Yahoo焼豚部門1位獲得。個包装＋特製タレ付きで送料無料・即日発送。",
    brand: {
      "@type": "Brand",
      name: "会津ブランド館",
    },
    offers: {
      "@type": "Offer",
      url: "https://wakeari.aizu-syokubura.com",
      priceCurrency: "JPY",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "会津ブランド館",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "122",
    },
  }

  return (
    <>
      <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-18">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%98%E3%83%83%E3%82%BF%E3%83%BC%E7%94%A8%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8%E3%83%AD%E3%82%B4-KLmTKW2YzhAd2oRVPAj6YXTUCVrOm3.jpg"
                  alt="会津ブランド館"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="relative w-full aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%93%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201-vzS0fAGsTRrUiz2354RiPpvBr96Vti.jpg"
                alt="ラーメン屋が作る本物のチャーシュー"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Main Copy Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center max-w-5xl">
            <div className="space-y-4 mb-6">
              <Badge className="bg-red-600 text-white hover:bg-red-700 text-base px-4 py-2">累計10万食突破</Badge>
              <Badge className="bg-amber-600 text-white hover:bg-amber-700 text-base px-4 py-2 ml-2">
                楽天・Yahoo焼豚部門売上ランキング１位
              </Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              ラーメン屋が作る本物のチャーシュー（訳あり）を
              <br />
              送料無料でご家庭にお届けします。
            </h1>

            <div className="max-w-4xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
              <p>ご家庭でラーメンを作る時、いちばん難しいのが"本物のチャーシュー"。</p>
              <p>スーパーのものはハムのようで満足できない方も多いはず。</p>
              <p>
                当店は実際にラーメン店を営む職人が、店と同じ製法で仕込んだ「本格チャーシュー」をそのままお届けします。手間ひまを惜しまない味を、ぜひご家庭で。送料無料・即日発送。
              </p>
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
              会津ブランド館は安心安全のお店です。
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E6%9C%80%E5%84%AA%E7%A7%80%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97-OonjkBckZHDCK14qRIQZc5S0JaaRnZ.png"
                alt="楽天最優秀ショップ"
                width={600}
                height={600}
                className="w-full h-auto"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mercari-s2M50rbMkxPL5sTTRV6nKv4Ci7IMU1.png"
                alt="メルカリShopsアワード2022"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-900">
              会津ブランド館のチャーシュー。ご評価頂きありがとうございます。
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%A8%B3%E3%81%82%E3%82%8A1%E4%BD%8D-fJlUq4F4vJUqD1Fh5ulzwSO67sGbJ6.jpg"
                alt="楽天ランキング1位"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A4%E3%83%95%E3%83%BC%E8%A8%B3%E3%81%82%E3%82%8A1%E4%BD%8D-qwaddhtND3DS4ZHbIEgY01wON2d1DJ.jpg"
                alt="Yahooランキング1位"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%93%E3%81%A0%E3%82%8F%E3%82%8A%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3-uRwYgrR20EZosR8r2NzOXD6hBRe1py.jpg"
                  alt="手仕事で作るチャーシュー"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  手仕事 × 技術が生む、唯一無二のチャーシュー
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>
                    豚本来の旨みを最も引き出す<strong>厳選豚バラ肉</strong>
                    を、専用の解凍庫でドリップを出さず最高の状態に仕込みます。
                  </p>
                  <p>
                    職人が一本ずつ丁寧にタコ糸を巻き、<strong>手仕事ならではの「バラ巻き」製法</strong>
                    で形を整え、じっくりと低温で煮込みます。
                  </p>
                  <p>
                    このとき使用するのは、炭酸を加えた独自の下処理。臭みを抑え、筋繊維をやわらかくほどきながら、しっとりとした食感へと導きます。
                  </p>
                  <p>
                    さらに当店では、<strong>「育てる漬けダレ」</strong>にも深いこだわりがあります。
                  </p>
                  <p>
                    仕込みを重ねるたびに継ぎ足され、肉汁と旨みが凝縮された秘伝のタレは、時間とともにゼラチン状の旨みの塊に。
                  </p>
                  <p>
                    これを熱々のまま一晩かけて寝かせることで、旨みが芯まで染み込み、他では味わえない濃厚なチャーシューが完成します。
                  </p>
                  <p>
                    すべての工程に、"<strong>本物の味を届けたい</strong>"という職人の想いが息づいています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  旨み・食感・バランス、そのすべてに理由があります。
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>
                    チャーシューには様々なタイプがあります。ほろほろと崩れるような口溶けも魅力ですが、その多くは煮汁にうま味が流れ出てしまい、豚本来の味が薄くなりがちです。
                  </p>
                  <p>
                    当店のチャーシューは、写真の通り「しっとり」「やわらか」はもちろん、「噛むほどにうま味が広がる肉のコシ」を大切にしています。肉の繊維を感じながらも口の中で自然にほぐれる絶妙な火入れにより、脂の甘みと赤身の旨みが一体となるよう仕上げています。
                  </p>
                  <p>
                    また味付けは、ラーメンに入れた時にスープの味を邪魔しないよう「控えめ」に設計。そのまま食べて「もう少し濃くてもいいかも」と感じた方は、付属の特製ダレを少し絡めてみてください。レビューでも「薄味でアレンジがしやすい」「ラーメンにもチャーシュー丼にも合う」と高い評価をいただいています。
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%97%A8%E3%81%BF%E3%83%BB%E9%A3%9F%E6%84%9F%E3%83%BB%E3%83%90%E3%83%A9%E3%83%B3%E3%82%B9%E3%80%81%E3%81%9D%E3%81%AE%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AB%E7%90%86%E7%94%B1%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82-X0tHD1aNcWgX3VR2fKI7wfas8agztu.jpg"
                  alt="しっとり柔らかいチャーシュー"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Packaging Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B0%8F%E5%88%86%E3%81%91%E7%9C%9F%E7%A9%BA%E3%83%91%E3%83%83%E3%82%AF%EF%BC%8B%E7%89%B9%E8%A3%BD%E3%82%BF%E3%83%AC%E3%81%A7%E3%80%81%E3%81%84%E3%81%A4%E3%81%A7%E3%82%82%E4%BD%9C%E3%82%8A%E3%81%9F%E3%81%A6%E3%81%AE%E7%BE%8E%E5%91%B3%E3%81%97%E3%81%95-CfcSgCH0zPxweg1oN2zcXruWvvg2bb.jpg"
                  alt="個包装のチャーシューと特製タレ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  小分け真空パック＋特製タレで、いつでも作りたての美味しさ
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>たっぷり1kg入りのチャーシューを、200gずつ小分け真空パックにしてお届けします。</p>
                  <p>ラーメンやチャーシュー丼なら、約10杯分の大容量。</p>
                  <p>必要な分だけ解凍できるので、いつでも作りたての美味しさをお楽しみいただけます。</p>
                  <p>真空冷凍のため、冷凍庫で約1年保存が可能。</p>
                  <p>
                    さらに今だけ、清酒や本みりんを使用した<strong>特製の秘伝タレ付き</strong>。
                  </p>
                  <p>チャーシューは空気に触れると風味が落ちるデリケートな食材です。</p>
                  <p>
                    そこで当店では、<strong>「都度おいしい」小分け冷凍方式</strong>
                    を採用。新鮮な状態で、いつでもお店の味をそのまま味わっていただけます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Suggestions Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">おすすめの食べ方</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%82%92%E9%A3%AF-S17CVHOQU1ukxtnk64HVUxRbjZ1GqM.jpg"
                    alt="チャーハン"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">チャーハン</h3>
              </div>

              <div className="text-center">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E4%B8%BC-01aNPGPjVAP0D526w2WvKhDuwpIZe8.jpg"
                    alt="チャーシュー丼"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">チャーシュー丼</h3>
              </div>

              <div className="text-center">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E3%81%A4%E3%81%BE%E3%81%BF%E3%81%AB%E3%82%82-kG2SMBKH3lnbYaJhWbHaCiQkl1uE0c.jpg"
                    alt="おつまみ"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">おつまみにも</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">お客様の声（レビュー）</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <Card key={index} className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E5%A3%B0%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89-4VY3lNrk40YW6ueUJPDE34dSE1rPTc.jpg"
                          alt={`お客様${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2">{review.title}</h3>
                        <div className="flex text-amber-500 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">よくあるご質問（FAQ）</h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-gray-50 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Q{index + 1}. {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">A. {faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping Info Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-01-RVo5zhJMiorNckXKcGrwjoekpbfjVO.jpg"
                alt="送料無料"
                width={800}
                height={533}
                className="w-full h-auto"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-01-gtJlpzGiT6Eu61Evg3nRe7wnxdr8x0.jpg"
                alt="即日配送"
                width={800}
                height={533}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Final Hero Image */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="relative aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9C%80%E5%BE%8C%E3%81%AE%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%93%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB-mMAgrhFADeDkN4l9zOp3CaCZlmAqqZ.jpg"
                alt="極上のチャーシューラーメン"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Purchase Section */}
        <section id="purchase" className="py-8 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">
              ご購入はこちらから
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
              {/* Yahoo Shopping */}
              <div className="bg-pink-100 p-4 md:p-6 rounded-lg border border-pink-200">
                <div className="text-center">
                  <a
                    href="https://store.shopping.yahoo.co.jp/aizubrandhall/b08rxs3zdl.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white p-3 md:p-4 rounded-lg mb-3 md:mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yahoo%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-oEZnesKYGO9xdabF1mblfu3kxz7g6u.png"
                        alt="Yahoo!で購入"
                        width={200}
                        height={150}
                        className="object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900 text-sm md:text-base">Yahoo!ショッピング</h4>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">
                    PayPayポイントが貯まる使えるショッピングモールはこちら
                  </p>
                </div>
              </div>

              {/* Rakuten */}
              <div className="bg-blue-100 p-4 md:p-6 rounded-lg border border-blue-200">
                <div className="text-center">
                  <a
                    href="https://item.rakuten.co.jp/aizubrandhall/10000013/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white p-3 md:p-4 rounded-lg mb-3 md:mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-4gf1RJic0C1lXwMtUOb7gduRZY70Oe.png"
                        alt="楽天で購入"
                        width={200}
                        height={150}
                        className="object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900 text-sm md:text-base">楽天市場</h4>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">
                    楽天ポイントが使える国内最大級のショッピングモールはこちら
                  </p>
                </div>
              </div>

              {/* Amazon */}
              <div className="bg-green-100 p-4 md:p-6 rounded-lg border border-green-200">
                <div className="text-center">
                  <a
                    href="https://www.amazon.co.jp/dp/B08RXS3ZDL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white p-3 md:p-4 rounded-lg mb-3 md:mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-TKi1xCzQRbSTzj68eKCFKKvK5THaMK.png"
                        alt="Amazonで購入"
                        width={200}
                        height={150}
                        className="object-contain mx-auto"
                      />
                    </div>
                  </a>
                  <h4 className="font-bold mb-2 text-gray-900 text-sm md:text-base">Amazon</h4>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">
                    世界最大のショッピングモールでのお買い物はこちら
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 mb-8">
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
