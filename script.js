const questions = [
  { id: "q1", code: "Q1", category: "导师背景与资源", tag: "基础画像", title: "导师的年纪？", hint: "一般来说，处于上升期的导师更有动力冲成果。", options: [{ value: "A", label: "30-40 青椒" }, { value: "B", label: "40-50 壮年" }, { value: "C", label: "50-60" }, { value: "D", label: "60+ 快退休" }] },
  { id: "q2", code: "Q2", category: "导师背景与资源", tag: "趣味画像", title: "导师的性别？", hint: "仅用于趣味展示，不参与三大指标评分。", options: [{ value: "A", label: "男" }, { value: "B", label: "女" }] },
  { id: "q3", code: "Q3", category: "导师背景与资源", tag: "资源层级", title: "导师的行政级别？", hint: "行政资源越强，往往越容易拿到项目和平台支持。", options: [{ value: "A", label: "无" }, { value: "B", label: "系主任 / 院长" }, { value: "C", label: "副校长及以上" }] },
  { id: "q4", code: "Q4", category: "导师背景与资源", tag: "身份赛道", title: "导师是硕导还是博导？", hint: "后面两题会根据这个身份决定是否真正计分。", options: [{ value: "A", label: "硕导" }, { value: "B", label: "博导" }] },
  { id: "q5", code: "Q5", category: "导师背景与资源", tag: "晋升欲望", title: "[若硕导] 是否想冲博导？", hint: "若上一题不是硕导，这题只保留答案，不进入正式评分。", options: [{ value: "A", label: "非常想" }, { value: "B", label: "随缘" }, { value: "C", label: "不想" }] },
  { id: "q6", code: "Q6", category: "导师背景与资源", tag: "晋升欲望", title: "[若博导] 是否想冲院士？", hint: "若上一题不是博导，这题只保留答案，不进入正式评分。", options: [{ value: "A", label: "种子选手" }, { value: "B", label: "有点想法" }, { value: "C", label: "躺平" }] },
  { id: "q7", code: "Q7", category: "导师背景与资源", tag: "项目资源", title: "接手项目情况？", hint: "项目规格越高，资源和要求一般都会同步上升。", options: [{ value: "A", label: "国家级大项目" }, { value: "B", label: "企业横向" }, { value: "C", label: "没项目" }] },
  { id: "q27", code: "Q27", category: "导师背景与资源", tag: "经济资源", title: "每月发放补助（税后）？", hint: "补助并不直接代表良心，但能显著影响整体生存体验。", options: [{ value: "A", label: "0-500" }, { value: "B", label: "500-1500" }, { value: "C", label: "1500-3000" }, { value: "D", label: "3000+" }] },
  { id: "q17", code: "Q17", category: "科研水平与指导能力", tag: "产出质量", title: "近期论文质量？", hint: "这是判断导师科研产线是否健康的核心题。", options: [{ value: "A", label: "顶刊不断" }, { value: "B", label: "偶尔普刊" }, { value: "C", label: "很久没发" }] },
  { id: "q28", code: "Q28", category: "科研水平与指导能力", tag: "指导能力", title: "导师指导水平？", hint: "真正有指导力的导师，能帮你少走很多弯路。", options: [{ value: "A", label: "一针见血" }, { value: "B", label: "偶尔有用" }, { value: "C", label: "没啥用" }, { value: "D", label: "完全无效" }] },
  { id: "q30", code: "Q30", category: "科研水平与指导能力", tag: "方向热度", title: "研究方向？", hint: "热门与主流方向更容易获得资源、合作与认可。", options: [{ value: "A", label: "大热门" }, { value: "B", label: "主流" }, { value: "C", label: "小众" }, { value: "D", label: "非常冷门" }] },
  { id: "q31", code: "Q31", category: "科研水平与指导能力", tag: "课题起点", title: "课题来源？", hint: "起点越成熟、带的人越靠谱，毕业的不确定性通常越低。", options: [{ value: "A", label: "半成品有基础" }, { value: "B", label: "全新但有人带" }, { value: "C", label: "全新且没人带" }, { value: "D", label: "自己找" }] },
  { id: "q25", code: "Q25", category: "科研水平与指导能力", tag: "毕业门槛", title: "毕业要求（小论文）高吗？", hint: "要求高未必坏，但会明显影响产出压力和毕业节奏。", options: [{ value: "A", label: "顶刊要求" }, { value: "B", label: "普通 SCI" }, { value: "C", label: "无要求" }] },
  { id: "q10", code: "Q10", category: "push程度与 PUA", tag: "会议频率", title: "组会频率？", hint: "高频组会常常意味着更强的追踪和 push。", options: [{ value: "A", label: "一周两次" }, { value: "B", label: "一周一次" }, { value: "C", label: "两周一次" }, { value: "D", label: "几乎不开" }] },
  { id: "q29", code: "Q29", category: "push程度与 PUA", tag: "会议形式", title: "组会形式？", hint: "大组会和小组会双重叠加时，往往更容易形成持续压迫感。", options: [{ value: "A", label: "大 + 小双重" }, { value: "B", label: "仅大组会" }, { value: "C", label: "仅小组会" }, { value: "D", label: "一对一" }, { value: "E", label: "不开" }] },
  { id: "q32", code: "Q32", category: "push程度与 PUA", tag: "会议时间", title: "开组会时间？", hint: "周末开会是压榨感非常直观的信号。", options: [{ value: "A", label: "周末" }, { value: "B", label: "周一" }, { value: "C", label: "周二三四" }, { value: "D", label: "周五" }] },
  { id: "q12", code: "Q12", category: "push程度与 PUA", tag: "边界入侵", title: "周末打电话？", hint: "越爱在休息时间找你，越说明边界感不足。", options: [{ value: "A", label: "经常" }, { value: "B", label: "偶尔" }, { value: "C", label: "从不" }] },
  { id: "q13", code: "Q13", category: "push程度与 PUA", tag: "边界入侵", title: "晚上 11 点后打电话？", hint: "深夜工作联系通常是高压环境的直接外显。", options: [{ value: "A", label: "经常" }, { value: "B", label: "偶尔" }, { value: "C", label: "从不" }] },
  { id: "q20", code: "Q20", category: "push程度与 PUA", tag: "威胁话术", title: "用延毕威胁你？", hint: "这类威胁会显著拉高毕业危险指数。", options: [{ value: "A", label: "经常" }, { value: "B", label: "偶尔" }, { value: "C", label: "从不" }] },
  { id: "q21", code: "Q21", category: "push程度与 PUA", tag: "负反馈", title: "说你进度慢？", hint: "持续被说慢，比偶发批评更消耗人。", options: [{ value: "A", label: "天天说" }, { value: "B", label: "偶尔" }, { value: "C", label: "从不" }] },
  { id: "q14", code: "Q14", category: "实验室氛围", tag: "规则管理", title: "需要打卡吗？", hint: "打卡越严，实验室越像公司流水线。", options: [{ value: "A", label: "严格" }, { value: "B", label: "签到" }, { value: "C", label: "不用" }] },
  { id: "q15", code: "Q15", category: "实验室氛围", tag: "工时要求", title: "规定工作时长？", hint: "工时规则直接影响情绪消耗与自由度。", options: [{ value: "A", label: "996+" }, { value: "B", label: "955" }, { value: "C", label: "没规定" }] },
  { id: "q16", code: "Q16", category: "实验室氛围", tag: "休息空间", title: "周末能休息吗？", hint: "没有真正休息日时，环境通常已经进入高压区。", options: [{ value: "A", label: "不能" }, { value: "B", label: "基本能" }, { value: "C", label: "完全能" }] },
  { id: "q8", code: "Q8", category: "实验室氛围", tag: "团队规模", title: "手下博士生数量？", hint: "博士生多说明梯队完整，但也可能意味着竞争更强。", options: [{ value: "A", label: "0-2" }, { value: "B", label: "3-5" }, { value: "C", label: "6+" }] },
  { id: "q9", code: "Q9", category: "实验室氛围", tag: "历史风险", title: "是否延毕过学生？", hint: "这是毕业风险最有辨识度的历史变量之一。", options: [{ value: "A", label: "经常" }, { value: "B", label: "偶尔" }, { value: "C", label: "没有" }] },
  { id: "q18", code: "Q18", category: "杂活与个人空间", tag: "杂活消耗", title: "让你做杂活（取快递 / 报账）？", hint: "杂活越多，你能沉下心做研究的时间越少。", options: [{ value: "A", label: "非常多" }, { value: "B", label: "偶尔" }, { value: "C", label: "从不" }] },
  { id: "q19", code: "Q19", category: "杂活与个人空间", tag: "沟通体验", title: "沟通难易程度？", hint: "沟通困难会把每一次推进都变成额外成本。", options: [{ value: "A", label: "很难" }, { value: "B", label: "还行" }, { value: "C", label: "像朋友" }] },
  { id: "q22", code: "Q22", category: "杂活与个人空间", tag: "任务重心", title: "让你做横向还是纵向？", hint: "横向更容易把时间切碎，纵向更偏向论文积累。", options: [{ value: "A", label: "横向赚钱" }, { value: "B", label: "纵向研究" }, { value: "C", label: "放养随便" }] },
  { id: "q23", code: "Q23", category: "杂活与个人空间", tag: "论文时间", title: "有时间做自己论文吗？", hint: "这题几乎直接决定你是否有机会掌握毕业节奏。", options: [{ value: "A", label: "没时间" }, { value: "B", label: "挤挤有" }, { value: "C", label: "大把时间" }] },
  { id: "q11", code: "Q11", category: "杂活与个人空间", tag: "联系方式", title: "沟通方式？", hint: "不参与核心打分，但会用于人物标签补充。", options: [{ value: "A", label: "邮件" }, { value: "B", label: "微信随叫" }, { value: "C", label: "面谈" }, { value: "D", label: "找不见人" }] },
  { id: "q33", code: "Q33", category: "杂活与个人空间", tag: "在场程度", title: "导师出差频率？", hint: "高频出差可能意味着资源多，也可能意味着长期放养。", options: [{ value: "A", label: "经常在外" }, { value: "B", label: "偶尔出差" }, { value: "C", label: "基本都在" }] },
];

