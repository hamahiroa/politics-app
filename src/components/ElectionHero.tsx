import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Clock,
  Users,
  TrendingUp,
  Vote,
  MapPin,
  Trophy,
  AlertCircle,
  Target,
  BarChart3,
  ArrowUp,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";
import {
  getNextElection,
  getCurrentElections,
  getDaysUntilElection,
  getCandidatesByElection,
  getYouthTurnoutTrend,
  voterTurnoutByAge,
  type Election,
  type Candidate,
} from "@/lib/electionData";

const ElectionHero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("18-19歳");

  const nextElection = getNextElection();
  const activeElections = getCurrentElections();
  const youthTrend = getYouthTurnoutTrend();

  // 現在の主要選挙の候補者を取得
  const mainElection =
    activeElections.length > 0 ? activeElections[0] : nextElection;
  const candidates = mainElection
    ? getCandidatesByElection(mainElection.id)
    : [];

  // リアルタイムクロック更新
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 時間フォーマット関数
  const formatTimeUntil = (targetDate: string) => {
    const now = currentTime;
    const target = new Date(targetDate);
    const diff = target.getTime() - now.getTime();

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const getPartyColor = (party: string): string => {
    const colors: { [key: string]: string } = {
      自由民主党: "bg-blue-500",
      立憲民主党: "bg-red-500",
      公明党: "bg-yellow-500",
      日本維新の会: "bg-orange-500",
      日本共産党: "bg-red-600",
      国民民主党: "bg-green-500",
      れいわ新選組: "bg-purple-500",
      市民党: "bg-teal-500",
      無所属: "bg-gray-500",
    };
    return colors[party] || "bg-gray-500";
  };

  if (!nextElection && activeElections.length === 0) {
    return (
      <section className="py-12 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            現在、予定されている選挙はありません
          </h2>
          <p className="text-gray-600">最新の選挙情報をお待ちください。</p>
        </div>
      </section>
    );
  }

  const displayElection =
    activeElections.length > 0 ? activeElections[0] : nextElection!;
  const timeUntil = formatTimeUntil(displayElection.date);
  const isActive = activeElections.length > 0;

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* メインヘッダー */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            {isActive ? (
              <Badge className="bg-red-500 text-white text-lg px-4 py-2 animate-pulse">
                🔴 選挙開催中
              </Badge>
            ) : (
              <Badge className="bg-blue-500 text-white text-lg px-4 py-2">
                📅 次回選挙予定
              </Badge>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {displayElection.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            {displayElection.description}
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{displayElection.constituency}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(displayElection.date).toLocaleDateString("ja-JP")}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Trophy className="h-4 w-4" />
              <span>重要度: {"⭐".repeat(displayElection.importance)}</span>
            </div>
          </div>
        </div>

        {/* カウントダウンタイマー */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
                  <Clock className="h-6 w-6 mr-2" />
                  {isActive ? "投票終了まで" : "選挙まで"}
                </h3>

                <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {[
                    { label: "日", value: timeUntil.days },
                    { label: "時間", value: timeUntil.hours },
                    { label: "分", value: timeUntil.minutes },
                    { label: "秒", value: timeUntil.seconds },
                  ].map((unit, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-2">
                        <div className="text-3xl md:text-4xl font-bold">
                          {unit.value}
                        </div>
                      </div>
                      <div className="text-sm opacity-90">{unit.label}</div>
                    </div>
                  ))}
                </div>

                {!isActive && displayElection.registrationDeadline && (
                  <div className="mt-6 p-4 bg-yellow-400 bg-opacity-20 rounded-lg">
                    <div className="flex items-center justify-center text-yellow-100">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      <span>
                        選挙人登録締切:{" "}
                        {new Date(
                          displayElection.registrationDeadline
                        ).toLocaleDateString("ja-JP")}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 統計情報とグラフ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* 若者投票率トレンド */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>若者投票率の変化</span>
                {youthTrend.improving ? (
                  <ArrowUp className="h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDown className="h-4 w-4 text-red-500" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div
                  className={`text-2xl font-bold ${
                    youthTrend.improving ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {youthTrend.improving ? "+" : ""}
                  {youthTrend.percentage}%
                </div>
                <div className="text-sm text-gray-600">
                  前回選挙比較（18-29歳平均）
                </div>
              </div>

              {/* 年代別投票率 */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">
                  年代別投票率（2021年）
                </h4>
                {voterTurnoutByAge.slice(0, 4).map((data, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{data.ageGroup}</span>
                      <span className="font-medium">{data.turnout2021}%</span>
                    </div>
                    <Progress
                      value={data.turnout2021}
                      className="h-2"
                      style={{
                        backgroundColor: index < 3 ? "#fecaca" : "#bbf7d0",
                      }}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 目標と行動促進 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>あなたにできること</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-medium">候補者を知ろう</div>
                    <div className="text-sm text-gray-600">
                      政策や経歴をチェック
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="font-medium">投票に行こう</div>
                    <div className="text-sm text-gray-600">
                      あなたの一票が未来を変える
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-purple-500" />
                  <div>
                    <div className="font-medium">友達にシェア</div>
                    <div className="text-sm text-gray-600">
                      投票の輪を広げよう
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="text-sm text-gray-600 mb-2">若者投票率目標</div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">55%</span>
                  <span className="text-sm">現在: 41.5%</span>
                </div>
                <Progress value={41.5} className="mt-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 候補者カード */}
        {candidates.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              📊 候補者一覧
              <span className="text-lg font-normal text-gray-600 ml-2">
                ({candidates.length}名)
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {candidates.map((candidate) => (
                <Card
                  key={candidate.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <div className="relative">
                        <img
                          src={candidate.avatar}
                          alt={candidate.name}
                          className="w-16 h-16 rounded-full mx-auto object-cover ring-2 ring-gray-200"
                        />
                        {candidate.isIncumbent && (
                          <div className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                            現
                          </div>
                        )}
                      </div>

                      <div>
                        <h4 className="font-bold text-lg">{candidate.name}</h4>
                        <p className="text-sm text-gray-600">
                          {candidate.position}
                        </p>
                        <Badge
                          className={`${getPartyColor(
                            candidate.party
                          )} text-white text-xs mt-1`}
                        >
                          {candidate.party}
                        </Badge>
                      </div>

                      {candidate.supportRate && (
                        <div>
                          <div className="text-sm text-gray-600 mb-1">
                            支持率
                          </div>
                          <div className="text-xl font-bold text-blue-600">
                            {candidate.supportRate}%
                          </div>
                          <Progress
                            value={candidate.supportRate}
                            className="mt-1"
                          />
                        </div>
                      )}

                      <div>
                        <div className="text-sm font-medium mb-2">
                          若者向け政策
                        </div>
                        <div className="space-y-1">
                          {candidate.youthPolicies
                            .slice(0, 2)
                            .map((policy, index) => (
                              <div
                                key={index}
                                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                              >
                                {policy}
                              </div>
                            ))}
                        </div>
                      </div>

                      <Button size="sm" variant="outline" className="w-full">
                        詳細を見る
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* アクションボタン */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Vote className="h-5 w-5 mr-2" />
              投票に行こう
            </Button>
            <Button size="lg" variant="outline">
              <Users className="h-5 w-5 mr-2" />
              友達に教える
            </Button>
            <Button size="lg" variant="outline">
              <TrendingUp className="h-5 w-5 mr-2" />
              政策を比較
            </Button>
          </div>

          <p className="text-sm text-gray-600 mt-4 max-w-2xl mx-auto">
            あなたの一票が日本の未来を決めます。政治に関心を持ち、積極的に参加しましょう！
          </p>
        </div>
      </div>
    </section>
  );
};

export default ElectionHero;
