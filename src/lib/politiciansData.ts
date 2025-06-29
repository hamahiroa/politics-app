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
  recentActivity?: string; // 最近の注目活動
  famousQuote?: string; // 有名な発言・名言
  committees?: string[]; // 所属委員会
  localPopularity?: number; // 地元人気度（1-100）
  hobbies?: string[]; // 趣味・特技
  detailedPolicies?: {
    category: string;
    stance: string;
    details: string;
  }[]; // 詳細な政策立場
  familyBackground?: string; // 家族構成（公開情報のみ）
  controversies?: string[]; // 主要な論争・課題
  supportBase?: string[]; // 支持基盤
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
    recentActivity: "2025年度予算編成と経済対策",
    famousQuote: "聞く力",
    committees: ["内閣", "国家安全保障会議"],
    localPopularity: 72,
    hobbies: ["野球観戦", "読書"],
    detailedPolicies: [
      {
        category: "経済政策",
        stance: "新しい資本主義推進",
        details: "成長と分配の好循環を目指し、賃上げ促進と格差是正を両立",
      },
      {
        category: "外交・安保",
        stance: "現実的外交",
        details: "日米同盟を基軸としつつ、中国・韓国との関係改善も重視",
      },
      {
        category: "少子化対策",
        stance: "こども政策最優先",
        details: "児童手当拡充、保育所整備、出産・育児支援の大幅拡大",
      },
    ],
    familyBackground: "妻・裕子氏、息子3人の5人家族",
    supportBase: ["宏池会", "広島県連", "外務省OB"],
    controversies: ["政治資金問題での説明責任", "増税論議での発言"],
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
    recentActivity: "マイナンバーカード普及促進とデジタル庁改革",
    famousQuote: "ブロックします",
    committees: ["デジタル社会推進本部", "規制改革推進会議"],
    localPopularity: 78,
    hobbies: ["Twitter", "アニメ鑑賞", "ゴルフ"],
    detailedPolicies: [
      {
        category: "デジタル政策",
        stance: "徹底的なDX推進",
        details: "行政手続きの完全デジタル化、マイナンバーカード活用拡大",
      },
      {
        category: "規制改革",
        stance: "既得権益打破",
        details: "古い規制を撤廃し、新しいビジネスモデルの創出を支援",
      },
      {
        category: "ワクチン政策",
        stance: "科学的根拠重視",
        details: "データに基づく迅速なワクチン接種体制の構築",
      },
    ],
    familyBackground: "妻・香氏、息子1人の3人家族",
    supportBase: ["IT業界", "若年層", "改革派"],
    controversies: ["Twitter上での発言", "河野談話の継承問題"],
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
    recentActivity: "2025年参院選に向けた野党共闘の調整",
    famousQuote: "提案型野党として",
    committees: ["立憲民主党役員会", "衆議院予算委員会"],
    localPopularity: 74,
    hobbies: ["読書", "京都の歴史散策", "ニュース分析"],
    detailedPolicies: [
      {
        category: "労働政策",
        stance: "働く人の権利強化",
        details: "非正規雇用の待遇改善、最低賃金1500円実現、残業規制強化",
      },
      {
        category: "教育政策",
        stance: "教育完全無償化",
        details: "大学授業料無償化、奨学金返済免除制度、給付型奨学金拡大",
      },
      {
        category: "経済政策",
        stance: "格差是正重視",
        details: "所得再分配強化、富裕層への課税強化、中間層支援",
      },
    ],
    familyBackground: "妻・息子2人の4人家族",
    supportBase: ["労働組合", "京都府連", "元NHK関係者"],
    controversies: ["野党共闘での方針対立", "維新の会との関係"],
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
    recentActivity: "反緊縮政策の街頭演説とメロリンQ復活",
    famousQuote: "愛国心があるなら金持ちから税金を取れ",
    committees: ["参議院災害対策特別委員会"],
    localPopularity: 68,
    hobbies: ["演劇", "街頭演説", "庶民との対話"],
    detailedPolicies: [
      {
        category: "税制政策",
        stance: "消費税完全廃止",
        details: "消費税を0%にして、富裕層・大企業への課税で財源確保",
      },
      {
        category: "労働政策",
        stance: "最低賃金大幅引上げ",
        details: "最低賃金を時給1500円に引き上げ、全国一律で実施",
      },
      {
        category: "住宅政策",
        stance: "住まいの権利保障",
        details: "公営住宅大幅拡充、家賃補助制度創設、住宅確保給付金拡大",
      },
    ],
    familyBackground: "元妻・割鞘朱璃氏との間に息子1人",
    supportBase: ["若年層", "非正規労働者", "低所得者"],
    controversies: ["原発問題での過激発言", "政治パフォーマンス"],
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

  // 追加の自民党議員
  {
    id: "suga-yoshihide",
    name: "菅 義偉",
    party: "自由民主党",
    position: "前内閣総理大臣",
    age: 75,
    constituency: "神奈川2区",
    keyPolicies: ["デジタル庁創設", "携帯料金値下げ", "不妊治療支援"],
    profile:
      "第99代内閣総理大臣。令和おじさんとして親しまれ、デジタル改革と規制改革を推進した実務派政治家。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 42000,
    experience: "25年",
    education: "法政大学法学部",
    socialMedia: {
      twitter: "@sugawitter",
    },
    achievements: ["元内閣総理大臣", "デジタル庁創設", "携帯料金値下げ実現"],
    youthFriendlyDesc:
      "令和おじさんで有名！携帯料金を安くしてくれた人。デジタル化で若者が使いやすい行政サービスを作りました。",
    importance: 4,
    recentActivity: "デジタル改革の継続推進",
    famousQuote: "自助・共助・公助",
    committees: ["デジタル社会推進本部"],
    localPopularity: 85,
    hobbies: ["読書", "散歩"],
  },
  {
    id: "noda-seiko",
    name: "野田 聖子",
    party: "自由民主党",
    position: "衆議院議員",
    age: 63,
    constituency: "岐阜1区",
    keyPolicies: ["女性活躍", "少子化対策", "こども政策"],
    profile:
      "女性活躍推進の先駆者。少子化担当大臣として出産・育児支援策を推進。総務大臣も経験。",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face",
    followers: 29000,
    experience: "31年",
    education: "上智大学外国語学部",
    socialMedia: {
      twitter: "@noda_seiko",
      instagram: "noda_seiko_official",
    },
    achievements: ["総務大臣", "少子化担当大臣", "女性活躍推進"],
    youthFriendlyDesc:
      "女性政治家のパイオニア！働く女性の支援と子育て支援に長年取り組み、若い女性の味方です。",
    importance: 3,
    recentActivity: "こども家庭庁設立支援",
    famousQuote: "女性が輝く社会を",
    committees: ["少子化対策特別委員会"],
    localPopularity: 78,
    hobbies: ["料理", "ガーデニング"],
  },
  {
    id: "takemasa-naoto",
    name: "武見 敬三",
    party: "自由民主党",
    position: "厚生労働大臣",
    age: 72,
    constituency: "参議院東京都",
    keyPolicies: ["医療制度改革", "健康寿命延伸", "感染症対策"],
    profile:
      "医療政策のエキスパート。WHO事務局長特別顧問も務め、国際的な保健医療政策に精通。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 15200,
    experience: "28年",
    education: "慶應義塾大学経済学部・ハーバード大学",
    socialMedia: {
      twitter: "@takemi_keizo",
    },
    achievements: ["厚生労働大臣", "WHO特別顧問", "医療制度改革推進"],
    youthFriendlyDesc:
      "医療のプロフェッショナル！若者の健康と医療費負担軽減に取り組み、将来の医療制度を考えています。",
    importance: 3,
    recentActivity: "コロナ後の医療体制強化",
    famousQuote: "健康は最大の資産",
    committees: ["厚生労働委員会"],
    localPopularity: 72,
    hobbies: ["ゴルフ", "読書"],
  },

  // 立憲民主党追加議員
  {
    id: "noda-yoshihiko",
    name: "野田 佳彦",
    party: "立憲民主党",
    position: "前代表・元総理大臣",
    age: 67,
    constituency: "千葉4区",
    keyPolicies: ["財政健全化", "税制改革", "社会保障制度安定化"],
    profile:
      "第95代内閣総理大臣。財務大臣として消費税増税を決断し、財政再建に取り組んだ政治家。",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    followers: 31000,
    experience: "32年",
    education: "早稲田大学政治経済学部",
    socialMedia: {
      twitter: "@nodayoshi55",
    },
    achievements: ["元内閣総理大臣", "財務大臣", "財政再建推進"],
    youthFriendlyDesc:
      "元総理で財政のプロ！将来世代に借金を残さないよう、厳しいけれど必要な政策を訴えています。",
    importance: 4,
    recentActivity: "立憲民主党の組織強化",
    famousQuote: "政治に奇跡はない",
    committees: ["予算委員会"],
    localPopularity: 69,
    hobbies: ["どじょう料理", "読書"],
  },
  {
    id: "okada-katsuya",
    name: "岡田 克也",
    party: "立憲民主党",
    position: "衆議院議員",
    age: 71,
    constituency: "三重3区",
    keyPolicies: ["外交政策", "行政改革", "憲法改正議論"],
    profile:
      "元民主党代表で外務大臣も経験。イオングループ創業家出身で、経済と外交の両方に精通。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 26000,
    experience: "34年",
    education: "東京大学法学部・ハーバード大学",
    socialMedia: {
      twitter: "@okada_katsuya",
    },
    achievements: ["元民主党代表", "外務大臣", "イオン出身"],
    youthFriendlyDesc:
      "イオンの創業家出身で経済に詳しい！国際感覚豊富で、若者が世界で活躍できる環境づくりを目指しています。",
    importance: 3,
    recentActivity: "外交・安全保障政策の立案",
    famousQuote: "現実的な政策提案を",
    committees: ["外務委員会"],
    localPopularity: 73,
    hobbies: ["テニス", "読書"],
  },
  {
    id: "abe-tomoko",
    name: "阿部 知子",
    party: "立憲民主党",
    position: "衆議院議員",
    age: 75,
    constituency: "神奈川12区",
    keyPolicies: ["医療政策", "平和主義", "原発ゼロ"],
    profile:
      "小児科医出身の政治家。医療現場の経験を活かし、保健医療政策と平和政策に取り組む。",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face",
    followers: 18500,
    experience: "23年",
    education: "東京大学医学部",
    socialMedia: {
      twitter: "@abe_tomoko",
    },
    achievements: ["小児科医", "医療政策専門家", "平和運動推進"],
    youthFriendlyDesc:
      "お医者さん出身の政治家！子どもの健康と教育を大切にし、平和な社会で若者が安心して暮らせるよう活動しています。",
    importance: 2,
    recentActivity: "医療制度改革の提言",
    famousQuote: "子どもの笑顔が一番",
    committees: ["厚生労働委員会"],
    localPopularity: 67,
    hobbies: ["読書", "音楽鑑賞"],
  },

  // 日本維新の会追加議員
  {
    id: "yoshimura-hirofumi",
    name: "吉村 洋文",
    party: "日本維新の会",
    position: "大阪府知事・副代表",
    age: 49,
    constituency: "大阪府知事",
    keyPolicies: ["大阪都構想", "行政改革", "コロナ対策"],
    profile:
      "弁護士出身で大阪府知事。コロナ対策でのリーダーシップと情報発信力で全国的に注目を集める。",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    followers: 127000,
    experience: "12年",
    education: "九州大学法学部",
    socialMedia: {
      twitter: "@hiroyoshimura",
      instagram: "hiroyoshimura_official",
      youtube: "吉村洋文チャンネル",
    },
    achievements: ["大阪府知事", "コロナ対策推進", "行政改革実現"],
    youthFriendlyDesc:
      "SNSで積極的に情報発信する現代的な政治家！大阪の若者に人気で、スピード感のある政策実行が特徴です。",
    importance: 4,
    recentActivity: "2025年大阪・関西万博準備",
    famousQuote: "結果にコミットする",
    committees: ["関西広域連合"],
    localPopularity: 82,
    hobbies: ["野球観戦", "読書"],
  },
  {
    id: "matsuno-hirokazu",
    name: "松野 頼久",
    party: "日本維新の会",
    position: "衆議院議員",
    age: 64,
    constituency: "熊本1区",
    keyPolicies: ["地方分権", "規制改革", "教育改革"],
    profile:
      "元民主党で維新に合流。熊本地震の復興に尽力し、地方の視点から国政改革を訴える。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 14200,
    experience: "27年",
    education: "早稲田大学商学部",
    socialMedia: {
      twitter: "@matsuno_yorihisa",
    },
    achievements: ["熊本地震復興支援", "地方分権推進", "教育改革"],
    youthFriendlyDesc:
      "熊本の復興に尽力した政治家！地方の若者が都市部と同じチャンスを得られるよう頑張っています。",
    importance: 2,
    recentActivity: "地方創生政策の立案",
    famousQuote: "地方から日本を変える",
    committees: ["地方創生委員会"],
    localPopularity: 71,
    hobbies: ["釣り", "温泉巡り"],
  },

  // 公明党追加議員
  {
    id: "saito-tetsuo",
    name: "斉藤 鉄夫",
    party: "公明党",
    position: "代表",
    age: 71,
    constituency: "広島3区",
    keyPolicies: ["軽減税率", "教育無償化", "防災減災"],
    profile:
      "公明党代表で国土交通大臣も務める。軽減税率の導入や教育無償化の実現に尽力した政策通。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 23000,
    experience: "28年",
    education: "東京工業大学理工学部",
    socialMedia: {
      twitter: "@saitotetsuo_",
    },
    achievements: ["公明党代表", "国土交通大臣", "軽減税率導入"],
    youthFriendlyDesc:
      "理系出身で論理的な政策が得意！消費税の軽減税率を導入して、若者の生活負担を軽くしました。",
    importance: 4,
    recentActivity: "防災減災対策の強化",
    famousQuote: "生活者目線の政治を",
    committees: ["国土交通委員会"],
    localPopularity: 75,
    hobbies: ["読書", "科学研究"],
  },
  {
    id: "takagi-yoshiaki",
    name: "高木 陽介",
    party: "公明党",
    position: "衆議院議員",
    age: 60,
    constituency: "東京12区",
    keyPolicies: ["IT政策", "中小企業支援", "若者雇用"],
    profile:
      "IT政策に詳しく、デジタル社会の構築を推進。中小企業支援や若者の雇用創出にも力を入れる。",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    followers: 16800,
    experience: "22年",
    education: "慶應義塾大学経済学部",
    socialMedia: {
      twitter: "@takagi_yosuke",
    },
    achievements: ["IT政策推進", "中小企業支援法案", "若者雇用創出"],
    youthFriendlyDesc:
      "ITに詳しい政治家！若者が得意なデジタル技術を活かせる仕事を作ろうと頑張っています。",
    importance: 2,
    recentActivity: "デジタル人材育成支援",
    famousQuote: "技術で社会を豊かに",
    committees: ["IT戦略特別委員会"],
    localPopularity: 68,
    hobbies: ["プログラミング", "音楽"],
  },

  // 共産党追加議員
  {
    id: "koike-akira",
    name: "小池 晃",
    party: "日本共産党",
    position: "書記局長",
    age: 63,
    constituency: "参議院比例代表",
    keyPolicies: ["医療制度改革", "反貧困", "平和憲法"],
    profile:
      "医師出身で医療政策に精通。国会で鋭い質問を行い、庶民の立場から政策を追及する。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 28000,
    experience: "25年",
    education: "東北大学医学部",
    socialMedia: {
      twitter: "@koike_akira",
    },
    achievements: ["共産党書記局長", "医療政策専門家", "国会質問で話題"],
    youthFriendlyDesc:
      "お医者さん出身で医療に詳しい！若者の医療費負担を軽くして、安心して病院に行けるよう活動しています。",
    importance: 3,
    recentActivity: "医療費負担軽減の提案",
    famousQuote: "命と暮らしを守る政治を",
    committees: ["厚生労働委員会"],
    localPopularity: 65,
    hobbies: ["読書", "クラシック音楽"],
  },

  // 参政党
  {
    id: "kamiya-sohei",
    name: "神谷 宗幣",
    party: "参政党",
    position: "事務局長",
    age: 47,
    constituency: "参議院比例代表",
    keyPolicies: ["教育改革", "国益重視", "情報発信"],
    profile:
      "YouTube等での情報発信で注目を集める。教育改革と日本の国益を重視した政策を訴える新興政党の中心人物。",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    followers: 45000,
    experience: "3年",
    education: "早稲田大学商学部",
    socialMedia: {
      twitter: "@jinkamiya",
      youtube: "神谷宗幣チャンネル",
    },
    achievements: ["参政党立ち上げ", "YouTube政治発信", "教育改革提言"],
    youthFriendlyDesc:
      "YouTubeで政治を分かりやすく発信！日本の教育を変えて、若者がもっと誇りを持てる国にしようと訴えています。",
    importance: 2,
    recentActivity: "教育制度改革の提案",
    famousQuote: "日本を豊かに、強く",
    committees: ["文教科学委員会"],
    localPopularity: 58,
    hobbies: ["YouTube", "歴史研究"],
  },

  // 社民党
  {
    id: "fukushima-mizuho",
    name: "福島 瑞穂",
    party: "社会民主党",
    position: "党首",
    age: 68,
    constituency: "参議院比例代表",
    keyPolicies: ["平和憲法", "ジェンダー平等", "脱原発"],
    profile:
      "弁護士出身で人権問題に長年取り組む。女性の権利向上と平和主義を一貫して主張する社民党の顔。",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face",
    followers: 32000,
    experience: "25年",
    education: "東京大学法学部",
    socialMedia: {
      twitter: "@mizuhofukushima",
    },
    achievements: ["社民党党首", "人権弁護士", "女性の権利向上"],
    youthFriendlyDesc:
      "女性の権利を守る弁護士出身！若い女性が差別されない社会を作ろうと、長年頑張り続けています。",
    importance: 2,
    recentActivity: "ジェンダー平等推進法案",
    famousQuote: "すべての人に人権を",
    committees: ["法務委員会"],
    localPopularity: 62,
    hobbies: ["読書", "映画鑑賞"],
  },

  // 無所属・その他
  {
    id: "koizumi-junichiro",
    name: "小泉 純一郎",
    party: "無所属",
    position: "元内閣総理大臣",
    age: 82,
    constituency: "引退",
    keyPolicies: ["構造改革", "脱原発", "郵政民営化"],
    profile:
      "「聖域なき構造改革」で有名な元総理大臣。現在は脱原発運動を展開し、影響力を持ち続ける。",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 58000,
    experience: "47年",
    education: "慶應義塾大学経済学部",
    socialMedia: {
      twitter: "@koizumi_junichi",
    },
    achievements: ["元内閣総理大臣", "郵政民営化", "構造改革推進"],
    youthFriendlyDesc:
      "「感動した！」で有名な元総理！今は原発をなくして、若者に安全な未来を残そうと活動しています。",
    importance: 3,
    recentActivity: "脱原発講演活動",
    famousQuote: "感動した！",
    committees: ["引退"],
    localPopularity: 76,
    hobbies: ["クラシック音楽", "映画鑑賞"],
  },
];

