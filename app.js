const icons = {
  sprout: '<path d="M12 21v-8m0 4c-5 0-8-2.5-8-7 4.5 0 8 1.5 8 6m0-4c0-4 2.7-7 7-7 0 4.5-2.7 7-7 7"/><path d="M8 21h8"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M7.5 3v4M16.5 3v4M4 9h16M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z"/>',
  flag: '<path d="M5 21V5m0 0c5-4 9 4 14 0v11c-5 4-9-4-14 0"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22zm0 0v14A2.5 2.5 0 0 1 6.5 17H20M8 7h8"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  droplet: '<path d="M12 3s-6 6.5-6 11a6 6 0 0 0 12 0c0-4.5-6-11-6-11Zm7 8c1.2 1.2 2 2.7 2 4a4 4 0 0 1-4 4"/>',
  footprints: '<path d="M7 12c1.4 0 2-2.1 2-4.2S8.2 4 7 4 5 5.7 5 7.8 5.6 12 7 12Zm10 0c1.4 0 2-2.1 2-4.2S18.2 4 17 4s-2 1.7-2 3.8.6 4.2 2 4.2ZM4 15c-1 1-1.2 3.1-.5 4.5.5 1 1.5 1.5 2.5 1.5 1.5 0 2.5-1.3 2.5-3 0-2.1-2.6-4.7-4.5-3Zm16 0c1 1 1.2 3.1.5 4.5-.5 1-1.5 1.5-2.5 1.5-1.5 0-2.5-1.3-2.5-3 0-2.1 2.6-4.7 4.5-3Z"/>',
  moon: '<path d="M20.8 14A8.5 8.5 0 0 1 10 3.2 8.5 8.5 0 1 0 20.8 14Z"/>',
  flame: '<path d="M12 22a7 7 0 0 0 7-7c0-4.5-4-7-4-12-1.5 2-2 4-2 6-2-1-3-2.5-3.5-4.5C7 7 5 10.5 5 15a7 7 0 0 0 7 7Zm0-2a3 3 0 0 1-3-3c0-1.6 1-2.7 2-4 .2 1.5 1.1 2.2 2 2.7.7-.7 1-1.5 1-2.7 1 1.3 1.5 2.5 1.5 4a3.5 3.5 0 0 1-3.5 3Z"/>',
  heart: '<path d="M20.8 8.8c0 5.5-8.8 11-8.8 11s-8.8-5.5-8.8-11A4.8 4.8 0 0 1 12 6.4a4.8 4.8 0 0 1 8.8 2.4Z"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3m-4 4v3"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
  neutral: '<circle cx="12" cy="12" r="9"/><path d="M8 15h8M9 9h.01M15 9h.01"/>',
  sad: '<circle cx="12" cy="12" r="9"/><path d="M8 16s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01"/>',
  wallet: '<rect x="3" y="6" width="18" height="15" rx="2"/><path d="M3 8V5a2 2 0 0 1 2-2h13m-1 10h4m-4 0a1 1 0 1 0 0 2"/>',
  chart: '<path d="M3 3v18h18M7 14l4-4 4 3 6-7"/><path d="M17 6h4v4"/>',
  flower: '<path d="M12 12c-2-2-5-1-5 1s3 3 5 1c2 2 5 1 5-1s-3-3-5-1Zm0 0c-2-2-1-5 1-5s3 3 1 5c2 2 1 5-1 5s-3-3-1-5Zm0 0c0 0-4-4-4-6s2-2 4 1c2-3 4-3 4-1s-4 6-4 6Zm0 0v9m-3 0h6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  repeat: '<path d="m17 2 4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4m14-1v2a3 3 0 0 1-3 3H3"/>',
  sliders: '<path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M2 14h4m4-6h4m4 8h4"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  leaf: '<path d="M20 4c-7 0-13 2-15 8-1 3 1 6 4 6 7 0 10-7 11-14ZM5 20c2-4 5-7 9-9"/>',
  edit: '<path d="m16 4 4 4M4 20l4-.8L19 8a2.8 2.8 0 0 0-4-4L4 15v5Z"/>',
  dots: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  plusSmall: '<path d="M12 5v14M5 12h14"/>',
  walletAlt: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M7 3h12m-3 11h2"/>',
  play: '<path d="m7 4 13 8-13 8V4Z"/>',
  sparkle: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 15l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z"/>',
};