const scoreMaps = {
  production: { q1: { A: 2, B: 3, C: 1, D: 0 }, q3: { A: 2, B: 1, C: 0 }, q4: { A: 1, B: 2 }, q5: { A: 3, B: 1, C: 0 }, q6: { A: 3, B: 2, C: 0 }, q7: { A: 3, B: 1, C: 0 }, q27: { A: 1, B: 2, C: 3, D: 4 }, q17: { A: 4, B: 2, C: 0 }, q28: { A: 4, B: 2, C: 0, D: -1 }, q30: { A: 3, B: 2, C: 1, D: 0 }, q31: { A: 3, B: 2, C: 0, D: 0 }, q25: { A: 3, B: 1, C: 0 }, q33: { A: 1, B: 2, C: 0 } },
  pressure: { q10: { A: 3, B: 2, C: 1, D: 0 }, q29: { A: 4, B: 2, C: 1, D: 0, E: 0 }, q32: { A: 4, B: 3, C: 1, D: 0 }, q12: { A: 3, B: 1, C: 0 }, q13: { A: 3, B: 1, C: 0 }, q20: { A: 4, B: 2, C: 0 }, q21: { A: 3, B: 1, C: 0 }, q14: { A: 3, B: 2, C: 0 }, q15: { A: 3, B: 2, C: 0 }, q16: { A: 3, B: 1, C: 0 }, q8: { A: 0, B: 1, C: 2 }, q18: { A: 3, B: 1, C: 0 }, q19: { A: 3, B: 1, C: 0 }, q22: { A: 2, B: 1, C: 0 }, q23: { A: 3, B: 1, C: 0 }, q33: { A: 0, B: 1, C: 2 } },
  danger: { q9: { A: 4, B: 2, C: 0 }, q20: { A: 4, B: 2, C: 0 }, q21: { A: 3, B: 1, C: 0 }, q18: { A: 3, B: 1, C: 0 }, q22: { A: 2, B: 1, C: 0 }, q23: { A: 3, B: 1, C: 0 }, q30: { A: 0, B: 1, C: 2, D: 3 }, q31: { A: 0, B: 1, C: 3, D: 2 }, q27: { A: 3, B: 2, C: 1, D: 0 }, q32: { A: 4, B: 3, C: 1, D: 0 }, q8: { A: 0, B: 1, C: 2 }, q12: { A: 2, B: 1, C: 0 }, q13: { A: 2, B: 1, C: 0 }, q15: { A: 2, B: 1, C: 0 }, q16: { A: 2, B: 1, C: 0 }, q33: { A: 2, B: 1, C: 0 } },
};

