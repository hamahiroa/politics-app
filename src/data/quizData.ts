// 政治クイズ用の実際のデータベース

export interface QuizQuestion {
  id: string;
  category: string;
  subcategory?: string;
  difficulty: "初級" | "中級" | "上級" | "エキスパート";
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  source?: string;
  relatedTopics: string[];
  points: number;
  image?: string;
  lastUpdated: string;
}

export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  totalQuestions: number;
  subcategories: string[];
}

export interface UserQuizProgress {
  categoryId: string;
  totalAttempted: number;
  totalCorrect: number;
  averageScore: number;
  lastAttempted: string;
  weakAreas: string[];
  strengths: string[];
}

// クイズカテゴリ定義
export const quizCategories: QuizCategory[] = [
  {
    id: "constitution",
    name: "憲法・政治制度",
    description: "日本の憲法と政治制度の基礎知識",
    icon: "⚖️",
    totalQuestions: 50,
    subcategories: ["基本的人権", "統治機構", "憲法改正", "地方自治"],
  },
  {
    id: "current-affairs",
    name: "時事問題",
    description: "最新の政治ニュースと政策動向",
    icon: "📰",
    totalQuestions: 80,
    subcategories: ["国内政治", "国際情勢", "経済政策", "社会問題"],
  },
  {
    id: "politicians",
    name: "政治家・政党",
    description: "主要政治家と政党の政策・歴史",
    icon: "👥",
    totalQuestions: 60,
    subcategories: ["現職閣僚", "党首・代表", "歴代総理", "地方政治家"],
  },
  {
    id: "policy",
    name: "政策理解",
    description: "主要政策分野の詳細な理解",
    icon: "📊",
    totalQuestions: 70,
    subcategories: ["経済政策", "社会保障", "外交・安保", "環境・エネルギー"],
  },
  {
    id: "election",
    name: "選挙制度",
    description: "選挙制度と投票システムの知識",
    icon: "🗳️",
    totalQuestions: 40,
    subcategories: ["選挙制度", "投票方法", "選挙運動", "政治資金"],
  },
  {
    id: "history",
    name: "政治史",
    description: "戦後日本政治の重要な出来事と変遷",
    icon: "📚",
    totalQuestions: 55,
    subcategories: ["戦後復興", "高度成長", "政治改革", "平成・令和"],
  },
];