function icon(name, size = 20) {
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.sprout}</svg>`;
}

const defaultRituals = [
  { name: "Drink 8 glasses of water", detail: "8 / 8 glasses", icon: "droplet" },
  { name: "Read for 15 minutes", detail: "15 / 15 min", icon: "book" },
  { name: "Move for 20 minutes", detail: "Ready when you are", icon: "footprints" },
  { name: "Reflect on my day", detail: "Tonight, just for you", icon: "moon" },
];

const initialGoals = [
  { id: "run", category: "Health & energy", title: "Run my first 10K", description: "Feel stronger, go further, and enjoy the journey along the way.", detail: "13 of 20 training sessions", percent: 65, due: "8 Nov 2026", next: "20-minute easy run", color: "orange", icon: "footprints" },
  { id: "books", category: "Personal growth", title: "Read 12 books", description: "Make space for new ideas, one good story at a time.", detail: "7 of 12 books finished", percent: 58, due: "31 Dec 2026", next: "Read chapter 8", color: "purple", icon: "book" },
  { id: "savings", category: "Money & peace of mind", title: "Build an emergency fund", description: "A little more security for whatever life brings next.", detail: "฿20,000 of ฿50,000 saved", percent: 40, due: "31 Dec 2026", next: "Transfer ฿2,000", color: "green", icon: "wallet" },
  { id: "stretch", category: "Health & energy", title: "Find my morning stretch", description: "Start the day with a little more room to breathe.", detail: "A gentle daily practice", percent: 100, due: "30 Sep 2026", next: "", color: "green", icon: "sun" },
  { id: "journaling", category: "Personal growth", title: "Make space to reflect", description: "Notice the small things along the way.", detail: "A reflection each week", percent: 100, due: "30 Sep 2026", next: "", color: "purple", icon: "book" },
];

const initialEntries = [
  { day: "11", month: "OCT", title: "Small things, a full heart", date: "Sunday, 11 October · 20:45", body: "A slow breakfast, a call with Mum, and a walk without my phone. Nothing big happened today, but it felt like enough.", mood: "Grateful", category: "Gratitude", color: "green" },
  { day: "10", month: "OCT", title: "Permission to slow down", date: "Saturday, 10 October · 21:10", body: "I didn’t finish everything on my list. I did finish a chapter and make time to rest. I’m learning that both count.", mood: "Calm", category: "Self-care", color: "purple" },
  { day: "09", month: "OCT", title: "A little stronger than yesterday", date: "Friday, 9 October · 19:30", body: "My run felt easier today. Twenty minutes used to feel so far away. It’s nice to notice how the small efforts add up.", mood: "Proud", category: "Little wins", color: "orange" },
];

const earlierEntries = [
  { day: "08", month: "OCT", title: "A moment just for me", date: "Thursday, 8 October · 20:15", body: "I made a little quiet space at the end of a busy day. That was enough for tonight.", mood: "Calm", category: "Self-care", color: "purple" },
  { day: "07", month: "OCT", title: "Showing up counts", date: "Wednesday, 7 October · 19:40", body: "I took the first small step, even though I nearly put it off. I’m glad I did.", mood: "Proud", category: "Little wins", color: "orange" },
  { day: "06", month: "OCT", title: "A good thing in the ordinary", date: "Tuesday, 6 October · 21:05", body: "A kind message from a friend made an ordinary Tuesday feel a little brighter.", mood: "Grateful", category: "Gratitude", color: "green" },
];

function readState() {
  const base = {
    rituals: [true, true, false, false],
    customHabits: [],
    goals: initialGoals,
    completedGoals: ["stretch", "journaling"],
    entries: [],
    mood: "Good",
    gratitude: "",
    quickOpen: false,
    notificationsOpen: false,
    showGoalForm: false,
    showHabitForm: false,
    goalFilter: "active",
    stepChecks: [false, false, false],
    financeRecords: [],
    extraEntries: false,
    openGoalMenu: null,
  };
  try {
    const saved = JSON.parse(localStorage.getItem("15lifeday-state") || "null");
    if (!saved || typeof saved !== "object") return base;
    return {
      ...base,
      ...saved,
      rituals: Array.isArray(saved.rituals) ? saved.rituals : base.rituals,
      customHabits: Array.isArray(saved.customHabits) ? saved.customHabits : [],
      goals: Array.isArray(saved.goals) ? saved.goals : initialGoals,
      completedGoals: Array.isArray(saved.completedGoals) ? saved.completedGoals : [],
      entries: Array.isArray(saved.entries) ? saved.entries : [],
      financeRecords: Array.isArray(saved.financeRecords) ? saved.financeRecords : [],
    };
  } catch (error) {
    console.warn("Could not read saved 15Lifeday data.", error);
    return base;
  }
}

const state = readState();
let activePage = "overview";
let toastTimer;
let toastText = "";

function persist() {
  try {
    localStorage.setItem("15lifeday-state", JSON.stringify(state));
    return true;
  } catch (error) {
    console.error("Could not save 15Lifeday data.", error);
    showToast("Your changes could not be saved in this browser.");
    return false;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function currentDate() {
  return new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date());
}

function header() {
  const date = currentDate();
  return `<header class="topbar">
    <a class="brand" href="#overview" data-page="overview" aria-label="15Lifeday home"><span class="brand-mark">${icon("sprout", 20)}</span>15Lifeday</a>
    <div class="date-label">${icon("calendar", 15)}<span>${date}</span></div>
    <div class="mobile-date">${date}</div>
    <div class="top-actions">
      <div class="notification-wrap">
        <button class="icon-button" type="button" data-action="notifications" aria-label="Notifications" aria-expanded="${state.notificationsOpen}">
          ${icon("bell", 18)}<span class="notification-dot"></span>
        </button>
        ${state.notificationsOpen ? `<div class="notification-popover" role="status"><strong>A gentle nudge</strong><p>You have 3 little reminders waiting for you. Take them one step at a time.</p></div>` : ""}
      </div>
      <button class="profile-button" type="button" data-action="profile" aria-label="Profile: Mali S."><span class="avatar">M</span><span class="profile-name">Mali S.</span></button>
    </div>
  </header>`;
}

function pageHeading(title, subtitle, tag = "", action = "", mobileSubtitle = "") {
  const description = mobileSubtitle
    ? `<p><span class="desktop-heading-subtitle">${subtitle}</span><span class="mobile-heading-subtitle">${mobileSubtitle}</span></p>`
    : `<p>${subtitle}</p>`;
  return `<div class="page-heading"><div><h1>${title}</h1>${description}</div>${action || (tag ? `<span class="heading-tag ${tag === "Only for you" ? "purple" : ""}">${tag}</span>` : "")}</div>`;
}

function bottomNav() {
  const items = [
    ["overview", "home", "ภาพรวม"],
    ["goals", "flag", "เป้าหมาย"],
    ["quick", "plus", ""],
    ["journal", "book", "บันทึก"],
    ["menu", "grid", "เมนู"],
  ];
  return `<nav class="bottom-nav" aria-label="Main navigation">${items.map(([page, symbol, label]) => page === "quick"
    ? `<div class="nav-item quick-nav"><button class="quick-trigger" type="button" data-action="quick" aria-label="${state.quickOpen ? "Close quick actions" : "Open quick actions"}" aria-expanded="${state.quickOpen}">${icon(state.quickOpen ? "close" : "plus", 22)}</button></div>`
    : `<button class="nav-item" type="button" data-page="${page}" ${activePage === page ? 'aria-current="page"' : ""}>${icon(symbol, 19)}<span>${label}</span></button>`).join("")}</nav>`;
}

function quickSheet() {
  if (!state.quickOpen) return "";
  const actions = [
    ["goal", "flag", "peach", "Add a goal", "Give your next chapter a direction"],
    ["habit", "repeat", "green", "Add a habit", "Make a little room for better routines"],
    ["journal", "book", "purple", "Write a journal entry", "Save a thought, a feeling, a memory"],
    ["finance", "wallet", "orange", "Add income / expense", "Keep your everyday money in balance"],
  ];
  return `<div class="quick-backdrop" data-action="close-quick" aria-hidden="true"></div>
    <section class="quick-sheet" role="dialog" aria-modal="true" aria-labelledby="quick-title">
      <h2 id="quick-title" tabindex="-1">A small step starts here</h2><p>What would you like to add to your day?</p>
      ${actions.map(([action, symbol, tone, title, description]) => `<button class="quick-action" type="button" data-action="quick-${action}"><span class="quick-action-icon ${tone}">${icon(symbol, 19)}</span><span class="quick-action-copy"><span class="quick-action-title">${title}</span><span class="quick-action-description">${description}</span></span>${icon("chevron", 16)}</button>`).join("")}
    </section>`;
}

function goalForm() {
  if (!state.showGoalForm) return "";
  return `<form class="custom-form" data-form="goal"><h3>Add a little goal</h3>
    <div class="form-row"><label for="goal-title">What would you like to grow toward?</label><input id="goal-title" name="title" required maxlength="72" placeholder="e.g. Take a weekend trip"></div>
    <div class="form-row"><label for="goal-category">Life area</label><select id="goal-category" name="category"><option>Personal growth</option><option>Health & energy</option><option>Money & peace of mind</option><option>Relationships</option></select></div>
    <div class="form-actions"><button class="button secondary" type="button" data-action="cancel-goal">Cancel</button><button class="button" type="submit">Save goal</button></div>
  </form>`;
}

function habitForm() {
  if (!state.showHabitForm) return "";
  return `<form class="custom-form" data-form="habit"><h3>Add a gentle ritual</h3>
    <div class="form-row"><label for="habit-title">A small thing you want to do</label><input id="habit-title" name="title" required maxlength="56" placeholder="e.g. Step outside for fresh air"></div>
    <div class="form-actions"><button class="button secondary" type="button" data-action="cancel-habit">Cancel</button><button class="button" type="submit">Add habit</button></div>
  </form>`;
}

function overviewPage() {
  const checked = state.rituals.filter(Boolean).length;
  const rituals = [...defaultRituals, ...state.customHabits];
  const completedCount = state.customHabits.filter((_, index) => state.customHabits[index].done).length;
  const ritualRows = rituals.map((ritual, index) => {
    const done = index < defaultRituals.length ? Boolean(state.rituals[index]) : Boolean(ritual.done);
    const detail = index < defaultRituals.length ? ritual.detail : "A little space, just for you";
    return `<li class="ritual-row"><button class="check-button" type="button" data-action="ritual" data-index="${index}" aria-label="${done ? "Mark incomplete" : "Mark complete"}: ${escapeHtml(ritual.name)}" aria-pressed="${done}">${done ? icon("check", 14) : ""}</button><span class="ritual-name">${escapeHtml(ritual.name)}<span class="ritual-detail">${escapeHtml(detail)}</span></span><span class="ritual-icon">${icon(ritual.icon || "sun", 17)}</span></li>`;
  }).join("");
  return `${pageHeading("Good morning, Mali", "A little intention today. A little more you tomorrow.", "Your space to grow", "", `${currentDate()} · A fresh little start.`)}
    <section class="overview-top" aria-label="Today">
      <article class="mission"><span class="mission-kicker">Today’s mission</span><span class="mission-count">2 of 3 steps</span><h2>Move a little,<br>feel a lot better.</h2><p class="mission-copy">20-minute run · Your first 10K</p><span class="mission-art" aria-hidden="true"><svg viewBox="0 0 120 96" fill="none"><path d="M24 74c4-19 19-31 38-31s34 12 38 31c-11 8-22 12-38 12S35 82 24 74Z" fill="#D9C6A7"/><path d="M31 72c10-7 18-8 30-8s22 3 31 9" stroke="#C7AE8C" stroke-width="2"/><circle cx="61" cy="36" r="19" fill="#F1B16F"/><path d="M49 12 46 6m29 9 5-5M39 27l-6-2m53 11 7 1m-56 12-6 4m53-3 6 5" stroke="#DB8751" stroke-width="2.5" stroke-linecap="round"/><path d="M54 37h.01m14 0h.01m-10 7c2 2 5 2 7 0" stroke="#885D43" stroke-width="2.4" stroke-linecap="round"/><path d="M60 83c0-7-7-12-14-10 2 7 7 10 14 10Zm2 1c0-8 8-13 15-10-2 7-8 10-15 10Z" fill="#91A988"/></svg></span><div class="mission-bottom"><button class="button" type="button" data-action="run">${icon("play", 16)}Start my run</button><div class="progress-note"><span>A little closer<br>to your best self</span><span class="progress-ring"><span>67%</span></span></div></div></article>
      <article class="card rituals-card"><div class="card-heading"><h2 class="section-title">Little daily rituals</h2><span class="counter">${checked + completedCount} / ${rituals.length}</span></div><ul class="ritual-list">${ritualRows}</ul>${habitForm()}</article>
    </section>
    <section class="overview-lower" aria-label="Your progress">
      <article class="card growth-card"><div class="card-heading"><h2 class="section-title">Growing toward</h2><button class="text-button" type="button" data-page="goals">View all</button></div>
        <div class="mini-goal"><div class="mini-goal-top"><strong>Run my first 10K</strong><span class="orange-text">65%</span></div><div class="meter"><span style="width:65%"></span></div><div class="goal-foot">8 Nov · 27 days left</div></div>
        <div class="mini-goal"><div class="mini-goal-top"><strong>Read 12 books</strong><span class="purple-text">58%</span></div><div class="meter purple"><span style="width:58%"></span></div><div class="goal-foot">31 Dec · 7 of 12 books</div></div>
        <div class="encouragement">${icon("sparkle", 15)}Small steps are still steps forward.</div>${goalForm()}
      </article>
      <article class="card week-card"><h2 class="section-title">Your week, in little wins</h2><p class="week-subtitle">6–12 Oct · 18 habits completed</p><div class="week-chart" aria-label="Weekly habits completed">${[45, 72, 43, 100, 44, 72, 43].map((height, i) => `<div class="week-day"><div class="week-track"><span class="week-fill" style="height:${height}%"></span></div><span>${["T", "W", "T", "F", "S", "S", "M"][i]}</span></div>`).join("")}</div><p class="week-note">↑ 3 more little wins than last week</p></article>
      <div class="overview-side"><article class="streak-card"><span class="streak-icon">${icon("flame", 21)}</span><div><h2 class="section-title">7-day streak</h2><p>You keep showing up. That matters.</p></div></article>
      <article class="card glance-card"><h2 class="section-title">Life at a glance</h2><div class="glance-stats"><div class="glance-stat"><strong class="orange-text">3</strong><span>Active goals</span></div><div class="glance-stat"><strong class="green-text">฿20k</strong><span>Saved</span></div><div class="glance-stat"><strong class="purple-text">6</strong><span>Reflections</span></div></div></article></div>
    </section><p class="gentle-reminder">${icon("heart", 15)}You don’t have to do it all. Just one kind thing for yourself.</p>`;
}

function moodIcon(mood) {
  return mood === "Good" || mood === "Grateful" || mood === "Proud" ? "smile" : mood === "Low" ? "sad" : "neutral";
}

function renderEntry(entry) {
  return `<article class="card entry-card"><div class="entry-title-row"><span class="date-tile"><strong>${escapeHtml(entry.day)}</strong><small>${escapeHtml(entry.month)}</small></span><div><h3 class="entry-title">${escapeHtml(entry.title)}</h3><div class="entry-date">${escapeHtml(entry.date)}</div></div></div><p class="entry-body">${escapeHtml(entry.body)}</p><div class="entry-footer"><span class="mood-pill ${escapeHtml(entry.color)}">${icon(moodIcon(entry.mood), 13)}${escapeHtml(entry.mood)}</span><span class="entry-category">${escapeHtml(entry.category)}</span><span class="entry-open" aria-hidden="true">${icon("arrow", 15)}</span></div></article>`;
}

function journalPage() {
  const savedEntries = [...state.entries, ...initialEntries, ...(state.extraEntries ? earlierEntries : [])];
  const gratitude = escapeHtml(state.gratitude || "");
  const moodOptions = [["Good", "smile"], ["Okay", "neutral"], ["Low", "sad"]];
  return `${pageHeading("A space to hear yourself", "Your thoughts don’t have to be perfect. Just yours.", "Only for you")}
    <section class="journal-layout"><div class="journal-list"><div class="journal-list-heading"><h2 class="section-title">Recent entries</h2><label class="sr-only" for="month-filter">Choose month</label><select id="month-filter" class="month-select"><option>⌄ &nbsp;October 2026</option></select></div>
      ${savedEntries.map(renderEntry).join("")}<button class="text-button more-entries" type="button" data-action="more-entries">${state.extraEntries ? "You’re all caught up" : "View 3 earlier entries"}</button>
      <p class="privacy-note">${icon("lock", 13)}A private space. Always yours. · ${savedEntries.length} entries this month</p>
    </div><aside class="journal-side"><form class="reflection-card card" data-form="journal"><span class="reflection-kicker">Monday’s reflection</span><h2 class="reflection-title">How are you arriving today?</h2>
      <div class="mood-options" role="group" aria-label="How are you feeling?">${moodOptions.map(([mood, symbol]) => `<button class="mood-choice" type="button" data-action="mood" data-mood="${mood}" aria-pressed="${state.mood === mood}">${icon(symbol, 16)}${mood}</button>`).join("")}</div>
      <div class="reflection-prompt"><label for="gratitude">What is one small thing you’re grateful for?</label><textarea id="gratitude" name="gratitude" maxlength="400" placeholder="A quiet morning and a little time for myself before the day begins.">${gratitude}</textarea><span class="draft-note">${state.gratitude ? "Your reflection is ready to save." : "Your thoughts stay here until you save them."}</span></div>
      <button class="button reflection-submit" type="submit">${icon("edit", 16)}Save reflection</button></form>
      <article class="card awareness-card"><h2 class="section-title">A little more self-awareness</h2><p class="week-subtitle">Your October so far</p><div class="awareness-stats"><div><strong class="purple-text">${6 + state.entries.length}</strong><span>Entries written</span></div><div><strong class="green-text">12</strong><span>Grateful moments</span></div></div><div class="awareness-note">${icon("leaf", 16)}Calm is your most frequent feeling this month.</div></article></aside></section>`;
}

function goalCard(goal, completed) {
  const color = ["orange", "purple", "green"].includes(goal.color) ? goal.color : "orange";
  const progress = completed ? 100 : Math.max(0, Math.min(100, Number(goal.percent) || 0));
  const menu = state.openGoalMenu === goal.id ? `<div class="goal-menu"><button type="button" data-action="toggle-goal" data-id="${escapeHtml(goal.id)}">${completed ? "Move to active" : "Mark completed"}</button></div>` : "";
  return `<article class="card goal-card"><div class="goal-card-head"><span class="goal-icon ${color}">${icon(goal.icon || "flag", 21)}</span><div><div class="goal-category">${escapeHtml(goal.category)}</div><h3 class="goal-title">${escapeHtml(goal.title)}</h3></div><div class="goal-menu-wrap"><button class="goal-menu-button" type="button" data-action="goal-menu" data-id="${escapeHtml(goal.id)}" aria-label="Options for ${escapeHtml(goal.title)}" aria-expanded="${state.openGoalMenu === goal.id}">${icon("dots", 18)}</button>${menu}</div></div><p class="goal-description">${escapeHtml(goal.description || "A little step toward the life you want.")}</p><div class="goal-meter-label"><span>${escapeHtml(goal.detail || "A little progress, at your own pace")}</span><strong class="${color}-text">${progress}%</strong></div><div class="meter ${color}" role="progressbar" aria-label="${escapeHtml(goal.title)} progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}"><span style="width:${progress}%"></span></div><div class="goal-meta"><span>${icon("calendar", 13)} ${escapeHtml(goal.due || "No deadline")}</span><span class="status-pill ${color}">${completed ? "Completed" : "On track"}</span></div>${!completed && goal.next ? `<div class="goal-next">${icon("arrow", 14)}Next: ${escapeHtml(goal.next)}</div>` : ""}</article>`;
}

function goalsPage() {
  const completedIds = new Set(state.completedGoals);
  const activeGoals = state.goals.filter((goal) => !completedIds.has(goal.id));
  const completedGoals = state.goals.filter((goal) => completedIds.has(goal.id));
  const shown = state.goalFilter === "active" ? activeGoals : completedGoals;
  const allPercent = activeGoals.length ? Math.round(activeGoals.reduce((sum, goal) => sum + (Number(goal.percent) || 0), 0) / activeGoals.length) : 0;
  const headerAction = `<button class="button page-heading-action" type="button" data-action="run">${icon("plusSmall", 16)}Start my run</button>`;
  return `${pageHeading("Room for your dreams", "Meaningful goals. Little steps. Your own pace.", "", headerAction)}
    <section class="goal-summary" aria-label="Goal summary"><div class="summary-tile orange">${icon("flag", 22)}<div><strong>${activeGoals.length}</strong><span>Active goals</span></div></div><div class="summary-tile green">${icon("check", 22)}<div><strong>${completedGoals.length}</strong><span>Completed</span></div></div><div class="summary-tile purple">${icon("chart", 22)}<div><strong>${allPercent}%</strong><span>Avg. progress</span></div></div></section>
    ${goalForm()}<div class="goal-tabs" role="tablist" aria-label="Goal status"><button class="goal-tab" type="button" data-action="goal-filter" data-filter="active" role="tab" aria-selected="${state.goalFilter === "active"}">Active · ${activeGoals.length}</button><button class="goal-tab" type="button" data-action="goal-filter" data-filter="completed" role="tab" aria-selected="${state.goalFilter === "completed"}">Completed · ${completedGoals.length}</button></div>
    <section class="goal-grid" aria-label="${state.goalFilter === "active" ? "Active goals" : "Completed goals"}">${shown.length ? shown.map((goal) => goalCard(goal, state.goalFilter === "completed")).join("") : `<div class="card card-pad"><p class="muted">No ${state.goalFilter} goals here just yet.</p></div>`}</section>
    ${state.goalFilter === "active" ? `<section class="goal-lower"><article class="card steps-card"><h2 class="section-title">Your next little steps</h2><p class="steps-intro">One thing at a time is enough.</p>${[["20-minute easy run", "Run my first 10K · 17:30", "Today"], ["Read chapter 8", "Read 12 books · 20:30", "Tomorrow"], ["Transfer ฿2,000", "Emergency fund · 09:00", "Fri, 16 Oct"]].map(([title, subtitle, date], i) => `<div class="step-row"><button class="check-button" type="button" data-action="step" data-index="${i}" aria-pressed="${Boolean(state.stepChecks[i])}" aria-label="${state.stepChecks[i] ? "Mark incomplete" : "Mark complete"}: ${title}">${state.stepChecks[i] ? icon("check", 14) : ""}</button><span class="step-copy"><strong>${title}</strong><span>${subtitle}</span></span><span class="tag-pill ${["orange", "purple", "green"][i]}">${date}</span></div>`).join("")}<p class="timezone-note">All times are in Bangkok time (GMT+7).</p></article><article class="dream-card card"><span class="dream-kicker">Grow at your own pace</span><h2>Big dreams. Small, steady steps.</h2><p>You’ve already started. Keep making room for the things that matter to you.</p></article></section><button class="button secondary mobile-goal-run" type="button" data-action="run">${icon("plusSmall", 16)}Start my run</button>` : ""}`;
}

function menuPage() {
  const financeBalance = state.financeRecords.reduce((sum, record) => sum + (record.type === "Income" ? 1 : -1) * (Number(record.amount) || 0), 20000);
  const tools = [
    ["Habits", "repeat", "green", `${2 + state.customHabits.filter((habit) => habit.done).length} of ${4 + state.customHabits.length} done today`, "habits"],
    ["Finance", "walletAlt", "orange", state.financeRecords.length ? `${state.financeRecords.length} recent records` : "฿20,000 saved", "finance"],
    ["Calendar", "calendar", "purple", "Your day, thoughtfully planned", "calendar"],
    ["Analytics", "chart", "sun", "See how far you’ve come", "analytics"],
    ["Life areas", "flower", "purple", "Make room for what matters", "areas"],
    ["Weekly review", "sun", "green", "Pause, reflect, reset", "review"],
  ];
  const settings = [
    ["bell", "Notifications", "Gentle nudges, your way", "3"],
    ["sliders", "Settings", "Make this space your own", ""],
    ["chat", "Help & feedback", "We’re here for you", ""],
    ["shield", "Privacy & security", "Your life stays yours", ""],
  ];
  return `${pageHeading("A little lighter, together", "Everything you need to make life feel more like you.")}
    <section class="menu-layout"><div><article class="card menu-profile"><span class="avatar menu-avatar">M</span><h2>Mali Srisuk</h2><p>Bangkok, Thailand</p><p class="profile-since">Growing since September 2026</p><div class="profile-badges"><span class="tag-pill orange">${icon("flame", 13)}7-day streak</span><span class="tag-pill green">${icon("flag", 13)}${state.goals.filter((goal) => !state.completedGoals.includes(goal.id)).length} active goals</span></div></article><article class="kindness-card card"><div class="kindness-art">${icon("heart", 40)}</div><h2>Life isn’t a checklist.</h2><p>It’s the little things you make room for. We’re happy to grow alongside you.</p></article></div>
    <div><h2 class="toolkit-title">Your everyday toolkit</h2><div class="toolkit-grid">${tools.map(([title, symbol, tone, detail, action]) => `<button class="card toolkit-card" type="button" data-action="tool" data-tool="${action}"><span class="toolkit-top"><span class="toolkit-icon ${tone}">${icon(symbol, 18)}</span>${icon("arrow", 14)}</span><h3>${title}</h3><p>${detail}</p></button>`).join("")}</div>
    <article class="card space-card"><h2 class="section-title">Your space, your way</h2><div class="space-list">${settings.map(([symbol, title, detail, count]) => `<button class="space-row" type="button" data-action="setting" data-setting="${title}"><span class="space-icon">${icon(symbol, 18)}</span><span class="space-copy"><strong>${title}</strong><span>${detail}</span></span>${count ? `<span class="notification-count">${count}</span>` : ""}${icon("chevron", 15)}</button>`).join("")}</div>${state.financeRecords.length ? `<div class="finance-list"><h3 class="section-title">Recent money moments</h3>${state.financeRecords.slice(-3).reverse().map((record) => `<div class="finance-item"><span>${escapeHtml(record.label)}</span><span>${record.type === "Income" ? "+" : "−"}฿${Number(record.amount).toLocaleString()}</span></div>`).join("")}<p class="small muted">Balance recorded: ฿${financeBalance.toLocaleString()}</p></div>` : ""}</article><footer class="space-foot"><span>About 15Lifeday</span><span>Made for your everyday · v1.0</span></footer></div></section>`;
}

function financeDialog() {
  return `<div class="quick-backdrop" data-action="close-finance" aria-hidden="true"></div><section class="quick-sheet" role="dialog" aria-modal="true" aria-labelledby="finance-title"><h2 id="finance-title">A little money moment</h2><p>Keep your everyday money in balance.</p><form data-form="finance"><div class="form-row"><label for="finance-type">Type</label><select id="finance-type" name="type"><option>Expense</option><option>Income</option></select></div><div class="form-row"><label for="finance-label">What was it for?</label><input id="finance-label" name="label" required maxlength="60" placeholder="e.g. Groceries"></div><div class="form-row"><label for="finance-amount">Amount (฿)</label><input id="finance-amount" name="amount" required type="number" min="1" max="10000000" step="1" inputmode="numeric" placeholder="0"></div><div class="form-actions"><button class="button secondary" type="button" data-action="close-finance">Cancel</button><button class="button" type="submit">Save record</button></div></form></section>`;
}

function render() {
  const pages = { overview: overviewPage, journal: journalPage, goals: goalsPage, menu: menuPage };
  const app = document.getElementById("app");
  app.innerHTML = `${header()}<main class="main">${pages[activePage]()}</main>${bottomNav()}${quickSheet()}${state.showFinance ? financeDialog() : ""}${toastText ? `<div class="toast" role="status">${escapeHtml(toastText)}</div>` : ""}<span class="phone-indicator" aria-hidden="true"></span>`;
  if (state.showGoalForm) document.getElementById("goal-title")?.focus();
  if (state.showHabitForm) document.getElementById("habit-title")?.focus();
  if (state.showFinance) document.getElementById("finance-type")?.focus();
  if (state.quickOpen) document.getElementById("quick-title")?.focus();
}

function showToast(message) {
  toastText = message;
  window.clearTimeout(toastTimer);
  if (document.getElementById("app")) render();
  toastTimer = window.setTimeout(() => {
    toastText = "";
    render();
  }, 2800);
}

function switchPage(page) {
  if (!["overview", "goals", "journal", "menu"].includes(page)) return;
  if (page !== activePage) history.pushState(null, "", `#${page}`);
  activePage = page;
  state.quickOpen = false;
  state.notificationsOpen = false;
  state.openGoalMenu = null;
  state.showFinance = false;
  state.showGoalForm = false;
  state.showHabitForm = false;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateMoodColor(mood) {
  return mood === "Good" || mood === "Grateful" || mood === "Proud" ? "green" : mood === "Low" ? "orange" : "purple";
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-page], [data-action]");
  if (!target) {
    if ((state.openGoalMenu && !event.target.closest(".goal-menu-wrap"))
      || (state.notificationsOpen && !event.target.closest(".notification-wrap"))) {
      state.openGoalMenu = null;
      state.notificationsOpen = false;
      render();
    }
    return;
  }
  if (target.dataset.page) {
    switchPage(target.dataset.page);
    return;
  }
  const { action } = target.dataset;
  if (action === "quick") {
    state.quickOpen = !state.quickOpen;
    state.notificationsOpen = false;
    render();
  } else if (action === "close-quick") {
    state.quickOpen = false;
    render();
    document.querySelector(".quick-trigger")?.focus();
  } else if (action === "quick-goal") {
    switchPage("goals");
    state.showGoalForm = true;
    render();
  } else if (action === "quick-habit") {
    switchPage("overview");
    state.showHabitForm = true;
    render();
  } else if (action === "quick-journal") {
    switchPage("journal");
    document.getElementById("gratitude")?.focus();
  } else if (action === "quick-finance") {
    state.quickOpen = false;
    state.showFinance = true;
    render();
  } else if (action === "close-finance") {
    state.showFinance = false;
    render();
    document.querySelector(".quick-trigger")?.focus();
  } else if (action === "notifications") {
    state.notificationsOpen = !state.notificationsOpen;
    render();
  } else if (action === "profile") {
    showToast("You’re growing at your own pace, Mali.");
  } else if (action === "run") {
    showToast("Your 20-minute run is ready. Take it at your own pace.");
  } else if (action === "ritual") {
    const index = Number(target.dataset.index);
    if (index < defaultRituals.length) state.rituals[index] = !state.rituals[index];
    else {
      const habit = state.customHabits[index - defaultRituals.length];
      if (habit) habit.done = !habit.done;
    }
    persist();
    render();
  } else if (action === "goal-filter") {
    state.goalFilter = target.dataset.filter;
    state.openGoalMenu = null;
    render();
  } else if (action === "goal-menu") {
    state.openGoalMenu = state.openGoalMenu === target.dataset.id ? null : target.dataset.id;
    render();
  } else if (action === "toggle-goal") {
    const id = target.dataset.id;
    state.completedGoals = state.completedGoals.includes(id) ? state.completedGoals.filter((item) => item !== id) : [...state.completedGoals, id];
    state.openGoalMenu = null;
    persist();
    render();
  } else if (action === "step") {
    const index = Number(target.dataset.index);
    state.stepChecks[index] = !state.stepChecks[index];
    persist();
    render();
  } else if (action === "mood") {
    state.mood = target.dataset.mood;
    persist();
    render();
  } else if (action === "more-entries") {
    state.extraEntries = true;
    render();
  } else if (action === "cancel-goal") {
    state.showGoalForm = false;
    render();
  } else if (action === "cancel-habit") {
    state.showHabitForm = false;
    render();
  } else if (action === "tool") {
    const tool = target.dataset.tool;
    if (tool === "habits") {
      switchPage("overview");
      state.showHabitForm = true;
      render();
    } else if (tool === "finance") {
      state.showFinance = true;
      render();
    }
    else showToast(`${target.querySelector("h3")?.textContent || "This space"} is here for you.`);
  } else if (action === "setting") {
    showToast(`${target.dataset.setting}: you’re in control of your space.`);
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "gratitude") {
    state.gratitude = event.target.value;
    persist();
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();
  const data = new FormData(form);
  if (form.dataset.form === "journal") {
    const body = String(data.get("gratitude") || "").trim();
    if (!body) {
      form.elements.gratitude.setCustomValidity("Write a little thought before saving.");
      form.elements.gratitude.reportValidity();
      form.elements.gratitude.addEventListener("input", () => form.elements.gratitude.setCustomValidity(""), { once: true });
      return;
    }
    const now = new Date();
    const mood = state.mood;
    const moodLabel = mood === "Good" ? "Grateful" : mood === "Okay" ? "Calm" : "Low";
    state.entries.unshift({
      day: new Intl.DateTimeFormat("en", { day: "2-digit" }).format(now),
      month: new Intl.DateTimeFormat("en", { month: "short" }).format(now).toUpperCase(),
      title: body.length > 42 ? `${body.slice(0, 39)}…` : body,
      date: new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit", hour12: false }).format(now),
      body,
      mood: moodLabel,
      category: "Reflection",
      color: updateMoodColor(moodLabel),
    });
    state.gratitude = "";
    persist();
    render();
    showToast("Your reflection is saved. Thank you for showing up.");
  } else if (form.dataset.form === "goal") {
    const title = String(data.get("title") || "").trim();
    if (!title) return;
    state.goals.push({ id: `goal-${Date.now()}`, category: String(data.get("category")), title, description: "", detail: "Just getting started", percent: 0, due: "No deadline", next: "", color: "orange", icon: "flag" });
    state.showGoalForm = false;
    state.goalFilter = "active";
    persist();
    render();
    showToast("A new little goal is ready to grow.");
  } else if (form.dataset.form === "habit") {
    const name = String(data.get("title") || "").trim();
    if (!name) return;
    state.customHabits.push({ name, icon: "sun", done: false });
    state.showHabitForm = false;
    persist();
    render();
    showToast("Your new ritual is on the list.");
  } else if (form.dataset.form === "finance") {
    const label = String(data.get("label") || "").trim();
    const amount = Number(data.get("amount"));
    if (!label || !Number.isFinite(amount) || amount <= 0) return;
    state.financeRecords.push({ label, amount, type: String(data.get("type")) });
    state.showFinance = false;
    persist();
    render();
    showToast("Your money moment is recorded.");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && (state.quickOpen || state.showFinance)) {
    const dialog = document.querySelector(".quick-sheet");
    const focusable = dialog?.querySelectorAll("button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])");
    if (focusable?.length) {
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || active?.id === "quick-title")) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }
  if (event.key === "Escape") {
    const restoreQuickFocus = state.quickOpen || state.showFinance;
    let changed = false;
    for (const key of ["quickOpen", "notificationsOpen", "showFinance", "showGoalForm", "showHabitForm"]) {
      if (state[key]) {
        state[key] = false;
        changed = true;
      }
    }
    if (state.openGoalMenu) {
      state.openGoalMenu = null;
      changed = true;
    }
    if (changed) {
      render();
      if (restoreQuickFocus) document.querySelector(".quick-trigger")?.focus();
    }
  }
});

window.addEventListener("popstate", () => {
  const page = location.hash.slice(1);
  activePage = ["overview", "goals", "journal", "menu"].includes(page) ? page : "overview";
  state.quickOpen = false;
  state.notificationsOpen = false;
  state.showFinance = false;
  state.showGoalForm = false;
  state.showHabitForm = false;
  state.openGoalMenu = null;
  render();
});

const initialPage = location.hash.slice(1);
if (["overview", "goals", "journal", "menu"].includes(initialPage)) activePage = initialPage;
render();
