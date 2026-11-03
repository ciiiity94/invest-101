"use strict";

/* ---------- 內容資料 ---------- */
const CHAPTERS = [
  {
    title: "為什麼要投資？先顧好「安全墊」",
    img: "images/ch1.svg",
    intro: "只把錢放在活存，物價一年年漲，錢的購買力會慢慢變薄。但在投資之前，要先有一份撐得住意外的安全墊。",
    points: [
      ["通膨會偷偷吃錢", "如果物價每年漲 2%，今天 100 元能買的東西，10 年後大約要花 122 元。錢放著不動，其實是在縮水。"],
      ["緊急預備金先存好", "先存 3～6 個月的生活費放在活存或定存。生病、失業時不用被迫賣掉投資。"],
      ["只用「閒錢」投資", "閒錢是 3～5 年內都不會用到的錢。要付房租、學費的錢，不要拿去買股票。"]
    ],
    tip: "小練習：算算你一個月必要開銷（房租、吃飯、交通、保險），乘以 3，就是你的第一個存錢目標。",
    quiz: [
      { q: "哪一種錢適合拿來投資？", o: ["下個月要繳的房租", "放著 5 年都不會用到的閒錢", "跟朋友借來的錢"], a: 1, why: "短期要用的錢遇到下跌來不及等回來，借來的錢還會多一層壓力。" },
      { q: "開始投資前，建議先準備好什麼？", o: ["緊急預備金", "最熱門的股票", "最新的看盤軟體"], a: 0, why: "有了緊急預備金，遇到意外時才不會被迫賣在低點。" }
    ]
  },
  {
    title: "複利：讓時間幫你賺錢",
    img: "images/ch2.svg",
    intro: "複利就是「利息也會生利息」。像滾雪球，一開始很小，越滾越大，關鍵是時間。",
    points: [
      ["單利 vs 複利", "單利只算本金的利息。複利把賺到的錢也算進下一輪本金，所以越到後面成長越快。"],
      ["72 法則", "用 72 除以年化報酬率，大約就是資產翻倍的年數。例如 6% 約 12 年翻倍。"],
      ["早開始比多投入重要", "同樣每月投入，早 10 年開始，最後的差距往往比你想的大。下面的計算機可以自己試。"]
    ],
    tip: "試試看：把計算機的「投資年數」從 10 年拉到 30 年，看看到期資產跟投入本金的差距。",
    quiz: [
      { q: "用 72 法則，年化報酬率 6% 的資產，大約幾年會翻倍？", o: ["6 年", "12 年", "72 年"], a: 1, why: "72 ÷ 6 = 12，這是估算用的小口訣。" },
      { q: "複利最重要的關鍵是什麼？", o: ["時間", "預測明牌", "每天看盤"], a: 0, why: "時間拉得越長，複利的效果越明顯。" }
    ]
  },
  {
    title: "認識股票與 ETF",
    img: "images/ch3.svg",
    intro: "股票是一家公司的小小所有權。ETF 則是把一籃子股票打包起來，買一張就等於同時買進很多家公司。",
    points: [
      ["股票", "買股票就是成為公司的小股東。公司賺錢，股價可能上漲，也可能配股息；公司表現不好，股價可能下跌。"],
      ["ETF（指數股票型基金）", "在證券交易所像股票一樣買賣，內容是一籃子股票或債券。不用自己挑公司，風險比單押一家分散。"],
      ["常見的台股 ETF 類型", "例如追蹤台灣大型公司的市值型 ETF（0050 屬於這類）、挑選配息較高公司的高股息型 ETF（0056、00878 屬於這類）。這裡只是舉例，不是推薦。"],
      ["費用", "買賣都要付手續費（上限 0.1425%，券商常有折扣）；賣出時另外繳證交稅，股票 0.3%、ETF 0.1%。ETF 每年還有內扣的管理費。"]
    ],
    tip: "買之前先看 ETF 的「追蹤什麼指數」、「費用率」、「成分股」三件事，不要只看最近漲多少。",
    quiz: [
      { q: "ETF 跟單一股票最大的差別是？", o: ["一定不會虧錢", "一次買進一籃子標的，較分散", "只能在國外買"], a: 1, why: "ETF 仍然會漲跌，但因為持有多個標的，單一公司出事的影響較小。" },
      { q: "在台灣賣出股票時，需要另外繳的稅是？", o: ["證券交易稅", "房屋稅", "汽車稅"], a: 0, why: "證交稅在賣出時課徵，股票 0.3%、ETF 0.1%。" }
    ]
  },
  {
    title: "風險與分散：別把雞蛋放同一個籃子",
    img: "images/ch4.svg",
    intro: "報酬和風險是一體兩面。想要比定存高的報酬，就得接受會上下波動。學會控制風險，比找到明牌更重要。",
    points: [
      ["波動不等於虧損", "股價短期漲跌很正常。只有在下跌時賣掉，帳面虧損才會變成真正的虧損。"],
      ["分散投資", "把錢分在不同公司、不同產業、不同資產（股票、債券、現金）。一個地方出事，不會全部一起受傷。"],
      ["了解自己的風險承受度", "問自己：如果帳戶短期少了 20%，我睡得著嗎？睡不著，代表股票的比例可能太高了。"],
      ["資產配置", "新手可以先決定「股票 vs 債券/現金」的比例，再決定買什麼，而不是反過來。"]
    ],
    tip: "台股每天漲跌幅限制為 10%，一天有可能漲跌很多，所以不要借錢、不要把生活費全押進去。",
    quiz: [
      { q: "「分散投資」的主要目的是？", o: ["保證賺錢", "降低單一標的出事的衝擊", "減少手續費"], a: 1, why: "分散不能保證賺錢，但能降低把所有錢押在同一處的風險。" },
      { q: "帳戶短期下跌 20% 你會睡不著，代表什麼？", o: ["該多借錢加碼", "風險承受度偏低，可能需降低股票比例", "市場一定會反彈"], a: 1, why: "投資要選你「撐得住」的風險，而不是別人說的。" }
    ]
  },
  {
    title: "怎麼開始買？開戶與定期定額",
    img: "images/ch5.svg",
    intro: "實際動手其實不難：開一個證券戶，再選擇一次買進，或每月固定買一點。",
    points: [
      ["開證券戶與銀行交割戶", "找一家證券商（可線上開戶），並連結一個銀行交割帳戶。買賣股票時，錢會從交割戶扣款或入帳。"],
      ["零股", "不用湊滿 1 張（1000 股）。可以用「零股」買進，一股也能買，很適合小額開始。"],
      ["定期定額", "每個月固定日期、固定金額自動買進。價格高時買到較少，價格低時買到較多，長期下來平均成本比較平穩，也不用猜進場時機。"],
      ["下單前檢查", "確認代號、買賣方向、價格、數量，再按送出。第一次建議用小金額練習。"]
    ],
    tip: "各家券商的手續費折扣與定期定額規則不同，開戶前先比較，並以券商官方網站公告為準。",
    quiz: [
      { q: "手上只有幾千塊，想買貴一點的股票，可以怎麼做？", o: ["買零股", "不可能買", "一定要借錢湊一張"], a: 0, why: "零股可以小額買進，是新手練習的好方法。" },
      { q: "定期定額的好處是？", o: ["保證不會虧", "不用猜進場時機，平均買進成本", "手續費全免"], a: 1, why: "它是紀律投資的方法，不保證獲利。" }
    ]
  },
  {
    title: "新手常見地雷",
    img: "images/ch6.svg",
    intro: "很多虧損不是因為不夠聰明，而是踩到常見的坑。先認識它們，就能少走冤枉路。",
    points: [
      ["追逐明牌與飆股", "別人說會漲的，通常你聽到時已經漲了一大段。買不懂的東西，等於在賭博。"],
      ["配息 ≠ 白賺", "配息會從股價中扣掉（除息）。只看殖利率高低、不看整體報酬，可能會買錯。"],
      ["槓桿與借錢投資", "融資、借錢買股，虧損時會放大，還可能被強制賣出。新手先不要碰。"],
      ["投資詐騙", "保證獲利、帶你賺錢、要你加入投資群組的，多半是詐騙。正規券商和投顧不會保證獲利。"]
    ],
    tip: "遇到「保證賺錢」、「內線消息」、「限時名額」，先停下來，找家人朋友聊聊，或撥 165 反詐騙專線查證。",
    quiz: [
      { q: "有人私訊說「保證每月獲利 20%，帶你賺」，你該怎麼做？", o: ["立刻匯款", "當作詐騙，不理會並可向 165 查證", "請對方多教幾次"], a: 1, why: "合法的投資不會保證獲利。" },
      { q: "高股息 ETF 配息後，股價通常會？", o: ["完全不變", "依配息金額向下調整（除息）", "一定馬上漲回來"], a: 1, why: "配息是把部分資產分給你，不是額外多出來的錢。" }
    ]
  },
  {
    title: "看懂投資圖與基本分析",
    img: "images/ch7.svg",
    intro: "圖表和數字是投資人的「儀表板」。學會讀它們，你就能知道目前的狀況，也比較不會被消息帶著跑。上面「看懂圖表」區有互動教室可以練習。",
    points: [
      ["K 線（蠟燭圖）", "一根 K 棒包含開盤、收盤、最高、最低。台灣是紅 K 代表收盤高於開盤（漲），綠 K 代表收盤低於開盤（跌）。"],
      ["均線", "把最近 N 天的收盤價平均後連成線，用來看趨勢。短期均線在長期均線之上，通常代表近期偏強。"],
      ["成交量", "當天買賣的數量。價格大漲或大跌時，如果量也放大，代表市場很有感，訊號比較可信。"],
      ["基本面三指標", "EPS 看公司賺多少、本益比看股價貴不貴（要跟同產業比）、殖利率看配息報酬。ETF 則看追蹤指數、費用率與成分股。"]
    ],
    tip: "圖表是「過去的紀錄」，不是預言。新手先學會讀懂，再決定要不要用它輔助判斷；長期投資者更要看公司或指數的整體品質。",
    quiz: [
      { q: "在台灣的看盤習慣中，一根紅 K 棒代表？", o: ["收盤價高於開盤價（當天上漲）", "收盤價低於開盤價（當天下跌）", "當天沒有成交"], a: 0, why: "台灣是紅漲綠跌，和美股的綠漲紅跌相反，看海外圖表要先確認顏色。" },
      { q: "一檔股票本益比很低，就代表一定值得買嗎？", o: ["對，越低越好", "不一定，可能是獲利不穩或前景不佳，要與同產業和歷史比較", "對，因為會馬上漲"], a: 1, why: "單一指標不能決定好壞，要搭配獲利穩定度、產業和風險一起看。" }
    ]
  }
];

