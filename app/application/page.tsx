"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Building2, Upload, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    lastNameKana: "",
    firstNameKana: "",
    email: "",
    phone: "",
    birthDate: "",
    address: "",
    experience: "",
    motivation: "",
    desiredPosition: "",
    availableStartDate: "",
    hasLicense: "",
    licenseDetails: "",
    previousWork: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyNVL3z5VQrTttYlztE6CtxUhXQCmb_S6oM5aTkpYY_Bci2v3xyMucZG0tYywKY1JBQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        },
      )

      // Since we're using no-cors mode, we can't check response status
      // We'll assume success if no error is thrown
      setSubmitted(true)
    } catch (err) {
      console.error("Form submission error:", err)
      setError("送信中にエラーが発生しました。もう一度お試しください。")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-sm p-12 text-center max-w-md">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">応募完了</h1>
          <p className="text-gray-700 mb-6">
            ご応募ありがとうございます。
            <br />
            担当者より1週間以内にご連絡いたします。
          </p>
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-700 text-white">トップページに戻る</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-green-600" />
            <span className="text-lg font-medium text-gray-900">株式会社SWAYS</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              会社について
            </Link>
            <Link href="/requirements" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              募集要項
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              お問い合わせ
            </Link>
          </nav>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm">
            <a href="tel:070-2226-7984">今すぐ電話</a>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">応募フォーム</h1>
            <p className="text-gray-600 text-center mb-12">
              以下のフォームにご記入の上、送信してください。<span className="text-red-500">*</span>は必須項目です。
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b">基本情報</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        姓 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastNameKana" className="block text-sm font-medium text-gray-700 mb-2">
                        セイ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastNameKana"
                        name="lastNameKana"
                        required
                        value={formData.lastNameKana}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="firstNameKana" className="block text-sm font-medium text-gray-700 mb-2">
                        メイ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstNameKana"
                        name="firstNameKana"
                        required
                        value={formData.firstNameKana}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        電話番号 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                        生年月日 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        required
                        value={formData.birthDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="availableStartDate" className="block text-sm font-medium text-gray-700 mb-2">
                        入社可能日 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="availableStartDate"
                        name="availableStartDate"
                        required
                        value={formData.availableStartDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      住所 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                      placeholder="〒123-4567 東京都○○区○○1-2-3"
                    />
                  </div>
                </div>

                {/* Job Information */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b">応募情報</h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="desiredPosition" className="block text-sm font-medium text-gray-700 mb-2">
                        希望職種 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="desiredPosition"
                        name="desiredPosition"
                        required
                        value={formData.desiredPosition}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                      >
                        <option value="">選択してください</option>
                        <option value="リフォーム職人（経験者）">リフォーム職人（経験者）</option>
                        <option value="リフォーム職人（未経験）">リフォーム職人（未経験）</option>
                        <option value="現場監督候補">現場監督候補</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                        経験・スキル <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                      >
                        <option value="">選択してください</option>
                        <option value="未経験">未経験</option>
                        <option value="1年未満">1年未満</option>
                        <option value="1-3年">1-3年</option>
                        <option value="3-5年">3-5年</option>
                        <option value="5年以上">5年以上</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="hasLicense" className="block text-sm font-medium text-gray-700 mb-2">
                        保有資格 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="hasLicense"
                        name="hasLicense"
                        required
                        value={formData.hasLicense}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                      >
                        <option value="">選択してください</option>
                        <option value="普通自動車免許のみ">普通自動車免許のみ</option>
                        <option value="建築関連資格あり">建築関連資格あり</option>
                        <option value="その他資格あり">その他資格あり</option>
                      </select>
                    </div>

                    {formData.hasLicense === "建築関連資格あり" || formData.hasLicense === "その他資格あり" ? (
                      <div>
                        <label htmlFor="licenseDetails" className="block text-sm font-medium text-gray-700 mb-2">
                          資格詳細
                        </label>
                        <textarea
                          id="licenseDetails"
                          name="licenseDetails"
                          rows={3}
                          value={formData.licenseDetails}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                          placeholder="保有資格の詳細をご記入ください"
                        />
                      </div>
                    ) : null}

                    <div>
                      <label htmlFor="previousWork" className="block text-sm font-medium text-gray-700 mb-2">
                        職歴・経験
                      </label>
                      <textarea
                        id="previousWork"
                        name="previousWork"
                        rows={4}
                        value={formData.previousWork}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                        placeholder="これまでの職歴や関連する経験があればご記入ください"
                      />
                    </div>

                    <div>
                      <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                        志望動機 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="motivation"
                        name="motivation"
                        required
                        rows={5}
                        value={formData.motivation}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                        placeholder="志望動機や意気込みをご記入ください"
                      />
                    </div>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b">書類添付</h2>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">履歴書・職務経歴書をアップロード</p>
                    <p className="text-sm text-gray-500 mb-4">PDF、Word、画像ファイル（最大5MB）</p>
                    <Button type="button" variant="outline" className="bg-transparent">
                      ファイルを選択
                    </Button>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-6 border-t">
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">個人情報の取り扱いについて</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      ご提供いただいた個人情報は、採用選考の目的のみに使用し、
                      適切に管理いたします。詳細は当社プライバシーポリシーをご確認ください。
                    </p>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" required className="rounded" />
                      <span className="text-sm text-gray-700">
                        個人情報の取り扱いに同意します <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white px-12 py-3"
                      disabled={isLoading}
                    >
                      {isLoading ? "送信中..." : "応募する"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
