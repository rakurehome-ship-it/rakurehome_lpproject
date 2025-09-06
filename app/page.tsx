import { Button } from "@/components/ui/button"
import {
  Building2,
  Calendar,
  Home,
  Star,
  TrendingUp,
  Phone,
  CheckCircle,
  Users,
  Award,
  Wrench,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-green-600" />
            <span className="text-lg font-medium text-gray-900">RAKUリフォーム</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              会社について
            </Link>
            <Link href="#reasons" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              選ばれる理由
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              お問い合わせ
            </Link>
          </nav>

          <a href="tel:070-2226-7984">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm">
              <Phone className="h-4 w-4 mr-2" />
              今すぐ電話
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/construction-workers-hero.jpg')",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative container mx-auto px-4 py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
              安定した仕事で、
              <br />
              技術を磨き、人生を豊かに
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              経験者も未経験者も歓迎。あなたの技術と情熱を活かせる職場があります
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link href="/requirements">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  募集要項を見る
                </Button>
              </Link>
              <Link href="/application">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base">
                  <Phone className="h-5 w-5 mr-2" />
                  今すぐ応募する
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">創業5年の実績と信頼</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            地域密着型のリフォーム事業を展開し、多くのお客様から信頼をいただいています
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5年</div>
              <div className="text-sm text-gray-600">創業からの安定経営</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500件+</div>
              <div className="text-sm text-gray-600">年間施工件数</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-sm text-gray-600">お客様満足度</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">70%</div>
              <div className="text-sm text-gray-600">リピート・紹介率</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Reasons Section */}
      <section id="reasons" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">選ばれる5つの理由</h2>
            <p className="text-gray-600">なぜ多くの職人が当社を選ぶのか</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900">安定した仕事量</h3>
              </div>
              <p className="text-gray-600 mb-4">
                長年培った信頼関係により、リピートのお客様や紹介案件が全体の70%を占めています。季節に左右されることなく、年間を通して安定した仕事量を確保しています。
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">年間を通した安定受注</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900">充実した待遇</h3>
              </div>
              <p className="text-gray-600 mb-4">
                完全週休二日制、年4回賞与、各種手当・福利厚生を完備。働きやすさを重視した待遇制度で、安心して働いていただけます。
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">完全週休二日制</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">年4回賞与</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900">働きやすい環境</h3>
              </div>
              <p className="text-gray-600 mb-4">
                少数精鋭のチームだからこそ、一人ひとりの声に耳を傾け、働きやすい環境づくりを心がけています。アットホームで相談しやすい職場です。
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <Users className="h-4 w-4" />
                <span className="text-sm">アットホームな職場環境</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900">技術向上支援</h3>
              </div>
              <p className="text-gray-600 mb-4">
                充実した研修制度、資格取得支援、最新技術の習得機会を提供。スキルアップを全力でサポートします。
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-purple-600">
                  <Award className="h-4 w-4" />
                  <span className="text-sm">資格取得支援</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600">
                  <Wrench className="h-4 w-4" />
                  <span className="text-sm">最新技術習得</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold">
                  5
                </div>
                <h3 className="text-xl font-bold text-gray-900">未来への安心</h3>
              </div>
              <p className="text-gray-600 mb-4">
                長期雇用、キャリアアップ制度、退職金制度を完備。安定した事業基盤のもと、安心して将来設計ができる環境です。
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-red-600">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">長期雇用保証</span>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">キャリアアップ制度</span>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <Award className="h-4 w-4" />
                  <span className="text-sm">退職金制度</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">実際に働く職人の声</h2>
            <p className="text-gray-600">転職して良かった、未経験から成長できたという声をお聞きください</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">松本さん（35歳・大工歴12年）</h4>
                  <p className="text-sm text-gray-600">経験者転職</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                「前の会社では休日出勤が当たり前で、家族との時間が取れませんでした。こちらに転職してからは完全週休二日制で、子供の運動会にも参加できるようになりました。給料も前職より上がり、技術面でも新しいことを学べる環境で満足しています。」
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">丸岡さん（28歳・入社2年目）</h4>
                  <p className="text-sm text-gray-600">未経験者</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                「全くの未経験でしたが、先輩方が本当に親切に教えてくれました。最初は不安でしたが、今では一人前の職人として現場を任されるまでになりました。手に職をつけたいという夢が叶い、毎日やりがいを感じています。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Examples */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">施工事例</h2>
            <p className="text-gray-600">私たちが手がけた工事の一部をご紹介します</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/living-room-renovation.jpg')" }}
              ></div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">リビング全面リフォーム</h3>
                <p className="text-gray-600 text-sm">築30年の住宅を現代的な空間に</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/kitchen-renovation.jpg')" }}
              ></div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">キッチンリフォーム</h3>
                <p className="text-gray-600 text-sm">機能性とデザイン性を両立</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/bathroom-renovation.jpg')" }}
              ></div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">浴室リフォーム</h3>
                <p className="text-gray-600 text-sm">快適なバスタイムを実現</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">よくある質問</h2>
            <p className="text-gray-600">応募前の不安や疑問にお答えします</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Q. 未経験でも大丈夫ですか？</h3>
              <p className="text-gray-700">
                A.
                はい、大丈夫です。先輩職人が丁寧に指導しますので、やる気があれば必ず技術を身につけることができます。研修期間中も給与は満額支給いたします。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Q. 残業はありますか？</h3>
              <p className="text-gray-700">
                A. 基本的に残業はありません。工期に余裕を持ったスケジュールを組んでいるため、定時で帰宅できます。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Q. 道具は自分で用意する必要がありますか？</h3>
              <p className="text-gray-700">
                A.
                基本的な工具は会社で用意いたします。個人の使いやすい道具がある場合は、ご自身のものをお使いいただいても構いません。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Q. 資格取得のサポートはありますか？</h3>
              <p className="text-gray-700">
                A. はい、積極的にサポートしています。受験費用は会社負担で、合格時には資格手当も支給いたします。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Q. 見学はできますか？</h3>
              <p className="text-gray-700">
                A. もちろんです。実際の現場や職場の雰囲気を見ていただけます。お気軽にお申し込みください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">まずはお気軽にご相談ください</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            少しでも興味をお持ちいただけましたら、まずはお気軽にご連絡ください
          </p>

          <div className="bg-gray-50 rounded-lg p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">会社情報</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">株式会社SWAYS</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">代表者：榊原大巳</span>
              </div>
              <div className="flex items-start gap-3">
                <Home className="h-5 w-5 text-gray-600 mt-0.5" />
                <span className="text-gray-700">東京都大和町１−３−９　プラネット１０７</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-600" />
                <a href="tel:070-2226-7984" className="text-gray-700 hover:text-orange-600 transition-colors">
                  お電話でのお問い合わせ
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-600">✉</span>
                <span className="text-gray-700">raku.rehome@gmail.com</span>
              </div>
            </div>
          </div>

          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg">
              お問い合わせフォーム
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
