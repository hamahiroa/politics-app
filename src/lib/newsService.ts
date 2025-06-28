import axios from "axios";

// NewsAPIのレスポンス型定義
interface NewsAPIArticle {
  title: string;
  description: string;
  content: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
}

// ニュース記事の型定義
export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  likes: number;
  comments: number;
  image: string;
  tag: string;
  publishedAt: string;
  url: string;
}

// 実際のニュースAPIからデータを取得する関数
export const fetchPoliticalNews = async (): Promise<NewsArticle[]> => {
  try {
    // NewsAPI（無料プランあり）を使用した例
    // 一時的な回避策：直接APIキーを設定
    const NEWS_API_KEY =
      import.meta.env.VITE_NEWS_API_KEY || "fa93cdd9db644abd8f7ee4e1a529dd93";

    // デバッグ用ログ
    console.log("環境変数確認:");
    console.log("VITE_NEWS_API_KEY:", import.meta.env.VITE_NEWS_API_KEY);
    console.log("使用するAPIキー:", NEWS_API_KEY);
    console.log("全環境変数:", import.meta.env);

    console.log("NewsAPIリクエスト開始...");

    // APIキーテスト - 最もシンプルなリクエスト
    console.log("APIキーテスト中...");
    let testResponse;
    try {
      testResponse = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          pageSize: 1,
          apiKey: NEWS_API_KEY,
        },
      });
      console.log("APIキーテスト結果:", testResponse.data);
    } catch (testError) {
      console.error("APIキーテストエラー:", testError.response?.data);
      if (testError.response?.status === 401) {
        console.error(
          "APIキーが無効です。フォールバックニュースを使用します。"
        );
        return getFallbackNews();
      }
    }

    // まず日本語のニュースを試行
    let response;
    try {
      console.log("日本の政治ニュース検索中...");
      // 日本の政治に特化した検索
      response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: '("日本政治" OR "国会" OR "内閣" OR "総理大臣" OR "選挙" OR "政策" OR "法案" OR "予算" OR "政府" OR "与党" OR "野党" OR "自民党" OR "立憲民主党" OR "公明党" OR "日本維新の会" OR "共産党" OR "国民民主党") AND (Japan OR 日本)',
          language: "ja",
          sortBy: "publishedAt",
          pageSize: 10, // 多めに取得してフィルタリング
          apiKey: NEWS_API_KEY,
          from: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split("T")[0], // 2週間前から
        },
      });

      console.log("日本政治ニュース検索結果:", response.data);

      // 日本政治ニュースが少ない場合、より広範囲で検索
      if (!response.data.articles || response.data.articles.length < 3) {
        console.log(
          "日本政治ニュースが少ない、日本のトップヘッドライン検索中..."
        );
        response = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            country: "jp",
            category: "general",
            pageSize: 8,
            apiKey: NEWS_API_KEY,
          },
        });

        console.log("日本トップヘッドライン結果:", response.data);

        // 政治関連記事をフィルタリング
        if (response.data.articles) {
          const politicalKeywords = [
            "政治",
            "国会",
            "内閣",
            "総理",
            "首相",
            "大臣",
            "選挙",
            "政策",
            "法案",
            "予算",
            "政府",
            "与党",
            "野党",
            "自民",
            "立憲",
            "公明",
            "維新",
            "共産",
            "国民民主",
          ];
          response.data.articles = response.data.articles.filter((article) =>
            politicalKeywords.some(
              (keyword) =>
                article.title?.includes(keyword) ||
                article.description?.includes(keyword)
            )
          );
          console.log(
            "政治関連記事フィルタリング後:",
            response.data.articles.length,
            "件"
          );
        }

        // それでも政治ニュースが少ない場合、英語ソースから日本政治ニュースを検索
        if (!response.data.articles || response.data.articles.length < 3) {
          console.log("英語ソースから日本政治ニュース検索中...");
          response = await axios.get("https://newsapi.org/v2/everything", {
            params: {
              q: '("Japanese politics" OR "Japan government" OR "Japan parliament" OR "Japan PM" OR "Japan election" OR "LDP Japan" OR "Kishida" OR "Japan policy") -sports -entertainment',
              language: "en",
              sortBy: "publishedAt",
              pageSize: 6,
              apiKey: NEWS_API_KEY,
              from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                .toISOString()
                .split("T")[0],
            },
          });
          console.log("英語日本政治ニュース結果:", response.data);
        }
      }
    } catch (jaError) {
      console.warn("日本政治ニュース取得失敗、代替手段を試行:", jaError);
      // エラー時のフォールバック：アメリカの一般ニュース
      try {
        response = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            country: "us",
            category: "general",
            pageSize: 6,
            apiKey: NEWS_API_KEY,
          },
        });
        console.log("代替ニュース取得結果:", response.data);
      } catch (usError) {
        console.error("すべてのニュース取得に失敗:", usError);
        return getFallbackNews();
      }
    }

    console.log("NewsAPI応答:", response);
    console.log("応答ステータス:", response.status);
    console.log("応答データ:", response.data);
    console.log("記事数:", response.data.articles?.length);
    console.log("最初の記事:", response.data.articles?.[0]);

    // 記事が取得できない場合の処理
    if (!response.data.articles || response.data.articles.length === 0) {
      console.warn("NewsAPIから記事が取得できませんでした:", response.data);
      console.log("フォールバックニュースを使用します");
      return getFallbackNews();
    }

    // 取得したニュースをGemini AIで要約して、アプリの形式に変換
    console.log("実際のニュースが取得できました！Gemini AI要約処理開始...");
    const processedNews = await Promise.all(
      response.data.articles
        .slice(0, 6)
        .map(async (article: NewsAPIArticle, index: number) => {
          console.log(`記事${index + 1}の要約処理中:`, article.title);

          try {
            const aiSummary = await summarizeNewsForYouth(
              article.description || article.content || article.title
            );

            console.log(
              `記事${index + 1}の要約完了:`,
              aiSummary.substring(0, 100) + "..."
            );

            return {
              id: `real-news-${index + 1}`,
              title: article.title,
              summary: aiSummary,
              category: categorizeNews(
                article.title + " " + (article.description || "")
              ),
              readTime: `${Math.ceil(aiSummary.length / 100)}分`,
              likes: Math.floor(Math.random() * 50) + 10, // ランダムな数値（実際はデータベースから）
              comments: Math.floor(Math.random() * 20) + 5,
              image: article.urlToImage || getDefaultImage(),
              tag: getNewsTag(article.publishedAt),
              publishedAt: article.publishedAt,
              url: article.url,
            };
          } catch (aiError) {
            console.error(`記事${index + 1}のAI要約に失敗:`, aiError);
            // AI要約に失敗した場合は、元の説明を使用
            return {
              id: `real-news-${index + 1}`,
              title: article.title,
              summary: article.description || article.title,
              category: categorizeNews(article.title),
              readTime: "2分",
              likes: Math.floor(Math.random() * 50) + 10,
              comments: Math.floor(Math.random() * 20) + 5,
              image: article.urlToImage || getDefaultImage(),
              tag: getNewsTag(article.publishedAt),
              publishedAt: article.publishedAt,
              url: article.url,
            };
          }
        })
    );

    console.log("実際のニュース処理完了:", processedNews);
    return processedNews.filter((news) => news !== null); // null要素を除去
  } catch (error) {
    console.error("ニュースの取得に失敗しました:", error);
    console.error("エラーの詳細:", error.response?.data);
    console.error("エラーステータス:", error.response?.status);
    console.log("フォールバックニュースを使用します");
    // エラー時はダミーデータを返す
    return getFallbackNews();
  }
};

