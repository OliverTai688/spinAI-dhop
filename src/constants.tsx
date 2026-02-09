// SPIN 超級業務系統 - 內容常數

// ============================================
// 品牌配色
// ============================================
export const COLORS = {
  primary: '#C9A227',      // 專業金
  primaryHover: '#F5D76E', // 亮金 (Hover)
  bg: '#050A14',           // 深海藍黑
  bgSecondary: '#0A1220',  // 次要背景
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.6)',
  textTertiary: 'rgba(255, 255, 255, 0.4)',
};

// ============================================
// Hero 英雄區
// ============================================
export const HERO = {
  label: '專為保險業務打造的 AI 銷售教練',
  title: 'SPIN 超級業務系統',
  subtitle: '用 AI 重新定義保險銷售',
  description: '結合 SPIN 銷售法與 AI 智慧，讓每次客戶對話都成為成交機會',
  cta: {
    primary: '立即預約演示',
    primaryLink: 'mailto:inbest.2north@gmail.com?subject=預約系統演示',
    secondary: '查看功能介紹',
    secondaryLink: '#features',
  },
  partner: '與誠交俱樂部戰略合作',
};

// ============================================
// 痛點區
// ============================================
export const PAIN_POINTS = [
  {
    icon: 'Users',
    title: '客戶問題抓不準',
    description: '花了一小時談話，卻沒抓到客戶真正的需求',
  },
  {
    icon: 'FileText',
    title: '會議紀錄沒系統',
    description: '每次拜訪後只有零散筆記，缺乏結構化追蹤',
  },
  {
    icon: 'Clock',
    title: '準備時間太冗長',
    description: '拜訪前不知道該問什麼，臨場發揮效果不穩定',
  },
];

// ============================================
// SPIN 方法介紹
// ============================================
export const SPIN_STEPS = [
  {
    step: 'S',
    name: 'Situation',
    title: '現況問題',
    description: '了解客戶當前狀況與背景',
    color: '#3B82F6', // 藍色
    questions: [
      '您目前的保障規劃是什麼？',
      '家庭結構如何？有幾位需要照顧的家人？',
    ],
    aiHelp: 'AI 分析客戶背景資料，自動生成結構化現況問題清單',
  },
  {
    step: 'P',
    name: 'Problem',
    title: '探索問題',
    description: '挖掘客戶面臨的困難與挑戰',
    color: '#F59E0B', // 橙色
    questions: [
      '目前的規劃有哪些地方讓您感到不安？',
      '如果發生意外，現有保障是否足夠？',
    ],
    aiHelp: 'AI 根據現況分析，精準找出客戶潛在痛點',
  },
  {
    step: 'I',
    name: 'Implication',
    title: '暗示嚴重性',
    description: '放大問題的影響與後果',
    color: '#EF4444', // 紅色
    questions: [
      '如果這個問題持續存在，可能造成什麼影響？',
      '對家人的財務安全會有什麼衝擊？',
    ],
    aiHelp: 'AI 推演問題擴大化情境，強化客戶的急迫感',
  },
  {
    step: 'N',
    name: 'Need-Payoff',
    title: '需求確認',
    description: '引導客戶認知解決方案的價值',
    color: '#10B981', // 綠色
    questions: [
      '如果能解決這個問題，對您來說有什麼好處？',
      '完善的保障會讓您更安心嗎？',
    ],
    aiHelp: 'AI 生成價值主張，讓客戶主動說出需求',
  },
];

// ============================================
// 六大功能模組
// ============================================
export const FEATURES = [
  {
    id: 'Z01',
    icon: 'MessageSquare',
    title: 'SPIN 對話引導',
    description: 'AI 依序引導業務完成 S → P → I → N 的結構化思考',
    highlights: ['智慧提問', '邏輯釐清', '雙模式切換'],
    details: [
      '支援文字或選單輸入客戶現況',
      '釐清自我模式：幫助業務理清邏輯',
      '問客戶模式：生成提問清單',
      '對話自動儲存至雲端',
    ],
  },
  {
    id: 'Z02',
    icon: 'BarChart3',
    title: 'AI 報告生成',
    description: '一鍵生成內部版/客戶版專業報告',
    highlights: ['專業報告', '即時編輯', '多元匯出'],
    details: [
      '內部版：含 AI 建議與下次談話重點',
      '客戶版：專業解釋性報告',
      '支援即時手動微調',
      '匯出 PDF 或線上互動頁',
    ],
  },
  {
    id: 'Z03',
    icon: 'Link',
    title: '客戶互動追蹤',
    description: '分享報告連結並追蹤客戶互動狀況',
    highlights: ['數據追蹤', '轉化優化', 'CTA 模組'],
    details: [
      '為每份報告產生獨一無二短連結',
      '追蹤客戶開啟時間與點擊狀況',
      '報告結尾提供行動呼籲按鈕',
      '即時了解客戶興趣程度',
    ],
  },
  {
    id: 'Z04',
    icon: 'Key',
    title: '訂閱與啟動機制',
    description: '靈活的訂閱制與啟動碼系統',
    highlights: ['靈活訂閱', '即開即用', '多元金流'],
    details: [
      '年費方案，支援多層級訂閱',
      '串接 Stripe / TapPay 金流',
      '付款後 Email 發送啟動碼',
      '輸入啟動碼即可解鎖功能',
    ],
  },
];

