import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  Trophy,
  Star,
  RotateCcw,
  Share2,
  BookOpen,
  TrendingUp,
  Target,
  Clock,
  Zap,
  Award,
  BarChart3,
  Users,
  Calendar,
  Globe,
  Lightbulb,
  Shield,
  History,
  CheckCircle,
  XCircle,
  AlertCircle,
  Shuffle,
  Filter,
  Play,
  Pause,
  Settings,
} from "lucide-react";
import {
  quizCategories,
  quizQuestions,
  getUserLevel,
  analyzeWeakAreas,
  getNextQuestionByPerformance,
  getLatestCurrentAffairsQuestions,
  difficultyPoints,
  type QuizQuestion,
  type QuizCategory,
} from "@/data/quizData";

interface QuizAttempt {
  questionId: string;
  correct: boolean;
  selectedAnswer: number;
  timeSpent: number;
  difficulty: string;
}

interface UserStats {
  totalPoints: number;
  totalQuestions: number;
  correctAnswers: number;
  categoryStats: { [key: string]: { correct: number; total: number } };
  recentAttempts: QuizAttempt[];
  achievements: string[];
  level: string;
  streak: number;
  bestStreak: number;
}

const QuizSection = () => {
  // クイズ状態
  const [currentMode, setCurrentMode] = useState<
    "category-select" | "quiz" | "results" | "analytics"
  >("category-select");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(
    null
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [sessionQuestions, setSessionQuestions] = useState<QuizQuestion[]>([]);

  // タイマー状態
  const [timeSpent, setTimeSpent] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  // セッション状態
  const [sessionAttempts, setSessionAttempts] = useState<QuizAttempt[]>([]);
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionStreak, setSessionStreak] = useState(0);

  // ユーザー統計（本来はローカルストレージやAPIから取得）
  const [userStats, setUserStats] = useState<UserStats>({
    totalPoints: 450,
    totalQuestions: 89,
    correctAnswers: 67,
    categoryStats: {
      constitution: { correct: 15, total: 20 },
      "current-affairs": { correct: 12, total: 18 },
      politicians: { correct: 18, total: 22 },
      policy: { correct: 14, total: 17 },
      election: { correct: 8, total: 12 },
    },
    recentAttempts: [],
    achievements: ["初回クイズ完了", "10問連続正解", "時事問題マスター"],
    level: "政治中級者",
    streak: 3,
    bestStreak: 12,
  });

  // タイマー効果
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerActive) {
      interval = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive]);

  // クイズ開始
  const startQuiz = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentMode("quiz");
    setCurrentQuestionIndex(0);
    setSessionAttempts([]);
    setSessionScore(0);
    setSessionStreak(0);
    setTimeSpent(0);
    setIsTimerActive(true);

    // カテゴリに応じたクイズ問題を選択
    const availableQuestions = quizQuestions.filter(
      (q) => q.category === categoryId
    );
    const shuffled = availableQuestions.sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffled.slice(0, 10);

    setSessionQuestions(selectedQuestions);
    setCurrentQuestion(selectedQuestions[0] || null);
  };

  // 回答処理
  const handleAnswer = (answerIndex: number) => {
    if (!currentQuestion || selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);
    setIsTimerActive(false);

    const isCorrect = answerIndex === currentQuestion.correct;
    const points = isCorrect ? difficultyPoints[currentQuestion.difficulty] : 0;

    const attempt: QuizAttempt = {
      questionId: currentQuestion.id,
      correct: isCorrect,
      selectedAnswer: answerIndex,
      timeSpent: timeSpent,
      difficulty: currentQuestion.difficulty,
    };

    setSessionAttempts((prev) => [...prev, attempt]);

    if (isCorrect) {
      setSessionScore((prev) => prev + points);
      setSessionStreak((prev) => prev + 1);
    } else {
      setSessionStreak(0);
    }
  };

  // 次の問題
  const nextQuestion = () => {
    if (currentQuestionIndex < sessionQuestions.length - 1) {
      const nextQ = sessionQuestions[currentQuestionIndex + 1];
      setCurrentQuestion(nextQ);
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowExplanation(false);
      setTimeSpent(0);
      setIsTimerActive(true);
    } else {
      // クイズ終了
      setCurrentMode("results");
      setIsTimerActive(false);
    }
  };

  // カテゴリ選択画面
  if (currentMode === "category-select") {
    return (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            🧠 政治クイズチャレンジ
          </h3>
          <p className="text-xl text-gray-600 mb-6">
            実際の政治データで知識をテスト
          </p>

          {/* ユーザー統計 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-4 text-center">
                <Trophy className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-700">
                  {userStats.totalPoints}
                </div>
                <div className="text-sm text-blue-600">総ポイント</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-4 text-center">
                <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-700">
                  {Math.round(
                    (userStats.correctAnswers / userStats.totalQuestions) * 100
                  )}
                  %
                </div>
                <div className="text-sm text-green-600">正答率</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-4 text-center">
                <Zap className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-700">
                  {userStats.streak}
                </div>
                <div className="text-sm text-purple-600">連続正解</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="p-4 text-center">
                <Star className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-sm font-bold text-orange-700">
                  {userStats.level}
                </div>
                <div className="text-xs text-orange-600">レベル</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* クイズカテゴリ選択 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizCategories.map((category) => {
            const stats = userStats.categoryStats[category.id];
            const accuracy = stats
              ? Math.round((stats.correct / stats.total) * 100)
              : 0;

            return (
              <Card
                key={category.id}
                className="hover:shadow-lg transition-all cursor-pointer group hover:scale-105"
                onClick={() => startQuiz(category.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>問題数</span>
                      <span className="font-semibold">
                        {category.totalQuestions}問
                      </span>
                    </div>
                    {stats && (
                      <>
                        <div className="flex justify-between text-sm">
                          <span>あなたの正答率</span>
                          <span
                            className={`font-semibold ${
                              accuracy >= 80
                                ? "text-green-600"
                                : accuracy >= 60
                                ? "text-blue-600"
                                : "text-yellow-600"
                            }`}
                          >
                            {accuracy}%
                          </span>
                        </div>
                        <Progress value={accuracy} className="h-2" />
                      </>
                    )}
                    <div className="flex flex-wrap gap-1">
                      {category.subcategories.slice(0, 3).map((sub) => (
                        <Badge key={sub} variant="outline" className="text-xs">
                          {sub}
                        </Badge>
                      ))}
                      {category.subcategories.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{category.subcategories.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  // クイズ画面
  if (currentMode === "quiz" && currentQuestion) {
    const progress =
      ((currentQuestionIndex + 1) / sessionQuestions.length) * 100;

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {/* ヘッダー */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {quizCategories.find((c) => c.id === selectedCategory)?.name ||
                "特別チャレンジ"}
            </h3>
            <p className="text-gray-600">
              問題 {currentQuestionIndex + 1} / {sessionQuestions.length}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="font-mono">
                {Math.floor(timeSpent / 60)}:
                {(timeSpent % 60).toString().padStart(2, "0")}
              </span>
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentMode("category-select")}
            >
              終了
            </Button>
          </div>
        </div>

        <Progress value={progress} className="h-2" />

        {/* 問題カード */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start mb-4">
              <div className="flex space-x-2">
                <Badge variant="secondary">{currentQuestion.category}</Badge>
                {currentQuestion.subcategory && (
                  <Badge variant="outline">{currentQuestion.subcategory}</Badge>
                )}
                <Badge
                  className={`${
                    currentQuestion.difficulty === "初級"
                      ? "bg-green-100 text-green-800"
                      : currentQuestion.difficulty === "中級"
                      ? "bg-blue-100 text-blue-800"
                      : currentQuestion.difficulty === "上級"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {currentQuestion.difficulty}
                </Badge>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">獲得可能ポイント</div>
                <div className="font-bold text-blue-600">
                  {currentQuestion.points}pt
                </div>
              </div>
            </div>
            <CardTitle className="text-xl leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!showResult ? (
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full p-4 h-auto text-left justify-start hover:bg-blue-50 hover:border-blue-300"
                    onClick={() => handleAnswer(index)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-semibold">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="flex-1">{option}</span>
                    </div>
                  </Button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {/* 答え表示 */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 ${
                        index === currentQuestion.correct
                          ? "border-green-500 bg-green-50"
                          : index === selectedAnswer
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                            index === currentQuestion.correct
                              ? "bg-green-500 text-white"
                              : index === selectedAnswer
                              ? "bg-red-500 text-white"
                              : "bg-gray-200"
                          }`}
                        >
                          {index === currentQuestion.correct ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : index === selectedAnswer ? (
                            <XCircle className="h-5 w-5" />
                          ) : (
                            String.fromCharCode(65 + index)
                          )}
                        </div>
                        <span className="flex-1">{option}</span>
                        {index === currentQuestion.correct && (
                          <Badge className="bg-green-500">正解</Badge>
                        )}
                        {index === selectedAnswer &&
                          index !== currentQuestion.correct && (
                            <Badge variant="destructive">あなたの回答</Badge>
                          )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 結果と解説 */}
                <div
                  className={`p-4 rounded-lg ${
                    selectedAnswer === currentQuestion.correct
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    {selectedAnswer === currentQuestion.correct ? (
                      <>
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-800">
                          正解！
                        </span>
                        <Badge className="bg-green-500">
                          +{currentQuestion.points}pt
                        </Badge>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 text-red-600" />
                        <span className="font-semibold text-red-800">
                          不正解
                        </span>
                      </>
                    )}
                  </div>

                  {showExplanation && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <h4 className="font-semibold mb-2">解説</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {currentQuestion.explanation}
                      </p>

                      {currentQuestion.relatedTopics.length > 0 && (
                        <div className="mt-3">
                          <p className="text-sm font-semibold mb-2">
                            関連トピック
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {currentQuestion.relatedTopics.map((topic) => (
                              <Badge
                                key={topic}
                                variant="outline"
                                className="text-xs"
                              >
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowExplanation(!showExplanation)}
                  >
                    {showExplanation ? "解説を閉じる" : "解説を見る"}
                  </Button>
                  <Button onClick={nextQuestion}>
                    {currentQuestionIndex < sessionQuestions.length - 1
                      ? "次の問題"
                      : "結果を見る"}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* セッション統計 */}
        {sessionAttempts.length > 0 && (
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center text-sm">
                <div>
                  現在のスコア:{" "}
                  <span className="font-bold text-blue-600">
                    {sessionScore}pt
                  </span>
                </div>
                <div>
                  連続正解:{" "}
                  <span className="font-bold text-green-600">
                    {sessionStreak}
                  </span>
                </div>
                <div>
                  正答率:{" "}
                  <span className="font-bold">
                    {Math.round(
                      (sessionAttempts.filter((a) => a.correct).length /
                        sessionAttempts.length) *
                        100
                    )}
                    %
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  // 結果画面
  if (currentMode === "results") {
    const correct = sessionAttempts.filter((a) => a.correct).length;
    const total = sessionAttempts.length;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    return (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            🎯 クイズ結果
          </h3>
          <p className="text-gray-600">お疲れさまでした！</p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {accuracy >= 80 ? (
                <Trophy className="h-16 w-16 text-yellow-500" />
              ) : accuracy >= 60 ? (
                <Award className="h-16 w-16 text-blue-500" />
              ) : (
                <Target className="h-16 w-16 text-gray-500" />
              )}
            </div>
            <CardTitle className="text-2xl">結果発表</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* スコア表示 */}
            <div className="text-center space-y-2">
              <div className="text-6xl font-bold text-blue-600">
                {correct}/{total}
              </div>
              <div className="text-2xl font-semibold text-gray-700">
                正答率 {accuracy}%
              </div>
              <Badge className="text-lg px-4 py-2">
                {sessionScore}ポイント獲得
              </Badge>
            </div>

            {/* メッセージ */}
            <div className="text-center text-xl text-gray-700">
              {accuracy >= 90
                ? "🏆 パーフェクト！政治の知識は完璧です！"
                : accuracy >= 80
                ? "🌟 素晴らしい！政治の基礎知識はバッチリです！"
                : accuracy >= 60
                ? "👍 良い調子です！もう少し勉強してみましょう。"
                : accuracy >= 40
                ? "📚 まだまだ伸びしろがあります！政治について学んでみませんか？"
                : "🔰 基礎から学んでいきましょう！一歩ずつ進歩していけば大丈夫です。"}
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => setCurrentMode("category-select")}
                className="flex items-center space-x-2"
              >
                <RotateCcw className="h-4 w-4" />
                <span>もう一度挑戦</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const text = `PolYouthの政治クイズで${correct}/${total}問正解しました！正答率${accuracy}%、${sessionScore}ポイント獲得！`;
                  if (navigator.share) {
                    navigator.share({
                      title: "PolYouth 政治クイズ結果",
                      text: text,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(text);
                    alert("結果をクリップボードにコピーしました！");
                  }
                }}
                className="flex items-center space-x-2"
              >
                <Share2 className="h-4 w-4" />
                <span>結果をシェア</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export default QuizSection;