// Gemini AIでニュースを若者向けに要約する関数
const summarizeNewsForYouth = async (content: string): Promise<string> => {
  try {
    // Gemini API を使用した例
    // 一時的な回避策：直接APIキーを設定
    const GEMINI_API_KEY =
      import.meta.env.VITE_GEMINI_API_KEY ||
      "AIzaSyBVB01Z-GmmPUecYGl1EELc_vn2h9keStc";

    if (!GEMINI_API_KEY || GEMINI_API_KEY === "your_gemini_api_key_here") {
      // APIキーがない場合は元のコンテンツを短縮
      return content.substring(0, 150) + "...";
    }

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `あなたは日本の政治に詳しい若者向けニュース要約の専門家です。以下の日本の政治ニュースを18-25歳の若者にも分かりやすく、120-180文字程度で要約してください。

【要約ルール】
1. 政治用語は分かりやすく説明（例：「衆議院」→「国の下の議会」、「法案」→「新しい法律の案」）
2. なぜ若者に関係するのかを明示
3. 専門用語には簡単な説明を付ける
4. 具体的な影響を示す（例：「学費」「就職」「働き方」「税金」など）
5. 親しみやすい表現で、でも正確に

【ニュース内容】
${content}

【若者向け要約】（120-180文字）：`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.8,
          maxOutputTokens: 300,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const generatedText = response.data.candidates[0].content.parts[0].text;
    return generatedText.trim();
  } catch (error) {
    console.error("Gemini AI要約に失敗しました:", error);
    // エラー時は元のコンテンツを短縮
    return content.substring(0, 150) + "...";
  }
};

