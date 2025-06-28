
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, MapPin, FileText, AlertCircle, Download, ExternalLink, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const VotingGuide = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false, false]);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>([true, false, false, false]);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const steps = [
    {
      id: 1,
      title: "投票権の確認",
      description: "18歳以上で住民票がある地域で投票できます",
      completed: true,
      icon: CheckCircle,
      details: "投票権を得るためには、18歳以上であること、日本国籍を有すること、住民票の登録から3ヶ月以上経過していることが必要です。"
    },
    {
      id: 2,
      title: "投票所入場券の確認",
      description: "選挙前に自宅に送られてくる入場券を確認しましょう",
      completed: completedSteps[1],
      icon: FileText,
      details: "投票所入場券は選挙の告示後、各世帯に郵送されます。紛失した場合でも身分証明書があれば投票可能です。"
    },
    {
      id: 3,
      title: "候補者・政党の調査",
      description: "各候補者の政策や経歴を事前に調べておきましょう",
      completed: completedSteps[2],
      icon: AlertCircle,
      details: "選挙公報、候補者のウェブサイト、公開討論会などを通じて、各候補者の政策や人柄を確認しましょう。"
    },
    {
      id: 4,
      title: "投票日当日",
      description: "身分証明書を持参して投票所へ向かいましょう",
      completed: completedSteps[3],
      icon: MapPin,
      details: "投票日は朝7時から夜8時まで。身分証明書を持参し、投票所入場券があるとスムーズです。"
    }
  ];

  const upcomingElections = [
    {
      type: "市議会議員選挙",
      date: "2024年4月21日",
      location: "東京都渋谷区",
      status: "投票受付中",
      daysLeft: 15
    },
    {
      type: "県知事選挙", 
      date: "2024年5月12日",
      location: "神奈川県",
      status: "候補者受付中",
      daysLeft: 36
    },
    {
      type: "参議院補欠選挙",
      date: "2024年6月2日", 
      location: "大阪府",
      status: "準備中",
      daysLeft: 57
    }
  ];

  const checklistItems = [
    "投票所入場券の準備",
    "身分証明書の準備",
    "候補者・政党の政策確認",
    "投票所の場所と時間の確認",
    "期日前投票の検討"
  ];

  const handleChecklistChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleStepComplete = (stepIndex: number) => {
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[stepIndex] = !newCompletedSteps[stepIndex];
    setCompletedSteps(newCompletedSteps);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "投票受付中": return "bg-green-100 text-green-800";
      case "候補者受付中": return "bg-yellow-100 text-yellow-800";
      case "準備中": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const completedChecklist = checkedItems.filter(Boolean).length;
  const completedStepsCount = completedSteps.filter(Boolean).length;

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">投票ガイド</h3>
        <p className="text-gray-600">初めての投票も安心、ステップバイステップで案内</p>
        <div className="mt-4 text-sm text-gray-500">
          進捗: {completedStepsCount}/{steps.length} ステップ完了
        </div>
      </div>

      {/* 投票の流れ */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>投票の流れ</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                  step.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`} onClick={() => handleStepComplete(index)}>
                  {step.completed ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-semibold">{step.id}</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{step.title}</DialogTitle>
                        </DialogHeader>
                        <p className="text-gray-600">{step.details}</p>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t">
            <Button className="w-full" onClick={() => setShowDetailModal(true)}>
              詳しい投票方法を見る
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 予定されている選挙 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <span>予定されている選挙</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingElections.map((election, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{election.type}</h4>
                    <p className="text-sm text-gray-600 flex items-center space-x-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{election.location}</span>
                    </p>
                  </div>
                  <Badge className={getStatusColor(election.status)}>
                    {election.status}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="text-gray-600">投票日: </span>
                    <span className="font-semibold">{election.date}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">{election.daysLeft}日</div>
                    <div className="text-xs text-gray-500">残り</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 投票前チェックリスト */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>投票前チェックリスト</span>
            <Badge variant={completedChecklist === checklistItems.length ? "default" : "secondary"}>
              {completedChecklist}/{checklistItems.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {checklistItems.map((item, index) => (
              <label key={index} className="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  checked={checkedItems[index]}
                  onChange={() => handleChecklistChange(index)}
                />
                <span className={`text-gray-700 ${checkedItems[index] ? 'line-through text-gray-500' : ''}`}>
                  {item}
                </span>
              </label>
            ))}
          </div>
          <div className="mt-6 space-y-2">
            <Button variant="outline" className="w-full flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>チェックリストをダウンロード</span>
            </Button>
            {completedChecklist === checklistItems.length && (
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 font-semibold">🎉 準備完了！投票の準備が整いました</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VotingGuide;
