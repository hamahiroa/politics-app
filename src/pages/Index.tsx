
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Vote, 
  Users, 
  TrendingUp, 
  BookOpen, 
  Calendar,
  Heart,
  Share2,
  MessageCircle
} from "lucide-react";
import NewsCard from "@/components/NewsCard";
import PoliticianProfile from "@/components/PoliticianProfile";
import QuizSection from "@/components/QuizSection";
import VotingGuide from "@/components/VotingGuide";

const Index = () => {
  const [activeTab, setActiveTab] = useState("news");

  const quickStats = [
    { icon: Vote, label: "次回選挙まで", value: "120日", color: "bg-blue-500" },
    { icon: Users, label: "若者投票率", value: "42.3%", color: "bg-orange-500" },
    { icon: TrendingUp, label: "政治関心度", value: "上昇中", color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Vote className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PolYouth
              </h1>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              ログイン
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            政治を
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              もっと身近に
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            若者の視点で政治を分かりやすく。ニュース、解説、投票ガイドまで、政治参加の第一歩をサポートします。
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {quickStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-full ${stat.color} mb-4`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="news" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              ニュース
            </TabsTrigger>
            <TabsTrigger value="politicians" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              政治家
            </TabsTrigger>
            <TabsTrigger value="guide" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              投票ガイド
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              クイズ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="space-y-6">
            <NewsCard />
          </TabsContent>

          <TabsContent value="politicians" className="space-y-6">
            <PoliticianProfile />
          </TabsContent>

          <TabsContent value="guide" className="space-y-6">
            <VotingGuide />
          </TabsContent>

          <TabsContent value="quiz" className="space-y-6">
            <QuizSection />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default Index;
