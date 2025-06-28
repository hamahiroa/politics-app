import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Share2,
  MessageCircle,
  Clock,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchPoliticalNews, NewsArticle } from "@/lib/newsService";

const NewsCard = () => {
  // React Queryを使って実際のニュースデータを取得
  const {
    data: newsItems = [],
    isLoading,
    error,
    refetch,
  } = useQuery<NewsArticle[]>({
    queryKey: ["political-news"],
    queryFn: fetchPoliticalNews,
    staleTime: 1000 * 60 * 30, // 30分間はキャッシュを使用
    refetchInterval: 1000 * 60 * 60, // 1時間ごとに自動更新
    retry: 2,
  });

  // デバッグ用ログ
  console.log("NewsCard状態確認:");
  console.log("isLoading:", isLoading);
  console.log("error:", error);
  console.log("newsItems:", newsItems);
  console.log("newsItems.length:", newsItems.length);

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "速報":
        return "bg-red-100 text-red-800";
      case "新着":
        return "bg-green-100 text-green-800";
      case "人気":
        return "bg-orange-100 text-orange-800";
      case "注目":
        return "bg-purple-100 text-purple-800";
      case "トレンド":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // ローディング状態の表示
  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            政治ニュース
          </h3>
          <p className="text-gray-600">AIが最新の政治ニュースを取得中...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <Card key={index} className="animate-pulse">
              <div className="w-full h-48 bg-gray-200 rounded-t-lg"></div>
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-6 bg-gray-200 rounded w-full"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin text-blue-500 mx-auto" />
          <p className="text-sm text-gray-500 mt-2">
            最新のニュースを取得しています...
          </p>
        </div>
      </div>
    );
  }

  // エラー状態の表示
  if (error) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            政治ニュース
          </h3>
          <p className="text-gray-600">AIが最新の政治ニュースをお届け</p>
        </div>

        <Card className="max-w-md mx-auto">
          <CardContent className="text-center py-8">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">
              ニュースの取得に失敗しました
            </h4>
            <p className="text-gray-600 mb-4">
              ネットワーク接続を確認して、もう一度お試しください。
            </p>
            <Button
              onClick={() => refetch()}
              className="flex items-center space-x-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>再読み込み</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">政治ニュース</h3>
        <p className="text-gray-600">AIが最新の政治ニュースを若者向けに要約</p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <Badge variant="outline" className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>リアルタイム更新</span>
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => refetch()}
            className="flex items-center space-x-1"
          >
            <RefreshCw className="h-4 w-4" />
            <span>更新</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <Card
            key={item.id}
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=200&fit=crop";
                }}
              />
              <Badge
                className={`absolute top-3 left-3 ${getTagColor(item.tag)}`}
              >
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
              <CardTitle className="text-lg leading-tight line-clamp-2">
                {item.title}
              </CardTitle>
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
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    item.url !== "#" && window.open(item.url, "_blank")
                  }
                >
                  続きを読む
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {newsItems.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">現在表示できるニュースがありません。</p>
          <Button
            onClick={() => refetch()}
            className="mt-4 flex items-center space-x-2"
          >
            <RefreshCw className="h-4 w-4" />
            <span>ニュースを取得</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default NewsCard;
