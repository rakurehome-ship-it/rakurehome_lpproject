import { Button } from "@/components/ui/button"
import { Building2, Clock, MapPin, Pen as Yen, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function RequirementsPage() {
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
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              会社について
            </Link>
            <Link href="/requirements" className="text-gray-900 font-medium text-sm">
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
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">募集要項</h1>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-green-600" />
                応募資格
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>18歳以上の方（経験・学歴不問）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>やる気と向上心のある方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>チームワークを大切にできる方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>普通自動車免許をお持ちの方（AT限定可）</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Yen className="h-5 w-5 text-green-600" />
                  給与・待遇
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <span className="font-medium">月給：</span>
                    <span>要相談</span>
                  </div>
                  <div>
                    <span className="font-medium">交通費：</span>
                    <span>全額支給</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  勤務時間
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <span className="font-medium">勤務時間：</span>
                    <span>8:00〜17:00</span>
                  </div>
                  <div>
                    <span className="font-medium">休憩時間：</span>
                    <span>12:00〜13:00（60分）</span>
                  </div>
                  <div>
                    <span className="font-medium">実働時間：</span>
                    <span>8時間</span>
                  </div>
                  <div>
                    <span className="font-medium">残業：</span>
                    <span>月平均10時間程度</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-500" />
                休日・福利厚生
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">休日</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 週休二日制</li>
                    <li>• 年末年始休暇</li>
                    <li>• 夏季休暇</li>
                    <li>• 有給休暇</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">福利厚生</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 社会保険完備</li>
                    <li>• 退職金制度</li>
                    <li>• 資格取得支援制度</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/application">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-12 py-3 text-lg">
                  今すぐ応募する
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
