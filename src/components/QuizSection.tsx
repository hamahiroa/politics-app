
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Trophy, Star, RotateCcw, Share2 } from "lucide-react";

const QuizSection = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const quizzes = [
    {
      id: 1,
      question: "日本の国会は何院制ですか？",
      options: ["一院制", "二院制", "三院制", "四院制"],
      correct: 1,
      explanation: "日本の国会は衆議院と参議院からなる二院制です。衆議院は優越的地位を持ち、参議院は良識の府として機能します。",
      difficulty: "初級"
    },
    {
      id: 2,
      question: "選挙権が得られる年齢は？",
      options: ["16歳", "18歳", "20歳", "25歳"],
      correct: 1,
      explanation: "2016年から選挙権年齢が20歳から18歳に引き下げられました。これにより約240万人の有権者が新たに加わりました。",
      difficulty: "初級"
    },
    {
      id: 3,
      question: "衆議院議員の任期は何年ですか？",
      options: ["3年", "4年", "5年", "6年"],
      correct: 1,
      explanation: "衆議院議員の任期は4年ですが、解散により短縮される場合があります。参議院議員の任期は6年で解散はありません。",
      difficulty: "中級"
    },
    {
      id: 4,
      question: "日本の総理大臣を選ぶのは？",
      options: ["国民の直接選挙", "国会議員による選挙", "政党の代表選挙", "内閣による選任"],
      correct: 1,
      explanation: "総理大臣は国会議員の中から国会の議決で指名されます。通常は衆議院で多数を占める政党の党首が選ばれます。",
      difficulty: "中級"
    },
    {
      id: 5,
      question: "地方自治体の首長の任期は？",
      options: ["2年", "3年", "4年", "6年"],
      correct: 2,
      explanation: "都道府県知事や市町村長の任期は4年です。地方議会議員の任期も同じく4年となっています。",
      difficulty: "上級"
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showResult) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    
    if (selectedAnswer === quizzes[currentQuiz].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuiz < quizzes.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "初級": return "bg-green-100 text-green-800";
      case "中級": return "bg-yellow-100 text-yellow-800";
      case "上級": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getScoreMessage = () => {
    const percentage = (score / quizzes.length) * 100;
    if (percentage >= 90) return "🏆 パーフェクト！政治の知識は完璧です！";
    if (percentage >= 80) return "🌟 素晴らしい！政治の基礎知識はバッチリです！";
    if (percentage >= 60) return "👍 良い調子です！もう少し勉強してみましょう。";
    if (percentage >= 40) return "📚 まだまだ伸びしろがあります！政治について学んでみませんか？";
    return "🔰 基礎から学んでいきましょう！一歩ずつ進歩していけば大丈夫です。";
  };

  const getScoreLevel = () => {
    const percentage = (score / quizzes.length) * 100;
    if (percentage >= 80) return "政治エキスパート";
    if (percentage >= 60) return "政治通";
    if (percentage >= 40) return "政治初心者";
    return "政治ビギナー";
  };

  const shareResult = () => {
    const text = `PolYouthの政治クイズで${score}/${quizzes.length}問正解しました！レベル：${getScoreLevel()}`;
    if (navigator.share) {
      navigator.share({
        title: 'PolYouth 政治クイズ結果',
        text: text,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('結果をクリップボードにコピーしました！');
    }
  };

  if (quizCompleted) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">クイズ結果</h3>
          <p className="text-gray-600">お疲れさまでした！</p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Trophy className="h-16 w-16 text-yellow-500" />
            </div>
            <CardTitle className="text-2xl">スコア発表</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="space-y-2">
              <div className="text-6xl font-bold text-blue-600">
                {score}/{quizzes.length}
              </div>
              <Badge className="text-lg px-4 py-2">
                {getScoreLevel()}
              </Badge>
            </div>
            <div className="text-xl text-gray-700">
              {getScoreMessage()}
            </div>
            
            {/* 詳細結果 */}
            <div className="bg-gray-50 rounded-lg p-4 text-left">
              <h4 className="font-semibold mb-3 text-center">詳細結果</h4>
              <div className="space-y-2">
                {quizzes.map((quiz, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${
                      answers[index] === quiz.correct ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {answers[index] === quiz.correct ? '○' : '×'}
                    </span>
                    <span className="flex-1">問{index + 1}: {quiz.question}</span>
                  </div>
                ))}
              </div>
            </div>

            <Progress value={(score / quizzes.length) * 100} className="h-3" />
            
            <div className="flex justify-center space-x-4">
              <Button onClick={resetQuiz} className="flex items-center space-x-2">
                <RotateCcw className="h-4 w-4" />
                <span>もう一度挑戦</span>
              </Button>
              <Button variant="outline" onClick={shareResult} className="flex items-center space-x-2">
                <Share2 className="h-4 w-4" />
                <span>結果をシェア</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">政治クイズ</h3>
        <p className="text-gray-600">楽しく学んで政治知識をアップデート</p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>問題 {currentQuiz + 1} / {quizzes.length}</span>
            <span>現在のスコア: {score}/{currentQuiz + (showResult ? 1 : 0)}</span>
          </div>
          <Progress value={((currentQuiz + (showResult ? 1 : 0)) / quizzes.length) * 100} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <Badge className={getDifficultyColor(quizzes[currentQuiz].difficulty)}>
                {quizzes[currentQuiz].difficulty}
              </Badge>
              <div className="flex items-center space-x-1 text-gray-500">
                <Brain className="h-4 w-4" />
                <span className="text-sm">政治基礎知識</span>
              </div>
            </div>
            <CardTitle className="text-xl leading-relaxed">
              Q{currentQuiz + 1}. {quizzes[currentQuiz].question}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {quizzes[currentQuiz].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === index
                      ? showResult
                        ? index === quizzes[currentQuiz].correct
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-red-500 bg-red-50 text-red-700'
                        : 'border-blue-500 bg-blue-50'
                      : showResult && index === quizzes[currentQuiz].correct
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  } ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                      selectedAnswer === index
                        ? showResult
                          ? index === quizzes[currentQuiz].correct
                            ? 'border-green-500 bg-green-500 text-white'
                            : 'border-red-500 bg-red-500 text-white'
                          : 'border-blue-500 bg-blue-500 text-white'
                        : showResult && index === quizzes[currentQuiz].correct
                          ? 'border-green-500 bg-green-500 text-white'
                          : 'border-gray-300'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span>{option}</span>
                    {showResult && index === quizzes[currentQuiz].correct && (
                      <Star className="h-4 w-4 text-green-500 ml-auto" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {showResult && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                  {selectedAnswer === quizzes[currentQuiz].correct ? '🎉 正解！' : '❌ 不正解'}
                  <span className="ml-2 text-sm font-normal">解説</span>
                </h4>
                <p className="text-blue-800">{quizzes[currentQuiz].explanation}</p>
              </div>
            )}

            <div className="flex justify-end space-x-3 mt-6">
              {!showResult ? (
                <Button 
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="px-8"
                >
                  回答する
                </Button>
              ) : (
                <Button onClick={handleNextQuestion} className="px-8">
                  {currentQuiz < quizzes.length - 1 ? '次の問題へ' : '結果を見る'}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizSection;