// ============================================
// 使用流程 (User Journey)
// ============================================
export const USER_JOURNEY = [
  {
    step: 1,
    title: '新增專案',
    description: '為每個客戶建立獨立資料夾',
    icon: 'FolderPlus',
  },
  {
    step: 2,
    title: '訪前規劃',
    description: '輸入客戶背景，AI 生成 SPIN 提問劇本',
    icon: 'Target',
  },
  {
    step: 3,
    title: '實地拜訪',
    description: '依照劇本進行對話，記錄會議重點',
    icon: 'Handshake',
  },
  {
    step: 4,
    title: '報告產出',
    description: '一鍵生成內部摘要與客戶分享版報告',
    icon: 'FileCheck',
  },
  {
    step: 5,
    title: '發布追蹤',
    description: '分享連結給客戶，追蹤閱讀與互動狀態',
    icon: 'TrendingUp',
  },
];

// ============================================
// 技術架構
// ============================================
export const TECH_STACK = [
  {
    category: '前端',
    icon: 'Code2',
    techs: ['Next.js', 'Vite', 'Vanilla CSS'],
  },
  {
    category: '後端',
    icon: 'Server',
    techs: ['Firebase Functions', 'Cloudflare Workers'],
  },
  {
    category: 'AI',
    icon: 'Brain',
    techs: ['Claude 3.5 Sonnet', 'GPT-4o'],
  },
  {
    category: '資料庫',
    icon: 'Database',
    techs: ['Firestore (NoSQL)'],
  },
  {
    category: '金流',
    icon: 'CreditCard',
    techs: ['Stripe', 'TapPay'],
  },
  {
    category: '郵件',
    icon: 'Mail',
    techs: ['Resend'],
  },
];

// ============================================
// 定價方案
// ============================================
export const PRICING_PLANS = [
  {
    name: '基礎版',
    price: 'FREE(14 days',
    period: '',
    description: '個人業務使用',
    features: [
      'SPIN 對話引導',
      'AI 報告生成 (每月 10 份)',
      '雲端儲存 (基礎)',
      '單一用戶',
    ],
    cta: '聯絡我們',
    ctaLink: 'mailto:inbest.2north@gmail.com?subject=詢問基礎版方案',
    highlighted: false,
  },
  {
    name: '進階版',
    price: '9000 元',
    period: '/ 年',
    description: '專業團隊協作',
    features: [
      '所有基礎版功能',
      'AI 報告生成 (無限制)',
      '客戶互動追蹤',
      '優先客服支援',
      '支援 5 位用戶',
    ],
    cta: '立即訂閱',
    ctaLink: 'mailto:inbest.2north@gmail.com?subject=訂閱進階版',
    highlighted: true,
    badge: '推薦',
  },
  {
    name: '企業版',
    price: '客製化',
    period: '',
    description: '大型組織解決方案',
    features: [
      '所有進階版功能',
      '管理後台完整權限',
      'Prompt 客製化',
      'API 串接',
      '專屬客戶成功經理',
      '無限用戶數',
    ],
    cta: '預約諮詢',
    ctaLink: 'mailto:inbest.2north@gmail.com?subject=企業版諮詢',
    highlighted: false,
  },
];