const TERMS = [
  ["股票", "Stock", "公司把所有權切成很多小份賣給大眾，買的人就是股東。"],
  ["ETF", "Exchange Traded Fund", "指數股票型基金，像股票一樣在交易所買賣，內容是一籃子標的。"],
  ["股息／配息", "Dividend", "公司或 ETF 把賺到的部分利潤分給持有人。"],
  ["殖利率", "Dividend Yield", "一年配息金額 ÷ 股價。數字高不代表一定比較好。"],
  ["除息", "Ex-dividend", "領取配息資格截止的那天，股價通常會減去配息金額。"],
  ["複利", "Compound Interest", "利息也能再生利息，時間越長效果越大。"],
  ["通貨膨脹", "Inflation", "物價整體上漲，同樣的錢能買到的東西變少。"],
  ["年化報酬率", "Annualized Return", "把投資報酬換算成「每年平均」的報酬，方便比較。"],
  ["分散投資", "Diversification", "把錢分散在不同標的，降低單一失敗的衝擊。"],
  ["資產配置", "Asset Allocation", "決定股票、債券、現金各放多少比例。"],
  ["定期定額", "Dollar-cost Averaging", "固定時間、固定金額持續買進。"],
  ["零股", "Odd Lot", "不足 1 張（1000 股）的股數，1 股也能買。"],
  ["張", "Lot", "台股交易單位，1 張 = 1000 股。"],
  ["漲跌幅限制", "Price Limit", "台股單日價格最多漲或跌 10%。"],
  ["證券交易稅", "Securities Transaction Tax", "賣出時繳的稅，股票 0.3%、ETF 0.1%。"],
  ["手續費", "Brokerage Fee", "買賣時付給券商的費用，上限 0.1425%，常有折扣。"],
  ["費用率", "Expense Ratio", "ETF 每年內扣的管理成本，越低越省，但要和追蹤品質一起看。"],
  ["市值型 ETF", "Cap-weighted ETF", "依公司市值大小挑選成分股，例如追蹤大型公司的 ETF。"],
  ["融資", "Margin Loan", "跟券商借錢買股票，漲時賺更多，跌時賠更多，風險高。"],
  ["停損", "Stop Loss", "事先設定虧損到某個程度就賣出，避免損失擴大。"],
  ["波動", "Volatility", "價格上下變動的幅度。波動大代表風險高。"],
  ["K 線", "Candlestick", "一根 K 棒記錄一段時間的開盤、收盤、最高、最低。台灣紅 K 是漲、綠 K 是跌。"],
  ["影線", "Shadow / Wick", "K 棒上下的細線，代表當時曾到過的最高價與最低價。"],
  ["均線", "Moving Average", "最近 N 天收盤價的平均連成線，常見有 5 日、20 日、60 日。"],
  ["成交量", "Volume", "一段時間內買賣成交的數量，用來判斷行情有沒有人參與。"],
  ["支撐／壓力", "Support / Resistance", "價格容易止跌的位置叫支撐，容易遇到賣壓的位置叫壓力。只是參考，不是保證。"],
  ["EPS", "Earnings Per Share", "每股盈餘，公司稅後賺的錢 ÷ 股數。"],
  ["本益比", "P/E Ratio", "股價 ÷ EPS。要跟同產業或自己的歷史比較才有意義。"],
  ["漲跌幅", "Change %", "和前一個收盤價比，今天漲或跌了百分之幾。"],
  ["緊急預備金", "Emergency Fund", "生病、失業時的備用錢，建議 3～6 個月生活費。"]
];

