// 投票ガイド用の実際の政治データベース

export interface PolicyPosition {
  id: string;
  category: string;
  title: string;
  description: string;
  options: {
    value: number;
    label: string;
    description: string;
  }[];
}

export interface Candidate {
  id: string;
  name: string;
  party: string;
  age: number;
  experience: string;
  education: string;
  image: string;
  policies: {
    [key: string]: number; // policy ID -> position value
  };
  achievements: string[];
  manifesto: string;
  supportRate: number;
  socialMedia: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
  endorsements: string[];
  biography: string;
}

export interface ElectionInfo {
  id: string;
  name: string;
  date: string;
  type: "国政" | "都道府県" | "市町村";
  prefecture: string;
  city?: string;
  candidates: Candidate[];
  turnoutRate: number;
  previousResults?: {
    winner: string;
    votes: number;
    turnout: number;
  };
  votingLocations: VotingLocation[];
  earlyVotingInfo: EarlyVotingInfo;
}

export interface VotingLocation {
  id: string;
  name: string;
  address: string;
  hours: string;
  accessibility: string[];
  parking: boolean;
  publicTransport: string[];
}

export interface EarlyVotingInfo {
  available: boolean;
  period: string;
  locations: VotingLocation[];
}

// 政策マッチング質問データ
export const policyQuestions: PolicyPosition[] = [
  {
    id: "economy",
    category: "経済政策",
    title: "経済成長と分配政策",
    description: "経済成長と格差是正のバランスについて",
    options: [
      {
        value: 1,
        label: "成長重視",
        description: "規制緩和や企業支援を通じた経済成長を最優先",
      },
      {
        value: 2,
        label: "バランス重視",
        description: "成長と格差是正の両方を同程度重視",
      },
      {
        value: 3,
        label: "分配重視",
        description: "格差是正や社会保障充実を最優先",
      },
    ],
  },
  {
    id: "tax",
    category: "税制",
    title: "税制政策",
    description: "税負担と社会保障の関係について",
    options: [
      {
        value: 1,
        label: "減税重視",
        description: "税負担を下げて個人・企業の活力を重視",
      },
      { value: 2, label: "現状維持", description: "現在の税制を基本的に維持" },
      {
        value: 3,
        label: "増税容認",
        description: "社会保障充実のための増税を容認",
      },
    ],
  },
  {
    id: "welfare",
    category: "社会保障",
    title: "社会保障制度",
    description: "社会保障の充実度について",
    options: [
      {
        value: 1,
        label: "効率重視",
        description: "財政負担を抑えて効率的な制度を重視",
      },
      {
        value: 2,
        label: "現状維持",
        description: "現在の制度を基本的に維持・改善",
      },
      {
        value: 3,
        label: "充実重視",
        description: "負担増を伴っても制度充実を重視",
      },
    ],
  },
  {
    id: "defense",
    category: "外交・安保",
    title: "防衛政策",
    description: "日本の防衛政策について",
    options: [
      {
        value: 1,
        label: "防衛力強化",
        description: "防衛費増額や日米同盟強化を重視",
      },
      {
        value: 2,
        label: "現状維持",
        description: "現在の防衛政策を基本的に維持",
      },
      {
        value: 3,
        label: "平和外交",
        description: "外交重視で軍事的対応は最小限に",
      },
    ],
  },
  {
    id: "environment",
    category: "環境・エネルギー",
    title: "脱炭素・原発政策",
    description: "エネルギー政策と環境対策について",
    options: [
      {
        value: 1,
        label: "経済優先",
        description: "経済成長を優先し、段階的な環境対策",
      },
      {
        value: 2,
        label: "バランス",
        description: "経済と環境のバランスを重視",
      },
      {
        value: 3,
        label: "環境優先",
        description: "脱炭素を最優先し、原発ゼロを目指す",
      },
    ],
  },
  {
    id: "education",
    category: "教育・若者",
    title: "教育無償化・若者支援",
    description: "教育費負担軽減と若者支援について",
    options: [
      {
        value: 1,
        label: "自己責任",
        description: "基本的に個人・家庭の責任で対応",
      },
      { value: 2, label: "部分支援", description: "困窮世帯等への限定的支援" },
      {
        value: 3,
        label: "全面支援",
        description: "教育無償化や若者支援を大幅拡充",
      },
    ],
  },
  {
    id: "constitution",
    category: "憲法・政治制度",
    title: "憲法改正",
    description: "憲法改正の必要性について",
    options: [
      {
        value: 1,
        label: "改正推進",
        description: "時代に合わせた憲法改正が必要",
      },
      { value: 2, label: "慎重対応", description: "慎重な議論を重ねて判断" },
      { value: 3, label: "改正反対", description: "現憲法の理念を維持すべき" },
    ],
  },
  {
    id: "digital",
    category: "デジタル・科学技術",
    title: "デジタル社会推進",
    description: "デジタル化・AI活用の推進について",
    options: [
      {
        value: 1,
        label: "積極推進",
        description: "規制緩和してデジタル化を積極推進",
      },
      {
        value: 2,
        label: "段階推進",
        description: "安全性を確保しながら段階的に推進",
      },
      {
        value: 3,
        label: "慎重推進",
        description: "プライバシーや格差に配慮して慎重に推進",
      },
    ],
  },
];

