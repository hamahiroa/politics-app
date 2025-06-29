// 選挙関連データ（2024年想定）

export interface Election {
  id: string;
  name: string;
  type: "国政" | "地方" | "参議院" | "衆議院" | "都道府県" | "市町村";
  date: string; // YYYY-MM-DD format
  isActive: boolean;
  description: string;
  importance: 1 | 2 | 3 | 4 | 5;
  constituency: string;
  registrationDeadline?: string;
}

export interface Candidate {
  id: string;
  name: string;
  party: string;
  age: number;
  position: string;
  constituency: string;
  electionId: string;
  policies: string[];
  experience: string;
  avatar: string;
  socialMedia: {
    twitter?: string;
    youtube?: string;
    instagram?: string;
  };
  supportRate?: number; // 支持率（%）
  isIncumbent: boolean; // 現職かどうか
  youthPolicies: string[]; // 若者向け政策
}

export interface VoterTurnoutData {
  ageGroup: string;
  turnout2021: number;
  turnout2019: number;
  turnout2017: number;
  target2024: number;
}

// 現在の選挙情報
export const currentElections: Election[] = [
  {
    id: "tokyo-gov-2024",
    name: "東京都知事選挙2024",
    type: "都道府県",
    date: "2024-07-07",
    isActive: true,
    description: "東京都の未来を決める重要な選挙",
    importance: 5,
    constituency: "東京都",
    registrationDeadline: "2024-06-20",
  },
  {
    id: "osaka-gov-2024",
    name: "大阪府知事選挙2024",
    type: "都道府県",
    date: "2024-08-15",
    isActive: false,
    description: "関西経済の中心地、大阪の行方を決める選挙",
    importance: 4,
    constituency: "大阪府",
    registrationDeadline: "2024-08-01",
  },
  {
    id: "kanagawa-assembly-2024",
    name: "神奈川県議会議員選挙",
    type: "地方",
    date: "2024-09-22",
    isActive: false,
    description: "神奈川県政の方向性を決める議会選挙",
    importance: 3,
    constituency: "神奈川県",
    registrationDeadline: "2024-09-08",
  },
];

// 次の主要選挙
export const upcomingElections: Election[] = [
  {
    id: "house-representatives-2025",
    name: "衆議院議員総選挙",
    type: "衆議院",
    date: "2025-10-30", // 予想日
    isActive: false,
    description: "日本の政治の方向性を決める最重要選挙",
    importance: 5,
    constituency: "全国",
    registrationDeadline: "2025-10-15",
  },
  {
    id: "house-councillors-2025",
    name: "参議院議員通常選挙",
    type: "参議院",
    date: "2025-07-10", // 予想日
    isActive: false,
    description: "国政の安定を左右する重要な選挙",
    importance: 4,
    constituency: "全国",
  },
  {
    id: "yokohama-mayor-2025",
    name: "横浜市長選挙",
    type: "市町村",
    date: "2025-04-20",
    isActive: false,
    description: "日本最大の政令指定都市の市長を選ぶ",
    importance: 4,
    constituency: "横浜市",
    registrationDeadline: "2025-04-05",
  },
  {
    id: "kyoto-gov-2025",
    name: "京都府知事選挙",
    type: "都道府県",
    date: "2025-06-15",
    isActive: false,
    description: "古都京都の未来を担うリーダーを選出",
    importance: 3,
    constituency: "京都府",
    registrationDeadline: "2025-06-01",
  },
  {
    id: "sapporo-assembly-2025",
    name: "札幌市議会議員選挙",
    type: "地方",
    date: "2025-03-30",
    isActive: false,
    description: "北海道の中心都市札幌の市政を担う",
    importance: 2,
    constituency: "札幌市",
    registrationDeadline: "2025-03-15",
  },
  {
    id: "fukuoka-mayor-2025",
    name: "福岡市長選挙",
    type: "市町村",
    date: "2025-11-12",
    isActive: false,
    description: "九州最大都市のトップを決める選挙",
    importance: 3,
    constituency: "福岡市",
    registrationDeadline: "2025-10-28",
  },
  {
    id: "local-unified-2025-spring",
    name: "統一地方選挙2025春",
    type: "地方",
    date: "2025-04-14",
    isActive: false,
    description: "全国各地の知事・市町村長・議会議員を一斉選出",
    importance: 4,
    constituency: "全国",
    registrationDeadline: "2025-03-30",
  },
  {
    id: "chiba-gov-2025",
    name: "千葉県知事選挙",
    type: "都道府県",
    date: "2025-12-08",
    isActive: false,
    description: "首都圏の重要な一角、千葉県政のリーダー選出",
    importance: 3,
    constituency: "千葉県",
    registrationDeadline: "2025-11-24",
  },
];