/* ---------- 進度（localStorage，失敗時只存在本頁） ---------- */
const KEY = "piggy-invest-progress-v1";
let done = new Set();
try { done = new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch (e) {}
const saveProgress = () => { try { localStorage.setItem(KEY, JSON.stringify([...done])); } catch (e) {} };

function updateProgress() {
  const n = done.size, total = CHAPTERS.length;
  document.getElementById("progressFill").style.width = (n / total * 100) + "%";
  document.getElementById("progressText").textContent = n === total ? "全部完成了，太棒了！" : `已完成 ${n} / ${total} 章`;
  document.querySelectorAll(".chapter").forEach((el, i) => {
    const ok = done.has(i);
    el.classList.toggle("done", ok);
    el.querySelector(".state").textContent = ok ? "已完成" : "未完成";
  });
}

/* ---------- 章節 ---------- */
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };

function buildChapter(c, i) {
  const d = el("details", "chapter");
  const s = el("summary");
  const img = el("img"); img.src = c.img; img.alt = ""; img.width = 60; img.height = 60;
  const head = el("div", "head");
  head.append(el("div", "num", `第 ${i + 1} 章`), el("h3", "", c.title));
  s.append(img, head, el("span", "state", "未完成"));
  const body = el("div", "body");
  body.append(el("p", "intro", c.intro));
  const ul = el("ul", "points");
  c.points.forEach(([t, x]) => { const li = el("li"); li.append(el("b", "", t), el("span", "", x)); ul.append(li); });
  body.append(ul, el("p", "tip", "💡 " + c.tip));

  const quiz = el("div", "quiz");
  quiz.append(el("h4", "", "小測驗"));
  let answered = 0, correct = 0;
  const fin = el("p", "finish");
  c.quiz.forEach(item => {
    const q = el("div", "q");
    q.append(el("p", "", item.q));
    const opts = el("div", "opts");
    const why = el("p", "why"); why.hidden = true;
    item.o.forEach((label, idx) => {
      const b = el("button", "opt", label); b.type = "button";
      b.addEventListener("click", () => {
        opts.querySelectorAll("button").forEach(x => x.disabled = true);
        const ok = idx === item.a;
        b.classList.add(ok ? "right" : "wrong");
        if (!ok) opts.children[item.a].classList.add("right");
        why.textContent = (ok ? "答對了！" : "再想想：") + item.why;
        why.hidden = false;
        answered++; if (ok) correct++;
        if (answered === c.quiz.length) {
          fin.textContent = `本章答對 ${correct} / ${c.quiz.length} 題，已記錄為完成。`;
          done.add(i); saveProgress(); updateProgress();
        }
      });
      opts.append(b);
    });
    q.append(opts, why);
    quiz.append(q);
  });
  quiz.append(fin);
  body.append(quiz);
  d.append(s, body);
  return d;
}