// ============================================
// 顧客見證
// ============================================
export const TESTIMONIALS = [
  {
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=felix',
    name: '陳建宏',
    role: '資深業務主管',
    content: '使用 SPIN 系統後，我的成交率提升了 40%。AI 幫我準備的問題清單讓每次拜訪都更有重點，客戶也感受到我的專業度。',
  },
  {
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=aneka',
    name: '林雅婷',
    role: '保險顧問',
    content: '過去我最頭痛的就是會議記錄，現在 AI 自動幫我整理重點，讓我可以專心與客戶互動。報告分享功能也讓追蹤變得超級簡單！',
  },
  {
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
    name: '王志明',
    role: '團隊經理',
    content: '我們整個團隊都在用 SPIN 系統，不只提升個人效率，團隊數據追蹤也讓我能更好地輔導新人。這是我見過最實用的業務工具。',
  },
  {
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    name: '張美玲',
    role: '首席顧問',
    content: 'SPIN 方法論結合 AI 真的很強大！系統幫我挖掘出客戶的深層需求，讓我能提供更精準的解決方案。客戶滿意度也明顯提升。',
  },
];

// ============================================
// 合作夥伴
// ============================================
export const PARTNERS = [
  { name: '誠交俱樂部', logo: 'Handshake' },
];

// ============================================
// 詳細功能對比
// ============================================
export const COMPARISON_DATA = [
  { name: 'SPIN 對話引導', free: '基本', pro: '進階 AI', enterprise: '完全客製' },
  { name: 'AI 報告生成', free: '10 份/月', pro: '無限制', enterprise: '無限制' },
  { name: '客戶互動追蹤', free: '✗', pro: '✓', enterprise: '✓' },
  { name: '雲端儲存', free: '基礎', pro: '進階', enterprise: '企業級' },
  { name: '團隊協作', free: '1 人', pro: '5 人', enterprise: '無限制' },
  { name: '管理後台', free: '✗', pro: '基本', enterprise: '完整權限' },
  { name: 'Prompt 客製化', free: '✗', pro: '✗', enterprise: '✓' },
  { name: 'API 串接', free: '✗', pro: '✗', enterprise: '✓' },
  { name: '客服支援', free: '社群', pro: '優先支援', enterprise: '專屬經理' },
];

// ============================================
// FAQ 常見問題
// ============================================
export const FAQ_ITEMS = [
  {
    question: '我不懂 AI 也能使用嗎？',
    answer: '當然可以！SPIN 系統的介面設計非常直覺，您只需要輸入客戶資訊，AI 就會自動生成提問建議。我們也提供完整的教學影片與客服支援。',
  },
  {
    question: '資料安全如何保障？',
    answer: '我們使用 Google Firebase 企業級資料庫，所有資料都經過加密儲存。您的客戶資料只有您自己能存取，我們不會將資料用於其他用途。',
  },
  {
    question: '可以試用嗎？',
    answer: '可以！請透過「預約演示」按鈕聯絡我們，我們將為您安排一對一的系統演示，並提供試用帳號讓您體驗完整功能。',
  },
  {
    question: '如何取消訂閱？',
    answer: '您可以隨時在帳號設定中取消訂閱。取消後，您仍可使用至訂閱期結束，不會立即失去存取權限。我們不會收取任何取消費用。',
  },
  {
    question: '支援哪些支付方式？',
    answer: '我們支援信用卡（透過 Stripe）、台灣本地金流（透過 TapPay），以及企業版的發票付款。所有金流都經過加密處理，確保交易安全。',
  },
  {
    question: 'AI 生成的內容準確嗎？',
    answer: '我們使用業界最先進的 Claude 3.5 與 GPT-4o 模型，並針對保險業務場景進行優化。生成的內容都經過結構化設計，您也可以即時編輯調整。',
  },
];

// ============================================
// 最終 CTA
// ============================================
export const FINAL_CTA = {
  title: '準備好提升你的銷售效率了嗎？',
  subtitle: '立即預約系統演示，看看 AI 如何改變你的業務流程',
  primaryCta: '預約免費演示',
  primaryLink: 'mailto:inbest.2north@gmail.com?subject=預約免費演示',
  secondaryCta: '聯絡銷售顧問',
  secondaryLink: 'mailto:inbest.2north@gmail.com',
};

// ============================================
// 頁腳資訊
// ============================================
export const FOOTER = {
  brand: 'SPIN 超級業務系統',
  description: '用 AI 重新定義保險銷售',
  company: '英比士有限公司',
  quickLinks: [
    { label: '功能介紹', href: '#features' },
    { label: '定價方案', href: '#pricing' },
    { label: '常見問題', href: '#faq' },
    { label: '聯絡我們', href: 'mailto:inbest.2north@gmail.com' },
  ],
  contact: {
    email: 'inbest.2north@gmail.com',
    phone: '03-4986444',
  },
  social: [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'LINE', icon: 'MessageCircle', url: '#' },
  ],
  copyright: `© ${new Date().getFullYear()} 英比士有限公司. All rights reserved.`,
};