const typeMeta = {
  "神仙导师": { theme: "theme-sage", short: "高 P / 低 S", description: "学术能打，情绪环境也没失控。少见，且值得珍惜。", commentary: "你遇到的是资源和尊重同时在线的配置，既有机会做出成绩，也不至于天天被环境透支。" },
  "牛导/卷王": { theme: "theme-bull", short: "高 P / 高 S", description: "能卷出成果，也能把人卷到怀疑人生。", commentary: "这是典型的高产高压导师，跟着能变强，但代价通常是边界感、休息和情绪稳定。" },
  "羊导/佛系": { theme: "theme-sheep", short: "低 P / 低 S", description: "自由度高，带飞能力弱，毕业质量主要靠你自己兜底。", commentary: "环境不一定难受，但也不会主动把你推到更高产出的轨道上，自驱力决定上限。" },
  "坑导/吸血鬼": { theme: "theme-pit", short: "低 P / 高 S", description: "资源一般，压榨不少，忙了半天还不一定能积累有效成果。", commentary: "这是最需要提前规划退路和自保边界的类型，关键不是吃苦，而是别吃了苦还没沉淀。" },
};

const difficultyMeta = [
  { max: 20, label: "轻松毕业", badge: "🌟", text: "按时毕业压力较小，甚至可能提前收工。" },
  { max: 40, label: "标准模式", badge: "⏳", text: "正常努力即可，但仍要管理好进度波动。" },
  { max: 60, label: "困难模式", badge: "⚠️", text: "需要更强的抗压和自我管理，延毕风险开始显著上升。" },
  { max: 80, label: "地狱模式", badge: "💀", text: "建议提前为延期可能性做预案，别把风险留到最后一刻。" },
  { max: Infinity, label: "深渊模式", badge: "🚑", text: "这已经是高危区，需要尽快做毕业和后路的双线规划。" },
];