const chaptersEl = document.getElementById("chapters");
CHAPTERS.forEach((c, i) => chaptersEl.append(buildChapter(c, i)));
updateProgress();

document.getElementById("reset").addEventListener("click", () => {
  done = new Set(); saveProgress();
  chaptersEl.replaceChildren();
  CHAPTERS.forEach((c, i) => chaptersEl.append(buildChapter(c, i)));
  updateProgress();
});

/* ---------- 複利計算機（每月複利，月初投入） ---------- */
const $ = id => document.getElementById(id);
const fmt = n => "NT$ " + Math.round(n).toLocaleString("zh-TW");

function simulate(p, m, rate, years) {
  const r = rate / 100 / 12, rows = [];
  let bal = p;
  for (let y = 1; y <= years; y++) {
    for (let k = 0; k < 12; k++) bal = (bal + m) * (1 + r);
    rows.push({ y, bal, paid: p + m * 12 * y });
  }
  return rows;
}

function drawChart(rows) {
  const svg = $("chart"), W = 400, H = 180, L = 6, B = 22, T = 8;
  const max = Math.max(...rows.map(r => r.bal)) || 1;
  const bw = (W - L * 2) / rows.length;
  const gap = Math.min(3, bw * .2);
  let out = "";
  rows.forEach((r, i) => {
    const x = L + i * bw + gap / 2, w = bw - gap;
    const hTotal = (r.bal / max) * (H - B - T), hPaid = (r.paid / max) * (H - B - T);
    const base = H - B;
    out += `<rect x="${x.toFixed(1)}" y="${(base - hTotal).toFixed(1)}" width="${w.toFixed(1)}" height="${hTotal.toFixed(1)}" rx="2" fill="#FF6B5B"/>`;
    out += `<rect x="${x.toFixed(1)}" y="${(base - hPaid).toFixed(1)}" width="${w.toFixed(1)}" height="${hPaid.toFixed(1)}" rx="2" fill="#FFC93C"/>`;
  });
  const step = rows.length > 20 ? 10 : rows.length > 10 ? 5 : 1;
  rows.forEach((r, i) => {
    if (r.y % step === 0 || i === 0) out += `<text x="${(L + i * bw + bw / 2).toFixed(1)}" y="${H - 6}" text-anchor="middle">${r.y}年</text>`;
  });
  svg.innerHTML = out;
}

