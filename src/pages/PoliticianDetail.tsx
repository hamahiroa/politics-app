import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  ExternalLink,
  Users,
  GraduationCap,
  Award,
  Twitter,
  Youtube,
  Instagram,
  Phone,
  Mail,
  Globe,
  Heart,
  Share2,
} from "lucide-react";
import {
  politiciansData,
  partyInfo,
  type Politician,
} from "@/lib/politiciansData";

const PoliticianDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const politician = politiciansData.find((p) => p.id === id);

  if (!politician) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center py-8">
            <h2 className="text-xl font-bold mb-4">政治家が見つかりません</h2>
            <p className="text-gray-600 mb-4">
              指定された政治家の情報が見つかりませんでした。
            </p>
            <Button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>一覧に戻る</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getPartyColor = (party: string) => {
    return (
      partyInfo[party as keyof typeof partyInfo]?.color ||
      "bg-gray-100 text-gray-800"
    );
  };

  const getSocialLink = (platform: string, handle: string) => {
    switch (platform) {
      case "twitter":
        return `https://twitter.com/${handle.replace("@", "")}`;
      case "youtube":
        return `https://youtube.com/${handle}`;
      case "instagram":
        return `https://instagram.com/${handle}`;
      default:
        return "#";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>政治家一覧に戻る</span>
          </Button>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={politician.avatar}
                alt={politician.name}
                className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-lg"
              />
              {politician.importance === 5 && (
                <div className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  ⭐
                </div>
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">
                {politician.name}
              </h1>
              <p className="text-xl text-gray-600">{politician.position}</p>
              <div className="flex items-center space-x-3 mt-2">
                <Badge className={getPartyColor(politician.party)}>
                  {politician.party}
                </Badge>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{politician.age}歳</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{politician.constituency}</span>
                </div>
              </div>
            </div>

            {/* アクションボタン */}
            <div className="flex space-x-2">
              <Button variant="outline" className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span>フォロー</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Share2 className="h-4 w-4" />
                <span>シェア</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左カラム - 詳細情報 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 若者向け解説 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🎯</span>
                  <span>若者向けわかりやすい解説</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-gray-700">
                  {politician.youthFriendlyDesc}
                </p>
              </CardContent>
            </Card>

            {/* 詳細プロフィール */}
            <Card>
              <CardHeader>
                <CardTitle>詳細プロフィール</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {politician.profile}
                </p>
              </CardContent>
            </Card>

            {/* 主要政策 */}
            <Card>
              <CardHeader>
                <CardTitle>主要政策・取り組み</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {politician.keyPolicies.map((policy, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-medium text-blue-900">
                        {policy}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 主な実績 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>主な実績・経歴</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {politician.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 border-l-4 border-green-400 bg-green-50"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-green-900">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右カラム - サイドバー情報 */}
          <div className="space-y-6">
            {/* 基本情報 */}
            <Card>
              <CardHeader>
                <CardTitle>基本情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-600">年齢</span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{politician.age}歳</span>
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-600">選挙区</span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{politician.constituency}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-600">政治経験</span>
                  <span className="flex items-center space-x-1">
                    <ExternalLink className="h-4 w-4" />
                    <span>{politician.experience}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-600">フォロワー</span>
                  <span className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{politician.followers.toLocaleString()}人</span>
                  </span>
                </div>

                <div className="pt-2 border-t">
                  <span className="font-medium text-gray-600">学歴</span>
                  <div className="mt-2 flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">{politician.education}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SNS・連絡先 */}
            <Card>
              <CardHeader>
                <CardTitle>SNS・連絡先</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {politician.socialMedia.twitter && (
                  <a
                    href={getSocialLink(
                      "twitter",
                      politician.socialMedia.twitter
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Twitter</div>
                      <div className="text-sm text-gray-600">
                        {politician.socialMedia.twitter}
                      </div>
                    </div>
                  </a>
                )}

                {politician.socialMedia.youtube && (
                  <a
                    href={getSocialLink(
                      "youtube",
                      politician.socialMedia.youtube
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                  >
                    <Youtube className="h-5 w-5 text-red-500" />
                    <div>
                      <div className="font-medium">YouTube</div>
                      <div className="text-sm text-gray-600">
                        {politician.socialMedia.youtube}
                      </div>
                    </div>
                  </a>
                )}

                {politician.socialMedia.instagram && (
                  <a
                    href={getSocialLink(
                      "instagram",
                      politician.socialMedia.instagram
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-pink-500" />
                    <div>
                      <div className="font-medium">Instagram</div>
                      <div className="text-sm text-gray-600">
                        {politician.socialMedia.instagram}
                      </div>
                    </div>
                  </a>
                )}
              </CardContent>
            </Card>

            {/* 政党情報 */}
            <Card>
              <CardHeader>
                <CardTitle>所属政党</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4">
                  <Badge
                    className={`${getPartyColor(
                      politician.party
                    )} text-lg px-4 py-2`}
                  >
                    {politician.party}
                  </Badge>
                  <div className="mt-3 text-sm text-gray-600">
                    {partyInfo[politician.party as keyof typeof partyInfo]
                      ?.shortName || politician.party}
                    として活動
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* その他のアクション */}
            <Card>
              <CardContent className="space-y-3 pt-6">
                <Button className="w-full" size="lg">
                  <Heart className="h-4 w-4 mr-2" />
                  フォローする
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Share2 className="h-4 w-4 mr-2" />
                  友達にシェア
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Mail className="h-4 w-4 mr-2" />
                  意見を送る
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticianDetail;
