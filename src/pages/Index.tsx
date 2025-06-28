import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Vote, Users, TrendingUp, BookOpen, Calendar } from "lucide-react";
import NewsCard from "@/components/NewsCard";
import PoliticianProfile from "@/components/PoliticianProfile";
import QuizSection from "@/components/QuizSection";
import VotingGuide from "@/components/VotingGuide";
import ElectionHero from "@/components/ElectionHero";

const Index = () => {
  const [activeTab, setActiveTab] = useState("news");

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

      {/* New Election Hero Section */}
      <ElectionHero />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="news" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              ニュース
            </TabsTrigger>
            <TabsTrigger
              value="politicians"
              className="flex items-center gap-2"
            >
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
