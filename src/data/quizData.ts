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

  // 憲法・政治制度 - 追加問題
  {
    id: "const_003",
    category: "constitution",
    subcategory: "基本的人権",
    difficulty: "初級",
    question: "日本国憲法第9条は何について定めていますか？",
    options: ["基本的人権", "戦争放棄", "国民主権", "地方自治"],
    correct: 1,
    explanation:
      "憲法第9条は戦争放棄について定めています。「日本国民は、正義と秩序を基調とする国際平和を誠実に希求し、国権の発動たる戦争と、武力による威嚇又は武力の行使は、国際紛争を解決する手段としては、永久にこれを放棄する」と規定されています。",
    relatedTopics: ["憲法9条", "戦争放棄", "平和主義", "自衛隊"],
    points: 10,
    lastUpdated: "2024-12-01",
  },
  {
    id: "const_004",
    category: "constitution",
    subcategory: "統治機構",
    difficulty: "中級",
    question:
      "衆議院で可決された法案が参議院で否決された場合、衆議院で何分の何以上の賛成があれば法律として成立しますか？",
    options: ["2分の1", "3分の2", "4分の3", "5分の6"],
    correct: 1,
    explanation:
      "衆議院の優越により、衆議院で3分の2以上の賛成があれば、参議院で否決されても法律として成立します。これは衆議院の民意をより重視する制度です。",
    relatedTopics: ["衆議院の優越", "法案成立", "国会", "立法府"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "const_005",
    category: "constitution",
    subcategory: "基本的人権",
    difficulty: "中級",
    question:
      "表現の自由に関する「検閲の禁止」を定めているのは憲法第何条ですか？",
    options: ["第19条", "第20条", "第21条", "第22条"],
    correct: 2,
    explanation:
      "憲法第21条で「集会、結社及び言論、出版その他一切の表現の自由は、これを保障する。検閲は、これをしてはならない」と定められています。",
    relatedTopics: ["表現の自由", "検閲の禁止", "言論の自由", "基本的人権"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "const_006",
    category: "constitution",
    subcategory: "憲法改正",
    difficulty: "上級",
    question:
      "憲法改正の国民投票で、投票総数の何分の何以上の賛成が必要ですか？",
    options: ["2分の1", "3分の2", "4分の3", "投票者の過半数"],
    correct: 0,
    explanation:
      "憲法改正には、国民投票において投票総数の2分の1以上の賛成が必要です。これは有効投票総数の過半数という意味です。",
    relatedTopics: ["憲法改正", "国民投票", "改正手続き", "96条"],
    points: 30,
    lastUpdated: "2024-12-01",
  },
  {
    id: "const_007",
    category: "constitution",
    subcategory: "地方自治",
    difficulty: "中級",
    question: "地方自治の本旨について定めているのは憲法第何条ですか？",
    options: ["第92条", "第93条", "第94条", "第95条"],
    correct: 0,
    explanation:
      "憲法第92条で「地方公共団体の組織及び運営に関する事項は、地方自治の本旨に基いて、法律でこれを定める」と規定されています。",
    relatedTopics: ["地方自治", "地方公共団体", "本旨", "住民自治"],
    points: 20,
    lastUpdated: "2024-12-01",
  },

  // 時事問題 - 追加問題
  {
    id: "current_003",
    category: "current-affairs",
    subcategory: "国際情勢",
    difficulty: "中級",
    question:
      "2024年に日本が議長国を務めたG7サミットが開催された都市はどこですか？",
    options: ["広島", "長崎", "東京", "大阪"],
    correct: 0,
    explanation:
      "2023年のG7広島サミットに続き、2024年は広島で関連会合が多数開催されました。平和都市広島からのメッセージとして国際平和への強い意志を示しました。",
    relatedTopics: ["G7サミット", "広島", "国際平和", "外交"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "current_004",
    category: "current-affairs",
    subcategory: "社会問題",
    difficulty: "初級",
    question: "2024年に話題となった「こども家庭庁」の主な目的は何ですか？",
    options: ["教育改革", "少子化対策", "高齢者支援", "雇用創出"],
    correct: 1,
    explanation:
      "こども家庭庁は2023年4月に設立され、少子化対策やこども・子育て支援を一元的に担う組織です。縦割り行政を解消し、こども政策を強力に推進することを目的としています。",
    relatedTopics: ["こども家庭庁", "少子化対策", "子育て支援", "行政改革"],
    points: 10,
    lastUpdated: "2024-12-01",
  },
  {
    id: "current_005",
    category: "current-affairs",
    subcategory: "経済政策",
    difficulty: "上級",
    question: "2024年の日本の物価上昇率（CPI）が目標とする数値は何％ですか？",
    options: ["1％", "2％", "3％", "4％"],
    correct: 1,
    explanation:
      "日本銀行は物価安定目標として2％のインフレ率を掲げています。この水準が経済の持続的成長に適切とされており、金融政策の基準となっています。",
    relatedTopics: ["物価目標", "日本銀行", "インフレ", "金融政策"],
    points: 30,
    lastUpdated: "2024-12-01",
  },
  {
    id: "current_006",
    category: "current-affairs",
    subcategory: "国内政治",
    difficulty: "中級",
    question: "2024年の政治資金問題で特に注目された政治団体の名称は？",
    options: ["政策研究会", "政治資金団体", "政治党支部", "政策活動費"],
    correct: 3,
    explanation:
      "2024年には政策活動費の透明性が大きな問題となり、使途の不明確さや報告義務の緩さが批判されました。政治資金の透明化が重要な課題となっています。",
    relatedTopics: ["政治資金問題", "政策活動費", "透明性", "政治改革"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "current_007",
    category: "current-affairs",
    subcategory: "国際情勢",
    difficulty: "上級",
    question: "2024年の日米安保関係で強化が発表された新たな協力分野は？",
    options: ["宇宙・サイバー", "海洋安全保障", "経済安全保障", "人的交流"],
    correct: 0,
    explanation:
      "2024年の日米首脳会談では、宇宙・サイバー分野での協力強化が重要議題となりました。新たな安全保障の脅威に対応するため、従来の枠組みを超えた協力が進んでいます。",
    relatedTopics: ["日米安保", "宇宙安全保障", "サイバー安全保障", "日米関係"],
    points: 30,
    lastUpdated: "2024-12-01",
  },

  // 政治家・政党 - 追加問題
  {
    id: "pol_002",
    category: "politicians",
    subcategory: "党首・代表",
    difficulty: "初級",
    question: "現在の立憲民主党代表は誰ですか？",
    options: ["枝野幸男", "泉健太", "野田佳彦", "岡田克也"],
    correct: 1,
    explanation:
      "2021年11月より泉健太氏が立憲民主党の代表を務めています。元NHK記者で、労働問題や格差問題に詳しい政治家です。",
    relatedTopics: ["泉健太", "立憲民主党", "党代表", "野党"],
    points: 10,
    lastUpdated: "2024-12-01",
  },
  {
    id: "pol_003",
    category: "politicians",
    subcategory: "現職閣僚",
    difficulty: "中級",
    question:
      "現在のデジタル大臣として、マイナンバーカードの普及に取り組んでいるのは誰ですか？",
    options: ["河野太郎", "平井卓也", "牧島かれん", "小林史明"],
    correct: 0,
    explanation:
      "河野太郎氏がデジタル大臣として、マイナンバーカードの普及促進やデジタル庁の改革に取り組んでいます。SNSでの積極的な情報発信でも知られています。",
    relatedTopics: ["河野太郎", "デジタル大臣", "マイナンバーカード", "DX"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "pol_004",
    category: "politicians",
    subcategory: "歴代総理",
    difficulty: "中級",
    question: "「令和おじさん」として親しまれた元総理大臣は誰ですか？",
    options: ["安倍晋三", "菅義偉", "岸田文雄", "石破茂"],
    correct: 1,
    explanation:
      "菅義偉氏は官房長官時代に「令和」の新元号を発表し、「令和おじさん」として親しまれました。その後第99代内閣総理大臣を務めました。",
    relatedTopics: ["菅義偉", "令和", "元号発表", "内閣総理大臣"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "pol_005",
    category: "politicians",
    subcategory: "地方政治家",
    difficulty: "上級",
    question:
      "大阪府知事として「大阪都構想」を推進し、コロナ対策でも注目された政治家は？",
    options: ["松井一郎", "吉村洋文", "橋下徹", "山口那津男"],
    correct: 1,
    explanation:
      "吉村洋文大阪府知事は、大阪都構想の推進やコロナ対策での情報発信で全国的に注目を集めました。弁護士出身で日本維新の会の副代表も務めています。",
    relatedTopics: ["吉村洋文", "大阪府知事", "大阪都構想", "維新の会"],
    points: 30,
    lastUpdated: "2024-12-01",
  },
  {
    id: "pol_006",
    category: "politicians",
    subcategory: "現職閣僚",
    difficulty: "上級",
    question:
      "現在の厚生労働大臣として、医療制度改革に取り組んでいるのは誰ですか？",
    options: ["武見敬三", "加藤勝信", "田村憲久", "後藤茂之"],
    correct: 0,
    explanation:
      "武見敬三氏が厚生労働大臣として、医療制度改革や感染症対策に取り組んでいます。WHO事務局長特別顧問も務めた医療政策のエキスパートです。",
    relatedTopics: ["武見敬三", "厚生労働大臣", "医療制度改革", "WHO"],
    points: 30,
    lastUpdated: "2024-12-01",
  },

  // 政策理解 - 追加問題
  {
    id: "policy_002",
    category: "policy",
    subcategory: "経済政策",
    difficulty: "初級",
    question: "「アベノミクス」の三本の矢に含まれていないのはどれですか？",
    options: [
      "大胆な金融政策",
      "機動的な財政政策",
      "民間投資を喚起する成長戦略",
      "所得の再分配",
    ],
    correct: 3,
    explanation:
      "アベノミクスの三本の矢は、①大胆な金融政策、②機動的な財政政策、③民間投資を喚起する成長戦略です。所得の再分配は含まれていません。",
    relatedTopics: ["アベノミクス", "三本の矢", "金融政策", "成長戦略"],
    points: 10,
    lastUpdated: "2024-12-01",
  },
  {
    id: "policy_003",
    category: "policy",
    subcategory: "外交・安保",
    difficulty: "中級",
    question:
      "「自由で開かれたインド太平洋」構想を最初に提唱した日本の総理大臣は？",
    options: ["安倍晋三", "菅義偉", "岸田文雄", "石破茂"],
    correct: 0,
    explanation:
      "「自由で開かれたインド太平洋（FOIP）」構想は、安倍晋三元総理が2016年に提唱しました。この構想は現在も日本外交の基軸となっています。",
    relatedTopics: ["FOIP", "安倍晋三", "インド太平洋", "外交戦略"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "policy_004",
    category: "policy",
    subcategory: "環境・エネルギー",
    difficulty: "中級",
    question:
      "日本が国際的に約束した2030年度の温室効果ガス削減目標は何％ですか？",
    options: ["26％", "46％", "50％", "80％"],
    correct: 1,
    explanation:
      "日本は2030年度に2013年度比で温室効果ガスを46％削減することを国際的に約束しています。さらに50％の高みを目指すことも表明しています。",
    relatedTopics: ["温室効果ガス", "削減目標", "2030年", "気候変動"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "policy_005",
    category: "policy",
    subcategory: "社会保障",
    difficulty: "上級",
    question:
      "「全世代型社会保障制度」の中核となる改革として最も重要視されているのは？",
    options: ["年金制度改革", "医療制度改革", "少子化対策", "介護制度改革"],
    correct: 2,
    explanation:
      "全世代型社会保障制度の中核は少子化対策です。従来の高齢者中心の社会保障から、子育て世代を含む全世代を対象とした制度への転換が図られています。",
    relatedTopics: [
      "全世代型社会保障",
      "少子化対策",
      "社会保障改革",
      "子育て支援",
    ],
    points: 30,
    lastUpdated: "2024-12-01",
  },

  // 選挙制度 - 追加問題
  {
    id: "election_001",
    category: "election",
    subcategory: "選挙制度",
    difficulty: "初級",
    question: "衆議院議員の任期は何年ですか？",
    options: ["3年", "4年", "5年", "6年"],
    correct: 1,
    explanation:
      "衆議院議員の任期は4年です。ただし、解散があった場合はその時点で任期満了となります。参議院議員の任期は6年で、3年ごとに半数が改選されます。",
    relatedTopics: ["衆議院", "任期", "解散", "選挙制度"],
    points: 10,
    lastUpdated: "2024-12-01",
  },
  {
    id: "election_002",
    category: "election",
    subcategory: "投票方法",
    difficulty: "初級",
    question: "衆議院選挙では何枚の投票用紙を使いますか？",
    options: ["1枚", "2枚", "3枚", "4枚"],
    correct: 1,
    explanation:
      "衆議院選挙では、小選挙区選出議員選挙用と比例代表選出議員選挙用の2枚の投票用紙を使います。小選挙区では候補者名、比例代表では政党名を記入します。",
    relatedTopics: ["衆議院選挙", "投票用紙", "小選挙区", "比例代表"],
    points: 10,
    lastUpdated: "2024-12-01",
  },
  {
    id: "election_003",
    category: "election",
    subcategory: "選挙運動",
    difficulty: "中級",
    question: "選挙運動期間中にインターネットで行えるのはどれですか？",
    options: ["メール送信", "SNS投稿", "動画配信", "すべて可能"],
    correct: 3,
    explanation:
      "2013年の公職選挙法改正により、選挙運動期間中のインターネット利用が解禁されました。ウェブサイト、SNS、動画配信など幅広く利用可能です。ただし、メール送信には一定の制限があります。",
    relatedTopics: ["インターネット選挙運動", "公職選挙法", "SNS", "選挙期間"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "election_004",
    category: "election",
    subcategory: "政治資金",
    difficulty: "上級",
    question:
      "政治資金規正法で、企業・団体からの政治献金が禁止されているのは？",
    options: ["政党", "政治資金団体", "後援会", "個人の政治家"],
    correct: 3,
    explanation:
      "政治資金規正法により、企業・団体から個人の政治家（候補者を含む）への政治献金は禁止されています。政党や政治資金団体への献金は一定の条件下で認められています。",
    relatedTopics: ["政治資金規正法", "政治献金", "企業献金", "透明性"],
    points: 30,
    lastUpdated: "2024-12-01",
  },

  // 政治史 - 追加問題
  {
    id: "history_001",
    category: "history",
    subcategory: "戦後復興",
    difficulty: "中級",
    question: "戦後日本の民主化を主導したGHQ最高司令官は誰ですか？",
    options: ["マッカーサー", "リッジウェイ", "アイゼンハワー", "トルーマン"],
    correct: 0,
    explanation:
      "ダグラス・マッカーサー元帥がGHQ（連合国軍最高司令官総司令部）最高司令官として、戦後日本の民主化を主導しました。日本国憲法制定にも大きな影響を与えました。",
    relatedTopics: ["マッカーサー", "GHQ", "戦後民主化", "占領政策"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "history_002",
    category: "history",
    subcategory: "高度成長",
    difficulty: "中級",
    question:
      "1960年代の高度経済成長期を象徴する東京オリンピックが開催されたのは何年ですか？",
    options: ["1962年", "1964年", "1966年", "1968年"],
    correct: 1,
    explanation:
      "1964年に東京オリンピックが開催されました。これは戦後復興の象徴であり、新幹線開業や首都高速道路建設など、日本のインフラ整備が大きく進展しました。",
    relatedTopics: ["東京オリンピック", "1964年", "高度成長", "戦後復興"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "history_003",
    category: "history",
    subcategory: "政治改革",
    difficulty: "上級",
    question:
      "1993年に自民党が下野するきっかけとなった政治改革の中心的課題は？",
    options: ["憲法改正", "行政改革", "政治資金問題", "選挙制度改革"],
    correct: 2,
    explanation:
      "1993年の自民党下野は、佐川急便事件やゼネコン汚職事件などの政治資金問題が大きなきっかけとなりました。政治不信の高まりが政権交代を生み出しました。",
    relatedTopics: ["1993年", "政権交代", "政治資金問題", "細川政権"],
    points: 30,
    lastUpdated: "2024-12-01",
  },
  {
    id: "history_004",
    category: "history",
    subcategory: "平成・令和",
    difficulty: "中級",
    question: "小泉純一郎首相の構造改革の象徴的な政策は何でしたか？",
    options: ["規制緩和", "郵政民営化", "道路公団民営化", "すべて"],
    correct: 3,
    explanation:
      "小泉純一郎首相は「聖域なき構造改革」を掲げ、郵政民営化、道路公団民営化、規制緩和など包括的な改革を推進しました。特に郵政民営化は2005年衆院選の争点となりました。",
    relatedTopics: ["小泉純一郎", "構造改革", "郵政民営化", "聖域なき改革"],
    points: 20,
    lastUpdated: "2024-12-01",
  },

  // さらなる憲法・政治制度問題
  {
    id: "const_008",
    category: "constitution",
    subcategory: "基本的人権",
    difficulty: "上級",
    question:
      "憲法第14条で保障されている「法の下の平等」に関して、禁止されている差別理由に含まれないのは？",
    options: ["人種", "信条", "性別", "職業"],
    correct: 3,
    explanation:
      "憲法第14条では、人種、信条、性別、社会的身分又は門地による差別を禁止していますが、職業による差別は明示的に含まれていません。",
    relatedTopics: ["法の下の平等", "差別禁止", "基本的人権", "14条"],
    points: 30,
    lastUpdated: "2024-12-01",
  },
  {
    id: "const_009",
    category: "constitution",
    subcategory: "統治機構",
    difficulty: "エキスパート",
    question: "最高裁判所長官を指名するのは誰ですか？",
    options: ["天皇", "内閣総理大臣", "内閣", "国会"],
    correct: 2,
    explanation:
      "最高裁判所長官は内閣が指名し、天皇が任命します。他の最高裁判所判事も内閣が任命し、天皇が認証します。",
    relatedTopics: ["最高裁判所", "三権分立", "司法府", "内閣"],
    points: 40,
    lastUpdated: "2024-12-01",
  },
  {
    id: "const_010",
    category: "constitution",
    subcategory: "基本的人権",
    difficulty: "中級",
    question: "「学問の自由」を保障している憲法の条文は第何条ですか？",
    options: ["第21条", "第22条", "第23条", "第24条"],
    correct: 2,
    explanation:
      "憲法第23条で「学問の自由は、これを保障する」と定められています。これは研究・教育・発表の自由を含みます。",
    relatedTopics: ["学問の自由", "大学の自治", "教育", "研究"],
    points: 20,
    lastUpdated: "2024-12-01",
  },

  // さらなる時事問題
  {
    id: "current_008",
    category: "current-affairs",
    subcategory: "社会問題",
    difficulty: "中級",
    question: "2024年に成立した「LGBT理解増進法」の正式名称に含まれる表現は？",
    options: ["多様性", "包摂性", "理解増進", "すべて含む"],
    correct: 3,
    explanation:
      "「性的指向及びジェンダーアイデンティティの多様性に関する国民の理解の増進に関する法律」が正式名称で、多様性、理解増進の両方が含まれています。",
    relatedTopics: ["LGBT", "多様性", "人権", "理解増進法"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "current_009",
    category: "current-affairs",
    subcategory: "経済政策",
    difficulty: "上級",
    question: "2024年の春闘で連合が掲げた賃上げ目標は何％以上でしたか？",
    options: ["3％", "4％", "5％", "6％"],
    correct: 2,
    explanation:
      "連合は2024年春闘で5％以上の賃上げを目標に掲げました。物価上昇に対応した実質的な賃上げを求めています。",
    relatedTopics: ["春闘", "賃上げ", "連合", "労働組合"],
    points: 30,
    lastUpdated: "2024-12-01",
  },
  {
    id: "current_010",
    category: "current-affairs",
    subcategory: "国際情勢",
    difficulty: "エキスパート",
    question: "2024年に日本が新たに参加した国際的な枠組みは？",
    options: ["CPTPP", "IPEF", "QUAD", "AUKUS"],
    correct: 1,
    explanation:
      "日本は2024年にIPEF（インド太平洋経済枠組み）の供給網協定に署名しました。経済安全保障の観点から重要な枠組みです。",
    relatedTopics: ["IPEF", "経済安全保障", "サプライチェーン", "インド太平洋"],
    points: 40,
    lastUpdated: "2024-12-01",
  },

  // さらなる政治家・政党問題
  {
    id: "pol_007",
    category: "politicians",
    subcategory: "党首・代表",
    difficulty: "中級",
    question: "現在の公明党代表は誰ですか？",
    options: ["山口那津男", "斉藤鉄夫", "石井啓一", "太田昭宏"],
    correct: 1,
    explanation:
      "2023年9月より斉藤鉄夫氏が公明党代表を務めています。理系出身で国土交通大臣も経験した政策通です。",
    relatedTopics: ["斉藤鉄夫", "公明党", "党代表", "連立政権"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "pol_008",
    category: "politicians",
    subcategory: "現職閣僚",
    difficulty: "上級",
    question: "現在の防衛大臣として、防衛力強化に取り組んでいるのは誰ですか？",
    options: ["木原稔", "浜田靖一", "岸信夫", "中谷元"],
    correct: 0,
    explanation:
      "木原稔氏が防衛大臣として、防衛費増額や反撃能力保有などの防衛力強化に取り組んでいます。",
    relatedTopics: ["木原稔", "防衛大臣", "防衛力強化", "反撃能力"],
    points: 30,
    lastUpdated: "2024-12-01",
  },
  {
    id: "pol_009",
    category: "politicians",
    subcategory: "歴代総理",
    difficulty: "初級",
    question: "「感動した！」の名言で知られる元総理大臣は誰ですか？",
    options: ["小泉純一郎", "安倍晋三", "森喜朗", "橋本龍太郎"],
    correct: 0,
    explanation:
      "小泉純一郎元総理が2001年の大相撲夏場所で貴乃花の優勝を讃えて発した「感動した！」は流行語にもなりました。",
    relatedTopics: ["小泉純一郎", "感動した", "貴乃花", "流行語"],
    points: 10,
    lastUpdated: "2024-12-01",
  },
  {
    id: "pol_010",
    category: "politicians",
    subcategory: "地方政治家",
    difficulty: "中級",
    question: "東京都知事として都政改革に取り組んでいるのは誰ですか？",
    options: ["小池百合子", "橋下徹", "河村たかし", "鈴木直道"],
    correct: 0,
    explanation:
      "小池百合子氏が2016年より東京都知事を務め、都政改革、東京オリンピック・パラリンピック開催、コロナ対策などに取り組んでいます。",
    relatedTopics: ["小池百合子", "東京都知事", "都政改革", "東京五輪"],
    points: 20,
    lastUpdated: "2024-12-01",
  },

  // さらなる政策理解問題
  {
    id: "policy_006",
    category: "policy",
    subcategory: "経済政策",
    difficulty: "中級",
    question: "「骨太の方針」の正式名称は？",
    options: [
      "経済財政政策基本方針",
      "経済成長戦略",
      "財政健全化計画",
      "構造改革方針",
    ],
    correct: 0,
    explanation:
      "「骨太の方針」の正式名称は「経済財政運営と改革の基本方針」です。内閣府の経済財政諮問会議で策定される重要な政策文書です。",
    relatedTopics: ["骨太の方針", "経済財政諮問会議", "基本方針", "内閣府"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "policy_007",
    category: "policy",
    subcategory: "外交・安保",
    difficulty: "エキスパート",
    question: "日本の「反撃能力」について、政府が想定している主な対象は？",
    options: ["テロ組織", "サイバー攻撃", "弾道ミサイル", "海上封鎖"],
    correct: 2,
    explanation:
      "日本の反撃能力（敵基地攻撃能力）は、主に弾道ミサイル等による攻撃に対する抑止・対処能力として位置づけられています。",
    relatedTopics: ["反撃能力", "敵基地攻撃", "弾道ミサイル", "防衛戦略"],
    points: 40,
    lastUpdated: "2024-12-01",
  },
  {
    id: "policy_008",
    category: "policy",
    subcategory: "環境・エネルギー",
    difficulty: "上級",
    question:
      "日本の「GX（グリーントランスフォーメーション）」で重視される技術は？",
    options: ["AI", "水素", "量子コンピュータ", "5G"],
    correct: 1,
    explanation:
      "GXでは水素技術が重要な柱とされており、水素の製造・輸送・利用の技術革新により脱炭素社会の実現を目指しています。",
    relatedTopics: ["GX", "水素技術", "脱炭素", "グリーンイノベーション"],
    points: 30,
    lastUpdated: "2024-12-01",
  },
  {
    id: "policy_009",
    category: "policy",
    subcategory: "社会保障",
    difficulty: "中級",
    question: "「こども家庭庁」設立の主な背景となった課題は？",
    options: ["教育の質向上", "子どもの貧困", "縦割り行政", "すべて"],
    correct: 3,
    explanation:
      "こども家庭庁は、子どもの貧困、縦割り行政の解消、教育・保育の質向上など、子どもを取り巻く様々な課題に一元的に取り組むために設立されました。",
    relatedTopics: ["こども家庭庁", "縦割り行政", "子どもの貧困", "一元化"],
    points: 20,
    lastUpdated: "2024-12-01",
  },

  // さらなる選挙制度問題
  {
    id: "election_005",
    category: "election",
    subcategory: "選挙制度",
    difficulty: "中級",
    question:
      "参議院選挙の比例代表では、どのような投票方法が採用されていますか？",
    options: [
      "政党名のみ",
      "候補者名のみ",
      "政党名または候補者名",
      "政党名と候補者名の両方",
    ],
    correct: 2,
    explanation:
      "参議院比例代表では、政党名または候補者名のどちらでも投票できる「非拘束名簿式」が採用されています。候補者名での投票は個人票として扱われます。",
    relatedTopics: ["参議院選挙", "比例代表", "非拘束名簿式", "個人票"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "election_006",
    category: "election",
    subcategory: "投票方法",
    difficulty: "上級",
    question: "期日前投票を行うために必要な条件は？",
    options: ["理由は不要", "宣誓書への記入", "身分証明書の提示", "事前申請"],
    correct: 1,
    explanation:
      "期日前投票には宣誓書への記入が必要です。投票日に投票所に行けない理由を記載しますが、詳細な証明は不要です。",
    relatedTopics: ["期日前投票", "宣誓書", "投票所", "選挙制度"],
    points: 30,
    lastUpdated: "2024-12-01",
  },
  {
    id: "election_007",
    category: "election",
    subcategory: "選挙運動",
    difficulty: "エキスパート",
    question: "公職選挙法で禁止されている選挙運動は？",
    options: ["戸別訪問", "飲食物の提供", "署名運動", "すべて"],
    correct: 3,
    explanation:
      "公職選挙法では、戸別訪問、飲食物の提供、署名運動など多くの行為が選挙運動として禁止されています。公正な選挙を確保するためです。",
    relatedTopics: ["公職選挙法", "選挙運動規制", "戸別訪問", "公正選挙"],
    points: 40,
    lastUpdated: "2024-12-01",
  },

  // さらなる政治史問題
  {
    id: "history_005",
    category: "history",
    subcategory: "戦後復興",
    difficulty: "上級",
    question: "戦後の「55年体制」が成立した年は？",
    options: ["1954年", "1955年", "1956年", "1957年"],
    correct: 1,
    explanation:
      "1955年に自由民主党が結成され、社会党との「55年体制」が始まりました。自民党の長期政権と社会党の万年野党という構図が続きました。",
    relatedTopics: ["55年体制", "自民党結成", "1955年", "政党政治"],
    points: 30,
    lastUpdated: "2024-12-01",
  },
  {
    id: "history_006",
    category: "history",
    subcategory: "高度成長",
    difficulty: "中級",
    question: "「所得倍増計画」を提唱した総理大臣は？",
    options: ["岸信介", "池田勇人", "佐藤栄作", "田中角栄"],
    correct: 1,
    explanation:
      "池田勇人首相が1960年に「所得倍増計画」を発表し、10年間で国民所得を倍増させることを目標としました。高度経済成長の象徴的政策です。",
    relatedTopics: ["池田勇人", "所得倍増計画", "高度成長", "1960年"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "history_007",
    category: "history",
    subcategory: "政治改革",
    difficulty: "エキスパート",
    question: "1994年に成立した政治改革関連法で導入されたのは？",
    options: ["小選挙区制", "政党助成制度", "政治資金規正法強化", "すべて"],
    correct: 3,
    explanation:
      "1994年の政治改革では、小選挙区比例代表並立制の導入、政党助成制度の創設、政治資金規正法の強化が一体的に行われました。",
    relatedTopics: ["政治改革", "1994年", "小選挙区制", "政党助成"],
    points: 40,
    lastUpdated: "2024-12-01",
  },
  {
    id: "history_008",
    category: "history",
    subcategory: "平成・令和",
    difficulty: "上級",
    question: "2009年の政権交代で誕生した民主党政権の初代総理は？",
    options: ["鳩山由紀夫", "菅直人", "野田佳彦", "小沢一郎"],
    correct: 0,
    explanation:
      "2009年の政権交代により、鳩山由紀夫氏が民主党政権初代の総理大臣に就任しました。「政治主導」を掲げて政権運営に当たりました。",
    relatedTopics: ["鳩山由紀夫", "2009年", "政権交代", "民主党政権"],
    points: 30,
    lastUpdated: "2024-12-01",
  },

  // 若者向け政治問題
  {
    id: "youth_001",
    category: "current-affairs",
    subcategory: "社会問題",
    difficulty: "初級",
    question: "18歳選挙権が導入されたのは何年ですか？",
    options: ["2014年", "2015年", "2016年", "2017年"],
    correct: 2,
    explanation:
      "18歳選挙権は2016年に導入されました。これにより約240万人の若者が新たに有権者となり、政治参加の機会が拡大しました。",
    relatedTopics: ["18歳選挙権", "若者政治参加", "2016年", "有権者拡大"],
    points: 10,
    lastUpdated: "2024-12-01",
  },
  {
    id: "youth_002",
    category: "policy",
    subcategory: "社会保障",
    difficulty: "中級",
    question: "大学無償化の対象となる世帯年収の目安は？",
    options: ["200万円未満", "270万円未満", "380万円未満", "500万円未満"],
    correct: 2,
    explanation:
      "高等教育の修学支援新制度では、世帯年収380万円未満の世帯が対象となります。段階的な支援により、経済的理由で進学を諦めることのないよう支援しています。",
    relatedTopics: ["大学無償化", "修学支援", "教育費", "所得制限"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "youth_003",
    category: "current-affairs",
    subcategory: "経済政策",
    difficulty: "中級",
    question: "「就職氷河期世代」支援の対象年齢は？",
    options: ["25-35歳", "30-40歳", "35-50歳", "40-55歳"],
    correct: 2,
    explanation:
      "就職氷河期世代支援は概ね35-50歳の世代を対象としています。バブル崩壊後の厳しい雇用環境で就職活動を行った世代への包括的支援を行っています。",
    relatedTopics: ["就職氷河期世代", "雇用支援", "世代格差", "社会復帰"],
    points: 20,
    lastUpdated: "2024-12-01",
  },

  // SNS・デジタル時代の政治問題
  {
    id: "digital_001",
    category: "current-affairs",
    subcategory: "社会問題",
    difficulty: "中級",
    question: "政治家のSNS利用で問題となることが多いのは？",
    options: [
      "情報発信の遅れ",
      "フェイクニュース拡散",
      "若者への配慮不足",
      "国際情勢への言及",
    ],
    correct: 1,
    explanation:
      "政治家のSNS利用では、フェイクニュースの拡散や不正確な情報の発信が問題となることがあります。情報の真偽確認と責任ある発信が求められています。",
    relatedTopics: [
      "SNS",
      "フェイクニュース",
      "情報リテラシー",
      "デジタル民主主義",
    ],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "digital_002",
    category: "policy",
    subcategory: "経済政策",
    difficulty: "上級",
    question: "「デジタル田園都市国家構想」の主な目的は？",
    options: [
      "都市部の人口減少",
      "地方創生とDX",
      "農業のIT化",
      "リモートワーク推進",
    ],
    correct: 1,
    explanation:
      "デジタル田園都市国家構想は、デジタル技術を活用した地方創生が主な目的です。地方でも都市部と同様のサービスを受けられる環境整備を目指しています。",
    relatedTopics: ["デジタル田園都市", "地方創生", "DX", "地域格差解消"],
    points: 30,
    lastUpdated: "2024-12-01",
  },
  {
    id: "digital_003",
    category: "current-affairs",
    subcategory: "社会問題",
    difficulty: "エキスパート",
    question: "マイナンバーカードの普及率が2024年末に目標とする数値は？",
    options: ["70％", "80％", "90％", "ほぼ全国民"],
    correct: 3,
    explanation:
      "政府はマイナンバーカードの普及率について「ほぼ全国民」への行き渡りを目標としています。デジタル社会の基盤として位置づけています。",
    relatedTopics: ["マイナンバーカード", "デジタル化", "行政サービス", "DX"],
    points: 40,
    lastUpdated: "2024-12-01",
  },

  // 環境・気候変動問題
  {
    id: "environment_001",
    category: "policy",
    subcategory: "環境・エネルギー",
    difficulty: "初級",
    question: "日本が2050年に目指すとしている目標は？",
    options: [
      "温室効果ガス50％削減",
      "カーボンニュートラル",
      "再エネ50％",
      "原発廃止",
    ],
    correct: 1,
    explanation:
      "日本は2050年までにカーボンニュートラル（温室効果ガス排出量実質ゼロ）を目指すことを表明しています。脱炭素社会の実現が目標です。",
    relatedTopics: ["カーボンニュートラル", "2050年", "脱炭素", "温室効果ガス"],
    points: 10,
    lastUpdated: "2024-12-01",
  },
  {
    id: "environment_002",
    category: "current-affairs",
    subcategory: "国際情勢",
    difficulty: "中級",
    question: "COP28で合意された「化石燃料からの脱却」に対する日本の立場は？",
    options: ["積極的賛成", "条件付き賛成", "現実的対応", "反対"],
    correct: 2,
    explanation:
      "日本はCOP28の「化石燃料からの脱却」合意に対し、現実的な移行期間と技術革新を重視する立場を取っています。",
    relatedTopics: ["COP28", "化石燃料", "エネルギー政策", "国際合意"],
    points: 20,
    lastUpdated: "2024-12-01",
  },

  // 働き方・労働問題
  {
    id: "work_001",
    category: "policy",
    subcategory: "経済政策",
    difficulty: "中級",
    question: "「同一労働同一賃金」の導入により最も影響を受けるのは？",
    options: ["正社員", "非正規雇用者", "管理職", "公務員"],
    correct: 1,
    explanation:
      "同一労働同一賃金は、正社員と非正規雇用者の不合理な待遇差を解消することが主な目的です。非正規雇用者の処遇改善が期待されています。",
    relatedTopics: ["同一労働同一賃金", "非正規雇用", "働き方改革", "格差是正"],
    points: 20,
    lastUpdated: "2024-12-01",
  },
  {
    id: "work_002",
    category: "current-affairs",
    subcategory: "社会問題",
    difficulty: "上級",
    question: "「副業・兼業の促進」で政府が重視している観点は？",
    options: [
      "税収増加",
      "スキル向上と人材流動化",
      "労働時間短縮",
      "企業間競争",
    ],
    correct: 1,
    explanation:
      "政府は副業・兼業により、個人のスキル向上と労働市場の流動化を促進し、イノベーション創出や経済活性化を図ることを重視しています。",
    relatedTopics: ["副業・兼業", "人材流動化", "スキルアップ", "働き方改革"],
    points: 30,
    lastUpdated: "2024-12-01",
  },

  // 国際関係・外交問題
  {
    id: "international_001",
    category: "policy",
    subcategory: "外交・安保",
    difficulty: "上級",
    question: "「台湾有事」に関する日本政府の基本的立場は？",
    options: ["軍事介入", "平和的解決支持", "中立維持", "アメリカ追従"],
    correct: 1,
    explanation:
      "日本政府は台湾海峡問題について、平和的解決を一貫して支持し、対話による問題解決を重視する立場を取っています。",
    relatedTopics: ["台湾有事", "平和的解決", "日中関係", "地域安全保障"],
    points: 30,
    lastUpdated: "2024-12-01",
  },
  {
    id: "international_002",
    category: "current-affairs",
    subcategory: "国際情勢",
    difficulty: "エキスパート",
    question: "日本の「経済安全保障」政策で最も重視されている分野は？",
    options: [
      "食料安全保障",
      "サプライチェーン",
      "エネルギー安全保障",
      "すべて重要",
    ],
    correct: 3,
    explanation:
      "経済安全保障では、サプライチェーン、重要技術、エネルギー、食料など複数分野を包括的に重視し、国家・国民の安全を経済面から確保することを目指しています。",
    relatedTopics: [
      "経済安全保障",
      "サプライチェーン",
      "重要技術",
      "リスク管理",
    ],
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