// ニュースのカテゴリを自動判定（日本政治専用）
const categorizeNews = (text: string): string => {
  const lowerText = text.toLowerCase();

  // 選挙関連
  if (
    text.includes("選挙") ||
    text.includes("投票") ||
    text.includes("当選") ||
    text.includes("候補") ||
    lowerText.includes("election")
  ) {
    return "選挙";
  }

  // 経済・予算政策
  if (
    text.includes("経済") ||
    text.includes("予算") ||
    text.includes("税") ||
    text.includes("消費税") ||
    text.includes("所得税") ||
    text.includes("給付") ||
    text.includes("補助金") ||
    text.includes("景気") ||
    lowerText.includes("economy")
  ) {
    return "経済政策";
  }

  // 若者・教育関連
  if (
    text.includes("若者") ||
    text.includes("学生") ||
    text.includes("教育") ||
    text.includes("大学") ||
    text.includes("就職") ||
    text.includes("就活") ||
    text.includes("奨学金") ||
    text.includes("学費") ||
    text.includes("子育て")
  ) {
    return "若者・教育";
  }

  // 外交・安全保障
  if (
    text.includes("外交") ||
    text.includes("外相") ||
    text.includes("防衛") ||
    text.includes("安全保障") ||
    text.includes("アメリカ") ||
    text.includes("中国") ||
    text.includes("韓国") ||
    text.includes("北朝鮮") ||
    text.includes("ロシア") ||
    lowerText.includes("diplomatic")
  ) {
    return "外交・安保";
  }

  // 社会保障・医療
  if (
    text.includes("医療") ||
    text.includes("年金") ||
    text.includes("介護") ||
    text.includes("健康保険") ||
    text.includes("社会保障") ||
    text.includes("コロナ") ||
    text.includes("ワクチン") ||
    text.includes("高齢者")
  ) {
    return "社会保障";
  }

  // 環境・エネルギー
  if (
    text.includes("環境") ||
    text.includes("気候") ||
    text.includes("脱炭素") ||
    text.includes("再生可能エネルギー") ||
    text.includes("原発") ||
    text.includes("原子力") ||
    text.includes("電力") ||
    lowerText.includes("environment")
  ) {
    return "環境・エネルギー";
  }

  // 働き方・労働
  if (
    text.includes("働き方") ||
    text.includes("労働") ||
    text.includes("残業") ||
    text.includes("リモートワーク") ||
    text.includes("賃金") ||
    text.includes("最低賃金") ||
    text.includes("雇用") ||
    text.includes("転職")
  ) {
    return "働き方改革";
  }

  // デジタル・IT政策
  if (
    text.includes("デジタル") ||
    text.includes("DX") ||
    text.includes("AI") ||
    text.includes("マイナンバー") ||
    text.includes("オンライン") ||
    text.includes("サイバー") ||
    lowerText.includes("digital")
  ) {
    return "デジタル政策";
  }

  // 法案・制度改革
  if (
    text.includes("法案") ||
    text.includes("法律") ||
    text.includes("制度") ||
    text.includes("改革") ||
    text.includes("規制") ||
    text.includes("国会") ||
    text.includes("審議") ||
    text.includes("可決") ||
    text.includes("成立")
  ) {
    return "法案・制度";
  }

  // 政党・政治家
  if (
    text.includes("自民党") ||
    text.includes("立憲民主党") ||
    text.includes("公明党") ||
    text.includes("維新") ||
    text.includes("共産党") ||
    text.includes("国民民主党") ||
    text.includes("総理") ||
    text.includes("首相") ||
    text.includes("大臣") ||
    text.includes("党首") ||
    text.includes("議員")
  ) {
    return "政党・政治家";
  }

  // 一般政治（デフォルト）
  return "政治一般";
};