function calc() {
  const p = Math.max(0, +$("principal").value || 0);
  const m = Math.max(0, +$("monthly").value || 0);
  const rate = +$("rate").value, years = +$("years").value;
  $("rateOut").textContent = rate; $("yearsOut").textContent = years;
  const rows = simulate(p, m, rate, years), last = rows[rows.length - 1];
  $("total").textContent = fmt(last.bal);
  $("paid").textContent = fmt(last.paid);
  $("gain").textContent = fmt(last.bal - last.paid);
  $("calcNote").textContent = `假設每年固定 ${rate}%、每月複利、每月初投入，未扣手續費與稅。實際報酬會有高有低。`;
  drawChart(rows);
}
$("calcForm").addEventListener("input", calc);
$("calcForm").addEventListener("submit", e => e.preventDefault());
calc();

/* ---------- 圖表教室 1：可調整的 K 棒 ---------- */
function drawCandle() {
  const o = +$("cOpen").value, c = +$("cClose").value;
  let h = +$("cHigh").value, l = +$("cLow").value;
  h = Math.max(h, o, c); l = Math.min(l, o, c);
  $("cHigh").value = h; $("cLow").value = l;
  $("oOut").textContent = o; $("cOut").textContent = c; $("hOut").textContent = h; $("lOut").textContent = l;

  const y = v => 200 - (v - 80) / 40 * 180;
  const color = c > o ? "var(--up)" : c < o ? "var(--down)" : "var(--muted)";
  const top = y(Math.max(o, c)), bodyH = Math.max(3, Math.abs(y(o) - y(c)));
  $("candleSvg").innerHTML =
    `<line x1="100" x2="100" y1="${y(h)}" y2="${y(l)}" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>` +
    `<rect x="70" y="${top}" width="60" height="${bodyH}" rx="4" fill="${color}" stroke="var(--ink)" stroke-width="3"/>` +
    `<text x="100" y="${y(h) - 6}" text-anchor="middle">最高 ${h}</text>` +
    `<text x="100" y="${y(l) + 16}" text-anchor="middle">最低 ${l}</text>` +
    `<text x="64" y="${y(o) + 4}" text-anchor="end">開 ${o}</text>` +
    `<text x="136" y="${y(c) + 4}">收 ${c}</text>`;

  const pct = ((c - o) / o * 100).toFixed(1);
  const up = h - Math.max(o, c), low = Math.min(o, c) - l;
  let t = c > o ? `這是一根紅 K：收盤 ${c} 高於開盤 ${o}，當天上漲約 ${pct}%。`
        : c < o ? `這是一根綠 K：收盤 ${c} 低於開盤 ${o}，當天下跌約 ${Math.abs(pct)}%。`
        : `開盤和收盤一樣，叫做十字線，代表買賣雙方勢均力敵。`;
  if (up >= 5 && up > low) t += " 上影線很長：盤中曾衝高，但被賣壓壓回來。";
  else if (low >= 5 && low > up) t += " 下影線很長：盤中曾殺低，但被買盤拉回來。";
  else if (up < 2 && low < 2 && Math.abs(c - o) >= 6) t += " 幾乎沒有影線：從開盤到收盤方向很一致。";
  $("candleText").textContent = t;
}
$("candleForm").addEventListener("input", drawCandle);
$("candleForm").addEventListener("submit", e => e.preventDefault());
drawCandle();