// 年代別投票率データ
export const voterTurnoutByAge: VoterTurnoutData[] = [
  {
    ageGroup: "18-19歳",
    turnout2021: 43.2,
    turnout2019: 32.3,
    turnout2017: 40.5,
    target2024: 55.0,
  },
  {
    ageGroup: "20-24歳",
    turnout2021: 36.5,
    turnout2019: 30.0,
    turnout2017: 33.8,
    target2024: 50.0,
  },
  {
    ageGroup: "25-29歳",
    turnout2021: 44.8,
    turnout2019: 38.8,
    turnout2017: 40.1,
    target2024: 55.0,
  },
  {
    ageGroup: "30-39歳",
    turnout2021: 54.8,
    turnout2019: 49.4,
    turnout2017: 44.7,
    target2024: 60.0,
  },
  {
    ageGroup: "40-49歳",
    turnout2021: 63.4,
    turnout2019: 58.9,
    turnout2017: 54.5,
    target2024: 68.0,
  },
  {
    ageGroup: "50-59歳",
    turnout2021: 71.9,
    turnout2019: 68.3,
    turnout2017: 66.0,
    target2024: 75.0,
  },
  {
    ageGroup: "60-69歳",
    turnout2021: 82.7,
    turnout2019: 79.8,
    turnout2017: 77.4,
    target2024: 85.0,
  },
  {
    ageGroup: "70歳以上",
    turnout2021: 72.7,
    turnout2019: 71.2,
    turnout2017: 70.1,
    target2024: 75.0,
  },
];