const typePersonas = {
  "神仙导师": [{ label: "学术灯塔型", when: (a) => a.q17 === "A" && a.q28 === "A" }, { label: "暖心资助型", when: (a) => ["C", "D"].includes(a.q27) && a.q12 === "C" }, { label: "师门带飞型", when: (a) => ["A", "B"].includes(a.q31) && a.q19 !== "A" }, { label: "温和强者型", when: () => true }],
  "牛导/卷王": [{ label: "火箭推进型", when: (a) => a.q17 === "A" && a.q10 === "A" }, { label: "魔鬼待命型", when: (a) => a.q12 === "A" || a.q13 === "A" }, { label: "画饼卷王型", when: (a) => a.q27 === "A" && a.q25 === "A" }, { label: "高压产线型", when: () => true }],
  "羊导/佛系": [{ label: "退休老干部型", when: (a) => a.q1 === "D" }, { label: "外出放养型", when: (a) => a.q33 === "A" }, { label: "佛系自修型", when: (a) => a.q10 === "D" && a.q11 === "D" }, { label: "自由散养型", when: () => true }],
  "坑导/吸血鬼": [{ label: "PUA 教主型", when: (a) => a.q20 === "A" && a.q21 === "A" }, { label: "包工头型", when: (a) => a.q22 === "A" && a.q18 === "A" }, { label: "幽灵失联型", when: (a) => a.q11 === "D" || a.q33 === "A" }, { label: "高耗低回报型", when: () => true }],
};

const highlightLibrary = {
  q5A: "硕导冲博导", q6A: "博导冲院士", q7A: "国家级大项目", q27D: "补助天花板", q28A: "指导一针见血", q29A: "大组会+小组会双重覆盖", q30D: "方向极冷门", q31C: "全新课题没人带", q32A: "周末组会", q9A: "延毕历史明显", q12A: "周末来电", q13A: "深夜来电", q14A: "严格打卡", q15A: "996+", q16A: "周末难休", q17A: "顶刊不断", q18A: "杂活爆仓", q19A: "沟通困难", q20A: "延毕威胁", q21A: "天天说你慢", q22A: "横向优先", q22B: "纵向研究", q23A: "论文时间稀缺", q25A: "顶刊毕业门槛", q33A: "导师常年出差",
};