// 政党一覧と色設定
export const partyInfo = {
  自由民主党: {
    color: "bg-red-100 text-red-800",
    shortName: "自民",
    description: "保守系政党。経済成長重視、日米同盟基軸の外交",
    foundedYear: 1955,
    currentSeats: { house: 259, senate: 119 },
  },
  立憲民主党: {
    color: "bg-blue-100 text-blue-800",
    shortName: "立憲",
    description: "リベラル系野党。格差是正、立憲主義重視",
    foundedYear: 2017,
    currentSeats: { house: 98, senate: 39 },
  },
  公明党: {
    color: "bg-yellow-100 text-yellow-800",
    shortName: "公明",
    description: "中道政党。福祉重視、平和主義、庶民目線",
    foundedYear: 1964,
    currentSeats: { house: 32, senate: 27 },
  },
  日本維新の会: {
    color: "bg-orange-100 text-orange-800",
    shortName: "維新",
    description: "改革政党。規制緩和、地方分権、身を切る改革",
    foundedYear: 2012,
    currentSeats: { house: 41, senate: 12 },
  },
  日本共産党: {
    color: "bg-purple-100 text-purple-800",
    shortName: "共産",
    description: "革新政党。反戦平和、格差是正、原発ゼロ",
    foundedYear: 1922,
    currentSeats: { house: 10, senate: 11 },
  },
  国民民主党: {
    color: "bg-green-100 text-green-800",
    shortName: "国民",
    description: "中道政党。現実的改革、働く人重視",
    foundedYear: 2018,
    currentSeats: { house: 7, senate: 16 },
  },
  れいわ新選組: {
    color: "bg-pink-100 text-pink-800",
    shortName: "れいわ",
    description: "革新政党。反緊縮、弱者救済、消費税廃止",
    foundedYear: 2019,
    currentSeats: { house: 3, senate: 2 },
  },
  参政党: {
    color: "bg-indigo-100 text-indigo-800",
    shortName: "参政",
    description: "新興政党。教育改革、国益重視、情報発信",
    foundedYear: 2020,
    currentSeats: { house: 0, senate: 1 },
  },
  社会民主党: {
    color: "bg-teal-100 text-teal-800",
    shortName: "社民",
    description: "革新政党。平和憲法、人権重視、ジェンダー平等",
    foundedYear: 1996,
    currentSeats: { house: 1, senate: 1 },
  },
  無所属: {
    color: "bg-gray-100 text-gray-800",
    shortName: "無所属",
    description: "政党に所属しない議員",
    foundedYear: null,
    currentSeats: { house: 10, senate: 5 },
  },
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
