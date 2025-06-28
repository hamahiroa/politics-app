// 実際の日本の政治家データ

export interface Politician {
  id: string;
  name: string;
  party: string;
  position: string;
  age: number;
  constituency: string;
  keyPolicies: string[];
  profile: string;
  avatar: string;
  followers: number;
  experience: string;
  education: string;
  socialMedia: {
    twitter?: string;
    youtube?: string;
    instagram?: string;
  };
  achievements: string[];
  youthFriendlyDesc: string; // 若者向けの親しみやすい説明
  importance: number; // 1-5の重要度（表示順序用）
}

// 主要政治家データ（2024年現在）
export const politiciansData: Politician[] = [
  // 自由民主党
  {
    id: "kishida-fumio",
    name: "岸田 文雄",
    party: "自由民主党",
    position: "内閣総理大臣・自民党総裁",
    age: 66,
    constituency: "広島1区",
    keyPolicies: ["新しい資本主義", "デジタル田園都市国家構想", "こども政策"],
    profile:
      "2021年10月より第100代・101代内閣総理大臣。外務大臣を4年8か月務めた外交のエキスパート。",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    followers: 45000,
    experience: "30年",
    education: "早稲田大学法学部",
    socialMedia: {
      twitter: "@kishida230",
      youtube: "岸田文雄チャンネル",
    },
    achievements: [
      "外務大臣（第147-150代）",
      "自民党政調会長",
      "岸田派（宏池会）会長",
    ],
    youthFriendlyDesc:
      "日本のリーダー。若者の声を聞く姿勢があり、子育て支援や教育政策に力を入れています。SNSも積極的に活用！",
    importance: 5,
  },
  {
    id: "hayashi-yoshimasa",
    name: "林 芳正",
    party: "自由民主党",
    position: "外務大臣",
    age: 62,
    constituency: "参議院山口県",
    keyPolicies: ["外交安全保障", "日米同盟強化", "自由で開かれたインド太平洋"],
    profile:
      "ハーバード大学卒業の国際派。文部科学大臣、防衛大臣を歴任し、現在は外務大臣として活躍。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 18500,
    experience: "28年",
    education: "東京大学法学部・ハーバード大学",
    socialMedia: {
      twitter: "@HayashiYoshimasa",
    },
    achievements: ["文部科学大臣", "防衛大臣", "参議院議員7期"],
    youthFriendlyDesc:
      "国際経験豊富な外交のプロ。世界を相手に日本の若者の未来を守る仕事をしています。英語も堪能！",
    importance: 4,
  },
  {
    id: "kono-taro",
    name: "河野 太郎",
    party: "自由民主党",
    position: "デジタル大臣",
    age: 60,
    constituency: "神奈川15区",
    keyPolicies: ["デジタル改革", "規制改革", "ワクチン接種推進"],
    profile:
      "デジタル改革担当大臣として行政のDXを推進。ワクチン担当大臣としても活躍した改革派政治家。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 95000,
    experience: "26年",
    education: "慶應義塾大学経済学部・ジョージタウン大学",
    socialMedia: {
      twitter: "@konotarogomame",
      youtube: "河野太郎チャンネル",
      instagram: "konotaro_official",
    },
    achievements: ["デジタル大臣", "ワクチン担当大臣", "外務大臣"],
    youthFriendlyDesc:
      "SNSで積極的に情報発信する現代的な政治家！デジタル化で若者の生活を便利にしようと頑張っています。",
    importance: 4,
  },
  {
    id: "koizumi-shinjiro",
    name: "小泉 進次郎",
    party: "自由民主党",
    position: "元環境大臣",
    age: 42,
    constituency: "神奈川11区",
    keyPolicies: ["環境政策", "脱炭素社会", "若者支援"],
    profile:
      "小泉純一郎元首相の次男。環境大臣として脱炭素社会の実現に取り組む。若手政治家のホープ。",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    followers: 67000,
    experience: "14年",
    education: "関東学院大学・コロンビア大学",
    socialMedia: {
      twitter: "@koizumi_shinjiro",
      instagram: "koizumi_shinjiro",
    },
    achievements: ["環境大臣", "自民党青年局長", "関東学院大学客員教授"],
    youthFriendlyDesc:
      "同世代に近い若手政治家！環境問題に本気で取り組み、若者の未来を考えています。パパとしても頑張ってます。",
    importance: 3,
  },

  // 立憲民主党
  {
    id: "izumi-kenta",
    name: "泉 健太",
    party: "立憲民主党",
    position: "立憲民主党代表",
    age: 49,
    constituency: "京都3区",
    keyPolicies: ["格差是正", "働く人の権利", "教育無償化"],
    profile:
      "京都出身の政治家。NHK記者出身で、労働問題や格差問題に詳しい。立憲民主党の顔として野党第一党を率いる。",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    followers: 28000,
    experience: "20年",
    education: "立命館大学法学部",
    socialMedia: {
      twitter: "@izumi_kenta",
      youtube: "泉健太チャンネル",
    },
    achievements: ["立憲民主党代表", "厚生労働副大臣", "NHK記者"],
    youthFriendlyDesc:
      "元テレビ記者で話が上手！若者の雇用問題や奨学金問題の解決に本気で取り組んでいます。野党第一党のリーダー。",
    importance: 5,
  },
  {
    id: "edano-yukio",
    name: "枝野 幸男",
    party: "立憲民主党",
    position: "前代表・衆議院議員",
    age: 59,
    constituency: "埼玉5区",
    keyPolicies: ["立憲主義", "原発ゼロ", "格差是正"],
    profile:
      "弁護士出身で立憲民主党の創設者。官房長官として東日本大震災の対応にあたった経験を持つ。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 34000,
    experience: "28年",
    education: "東北大学法学部",
    socialMedia: {
      twitter: "@edanoyukio0531",
    },
    achievements: ["立憲民主党創設者", "官房長官", "弁護士"],
    youthFriendlyDesc:
      "災害時の対応で頼れる存在として活躍！憲法と民主主義を大切にして、若者の権利を守ろうとしています。",
    importance: 4,
  },
  {
    id: "renho",
    name: "蓮舫",
    party: "立憲民主党",
    position: "参議院議員",
    age: 55,
    constituency: "参議院東京都",
    keyPolicies: ["行政改革", "女性活躍", "子育て支援"],
    profile:
      "元キャスター出身で、事業仕分けで有名になった。女性政治家として活躍し、鋭い追及で知られる。",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face",
    followers: 52000,
    experience: "17年",
    education: "青山学院大学法学部",
    socialMedia: {
      twitter: "@renho_sha",
      instagram: "renho_official",
    },
    achievements: ["事業仕分け", "参議院議員5期", "元キャスター"],
    youthFriendlyDesc:
      "歯に衣着せぬ発言で有名！ムダな税金の使い方をチェックして、若者にお金が回るよう頑張っています。",
    importance: 3,
  },

  // 公明党
  {
    id: "yamaguchi-natsuo",
    name: "山口 那津男",
    party: "公明党",
    position: "公明党代表",
    age: 71,
    constituency: "参議院東京都",
    keyPolicies: ["平和外交", "福祉充実", "教育支援"],
    profile:
      "弁護士出身で、公明党の代表として連立政権を支える。平和主義と福祉政策に定評がある。",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    followers: 22000,
    experience: "32年",
    education: "東京大学法学部",
    socialMedia: {
      twitter: "@yamaguchinatsuo",
    },
    achievements: ["公明党代表", "弁護士", "連立政権パートナー"],
    youthFriendlyDesc:
      "平和を大切にする政党のリーダー。教育費の負担軽減や若者の生活支援にも力を入れています。弁護士でもあります！",
    importance: 4,
  },
  {
    id: "ishii-keiichi",
    name: "石井 啓一",
    party: "公明党",
    position: "前国土交通大臣",
    age: 65,
    constituency: "比例北関東",
    keyPolicies: ["インフラ整備", "防災対策", "地方創生"],
    profile:
      "国土交通大臣として日本のインフラ整備を担当。防災対策や地方創生にも力を入れる実務型政治家。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 15000,
    experience: "26年",
    education: "東京大学工学部",
    socialMedia: {
      twitter: "@ishii_keiichi",
    },
    achievements: ["国土交通大臣", "工学博士", "インフラ整備推進"],
    youthFriendlyDesc:
      "道路や鉄道などのインフラを整備する専門家！若者が便利に移動できる社会づくりを目指しています。",
    importance: 3,
  },

  // 日本維新の会
  {
    id: "baba-nobuyuki",
    name: "馬場 伸幸",
    party: "日本維新の会",
    position: "日本維新の会代表",
    age: 58,
    constituency: "大阪17区",
    keyPolicies: ["行政改革", "規制緩和", "地方分権"],
    profile:
      "大阪を拠点とする改革政党の代表。行政のムダをなくし、効率的な政府を目指す改革派。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 19500,
    experience: "25年",
    education: "関西大学法学部",
    socialMedia: {
      twitter: "@baba_nobuyuki",
    },
    achievements: ["日本維新の会代表", "大阪府議会議員", "行政改革推進"],
    youthFriendlyDesc:
      "大阪発の改革政党のリーダー！税金のムダ遣いをなくして、若者にお金が回るような政治を目指しています。",
    importance: 4,
  },
  {
    id: "matsui-ichiro",
    name: "松井 一郎",
    party: "日本維新の会",
    position: "前大阪市長",
    age: 59,
    constituency: "大阪市",
    keyPolicies: ["大阪都構想", "教育改革", "行政効率化"],
    profile:
      "大阪市長として都市改革を推進。大阪都構想の実現に向けて活動する関西の改革リーダー。",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    followers: 42000,
    experience: "13年",
    education: "福岡工業大学",
    socialMedia: {
      twitter: "@gogoichiro",
    },
    achievements: ["大阪市長", "大阪府知事", "維新の会副代表"],
    youthFriendlyDesc:
      "大阪を変える改革者！古い仕組みを壊して、若者が活躍しやすい街づくりに取り組んでいます。",
    importance: 3,
  },

  // 日本共産党
  {
    id: "tamura-tomoko",
    name: "田村 智子",
    party: "日本共産党",
    position: "政策委員長",
    age: 59,
    constituency: "参議院比例代表",
    keyPolicies: ["教育無償化", "反貧困", "ジェンダー平等"],
    profile:
      "教育や女性の権利、若者の貧困問題に詳しい政治家。特に学費や奨学金問題に精通している。",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face",
    followers: 16800,
    experience: "15年",
    education: "法政大学文学部",
    socialMedia: {
      twitter: "@tamura_tomoko",
    },
    achievements: ["政策委員長", "教育政策専門家", "ジェンダー平等推進"],
    youthFriendlyDesc:
      "学費や奨学金の問題に超詳しい！若者の教育費負担をなくそうと本気で活動している、学生の味方です。",
    importance: 3,
  },
  {
    id: "shii-kazuo",
    name: "志位 和夫",
    party: "日本共産党",
    position: "委員長",
    age: 69,
    constituency: "衆議院比例南関東",
    keyPolicies: ["平和憲法", "格差是正", "原発ゼロ"],
    profile:
      "日本共産党の委員長として長年党を率いる。平和主義と格差是正を掲げ、一貫した政策を主張。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 38000,
    experience: "34年",
    education: "東京大学工学部",
    socialMedia: {
      twitter: "@shiikazuo",
    },
    achievements: ["共産党委員長", "平和運動推進", "格差是正活動"],
    youthFriendlyDesc:
      "長年ブレない政策を訴え続けるベテラン！戦争に反対し、若者が平和に暮らせる社会を目指しています。",
    importance: 4,
  },

  // 国民民主党
  {
    id: "tamaki-yuichiro",
    name: "玉木 雄一郎",
    party: "国民民主党",
    position: "国民民主党代表",
    age: 54,
    constituency: "香川2区",
    keyPolicies: ["給付金政策", "現実的な改革", "家計支援"],
    profile:
      "財務省出身で経済政策に詳しい。現実的な政策提案で知られ、特に家計への直接支援を重視。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 21000,
    experience: "18年",
    education: "東京大学法学部・ハーバード大学",
    socialMedia: {
      twitter: "@tamakiyuichiro",
    },
    achievements: ["国民民主党代表", "元財務省官僚", "給付金政策推進"],
    youthFriendlyDesc:
      "元官僚で経済のプロ！若者への給付金や家計支援に積極的で、現実的な政策提案が得意です。",
    importance: 3,
  },
  {
    id: "mae-ken",
    name: "前原 誠司",
    party: "国民民主党",
    position: "衆議院議員",
    age: 61,
    constituency: "京都2区",
    keyPolicies: ["外交安全保障", "経済政策", "政治改革"],
    profile:
      "京都大学出身で外交・安全保障に詳しい。元民主党代表として政権交代を経験した政治家。",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    followers: 18500,
    experience: "28年",
    education: "京都大学法学部",
    socialMedia: {
      twitter: "@Maehara_Seiji",
    },
    achievements: ["元民主党代表", "国土交通大臣", "外務大臣"],
    youthFriendlyDesc:
      "政権交代を経験したベテラン政治家！現実的な外交政策で日本の若者の安全を守ろうとしています。",
    importance: 3,
  },

  // れいわ新選組
  {
    id: "yamamoto-taro",
    name: "山本 太郎",
    party: "れいわ新選組",
    position: "れいわ新選組代表",
    age: 49,
    constituency: "参議院比例代表",
    keyPolicies: ["反緊縮政策", "消費税廃止", "最低賃金1500円"],
    profile:
      "俳優出身の政治家。弱者救済と反緊縮政策を掲げ、若者や困窮者の支援に力を入れる。",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    followers: 85000,
    experience: "13年",
    education: "箕面自由学園高等学校",
    socialMedia: {
      twitter: "@yamamototaro0",
      youtube: "山本太郎チャンネル",
    },
    achievements: ["れいわ新選組代表", "元俳優", "弱者救済活動"],
    youthFriendlyDesc:
      "元俳優で話がとても分かりやすい！消費税をなくして、アルバイトの時給を1500円にしようと訴えています。",
    importance: 3,
  },

  // 追加の若手政治家（各党から）
  {
    id: "ogata-yasushi",
    name: "緒方 靖",
    party: "立憲民主党",
    position: "衆議院議員",
    age: 38,
    constituency: "福岡3区",
    keyPolicies: ["若者政策", "IT政策", "地方活性化"],
    profile:
      "外務省出身の若手政治家。ITと外交の経験を活かし、デジタル時代の政治を目指す。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 12300,
    experience: "8年",
    education: "東京大学法学部・オックスフォード大学",
    socialMedia: {
      twitter: "@ogata_yasushi",
    },
    achievements: ["外務省出身", "IT政策推進", "若者政策提言"],
    youthFriendlyDesc:
      "30代の若手政治家！外務省で培った国際感覚で、日本の若者が世界で活躍できる環境づくりを目指しています。",
    importance: 2,
  },
  {
    id: "suzuki-takako",
    name: "鈴木 貴子",
    party: "自由民主党",
    position: "衆議院議員",
    age: 39,
    constituency: "北海道7区",
    keyPolicies: ["女性活躍", "子育て支援", "地方創生"],
    profile:
      "女性政治家として子育て支援と女性の社会進出を推進。地方から日本を変える活動を展開。",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face",
    followers: 14500,
    experience: "11年",
    education: "早稲田大学政治経済学部",
    socialMedia: {
      twitter: "@suzuki_takako",
      instagram: "suzuki_takako_official",
    },
    achievements: ["女性活躍推進", "子育て支援法案", "地方創生"],
    youthFriendlyDesc:
      "同世代の女性政治家！子育てと仕事の両立を支援し、若い女性が活躍できる社会づくりに取り組んでいます。",
    importance: 2,
  },
];

