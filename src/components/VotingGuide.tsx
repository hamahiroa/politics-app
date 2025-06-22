
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, MapPin, FileText, AlertCircle } from "lucide-react";

const VotingGuide = () => {
  const steps = [
    {
      id: 1,
      title: "投票権の確認",
      description: "18歳以上で住民票がある地域で投票できます",
      completed: true,
      icon: CheckCircle
    },
    {
      id: 2,
      title: "投票所入場券の確認",
      description: "選挙前に自宅に送られてくる入場券を確認しましょう",
      completed: false,
      icon: FileText
    },
    {
      id: 3,
      title: "候補者・政党の調査",
      description: "各候補者の政策や経歴を事前に調べておきましょう",
      completed: false,
      icon: AlertCircle
    },
    {
      id: 4,
      title: "投票日当日",
      description: "身分証明書を持参して投票所へ向かいましょう",
      completed: false,
      icon: MapPin
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "投票受付中": return "bg-green-100 text-green-800";
      case "候補者受付中": return "bg-yellow-100 text-yellow-800";
      case "準備中": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">投票ガイド</h3>
        <p className="text-gray-600">初めての投票も安心、ステップバイステップで案内</p>
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
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  step.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.completed ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-semibold">{step.id}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{step.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t">
            <Button className="w-full">
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
          <CardTitle>投票前チェックリスト</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              "投票所入場券の準備",
              "身分証明書の準備",
              "候補者・政党の政策確認",
              "投票所の場所と時間の確認",
              "期日前投票の検討"
            ].map((item, index) => (
              <label key={index} className="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">{item}</span>
              </label>
            ))}
          </div>
          <div className="mt-6">
            <Button variant="outline" className="w-full">
              チェックリストをダウンロード
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VotingGuide;
