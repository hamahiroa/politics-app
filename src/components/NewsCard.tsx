
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Share2, MessageCircle, Clock } from "lucide-react";

const NewsCard = () => {
  const newsItems = [
    {
      id: 1,
      title: "若者向け政策説明会が開催決定",
      summary: "来月、全国10都市で若者の声を政策に反映させるための説明会が開催されます。参加無料で事前申込制です。",
      category: "政策",
      readTime: "3分",
      likes: 24,
      comments: 8,
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=200&fit=crop",
      tag: "新着"
    },
    {
      id: 2,
      title: "選挙権年齢引き下げから8年、投票率の変化",
      summary: "18歳選挙権導入から8年が経過。若者の政治参加は増加傾向にあるものの、まだ改善の余地があります。",
      category: "統計",
      readTime: "5分",
      likes: 42,
      comments: 15,
      image: "https://images.unsplash.com/photo-1541872676-2eb7c4ef1a8a?w=400&h=200&fit=crop",
      tag: "人気"
    },
    {
      id: 3,
      title: "SNSで政治情報を得る若者が増加",
      summary: "最新の調査によると、18-29歳の70%がSNSを通じて政治情報を収集していることが判明しました。",
      category: "調査",
      readTime: "4分",
      likes: 18,
      comments: 6,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
      tag: "トレンド"
    }
  ];

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "新着": return "bg-green-100 text-green-800";
      case "人気": return "bg-orange-100 text-orange-800";
      case "トレンド": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">政治ニュース</h3>
        <p className="text-gray-600">若者に関係する政治ニュースを分かりやすく</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <Badge className={`absolute top-3 left-3 ${getTagColor(item.tag)}`}>
                {item.tag}
              </Badge>
            </div>
            
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="text-xs">
                  {item.category}
                </Badge>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  {item.readTime}
                </div>
              </div>
              <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.summary}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 text-gray-500">
                  <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                    <Heart className="h-4 w-4" />
                    <span className="text-xs">{item.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-xs">{item.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
                <Button size="sm" variant="outline">
                  続きを読む
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
