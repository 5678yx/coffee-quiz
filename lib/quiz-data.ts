// 咖啡性格测验数据

export type PersonalityType = 'adventurer' | 'cozy' | 'social' | 'health';

export interface Personality {
  id: PersonalityType;
  name: string;
  coffee: string;
  slogan: string;
  image: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  text: string;
  personality: PersonalityType;
  icon: string;
}

// 4种性格类型定义
export const personalities: Personality[] = [
  {
    id: 'adventurer',
    name: '勇敢的冒险家',
    coffee: '双份浓缩咖啡',
    slogan: '你为激情而活',
    image: 'https://images.unsplash.com/photo-1507915977619-6ccfe8003ae6?w=600&h=400&fit=crop' // 山景咖啡
  },
  {
    id: 'cozy',
    name: '舒适经典',
    coffee: '中度烘焙滴滤咖啡',
    slogan: '每一杯都是舒适',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop' // 温馨咖啡馆
  },
  {
    id: 'social',
    name: '社交达人',
    coffee: '卡布奇诺',
    slogan: '咖啡要和朋友一起分享',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=400&fit=crop' // 咖啡馆聚会
  },
  {
    id: 'health',
    name: '健康达人',
    coffee: '燕麦奶美式咖啡',
    slogan: '每一口都是健康',
    image: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=600&h=400&fit=crop' // 燕麦奶咖啡
  }
];

// 6个问题
export const questions: Question[] = [
  {
    id: 1,
    text: '周末到了,你最想做什么?',
    options: [
      { text: '去徒步旅行,挑战自己的极限', personality: 'adventurer', icon: '🏔️' },
      { text: '在咖啡馆放松,享受宁静时光', personality: 'cozy', icon: '☕' },
      { text: '组织朋友聚会,分享快乐时光', personality: 'social', icon: '🎉' },
      { text: '瑜伽和健康美食,照顾身体', personality: 'health', icon: '🧘' }
    ]
  },
  {
    id: 2,
    text: '你的旅行风格是?',
    options: [
      { text: '冒险旅行 - 登山、跳伞、探索未知', personality: 'adventurer', icon: '🧗' },
      { text: '温馨民宿 - 享受当地的慢生活', personality: 'cozy', icon: '🏠' },
      { text: '团队旅行 - 和一群朋友一起玩', personality: 'social', icon: '👥' },
      { text: '健康度假村 - 瑜伽、水疗、有机食物', personality: 'health', icon: '🌿' }
    ]
  },
  {
    id: 3,
    text: '你最喜欢的早餐是?',
    options: [
      { text: '快速简单 - 咖啡 + 能量棒,出门!', personality: 'adventurer', icon: '⚡' },
      { text: '慢慢享用 - 吐司、煎蛋、咖啡', personality: 'cozy', icon: '🍳' },
      { text: '和朋友一起吃早午餐 - 聊天大笑', personality: 'social', icon: '🥂' },
      { text: '健康营养 - 燕麦、水果、绿色果汁', personality: 'health', icon: '🥣' }
    ]
  },
  {
    id: 4,
    text: '理想的晚上是?',
    options: [
      { text: '参加新活动 - 尝试新运动或课程', personality: 'adventurer', icon: '🎯' },
      { text: '在家放松 - 好书、好电影、舒适沙发', personality: 'cozy', icon: '📚' },
      { text: '出门聚会 - 晚餐、酒吧、见朋友', personality: 'social', icon: '🌃' },
      { text: '自我关怀 - 冥想、护肤、早睡', personality: 'health', icon: '🌙' }
    ]
  },
  {
    id: 5,
    text: '你如何应对压力?',
    options: [
      { text: '运动 - 跑步或拳击释放压力', personality: 'adventurer', icon: '🏃' },
      { text: '安静时光 - 喝咖啡、思考、放慢节奏', personality: 'cozy', icon: '🎶' },
      { text: '和朋友聊天 - 分享感受、获得支持', personality: 'social', icon: '💬' },
      { text: '健康习惯 - 瑜伽、深呼吸、喝茶', personality: 'health', icon: '🧘‍♀️' }
    ]
  },
  {
    id: 6,
    text: '如果你能获得一张免费机票,你会去哪?',
    options: [
      { text: '冒险目的地 - 新西兰、冰岛、南极洲', personality: 'adventurer', icon: '❄️' },
      { text: '温暖舒适的地方 - 意大利托斯卡纳、法国南部', personality: 'cozy', icon: '🌻' },
      { text: '热闹的城市 - 纽约、东京、巴塞罗那', personality: 'social', icon: '🏙️' },
      { text: '健康静修地 - 巴厘岛、哥斯达黎加、印度', personality: 'health', icon: '🌴' }
    ]
  }
];

// 计算结果百分比
export function calculateResults(answers: PersonalityType[]): Record<PersonalityType, number> {
  const counts: Record<PersonalityType, number> = {
    adventurer: 0,
    cozy: 0,
    social: 0,
    health: 0
  };

  // 统计每种性格被选中的次数
  answers.forEach(answer => {
    counts[answer]++;
  });

  // 计算百分比
  const total = answers.length;
  const percentages: Record<PersonalityType, number> = {
    adventurer: Math.round((counts.adventurer / total) * 100),
    cozy: Math.round((counts.cozy / total) * 100),
    social: Math.round((counts.social / total) * 100),
    health: Math.round((counts.health / total) * 100)
  };

  return percentages;
}