/* ---------- 圖表教室 2：60 天模擬走勢（固定亂數種子，每次打開都一樣） ---------- */
function rng(seed) {
  return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
const DAYS = (() => {
  const r = rng(20240611), out = []; let prev = 100;
  for (let i = 0; i < 60; i++) {
    const trend = i < 20 ? 0.002 : i < 40 ? -0.0015 : 0.004;   // 先緩漲、再回檔、再上攻
    const chg = trend + (r() - 0.5) * 0.04;
    const o = prev, c = +(o * (1 + chg)).toFixed(2);
    const h = +(Math.max(o, c) * (1 + r() * 0.012)).toFixed(2);
    const l = +(Math.min(o, c) * (1 - r() * 0.012)).toFixed(2);
    const vol = Math.round(8000 * (0.7 + r() * 0.6 + Math.abs(chg) * 25));
    out.push({ o, c, h, l, vol }); prev = c;
  }
  return out;
})();
const MA = (n, i) => i < n - 1 ? null : DAYS.slice(i - n + 1, i + 1).reduce((s, d) => s + d.c, 0) / n;

let sel = 59;
function drawDemo() {
  const W = 640, L = 40, R = 8, pTop = 10, pBot = 230, vTop = 250, vBot = 312;
  const lo = Math.min(...DAYS.map(d => d.l)) * 0.99, hi = Math.max(...DAYS.map(d => d.h)) * 1.01;
  const step = (W - L - R) / DAYS.length, bw = Math.max(3, step * 0.62);
  const y = v => pBot - (v - lo) / (hi - lo) * (pBot - pTop);
  const x = i => L + step * i + step / 2;
  const vmax = Math.max(...DAYS.map(d => d.vol));
  let s = "";
  for (let k = 0; k <= 4; k++) {
    const v = lo + (hi - lo) * k / 4;
    s += `<line x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}" stroke="var(--grid)" stroke-width="1"/>` +
         `<text x="${L - 6}" y="${y(v) + 4}" text-anchor="end">${v.toFixed(0)}</text>`;
  }
  DAYS.forEach((d, i) => {
    const col = d.c >= d.o ? "var(--up)" : "var(--down)";
    s += `<line x1="${x(i)}" x2="${x(i)}" y1="${y(d.h)}" y2="${y(d.l)}" stroke="${col}" stroke-width="1.5"/>` +
         `<rect x="${x(i) - bw / 2}" y="${y(Math.max(d.o, d.c))}" width="${bw}" height="${Math.max(1.5, Math.abs(y(d.o) - y(d.c)))}" fill="${col}"/>`;
    if ($("tVol").checked) {
      const vh = d.vol / vmax * (vBot - vTop);
      s += `<rect x="${x(i) - bw / 2}" y="${vBot - vh}" width="${bw}" height="${vh}" fill="${col}" opacity=".55"/>`;
    }
    if (i % 10 === 0 || i === 59) s += `<text x="${x(i)}" y="${vBot + 18}" text-anchor="middle">第${i + 1}天</text>`;
  });
  if ($("tVol").checked) s += `<text x="${L}" y="${vTop - 4}">成交量</text>`;
  [[5, "tMa5", "var(--ma5)"], [20, "tMa20", "var(--ma20)"]].forEach(([n, id, col]) => {
    if (!$(id).checked) return;
    const pts = DAYS.map((_, i) => MA(n, i) === null ? null : `${x(i).toFixed(1)},${y(MA(n, i)).toFixed(1)}`).filter(Boolean);
    s += `<polyline points="${pts.join(" ")}" fill="none" stroke="${col}" stroke-width="2.2" stroke-linejoin="round"/>`;
  });
  s += `<rect class="sel" x="${x(sel) - step / 2}" y="${pTop}" width="${step}" height="${vBot - pTop}"/>`;
  DAYS.forEach((_, i) => { s += `<rect class="hit" data-i="${i}" x="${x(i) - step / 2}" y="${pTop}" width="${step}" height="${vBot - pTop}"/>`; });
  $("demoChart").innerHTML = s;
  showDay(sel);
}
function showDay(i) {
  sel = i;
  const d = DAYS[i], prev = i ? DAYS[i - 1].c : d.o, pct = ((d.c - prev) / prev * 100);
  const m5 = MA(5, i), m20 = MA(20, i);
  let t = `第 ${i + 1} 天｜開 ${d.o}　高 ${d.h}　低 ${d.l}　收 ${d.c}｜漲跌 ${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%｜成交量 ${d.vol.toLocaleString("zh-TW")} 張（模擬）`;
  if (m5) t += `｜收盤${d.c >= m5 ? "在" : "跌破"} 5 日均線${d.c >= m5 ? "之上" : ""}`;
  if (m20) t += `，${d.c >= m20 ? "在" : "跌破"} 20 日均線${d.c >= m20 ? "之上" : ""}`;
  $("demoInfo").textContent = t;
  const r = $("demoChart").querySelector(".sel");
  if (r) { const W = 640, L = 40, R = 8, step = (W - L - R) / DAYS.length; r.setAttribute("x", L + step * i); }
}
$("demoChart").addEventListener("click", e => { const i = e.target.dataset && e.target.dataset.i; if (i !== undefined) showDay(+i); });
["tMa5", "tMa20", "tVol"].forEach(id => $(id).addEventListener("change", drawDemo));
drawDemo();

/* ---------- 名詞辭典 ---------- */
const termsEl = $("terms");
TERMS.forEach(([zh, en, desc]) => {
  const w = el("div", "term");
  const dt = el("dt", "", zh); dt.append(el("small", "", en));
  w.append(dt, el("dd", "", desc));
  w.dataset.s = (zh + en + desc).toLowerCase();
  termsEl.append(w);
});
$("q").addEventListener("input", e => {
  const k = e.target.value.trim().toLowerCase();
  let n = 0;
  termsEl.querySelectorAll(".term").forEach(t => { const show = !k || t.dataset.s.includes(k); t.hidden = !show; if (show) n++; });
  $("noTerm").hidden = n > 0;
});
