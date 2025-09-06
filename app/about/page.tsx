import { Button } from "@/components/ui/button"
import { Building2, Users, Award, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-green-600" />
            <span className="text-lg font-medium text-gray-900">RAKUリフォーム</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-gray-900 font-medium text-sm">
              会社について
            </Link>
            <Link href="/requirements" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              募集要項
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              お問い合わせ
            </Link>
          </nav>

          <Link href="/application">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm">応募する</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">会社について</h1>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">私たちの使命</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                私たちは、お客様の大切な住まいをより良くするリフォーム工事を通じて、
                豊かな暮らしの実現をサポートしています。同時に、職人一人ひとりが
                技術を磨き、安定した環境で働けることを大切にしています。
              </p>
              <p className="text-gray-700 leading-relaxed">
                経験豊富な職人から未経験の方まで、すべての人が成長できる職場環境を
                整え、共に発展していくことを目指しています。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">チームワーク</h3>
                <p className="text-gray-600">
                  経験豊富な先輩職人が丁寧に指導し、チーム一丸となって高品質な工事を実現します。
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">技術向上</h3>
                <p className="text-gray-600">
                  定期的な研修制度や資格取得支援により、職人としてのスキルアップをサポートします。
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">働きやすさ</h3>
                <p className="text-gray-600">
                  安定した雇用と充実した福利厚生で、長期的に安心して働ける環境を提供します。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">会社概要</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">設立</h3>
                  <p className="text-gray-700 mb-4">2018年10月</p>

                  <h3 className="font-semibold text-gray-900 mb-2">従業員数</h3>
                  <p className="text-gray-700 mb-4">10名</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">事業内容</h3>
                  <p className="text-gray-700 mb-4">住宅リフォーム工事全般</p>

                  <h3 className="font-semibold text-gray-900 mb-2">対応エリア</h3>
                  <p className="text-gray-700">東京都・神奈川県・埼玉県</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