// ニュースのタグを生成
const getNewsTag = (publishedAt: string): string => {
  const now = new Date();
  const publishDate = new Date(publishedAt);
  const hoursDiff = (now.getTime() - publishDate.getTime()) / (1000 * 3600);

  if (hoursDiff < 6) return "速報";
  if (hoursDiff < 24) return "新着";
  if (hoursDiff < 48) return "注目";
  return "トレンド";
};

// デフォルト画像を取得
const getDefaultImage = (): string => {
  const defaultImages = [
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=200&fit=crop",
    "https://images.unsplash.com/photo-1541872676-2eb7c4ef1a8a?w=400&h=200&fit=crop",
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
  ];
  return defaultImages[Math.floor(Math.random() * defaultImages.length)];
};

// エラー時のフォールバック用ダミーデータ（日本政治特化版）
const getFallbackNews = (): NewsArticle[] => {
  return [
    {
      id: "fallback-jp-1",
      title: "岸田首相、若者向け政策パッケージを発表",
      summary:
        "政府が18-30歳を対象とした新しい支援策を発表。奨学金返済の負担軽減や就職活動支援の充実が柱となっており、若者の経済的不安の解消を目指します。",
      category: "若者・教育",
      readTime: "3分",
      likes: 89,
      comments: 24,
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=200&fit=crop",
      tag: "速報",
      publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      url: "#",
    },
    {
      id: "fallback-jp-2",
      title: "国会で働き方改革関連法案が可決、リモートワーク促進へ",
      summary:
        "コロナ禍で普及したリモートワークを法的に後押しする法案が衆議院で可決。企業に柔軟な働き方の導入を義務付け、若者世代の働き方に大きな変化が期待されます。",
      category: "働き方改革",
      readTime: "4分",
      likes: 156,
      comments: 43,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop",
      tag: "新着",
      publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      url: "#",
    },
    {
      id: "fallback-jp-3",
      title: "デジタル庁、AI活用した行政サービス改革を推進",
      summary:
        "政府がAI技術を活用した新しい行政サービスの導入を発表。マイナンバーカードと連携したデジタル手続きの簡素化で、若者の行政手続きが劇的に楽になりそうです。",
      category: "デジタル政策",
      readTime: "3分",
      likes: 203,
      comments: 67,
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
      tag: "注目",
      publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      url: "#",
    },
    {
      id: "fallback-jp-4",
      title: "18歳選挙権の効果で若者投票率が過去最高を記録",
      summary:
        "前回の衆議院選挙で18-25歳の投票率が初めて50%を超えました。SNSでの政治議論活発化と政治教育の充実が要因とされ、若者の政治参加意識の高まりが顕著に。",
      category: "選挙",
      readTime: "2分",
      likes: 298,
      comments: 89,
      image:
        "https://images.unsplash.com/photo-1541872676-2eb7c4ef1a8a?w=400&h=200&fit=crop",
      tag: "人気",
      publishedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
      url: "#",
    },
    {
      id: "fallback-jp-5",
      title: "脱炭素社会実現へ、政府が新エネルギー戦略を決定",
      summary:
        "2030年カーボンニュートラル達成に向け、再生可能エネルギーの大幅拡大を決定。若者世代が将来受け継ぐ環境問題解決への政府の本気度が問われています。",
      category: "環境・エネルギー",
      readTime: "4分",
      likes: 134,
      comments: 52,
      image:
        "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=200&fit=crop",
      tag: "トレンド",
      publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
      url: "#",
    },
    {
      id: "fallback-jp-6",
      title: "次期衆院選、各党が若者向けマニフェストを発表",
      summary:
        "来年の衆議院選挙に向け、各政党が若者向けの政策を前面に押し出したマニフェストを発表。教育費負担軽減、就職支援、住宅政策などが争点となりそうです。",
      category: "政党・政治家",
      readTime: "5分",
      likes: 187,
      comments: 76,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop",
      tag: "速報",
      publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      url: "#",
    },
  ];
};