const dimensionSummaryMap = {
  "导师背景与资源": { strong: "资源条件偏强，导师盘子不小。", weak: "资源端偏弱，平台红利有限。" },
  "科研水平与指导能力": { strong: "科研和带人能力较在线，论文推进更有抓手。", weak: "科研指导链条偏弱，容易自己摸黑走。" },
  "push程度与 PUA": { strong: "push 和控制欲比较明显，情绪成本不低。", weak: "push 感不算强，边界感相对正常。" },
  "实验室氛围": { strong: "实验室规训感偏重，更像高压流水线。", weak: "实验室氛围相对松，日常生存压力可控。" },
  "杂活与个人空间": { strong: "个人空间被侵占较多，科研时间容易被切碎。", weak: "个人空间保留得还行，能留出自己的论文节奏。" },
};

const dimensionBuckets = {
  "导师背景与资源": ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q27"],
  "科研水平与指导能力": ["q17", "q28", "q30", "q31", "q25"],
  "push程度与 PUA": ["q10", "q29", "q32", "q12", "q13", "q20", "q21"],
  "实验室氛围": ["q14", "q15", "q16", "q8", "q9"],
  "杂活与个人空间": ["q18", "q19", "q22", "q23", "q11", "q33"],
};

const state = { currentIndex: 0, answers: {} };

const introPanel = document.querySelector("#intro-panel");
const quizPanel = document.querySelector("#quiz-panel");
const resultPanel = document.querySelector("#result-panel");
const startButton = document.querySelector("#start-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const restartButton = document.querySelector("#restart-button");
const progressTitle = document.querySelector("#progress-title");
const progressMeta = document.querySelector("#progress-meta");
const progressBar = document.querySelector("#progress-bar");
const questionCategory = document.querySelector("#question-category");
const questionTag = document.querySelector("#question-tag");
const questionTitle = document.querySelector("#question-title");
const questionHint = document.querySelector("#question-hint");
const optionsWrap = document.querySelector("#options");

function showPanel(panel) {
  [introPanel, quizPanel, resultPanel].forEach((node) => node.classList.add("is-hidden"));
  panel.classList.remove("is-hidden");
}

function isQuestionActive(questionId) {
  if (questionId === "q5") return state.answers.q4 === "A";
  if (questionId === "q6") return state.answers.q4 === "B";
  return true;
}

function renderQuestion() {
  const total = questions.length;
  const current = questions[state.currentIndex];
  const answeredValue = state.answers[current.id];

  progressTitle.textContent = `第 ${state.currentIndex + 1} 题`;
  progressMeta.textContent = `${state.currentIndex + 1} / ${total}`;
  progressBar.style.width = `${((state.currentIndex + 1) / total) * 100}%`;
  questionCategory.textContent = current.category;
  questionTag.textContent = `${current.code} / ${current.tag}`;
  questionTitle.textContent = current.title;
  questionHint.textContent = current.hint;
  prevButton.disabled = state.currentIndex === 0;

  optionsWrap.innerHTML = "";
  current.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    if (answeredValue === option.value) button.classList.add("is-selected");
    button.innerHTML = `<small>${String.fromCharCode(65 + optionIndex)}</small>${option.label}`;
    button.addEventListener("click", () => {
      state.answers[current.id] = option.value;
      renderQuestion();
    });
    optionsWrap.appendChild(button);
  });

  nextButton.textContent = state.currentIndex === total - 1 ? "查看结果" : "下一题";
  nextButton.disabled = !answeredValue;
}

function getMetricEntries(metricName) {
  return Object.entries(scoreMaps[metricName]).filter(([questionId]) => isQuestionActive(questionId));
}

function normalizeScore(metricName) {
  const entries = getMetricEntries(metricName);
  const actual = entries.reduce((sum, [questionId, values]) => sum + (values[state.answers[questionId]] ?? 0), 0);
  const min = entries.reduce((sum, [, values]) => sum + Math.min(...Object.values(values)), 0);
  const max = entries.reduce((sum, [, values]) => sum + Math.max(...Object.values(values)), 0);
  if (max === min) return 0;
  return Math.round(((actual - min) / (max - min)) * 100);
}

function getMentorType(productionScore, pressureScore) {
  if (productionScore >= 55 && pressureScore < 45) return "神仙导师";
  if (productionScore >= 55 && pressureScore >= 45) return "牛导/卷王";
  if (productionScore < 55 && pressureScore < 45) return "羊导/佛系";
  return "坑导/吸血鬼";
}

function getDifficulty(dangerScore) {
  return difficultyMeta.find((item) => dangerScore <= item.max);
}

function getPersona(mentorType) {
  const pool = typePersonas[mentorType];
  return pool.find((item) => item.when(state.answers))?.label ?? pool[pool.length - 1].label;
}