// 候補者データを拡張（複数選挙対応）
export const candidates: Candidate[] = [
  // 東京都知事選2024
  {
    id: "candidate-tokyo-1",
    name: "田中 太郎",
    party: "無所属",
    age: 45,
    position: "元東京都議会議員",
    constituency: "東京都",
    electionId: "tokyo-gov-2024",
    policies: ["子育て支援拡充", "デジタル都市構想", "環境政策強化"],
    experience: "20年",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    socialMedia: {
      twitter: "@tanaka_taro",
      youtube: "田中太郎チャンネル",
    },
    supportRate: 28,
    isIncumbent: false,
    youthPolicies: ["奨学金返済支援", "就職支援強化", "シェアハウス補助"],
  },
  {
    id: "candidate-tokyo-2",
    name: "佐藤 花子",
    party: "市民党",
    age: 52,
    position: "元厚生労働省官僚",
    constituency: "東京都",
    electionId: "tokyo-gov-2024",
    policies: ["女性活躍推進", "高齢者福祉", "災害対策"],
    experience: "25年",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face",
    socialMedia: {
      twitter: "@sato_hanako",
      instagram: "sato_hanako_official",
    },
    supportRate: 22,
    isIncumbent: false,
    youthPolicies: ["保育園拡充", "働き方改革", "副業支援制度"],
  },
  {
    id: "candidate-tokyo-3",
    name: "鈴木 健太",
    party: "自由民主党",
    age: 58,
    position: "現東京都知事",
    constituency: "東京都",
    electionId: "tokyo-gov-2024",
    policies: ["経済成長戦略", "オリンピックレガシー", "国際都市東京"],
    experience: "30年",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    socialMedia: {
      twitter: "@suzuki_kenta_gov",
      youtube: "鈴木健太公式",
    },
    supportRate: 35,
    isIncumbent: true,
    youthPolicies: ["スタートアップ支援", "デジタル教育", "海外留学助成"],
  },
  {
    id: "candidate-tokyo-4",
    name: "山田 みさき",
    party: "立憲民主党",
    age: 41,
    position: "元参議院議員",
    constituency: "東京都",
    electionId: "tokyo-gov-2024",
    policies: ["格差是正", "教育無償化", "平和政策"],
    experience: "12年",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face",
    socialMedia: {
      twitter: "@yamada_misaki",
      instagram: "yamada_misaki",
    },
    supportRate: 15,
    isIncumbent: false,
    youthPolicies: ["学費無償化", "最低賃金引上げ", "若者議会設置"],
  },

  // 大阪府知事選2024
  {
    id: "candidate-osaka-1",
    name: "松本 達也",
    party: "日本維新の会",
    age: 48,
    position: "現大阪府知事",
    constituency: "大阪府",
    electionId: "osaka-gov-2024",
    policies: ["大阪都構想", "関西国際空港拡張", "教育改革"],
    experience: "16年",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    socialMedia: {
      twitter: "@matsumoto_tatsuya",
    },
    supportRate: 42,
    isIncumbent: true,
    youthPolicies: ["IT教育強化", "起業支援制度", "アニメ産業振興"],
  },
  {
    id: "candidate-osaka-2",
    name: "中村 美智子",
    party: "立憲民主党",
    age: 54,
    position: "元大阪市議会議員",
    constituency: "大阪府",
    electionId: "osaka-gov-2024",
    policies: ["福祉充実", "格差是正", "平和外交"],
    experience: "22年",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face",
    socialMedia: {
      twitter: "@nakamura_michiko",
    },
    supportRate: 31,
    isIncumbent: false,
    youthPolicies: [
      "奨学金制度拡充",
      "就職氷河期世代支援",
      "メンタルヘルス支援",
    ],
  },

  // 衆議院総選挙2025（サンプル候補者）
  {
    id: "candidate-house-1",
    name: "高橋 勇",
    party: "自由民主党",
    age: 39,
    position: "元経済産業省官僚",
    constituency: "東京1区",
    electionId: "house-representatives-2025",
    policies: ["経済成長", "デジタル化推進", "少子化対策"],
    experience: "8年",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    socialMedia: {
      twitter: "@takahashi_isamu",
    },
    supportRate: 45,
    isIncumbent: false,
    youthPolicies: ["新卒就職支援", "リスキリング制度", "住宅支援"],
  },
  {
    id: "candidate-house-2",
    name: "小林 咲良",
    party: "立憲民主党",
    age: 44,
    position: "元NHKアナウンサー",
    constituency: "東京1区",
    electionId: "house-representatives-2025",
    policies: ["報道の自由", "ジェンダー平等", "環境保護"],
    experience: "10年",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face",
    socialMedia: {
      twitter: "@kobayashi_sakura",
    },
    supportRate: 38,
    isIncumbent: false,
    youthPolicies: ["同性婚法制化", "育児休業拡充", "学費無償化"],
  },
];

// ヘルパー関数
export const getAllElections = (): Election[] => {
  return [...currentElections, ...upcomingElections].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
};

export const getNextElection = (): Election | null => {
  const now = new Date();
  const upcoming = getAllElections()
    .filter((election) => new Date(election.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return upcoming.length > 0 ? upcoming[0] : null;
};

export const getCurrentElections = (): Election[] => {
  return currentElections.filter((election) => election.isActive);
};

export const getElectionsByType = (type: string): Election[] => {
  if (type === "全て") return getAllElections();
  return getAllElections().filter((election) => election.type === type);
};

export const getDaysUntilElection = (electionDate: string): number => {
  const now = new Date();
  const election = new Date(electionDate);
  const diffTime = election.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const getCandidatesByElection = (electionId: string): Candidate[] => {
  return candidates.filter((candidate) => candidate.electionId === electionId);
};

export const getYouthTurnoutTrend = (): {
  improving: boolean;
  percentage: number;
} => {
  const youth2021 = (43.2 + 36.5 + 44.8) / 3; // 18-29歳平均
  const youth2019 = (32.3 + 30.0 + 38.8) / 3;
  const improvement = youth2021 - youth2019;

  return {
    improving: improvement > 0,
    percentage: Math.round(improvement * 10) / 10,
  };
};

export const getElectionTypes = (): string[] => {
  return ["全て", "国政", "都道府県", "市町村", "地方"];
};
