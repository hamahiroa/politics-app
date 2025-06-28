import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  ExternalLink,
  Users,
  GraduationCap,
  Award,
  Twitter,
  Youtube,
  Instagram,
  Filter,
  Eye,
} from "lucide-react";
import {
  politiciansData,
  partyInfo,
  getPoliticiansByParty,
  getAllParties,
  type Politician,
} from "@/lib/politiciansData";

const PoliticianProfile = () => {
  const navigate = useNavigate();
  const [selectedParty, setSelectedParty] = useState<string>("全て");
  const [displayedPoliticians, setDisplayedPoliticians] = useState<
    Politician[]
  >(getPoliticiansByParty());

  const handlePartyFilter = (party: string) => {
    setSelectedParty(party);
    setDisplayedPoliticians(getPoliticiansByParty(party));
  };

  const handleViewDetails = (politicianId: string) => {
    navigate(`/politician/${politicianId}`);
  };

  const getPartyColor = (party: string) => {
    return (
      partyInfo[party as keyof typeof partyInfo]?.color ||
      "bg-gray-100 text-gray-800"
    );
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "twitter":
        return <Twitter className="h-4 w-4" />;
      case "youtube":
        return <Youtube className="h-4 w-4" />;
      case "instagram":
        return <Instagram className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          政治家プロフィール
        </h3>
        <p className="text-gray-600">
          実際の日本の政治家の情報をわかりやすく紹介
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 text-xs"
          >
            📊 リアルタイム情報
          </Badge>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 text-xs">
            🏛️ 主要7政党
          </Badge>
          <Badge
            variant="outline"
            className="bg-purple-50 text-purple-700 text-xs"
          >
            🎯 若者向け解説
          </Badge>
        </div>
      </div>

      {/* 政党フィルター */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex items-center space-x-3 mb-3">
          <Filter className="h-4 w-4 text-gray-600" />
          <h4 className="text-base font-semibold">政党で絞り込み</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedParty === "全て" ? "default" : "outline"}
            size="sm"
            onClick={() => handlePartyFilter("全て")}
            className="text-xs h-8"
          >
            全て ({politiciansData.length})
          </Button>
          {getAllParties().map((party) => {
            const count = politiciansData.filter(
              (p) => p.party === party
            ).length;
            return (
              <Button
                key={party}
                variant={selectedParty === party ? "default" : "outline"}
                size="sm"
                onClick={() => handlePartyFilter(party)}
                className="text-xs h-8"
              >
                {partyInfo[party as keyof typeof partyInfo]?.shortName} ({count}
                )
              </Button>
            );
          })}
        </div>
      </div>

      {/* 政治家カード一覧 - よりコンパクトに */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {displayedPoliticians.map((politician) => (
          <Card
            key={politician.id}
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* コンパクトなカードヘッダー */}
            <CardHeader className="text-center p-4 pb-2">
              <div className="flex flex-col items-center space-y-2">
                <div className="relative">
                  <img
                    src={politician.avatar}
                    alt={politician.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200"
                  />
                  {politician.importance === 5 && (
                    <div className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                      ⭐
                    </div>
                  )}
                </div>

                <div className="space-y-1 text-center">
                  <CardTitle className="text-sm leading-tight">
                    {politician.name}
                  </CardTitle>
                  <p className="text-xs text-gray-600 font-medium truncate">
                    {politician.position}
                  </p>
                </div>

                <Badge
                  className={`${getPartyColor(
                    politician.party
                  )} text-xs px-2 py-1`}
                >
                  {partyInfo[politician.party as keyof typeof partyInfo]
                    ?.shortName || politician.party}
                </Badge>
              </div>
            </CardHeader>

            {/* コンパクトなカードコンテンツ */}
            <CardContent className="p-4 pt-2 space-y-3">
              {/* 基本情報 - 2列 */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center space-x-1 text-gray-600">
                  <Calendar className="h-3 w-3" />
                  <span>{politician.age}歳</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Users className="h-3 w-3" />
                  <span>{(politician.followers / 1000).toFixed(0)}K</span>
                </div>
              </div>

              {/* 選挙区 */}
              <div className="text-xs text-gray-600 text-center truncate">
                📍 {politician.constituency}
              </div>

              {/* 主要政策 - 最大2つ */}
              <div className="flex flex-wrap gap-1 justify-center">
                {politician.keyPolicies.slice(0, 2).map((policy, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-2 py-0.5"
                  >
                    {policy}
                  </Badge>
                ))}
                {politician.keyPolicies.length > 2 && (
                  <Badge variant="secondary" className="text-xs px-2 py-0.5">
                    +{politician.keyPolicies.length - 2}
                  </Badge>
                )}
              </div>

              {/* 若者向け説明 - 短縮版 */}
              <div className="bg-blue-50 p-2 rounded text-center">
                <p className="text-xs text-blue-700 leading-relaxed line-clamp-2">
                  {politician.youthFriendlyDesc.substring(0, 60)}...
                </p>
              </div>

              {/* SNS アイコン - 小さく */}
              {(politician.socialMedia.twitter ||
                politician.socialMedia.youtube ||
                politician.socialMedia.instagram) && (
                <div className="flex justify-center space-x-1">
                  {politician.socialMedia.twitter && (
                    <Button size="sm" variant="outline" className="p-1 h-6 w-6">
                      <Twitter className="h-2.5 w-2.5" />
                    </Button>
                  )}
                  {politician.socialMedia.youtube && (
                    <Button size="sm" variant="outline" className="p-1 h-6 w-6">
                      <Youtube className="h-2.5 w-2.5" />
                    </Button>
                  )}
                  {politician.socialMedia.instagram && (
                    <Button size="sm" variant="outline" className="p-1 h-6 w-6">
                      <Instagram className="h-2.5 w-2.5" />
                    </Button>
                  )}
                </div>
              )}

              {/* アクションボタン - コンパクト */}
              <div className="flex space-x-1">
                <Button
                  size="sm"
                  className="flex-1 text-xs h-7"
                  onClick={() => handleViewDetails(politician.id)}
                >
                  <Eye className="h-3 w-3 mr-1" />
                  詳細
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-7 px-2"
                >
                  フォロー
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 統計情報 - コンパクト */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
        <h4 className="text-base font-semibold mb-3 text-center">
          📊 政治家データ統計
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div>
            <div className="text-xl font-bold text-blue-600">
              {displayedPoliticians.length}
            </div>
            <div className="text-xs text-gray-600">表示中</div>
          </div>
          <div>
            <div className="text-xl font-bold text-green-600">
              {Math.round(
                displayedPoliticians.reduce((sum, p) => sum + p.age, 0) /
                  displayedPoliticians.length
              )}
            </div>
            <div className="text-xs text-gray-600">平均年齢</div>
          </div>
          <div>
            <div className="text-xl font-bold text-purple-600">
              {displayedPoliticians.filter((p) => p.age < 50).length}
            </div>
            <div className="text-xs text-gray-600">50歳未満</div>
          </div>
          <div>
            <div className="text-xl font-bold text-orange-600">
              {selectedParty === "全て" ? getAllParties().length : 1}
            </div>
            <div className="text-xs text-gray-600">政党数</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticianProfile;