// 実際の選挙データ（2025年参議院選挙）
export const currentElections: ElectionInfo[] = [
  {
    id: "sangiin2025",
    name: "第27回参議院議員通常選挙",
    date: "2025-07-20",
    type: "国政",
    prefecture: "全国",
    turnoutRate: 54.7, // 前回実績
    candidates: [
      {
        id: "ishiba-shigeru",
        name: "石破茂",
        party: "自由民主党",
        age: 67,
        experience: "衆議院議員（1986年～）、防衛大臣、農林水産大臣",
        education: "慶應義塾大学法学部",
        image: "/api/placeholder/150/150",
        policies: {
          economy: 2,
          tax: 1,
          welfare: 2,
          defense: 1,
          environment: 2,
          education: 2,
          constitution: 1,
          digital: 1,
        },
        achievements: [
          "防衛政策の専門家として安全保障政策を主導",
          "地方創生政策の推進",
          "農業政策の近代化",
        ],
        manifesto: "経済安全保障の強化と地方創生を両立し、持続可能な成長を実現",
        supportRate: 27.4,
        socialMedia: {
          twitter: "@shigeruishiba",
          facebook: "ishiba.shigeru",
          youtube: "IshigeruChannel",
        },
        endorsements: ["日本経済団体連合会", "全国農業協同組合中央会"],
        biography:
          "鳥取県出身。防衛政策の専門家として長年活動し、2024年に自民党総裁・内閣総理大臣に就任。",
      },
      {
        id: "noda-yoshihiko",
        name: "野田佳彦",
        party: "立憲民主党",
        age: 67,
        experience: "衆議院議員（1993年～）、内閣総理大臣、財務大臣",
        education: "早稲田大学政治経済学部",
        image: "/api/placeholder/150/150",
        policies: {
          economy: 3,
          tax: 3,
          welfare: 3,
          defense: 3,
          environment: 3,
          education: 3,
          constitution: 3,
          digital: 2,
        },
        achievements: [
          "第95代内閣総理大臣として政権運営",
          "社会保障と税の一体改革",
          "立憲民主党の党運営",
        ],
        manifesto: "格差是正と社会保障充実による安心社会の実現",
        supportRate: 18.2,
        socialMedia: {
          twitter: "@nodayoshi55",
          facebook: "noda.yoshihiko",
        },
        endorsements: ["日本労働組合総連合会", "全日本自治団体労働組合"],
        biography:
          "千葉県出身。元総理大臣として政権運営の経験を持ち、立憲民主党代表として野党第一党を率いる。",
      },
      {
        id: "yoshimura-hirofumi",
        name: "吉村洋文",
        party: "日本維新の会",
        age: 49,
        experience: "大阪府知事（2019年～）、大阪市長（2015-2019）",
        education: "九州大学法学部",
        image: "/api/placeholder/150/150",
        policies: {
          economy: 1,
          tax: 1,
          welfare: 1,
          defense: 2,
          environment: 2,
          education: 2,
          constitution: 1,
          digital: 1,
        },
        achievements: [
          "大阪都構想の推進",
          "コロナ対策での独自政策",
          "規制改革・行政改革の推進",
        ],
        manifesto: "身を切る改革と規制緩和による成長戦略",
        supportRate: 8.9,
        socialMedia: {
          twitter: "@hiroyoshimura",
          instagram: "yoshimura.hirofumi",
          youtube: "YoshimuraChannel",
        },
        endorsements: ["関西経済連合会", "大阪商工会議所"],
        biography:
          "大阪府出身。弁護士から政治家に転身し、大阪府知事として改革を推進。維新の党の中心人物。",
      },
    ],
    votingLocations: [
      {
        id: "shibuya-1",
        name: "渋谷区立神南小学校",
        address: "東京都渋谷区神南1-4-1",
        hours: "7:00-20:00",
        accessibility: ["車椅子対応", "エレベーター完備"],
        parking: true,
        publicTransport: [
          "JR山手線渋谷駅徒歩8分",
          "東京メトロ表参道駅徒歩10分",
        ],
      },
    ],
    earlyVotingInfo: {
      available: true,
      period: "2025年7月4日～7月19日",
      locations: [
        {
          id: "shibuya-early",
          name: "渋谷区役所",
          address: "東京都渋谷区宇田川町1-1",
          hours: "8:30-20:00",
          accessibility: ["車椅子対応", "エレベーター完備"],
          parking: true,
          publicTransport: ["JR山手線渋谷駅徒歩7分"],
        },
      ],
    },
  },
];

// 投票マッチング結果計算
export const calculatePolicyMatch = (
  userAnswers: { [key: string]: number },
  candidate: Candidate
): number => {
  const totalQuestions = Object.keys(userAnswers).length;
  let totalDifference = 0;

  for (const [policyId, userPosition] of Object.entries(userAnswers)) {
    const candidatePosition = candidate.policies[policyId] || 2; // デフォルトは中間
    totalDifference += Math.abs(userPosition - candidatePosition);
  }

  // 差が小さいほど高いマッチ率（最大100%）
  const maxPossibleDifference = totalQuestions * 2; // 最大差は2 × 質問数
  const matchPercentage = Math.max(
    0,
    100 - (totalDifference / maxPossibleDifference) * 100
  );

  return Math.round(matchPercentage);
};

// 政策カテゴリ別分析
export const analyzePolicyAlignment = (
  userAnswers: { [key: string]: number },
  candidate: Candidate
) => {
  const categories: { [key: string]: string } = {
    economy: "経済政策",
    tax: "税制",
    welfare: "社会保障",
    defense: "外交・安保",
    environment: "環境・エネルギー",
    education: "教育・若者",
    constitution: "憲法・政治制度",
    digital: "デジタル・科学技術",
  };

  return Object.entries(userAnswers).map(([policyId, userPosition]) => {
    const candidatePosition = candidate.policies[policyId] || 2;
    const difference = Math.abs(userPosition - candidatePosition);
    const agreement = Math.max(0, 100 - (difference / 2) * 100);

    return {
      category: categories[policyId] || policyId,
      agreement: Math.round(agreement),
      userPosition,
      candidatePosition,
      difference,
    };
  });
};
