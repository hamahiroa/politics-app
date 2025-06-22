
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, ExternalLink, Users } from "lucide-react";

const PoliticianProfile = () => {
  const politicians = [
    {
      id: 1,
      name: "田中 花子",
      party: "青年党",
      position: "衆議院議員",
      age: 35,
      constituency: "東京3区",
      keyPolicies: ["教育改革", "就職支援", "環境対策"],
      profile: "若者の声を政治に届けることを使命とし、特に教育と就職支援に力を入れている。",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face",
      followers: 12500,
      experience: "3年"
    },
    {
      id: 2,
      name: "佐藤 太郎",
      party: "未来党",
      position: "参議院議員",
      age: 42,
      constituency: "全国比例",
      keyPolicies: ["デジタル化推進", "働き方改革", "子育て支援"],
      profile: "IT業界出身で、政治のデジタル化と働き方改革を推進。子育て世代の支援にも注力。",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      followers: 8300,
      experience: "6年"
    },
    {
      id: 3,
      name: "山田 美咲",
      party: "緑の党",
      position: "地方議員",
      age: 28,
      constituency: "大阪市",
      keyPolicies: ["環境保護", "若者支援", "地域活性化"],
      profile: "最年少で当選した環境活動家出身の議員。地域に根ざした活動を重視している。",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      followers: 5200,
      experience: "2年"
    }
  ];

  const getPartyColor = (party: string) => {
    switch (party) {
      case "青年党": return "bg-blue-100 text-blue-800";
      case "未来党": return "bg-purple-100 text-purple-800";
      case "緑の党": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">政治家プロフィール</h3>
        <p className="text-gray-600">若者に身近な政治家の情報をチェック</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {politicians.map((politician) => (
          <Card key={politician.id} className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="flex flex-col items-center space-y-3">
                <img 
                  src={politician.avatar} 
                  alt={politician.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-xl">{politician.name}</CardTitle>
                  <p className="text-gray-600">{politician.position}</p>
                </div>
                <Badge className={getPartyColor(politician.party)}>
                  {politician.party}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{politician.age}歳</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{politician.constituency}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{politician.followers.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <ExternalLink className="h-4 w-4" />
                  <span>経験{politician.experience}</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">主要政策</h4>
                <div className="flex flex-wrap gap-2">
                  {politician.keyPolicies.map((policy, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {policy}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {politician.profile}
              </p>
              
              <div className="flex space-x-2">
                <Button size="sm" className="flex-1">
                  詳細を見る
                </Button>
                <Button size="sm" variant="outline">
                  フォロー
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PoliticianProfile;