function getHighlights() {
  return Object.entries(state.answers).map(([key, value]) => highlightLibrary[`${key}${value}`]).filter(Boolean).slice(0, 8);
}

function getDimensionSummary() {
  return Object.entries(dimensionBuckets).map(([name, ids]) => {
    const relevant = ids.filter((id) => state.answers[id]);
    const highPressureHits = relevant.filter((id) => ["A", "B"].includes(state.answers[id])).length;
    const copy = highPressureHits >= Math.ceil(relevant.length / 2) ? dimensionSummaryMap[name].strong : dimensionSummaryMap[name].weak;
    return `${name}：${copy}`;
  });
}

function buildQuote(mentorType, persona, difficulty, risk) {
  const typeLead = {
    "神仙导师": "你抽到的是少见的正向配置",
    "牛导/卷王": "你面对的是高产高压的经典卷王局",
    "羊导/佛系": "你拿到的是自由很多、兜底很少的放养局",
    "坑导/吸血鬼": "你现在处在投入和回报明显失衡的高耗局",
  };
  return `你的导师是【${persona}${mentorType.replace("/", "")}】，${typeLead[mentorType]}。当前毕业难度为【${difficulty.label}】，估算延毕风险约 ${risk}%。`;
}

function renderResults() {
  const productionScore = normalizeScore("production");
  const pressureScore = normalizeScore("pressure");
  const dangerScore = normalizeScore("danger");
  const mentorType = getMentorType(productionScore, pressureScore);
  const difficulty = getDifficulty(dangerScore);
  const mentorMeta = typeMeta[mentorType];
  const persona = getPersona(mentorType);
  const highlights = getHighlights();
  const summaries = getDimensionSummary();
  const riskProbability = Math.min(95, Math.max(5, dangerScore));

  document.body.dataset.theme = mentorMeta.theme;
  document.querySelector("#result-title").textContent = `你的导师是 ${mentorType}`;
  document.querySelector("#mentor-type").textContent = `${mentorType} / ${mentorMeta.short}`;
  document.querySelector("#mentor-persona").textContent = persona;
  document.querySelector("#difficulty-level").textContent = `${difficulty.badge} ${difficulty.label}`;
  document.querySelector("#risk-probability").textContent = `${riskProbability}%`;
  document.querySelector("#result-description").textContent = mentorMeta.description;
  document.querySelector("#result-commentary").textContent = `${mentorMeta.commentary}${difficulty.text}`;
  document.querySelector("#result-quote").textContent = buildQuote(mentorType, persona, difficulty, riskProbability);
  document.querySelector("#production-score").textContent = productionScore;
  document.querySelector("#pressure-score").textContent = pressureScore;
  document.querySelector("#danger-score").textContent = dangerScore;
  document.querySelector("#production-meter").style.width = `${productionScore}%`;
  document.querySelector("#pressure-meter").style.width = `${pressureScore}%`;
  document.querySelector("#danger-meter").style.width = `${dangerScore}%`;

  const tags = document.querySelector("#highlight-tags");
  tags.innerHTML = "";
  (highlights.length ? highlights : ["整体风格偏中性，没有明显极端触发项。"]).forEach((item) => {
    const tag = document.createElement("span");
    tag.textContent = item;
    tags.appendChild(tag);
  });

  const summaryWrap = document.querySelector("#dimension-summary");
  summaryWrap.innerHTML = "";
  summaries.forEach((item) => {
    const line = document.createElement("p");
    line.textContent = item;
    summaryWrap.appendChild(line);
  });

  showPanel(resultPanel);
}

function nextStep() {
  const current = questions[state.currentIndex];
  if (!state.answers[current.id]) return;
  if (state.currentIndex === questions.length - 1) {
    renderResults();
    return;
  }
  state.currentIndex += 1;
  renderQuestion();
}

function prevStep() {
  if (state.currentIndex === 0) return;
  state.currentIndex -= 1;
  renderQuestion();
}

function restart() {
  state.currentIndex = 0;
  state.answers = {};
  document.body.dataset.theme = "";
  renderQuestion();
  showPanel(introPanel);
}

startButton.addEventListener("click", () => {
  showPanel(quizPanel);
  renderQuestion();
});

nextButton.addEventListener("click", nextStep);
prevButton.addEventListener("click", prevStep);
restartButton.addEventListener("click", restart);

renderQuestion();
