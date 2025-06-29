import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CheckCircle,
  Clock,
  MapPin,
  FileText,
  AlertCircle,
  Download,
  ExternalLink,
  X,
  Vote,
  Users,
  BarChart3,
  Navigation,
  Calendar,
  User,
  Heart,
  Share2,
  Zap,
  Target,
  TrendingUp,
  Info,
  Filter,
  Shuffle,
} from "lucide-react";
import {
  policyQuestions,
  currentElections,
  calculatePolicyMatch,
  analyzePolicyAlignment,
  type PolicyPosition,
  type Candidate,
  type ElectionInfo,
} from "@/data/votingData";

const VotingGuide = () => {
  // 政策マッチング状態
  const [currentStep, setCurrentStep] = useState<
    "intro" | "policy-quiz" | "results" | "candidate-detail" | "voting-info"
  >("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: number }>({});
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );
  const [selectedElection, setSelectedElection] = useState<ElectionInfo>(
    currentElections[0]
  );
  const [matchResults, setMatchResults] = useState<
    { candidate: Candidate; match: number; alignment: any[] }[]
  >([]);

  // 投票シミュレーション状態
  const [simulationMode, setSimulationMode] = useState(false);
  const [simulationVotes, setSimulationVotes] = useState<{
    [key: string]: string;
  }>({});

  // UI状態
  const [showLocationDetail, setShowLocationDetail] = useState(false);
  const [filterParty, setFilterParty] = useState<string>("all");

  // 政策マッチング計算
  const calculateMatches = () => {
    const results = selectedElection.candidates.map((candidate) => {
      const match = calculatePolicyMatch(userAnswers, candidate);
      const alignment = analyzePolicyAlignment(userAnswers, candidate);
      return { candidate, match, alignment };
    });

    results.sort((a, b) => b.match - a.match);
    setMatchResults(results);
    setCurrentStep("results");
  };

  // 回答処理
  const handleAnswer = (questionId: string, value: number) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: value }));

    if (currentQuestionIndex < policyQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      calculateMatches();
    }
  };

  // 投票日までの日数計算
  const getDaysUntilElection = (dateString: string) => {
    const electionDate = new Date(dateString);
    const today = new Date();
    const diffTime = electionDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // マッチ率による色分け
  const getMatchColor = (match: number) => {
    if (match >= 80) return "bg-green-500";
    if (match >= 60) return "bg-blue-500";
    if (match >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  // 政党フィルター
  const getParties = () => {
    return ["all", ...new Set(selectedElection.candidates.map((c) => c.party))];
  };

  const filteredCandidates =
    filterParty === "all"
      ? selectedElection.candidates
      : selectedElection.candidates.filter((c) => c.party === filterParty);

  // イントロ画面
  if (currentStep === "intro") {
    return (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            🗳️ AI投票ガイド
          </h3>
          <p className="text-xl text-gray-600 mb-6">
            あなたにピッタリの候補者を見つけよう
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">政策マッチング</h4>
                <p className="text-sm text-gray-600">
                  8つの政策分野であなたの価値観に最も近い候補者を発見
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:border-green-400 transition-colors">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">詳細比較</h4>
                <p className="text-sm text-gray-600">
                  候補者の政策、経歴、実績を詳細に比較・分析
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 hover:border-purple-400 transition-colors">
              <CardContent className="p-6 text-center">
                <Navigation className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">投票案内</h4>
                <p className="text-sm text-gray-600">
                  投票所の場所、時間、期日前投票の情報を提供
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center space-x-2">
              <Calendar className="h-6 w-6" />
              <span>次回選挙情報</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {selectedElection.name}
                  </h4>
                  <p className="text-gray-600 flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {selectedElection.prefecture}
                  </p>
                </div>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {selectedElection.type}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {getDaysUntilElection(selectedElection.date)}日
                  </div>
                  <div className="text-sm text-gray-600">投票まで</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {selectedElection.candidates.length}人
                  </div>
                  <div className="text-sm text-gray-600">候補者数</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    {selectedElection.turnoutRate}%
                  </div>
                  <div className="text-sm text-gray-600">前回投票率</div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-gray-700">
                  投票日:{" "}
                  <span className="font-semibold">
                    {new Date(selectedElection.date).toLocaleDateString(
                      "ja-JP"
                    )}
                  </span>
                </p>
                <div className="space-y-2">
                  <Button
                    onClick={() => setCurrentStep("policy-quiz")}
                    className="w-full md:w-auto mx-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                    size="lg"
                  >
                    <Zap className="h-5 w-5 mr-2" />
                    政策マッチング診断を開始
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep("voting-info")}
                    className="w-full md:w-auto mx-2"
                    size="lg"
                  >
                    <Info className="h-5 w-5 mr-2" />
                    投票情報を確認
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // 政策クイズ画面
  if (currentStep === "policy-quiz") {
    const currentQuestion = policyQuestions[currentQuestionIndex];
    const progress =
      ((currentQuestionIndex + 1) / policyQuestions.length) * 100;

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            政策マッチング診断
          </h3>
          <p className="text-gray-600 mb-4">
            質問 {currentQuestionIndex + 1} / {policyQuestions.length}
          </p>
          <Progress value={progress} className="h-2 mb-6" />
        </div>

        <Card>
          <CardHeader>
            <Badge className="w-fit mb-2">{currentQuestion.category}</Badge>
            <CardTitle className="text-xl">{currentQuestion.title}</CardTitle>
            <p className="text-gray-600">{currentQuestion.description}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <Card
                  key={index}
                  className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all"
                  onClick={() => handleAnswer(currentQuestion.id, option.value)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{option.label}</h4>
                        <p className="text-sm text-gray-600">
                          {option.description}
                        </p>
                      </div>
                      <div className="text-2xl text-blue-500 ml-4">
                        {index + 1}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() =>
                  currentQuestionIndex > 0
                    ? setCurrentQuestionIndex((prev) => prev - 1)
                    : setCurrentStep("intro")
                }
              >
                戻る
              </Button>
              <Button variant="outline" onClick={() => setCurrentStep("intro")}>
                診断を中止
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // 結果画面
  if (currentStep === "results") {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            🎯 マッチング結果
          </h3>
          <p className="text-gray-600 mb-6">
            あなたの政策価値観に最も近い候補者
          </p>
        </div>

        <Tabs defaultValue="ranking" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ranking">候補者ランキング</TabsTrigger>
            <TabsTrigger value="comparison">詳細比較</TabsTrigger>
            <TabsTrigger value="simulation">投票シミュレーション</TabsTrigger>
          </TabsList>

          <TabsContent value="ranking" className="space-y-4">
            {matchResults.map((result, index) => (
              <Card
                key={result.candidate.id}
                className={`${
                  index === 0 ? "border-gold ring-2 ring-yellow-200" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={result.candidate.image}
                          alt={result.candidate.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        {index === 0 && (
                          <div className="absolute -top-2 -right-2 bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                            1
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">
                          {result.candidate.name}
                        </h4>
                        <p className="text-gray-600">
                          {result.candidate.party}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {result.candidate.experience}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-3xl font-bold text-white px-4 py-2 rounded-lg ${getMatchColor(
                          result.match
                        )}`}
                      >
                        {result.match}%
                      </div>
                      <p className="text-sm text-gray-500 mt-1">マッチ率</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="font-semibold mb-2">政策一致度トップ3</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {result.alignment
                          .sort((a, b) => b.agreement - a.agreement)
                          .slice(0, 3)
                          .map((align, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">
                                  {align.category}
                                </span>
                                <span className="text-sm font-bold text-green-600">
                                  {align.agreement}%
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="font-semibold">主要政策</p>
                    <p className="text-sm text-gray-700">
                      {result.candidate.manifesto}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">
                          {result.candidate.supportRate}%
                        </div>
                        <div className="text-xs text-gray-500">支持率</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">
                          {result.candidate.age}歳
                        </div>
                        <div className="text-xs text-gray-500">年齢</div>
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        setSelectedCandidate(result.candidate);
                        setCurrentStep("candidate-detail");
                      }}
                      variant="outline"
                    >
                      詳細を見る
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="text-center pt-6">
              <Button
                onClick={() => setCurrentStep("intro")}
                variant="outline"
                className="mr-4"
              >
                最初に戻る
              </Button>
              <Button onClick={() => setCurrentStep("voting-info")}>
                投票所情報を確認
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>政策分野別比較</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {policyQuestions.map((question) => (
                    <div
                      key={question.id}
                      className="border-b pb-4 last:border-b-0"
                    >
                      <h4 className="font-semibold mb-3">{question.title}</h4>
                      <div className="space-y-2">
                        {matchResults.slice(0, 3).map((result) => {
                          const alignment = result.alignment.find(
                            (a) => a.category === question.category
                          );
                          return (
                            <div
                              key={result.candidate.id}
                              className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
                            >
                              <span className="font-medium">
                                {result.candidate.name}
                              </span>
                              <div className="flex items-center space-x-2">
                                <Progress
                                  value={alignment ? alignment.agreement : 0}
                                  className="w-24 h-2"
                                />
                                <span className="text-sm font-semibold w-12">
                                  {alignment ? alignment.agreement : 0}%
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="simulation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Vote className="h-5 w-5" />
                  <span>投票シミュレーション</span>
                </CardTitle>
                <p className="text-gray-600">
                  実際の投票用紙と同じ形式で投票を体験
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
                  <h4 className="text-lg font-bold mb-4 text-center">
                    投票用紙
                  </h4>
                  <div className="space-y-3">
                    {selectedElection.candidates.map((candidate) => (
                      <Card
                        key={candidate.id}
                        className={`cursor-pointer transition-all ${
                          simulationVotes[selectedElection.id] === candidate.id
                            ? "border-blue-500 bg-blue-50"
                            : "hover:border-gray-400"
                        }`}
                        onClick={() =>
                          setSimulationVotes((prev) => ({
                            ...prev,
                            [selectedElection.id]: candidate.id,
                          }))
                        }
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h5 className="font-semibold">
                                {candidate.name}
                              </h5>
                              <p className="text-sm text-gray-600">
                                {candidate.party}
                              </p>
                            </div>
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                simulationVotes[selectedElection.id] ===
                                candidate.id
                                  ? "border-blue-500 bg-blue-500"
                                  : "border-gray-300"
                              }`}
                            >
                              {simulationVotes[selectedElection.id] ===
                                candidate.id && (
                                <CheckCircle className="h-4 w-4 text-white" />
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {simulationVotes[selectedElection.id] && (
                    <div className="mt-6 p-4 bg-green-50 rounded-lg text-center">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="font-semibold text-green-800">
                        {
                          selectedElection.candidates.find(
                            (c) => c.id === simulationVotes[selectedElection.id]
                          )?.name
                        }{" "}
                        に投票しました
                      </p>
                      <p className="text-sm text-green-600 mt-1">
                        実際の投票でも忘れずに投票しましょう！
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  // 候補者詳細画面
  if (currentStep === "candidate-detail" && selectedCandidate) {
    const matchResult = matchResults.find(
      (r) => r.candidate.id === selectedCandidate.id
    );

    return (
      <div className="space-y-8">
        <div className="flex items-center space-x-4 mb-6">
          <Button variant="outline" onClick={() => setCurrentStep("results")}>
            ← 結果に戻る
          </Button>
          <h3 className="text-2xl font-bold">候補者詳細</h3>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src={selectedCandidate.image}
                  alt={selectedCandidate.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h4 className="text-2xl font-bold mb-2">
                  {selectedCandidate.name}
                </h4>
                <Badge className="mb-4">{selectedCandidate.party}</Badge>
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <div
                      className={`text-2xl font-bold text-white px-4 py-2 rounded-lg ${getMatchColor(
                        matchResult?.match || 0
                      )}`}
                    >
                      {matchResult?.match || 0}%
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">あなたとのマッチ率</p>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h5 className="font-semibold mb-2">基本情報</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>年齢: {selectedCandidate.age}歳</div>
                    <div>支持率: {selectedCandidate.supportRate}%</div>
                    <div>学歴: {selectedCandidate.education}</div>
                    <div>経歴: {selectedCandidate.experience}</div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">政策ビジョン</h5>
                  <p className="text-gray-700">{selectedCandidate.manifesto}</p>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">主要実績</h5>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {selectedCandidate.achievements.map(
                      (achievement, index) => (
                        <li key={index}>{achievement}</li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">政策一致度詳細</h5>
                  <div className="space-y-3">
                    {matchResult?.alignment.map((align, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm">{align.category}</span>
                        <div className="flex items-center space-x-2">
                          <Progress
                            value={align.agreement}
                            className="w-24 h-2"
                          />
                          <span className="text-sm font-semibold w-12">
                            {align.agreement}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">SNS・公式サイト</h5>
                  <div className="flex space-x-4">
                    {selectedCandidate.socialMedia.twitter && (
                      <Button variant="outline" size="sm">
                        Twitter
                      </Button>
                    )}
                    {selectedCandidate.socialMedia.youtube && (
                      <Button variant="outline" size="sm">
                        YouTube
                      </Button>
                    )}
                    {selectedCandidate.socialMedia.facebook && (
                      <Button variant="outline" size="sm">
                        Facebook
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // 投票情報画面
  if (currentStep === "voting-info") {
    return (
      <div className="space-y-8">
        <div className="flex items-center space-x-4 mb-6">
          <Button variant="outline" onClick={() => setCurrentStep("intro")}>
            ← ホームに戻る
          </Button>
          <h3 className="text-2xl font-bold">投票情報・案内</h3>
        </div>

        <Tabs defaultValue="locations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="locations">投票所案内</TabsTrigger>
            <TabsTrigger value="early-voting">期日前投票</TabsTrigger>
            <TabsTrigger value="checklist">投票チェックリスト</TabsTrigger>
          </TabsList>

          <TabsContent value="locations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>投票所一覧</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedElection.votingLocations.map((location) => (
                  <Card key={location.id} className="mb-4">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-lg">
                            {location.name}
                          </h4>
                          <p className="text-gray-600 flex items-center mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {location.address}
                          </p>
                        </div>
                        <Badge variant="secondary">{location.hours}</Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm font-semibold mb-1">アクセス</p>
                          <ul className="text-sm text-gray-600">
                            {location.publicTransport.map((transport, i) => (
                              <li key={i}>• {transport}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-1">
                            設備・アクセシビリティ
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {location.accessibility.map((feature, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="text-xs"
                              >
                                {feature}
                              </Badge>
                            ))}
                            {location.parking && (
                              <Badge variant="outline" className="text-xs">
                                駐車場あり
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Navigation className="h-4 w-4 mr-2" />
                          地図で見る
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          場所をシェア
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="early-voting" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>期日前投票情報</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedElection.earlyVotingInfo.available ? (
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800 mb-2">
                        期日前投票期間
                      </p>
                      <p className="text-blue-700">
                        {selectedElection.earlyVotingInfo.period}
                      </p>
                    </div>

                    {selectedElection.earlyVotingInfo.locations.map(
                      (location) => (
                        <Card key={location.id}>
                          <CardContent className="p-4">
                            <h4 className="font-semibold">{location.name}</h4>
                            <p className="text-gray-600 mb-2">
                              {location.address}
                            </p>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">
                                開設時間: {location.hours}
                              </span>
                              <Button variant="outline" size="sm">
                                詳細を見る
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    )}
                  </div>
                ) : (
                  <p className="text-gray-600">
                    この選挙では期日前投票は実施されません。
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="checklist" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>投票前チェックリスト</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "投票所入場券の確認（紛失しても身分証があれば投票可能）",
                    "身分証明書の準備（運転免許証、マイナンバーカードなど）",
                    "投票所の場所と時間の確認",
                    "候補者・政党の政策確認",
                    "投票用紙の記入方法の確認",
                    "期日前投票の検討（投票日に都合が悪い場合）",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    📋 投票当日の流れ
                  </h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-yellow-700">
                    <li>投票所入場券と身分証を持参</li>
                    <li>受付で本人確認</li>
                    <li>投票用紙を受け取る</li>
                    <li>記載台で候補者名を記入</li>
                    <li>投票箱に投票用紙を投函</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  return null;
};

export default VotingGuide;
