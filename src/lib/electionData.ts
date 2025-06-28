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
    id: "local-2024-spring",
    name: "統一地方選挙2024春",
    type: "地方",
    date: "2024-04-14",
    isActive: false,
    description: "全国各地の市町村議会選挙",
    importance: 3,
    constituency: "全国",
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

// 選挙候補者（東京都知事選2024想定）
export const candidates: Candidate[] = [
  {
    id: "candidate-1",
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
    id: "candidate-2",
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
    id: "candidate-3",
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
    id: "candidate-4",
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
];

// ヘルパー関数
export const getNextElection = (): Election | null => {
  const now = new Date();
  const upcoming = [...upcomingElections, ...currentElections]
    .filter((election) => new Date(election.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return upcoming.length > 0 ? upcoming[0] : null;
};

export const getCurrentElections = (): Election[] => {
  return currentElections.filter((election) => election.isActive);
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