// 実際の政治クイズデータ
export const quizQuestions: QuizQuestion[] = [
  // 憲法・政治制度 - 初級
  {
    id: "const_001",
    category: "constitution",
    subcategory: "統治機構",
    difficulty: "初級",
    question: "日本の国会は何院制ですか？",
    options: ["一院制", "二院制", "三院制", "四院制"],
    correct: 1,
    explanation:
      "日本の国会は衆議院と参議院からなる二院制です。衆議院は優越的地位を持ち、参議院は良識の府として機能します。二院制により、より慎重な審議と相互のチェック機能を実現しています。",
    relatedTopics: ["国会", "衆議院", "参議院", "立法府"],
    points: 10,
    lastUpdated: "2024-12-01",
  },
  {
    id: "const_002",
    category: "constitution",
    subcategory: "基本的人権",
    difficulty: "初級",
    question: "選挙権が得られる年齢は何歳からですか？",
    options: ["16歳", "18歳", "20歳", "25歳"],
    correct: 1,
    explanation:
      "2016年の公職選挙法改正により、選挙権年齢が20歳から18歳に引き下げられました。これにより約240万人の有権者が新たに加わり、若者の政治参加が促進されています。",
    relatedTopics: ["選挙権", "公職選挙法", "若者政治参加", "法改正"],
    points: 10,
    lastUpdated: "2024-12-01",
  },

  // 時事問題 - 中級
  {
    id: "current_001",
    category: "current-affairs",
    subcategory: "国内政治",
    difficulty: "中級",
    question:
      "2024年10月の衆議院選挙で、自民党が過半数を失った主な要因として最も適切なものは？",
    options: [
      "経済政策への不満",
      "政治資金問題への批判",
      "外交政策への反発",
      "コロナ対策への評価",
    ],
    correct: 1,
    explanation:
      "2024年衆院選では、自民党の政治資金問題（裏金問題）が大きな争点となり、有権者の政治不信が高まったことが議席減の主要因とされています。透明性の高い政治への要求が強まりました。",
    source: "2024年衆議院選挙結果分析",
    relatedTopics: ["政治資金問題", "2024年衆院選", "政治不信", "自民党"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "current_002",
    category: "current-affairs",
    subcategory: "経済政策",
    difficulty: "中級",
    question:
      "石破内閣が重点政策として掲げている「新しい資本主義」の中核となる取り組みは？",
    options: [
      "デジタル田園都市国家構想",
      "スタートアップ育成",
      "人への投資",
      "グリーントランスフォーメーション",
    ],
    correct: 2,
    explanation:
      "石破内閣は「人への投資」を新しい資本主義の中核に据え、スキルアップ支援、賃上げ促進、働き方改革を通じて人的資本の価値向上を図っています。これにより持続的な経済成長を目指しています。",
    relatedTopics: ["新しい資本主義", "人への投資", "石破内閣", "経済政策"],
    points: 20,
    lastUpdated: "2024-12-01",
  },

  // 政治家・政党 - 上級
  {
    id: "pol_001",
    category: "politicians",
    subcategory: "現職閣僚",
    difficulty: "上級",
    question:
      "現在の外務大臣として、どの国際会議で日本の立場を表明することが多いのは？",
    options: ["G7外相会合", "ASEAN+3", "日米2+2", "国連総会"],
    correct: 0,
    explanation:
      "林芳正外務大臣は、G7外相会合において日本の外交政策の基本方針を表明し、国際協調を重視する日本の立場を説明する役割を担っています。G7は価値を共有する先進民主主義国家の枠組みです。",
    relatedTopics: ["林芳正", "外務大臣", "G7", "外交政策"],
    points: 30,
    lastUpdated: "2024-12-01",
  },

  // 政策理解 - エキスパート
  {
    id: "policy_001",
    category: "policy",
    subcategory: "社会保障",
    difficulty: "エキスパート",
    question: "2025年度の社会保障関係費（予算）が過去最高となった主な要因は？",
    options: [
      "高齢化による医療費増加",
      "少子化対策の大幅拡充",
      "介護保険制度の見直し",
      "年金制度の抜本改革",
    ],
    correct: 1,
    explanation:
      "2025年度予算では、少子化対策として児童手当の拡充、保育所整備、育児休業給付の充実などが大幅に拡充され、社会保障関係費の大幅増となりました。次世代育成への投資が重点化されています。",
    relatedTopics: ["社会保障", "少子化対策", "2025年度予算", "児童手当"],
    points: 40,
    lastUpdated: "2024-12-01",
  },

  // 選挙制度 - 中級
  {
    id: "elect_001",
    category: "election",
    subcategory: "選挙制度",
    difficulty: "中級",
    question:
      "衆議院小選挙区比例代表並立制において、比例代表の議席数は何議席ですか？",
    options: ["176議席", "180議席", "200議席", "242議席"],
    correct: 0,
    explanation:
      "衆議院は小選挙区289議席、比例代表176議席の計465議席で構成されています。比例代表は全国11ブロックに分かれ、政党名投票により各党の得票率に応じて議席が配分されます。",
    relatedTopics: ["衆議院", "小選挙区", "比例代表", "選挙制度"],
    points: 20,
    lastUpdated: "2024-12-01",
  },

  // 政治史 - 上級
  {
    id: "hist_001",
    category: "history",
    subcategory: "政治改革",
    difficulty: "上級",
    question: "1994年の政治改革で導入された制度として正しいものは？",
    options: [
      "政党助成制度",
      "企業団体献金の全面禁止",
      "選挙区定数の完全平等化",
      "参議院の直接選挙制",
    ],
    correct: 0,
    explanation:
      "1994年の政治改革では、政治資金の透明化を図るため政党助成制度が導入されました。これにより政党の政治活動に国費が助成される一方、企業団体献金は政党・政治資金団体に限定されました。",
    relatedTopics: ["政治改革", "政党助成制度", "政治資金", "1994年"],
    points: 30,
    lastUpdated: "2024-12-01",
  },

  // より多くの実際の時事問題
  {
    id: "current_003",
    category: "current-affairs",
    subcategory: "国際情勢",
    difficulty: "中級",
    question: "2024年の日米首脳会談で合意された防衛協力の新たな枠組みは？",
    options: [
      "日米統合司令部の設置",
      "防衛装備品の共同開発拡大",
      "宇宙・サイバー分野の協力強化",
      "全て正しい",
    ],
    correct: 3,
    explanation:
      "2024年の日米首脳会談では、統合司令部設置、防衛装備品共同開発、宇宙・サイバー協力など包括的な防衛協力強化が合意されました。これは変化する安全保障環境への対応です。",
    relatedTopics: ["日米首脳会談", "日米同盟", "防衛協力", "安全保障"],
    points: 20,
    lastUpdated: "2024-12-01",
  },

  // 若者向け政策クイズ
  {
    id: "youth_001",
    category: "policy",
    subcategory: "教育・若者",
    difficulty: "初級",
    question: "2024年から拡充された奨学金制度の新しい特徴は？",
    options: [
      "返済期間の延長",
      "給付型奨学金の対象拡大",
      "利子の完全免除",
      "成績要件の緩和",
    ],
    correct: 1,
    explanation:
      "2024年から給付型奨学金（返済不要）の対象が中間所得層にも拡大され、より多くの学生が利用できるようになりました。教育費負担軽減により、若者の学習機会確保を図っています。",
    relatedTopics: ["奨学金", "教育支援", "若者政策", "給付型奨学金"],
    points: 15,
    lastUpdated: "2024-12-01",
  },

  // デジタル政策
  {
    id: "digital_001",
    category: "policy",
    subcategory: "デジタル政策",
    difficulty: "中級",
    question: "マイナンバーカードの健康保険証利用が開始された年は？",
    options: ["2021年", "2022年", "2023年", "2024年"],
    correct: 0,
    explanation:
      "2021年10月からマイナンバーカードの健康保険証利用が開始されました。デジタル庁設立と合わせて、行政のデジタル化が本格的に推進されています。",
    relatedTopics: [
      "マイナンバーカード",
      "デジタル庁",
      "行政DX",
      "デジタル政策",
    ],
    points: 20,
    lastUpdated: "2024-12-01",
  },
];

// クイズ難易度別ポイント
export const difficultyPoints = {
  初級: 10,
  中級: 20,
  上級: 30,
  エキスパート: 40,
};

// ユーザーレベル判定
export const getUserLevel = (totalPoints: number): string => {
  if (totalPoints >= 1000) return "政治エキスパート";
  if (totalPoints >= 600) return "政治上級者";
  if (totalPoints >= 300) return "政治中級者";
  if (totalPoints >= 100) return "政治初級者";
  return "政治ビギナー";
};

// 学習推奨エリア分析
export const analyzeWeakAreas = (
  attempts: { questionId: string; correct: boolean }[]
): string[] => {
  const categoryCorrectRates: {
    [key: string]: { correct: number; total: number };
  } = {};

  attempts.forEach((attempt) => {
    const question = quizQuestions.find((q) => q.id === attempt.questionId);
    if (question) {
      if (!categoryCorrectRates[question.category]) {
        categoryCorrectRates[question.category] = { correct: 0, total: 0 };
      }
      categoryCorrectRates[question.category].total++;
      if (attempt.correct) {
        categoryCorrectRates[question.category].correct++;
      }
    }
  });

  const weakAreas: string[] = [];
  Object.entries(categoryCorrectRates).forEach(([category, stats]) => {
    const correctRate = stats.correct / stats.total;
    if (correctRate < 0.6 && stats.total >= 3) {
      // 60%未満かつ3問以上
      const categoryInfo = quizCategories.find((c) => c.id === category);
      if (categoryInfo) {
        weakAreas.push(categoryInfo.name);
      }
    }
  });

  return weakAreas;
};

// 時事問題の自動更新チェック
export const getLatestCurrentAffairsQuestions = (): QuizQuestion[] => {
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

  return quizQuestions.filter(
    (q) =>
      q.category === "current-affairs" &&
      new Date(q.lastUpdated) > threeMonthsAgo
  );
};

// アダプティブクイズ（正答率に応じて難易度調整）
export const getNextQuestionByPerformance = (
  categoryId: string,
  recentPerformance: boolean[],
  excludeIds: string[] = []
): QuizQuestion | null => {
  const recentCorrectRate =
    recentPerformance.length > 0
      ? recentPerformance.filter(Boolean).length / recentPerformance.length
      : 0.5;

  let targetDifficulty: string;
  if (recentCorrectRate >= 0.8) {
    targetDifficulty = recentCorrectRate >= 0.9 ? "エキスパート" : "上級";
  } else if (recentCorrectRate >= 0.6) {
    targetDifficulty = "中級";
  } else {
    targetDifficulty = "初級";
  }

  const availableQuestions = quizQuestions.filter(
    (q) =>
      q.category === categoryId &&
      q.difficulty === targetDifficulty &&
      !excludeIds.includes(q.id)
  );

  if (availableQuestions.length === 0) {
    // フォールバック: 難易度に関係なく同カテゴリから選択
    const fallbackQuestions = quizQuestions.filter(
      (q) => q.category === categoryId && !excludeIds.includes(q.id)
    );
    return fallbackQuestions.length > 0
      ? fallbackQuestions[Math.floor(Math.random() * fallbackQuestions.length)]
      : null;
  }

  return availableQuestions[
    Math.floor(Math.random() * availableQuestions.length)
  ];
};