// 政党一覧と色設定
export const partyInfo = {
  自由民主党: { color: "bg-red-100 text-red-800", shortName: "自民" },
  立憲民主党: { color: "bg-blue-100 text-blue-800", shortName: "立憲" },
  公明党: { color: "bg-yellow-100 text-yellow-800", shortName: "公明" },
  日本維新の会: { color: "bg-orange-100 text-orange-800", shortName: "維新" },
  日本共産党: { color: "bg-purple-100 text-purple-800", shortName: "共産" },
  国民民主党: { color: "bg-green-100 text-green-800", shortName: "国民" },
  れいわ新選組: { color: "bg-pink-100 text-pink-800", shortName: "れいわ" },
};

// 政党別フィルタリング関数
export const getPoliticiansByParty = (party?: string): Politician[] => {
  if (!party || party === "全て") {
    return politiciansData.sort((a, b) => b.importance - a.importance);
  }
  return politiciansData
    .filter((p) => p.party === party)
    .sort((a, b) => b.importance - a.importance);
};

// 重要度別フィルタリング関数
export const getTopPoliticians = (limit: number = 6): Politician[] => {
  return politiciansData
    .sort((a, b) => b.importance - a.importance)
    .slice(0, limit);
};

export const getAllParties = (): string[] => {
  return Object.keys(partyInfo);
};
