// ========================================
// SAHI FAISLA - Financial Literacy Game
// ========================================

// Game Variables
let gameState = {
  money: 15000,
  resilience: 70,
  happiness: 80,
  year: 1,
  season: 'kharif', // kharif, rabi, lean
  insured: false,
  seedType: null,
  rainEvent: false,
  creditSource: null,
  language: 'hi' // 'hi' or 'en'
};

// Language Strings
const strings = {
  hi: {
    // Welcome & Intro
    welcome_title: 'आपकी कहानी शुरू होती है',
    welcome_subtitle: 'एक किसान रमेश की जिंदगी में...',
    character_intro: 'मैं रमेश हूँ',
    character_desc: 'मेरे पास 2 एकड़ जमीन, एक परिवार और सपने हैं।',
    family_desc: 'बीवी, बच्चों और माता-पिता को पालना है।',
    money_desc: '₹15,000 से शुरुआत कर रहा हूँ',
    ready: 'तैयार हूँ!',

    // Level 1: Kharif
    kharif_title: '🌾 खरीफ का सीजन शुरू',
    kharif_subtitle: 'बीज चुनना है',
    cheap_seed: '🌱 सस्ते बीज\n₹3,000\n(कम गुणवत्ता)',
    good_seed: '🌾 अच्छे बीज\n₹6,000\n(बेहतर आओ)',
    seed_chosen: 'बीज खरीद लिए',

    // Rain Event
    bad_rain_title: '🌧️ बारिश देर से हुई',
    bad_rain_desc: 'फसल को नुकसान हुआ। पानी की कमी थी।',
    good_rain_title: '☀️ मौसम अच्छा रहा',
    good_rain_desc: 'सही समय पर बारिश हुई। फसल अच्छी हुई।',

    // Level 2: Expenses
    expense_title: '🏠 खाली महीने',
    expense_subtitle: 'घर के खर्च आ गए',
    expense_list: 'स्कूल की फीस, दवा, खाना - सब कुछ।',
    expense_amount: '₹5,000 का खर्च',
    use_savings: '💰 बचत से दें',
    take_loan: '💳 कर्ज लें',

    // Level 3: Credit
    credit_title: '💳 कर्ज का फैसला',
    credit_subtitle: 'आगे का पैसा कहाँ से लाएँ?',
    moneylender: '🏪 साहूकार\n(तुरंत पैसा, 48% ब्याज)',
    bank_loan: '🏦 बैंक\n(सुरक्षित, 12% ब्याज)',

    // Level 4: Insurance
    insurance_title: '🛡️ बीमा लें या नहीं?',
    insurance_subtitle: 'आगे कोई संकट आ सकता है',
    insurance_yes: '✅ बीमा लूँ\n(₹500)',
    insurance_no: '❌ अभी नहीं',

    // Risk Event
    risk_event_title: '⚠️ संकट आया!',
    flood_desc: '🌊 बाढ़ आ गई। फसल डूब गई।',
    pest_desc: '🦗 कीटों ने फसल खा दी।',
    disease_desc: '🦠 रोग लग गया। पूरी फसल खराब।',
    insured_safe: '✅ बीमा बचा गया!',
    not_insured: '❌ भारी नुकसान हुआ',

    // Level 5: Market
    market_title: '🛒 फसल बेचने का समय',
    market_subtitle: 'कहाँ से सबसे अच्छा दाम मिलेगा?',
    local_trader: '🏪 स्थानीय व्यापारी\n(तुरंत पैसा)',
    mandi: '🏛️ मंडी\n(अच्छा दाम)',
    digital: '📱 डिजिटल भुगतान\n(ऑनलाइन)',
    payment_risk: '⚠️ पेमेंट रुक गया!',
    payment_fraud: 'धोखाधड़ी की !',

    // Consequences
    consequence_poor: '😔 कर्ज में डूब गए।',
    consequence_struggle: '😟 परिवार तनाव में है।',
    consequence_crisis: '🚨 भूमि बिक गई।',
    consequence_better: '✅ कुछ बचाया।',
    consequence_good: '😊 ठीक-ठाक हाल है।',
    consequence_excellent: '🎉 बहुत अच्छा किया!',

    // Final
    final_title: 'खेल खत्म',
    survived: 'आप 3 साल बचे रहे!',
    not_survived: 'आप 3 साल नहीं बचे।',
    final_money: 'अंतिम पैसा: ₹',
    final_resilience: 'मनोबल: ',
    final_happiness: 'परिवार की खुशी: ',
    play_again: 'फिर से खेलें',

    // Buttons
    next: 'आगे बढ़ें',
    understood: 'समझा',
    continue: 'जारी रखें',
    six_months: '6 महीने बाद...',
  },
  en: {
    // Welcome & Intro
    welcome_title: 'Your Story Begins',
    welcome_subtitle: 'In the life of Ramesh, a farmer...',
    character_intro: 'I am Ramesh',
    character_desc: 'I have 2 acres of land, a family, and dreams.',
    family_desc: 'I need to take care of my wife, children, and parents.',
    money_desc: 'Starting with ₹15,000',
    ready: 'I\'m Ready!',

    // Level 1: Kharif
    kharif_title: '🌾 Kharif Season',
    kharif_subtitle: 'Choose your seeds',
    cheap_seed: '🌱 Cheap Seeds\n₹3,000\n(Low quality)',
    good_seed: '🌾 Good Seeds\n₹6,000\n(Better yield)',
    seed_chosen: 'Seeds purchased',

    // Rain Event
    bad_rain_title: '🌧️ Late Rain',
    bad_rain_desc: 'The crop suffered. Not enough water.',
    good_rain_title: '☀️ Good Weather',
    good_rain_desc: 'Rain came on time. Good harvest!',

    // Level 2: Expenses
    expense_title: '🏠 Lean Months',
    expense_subtitle: 'Household expenses arrived',
    expense_list: 'School fees, medicine, food - everything.',
    expense_amount: '₹5,000 needed',
    use_savings: '💰 Use Savings',
    take_loan: '💳 Take a Loan',

    // Level 3: Credit
    credit_title: '💳 Credit Decision',
    credit_subtitle: 'Where to get more money?',
    moneylender: '🏪 Moneylender\n(Fast, 48% interest)',
    bank_loan: '🏦 Bank\n(Safe, 12% interest)',

    // Level 4: Insurance
    insurance_title: '🛡️ Buy Insurance?',
    insurance_subtitle: 'A crisis might come',
    insurance_yes: '✅ Buy Insurance\n(₹500)',
    insurance_no: '❌ Not Now',

    // Risk Event
    risk_event_title: '⚠️ Crisis!',
    flood_desc: '🌊 Flood came. Crop drowned.',
    pest_desc: '🦗 Pests ate the crop.',
    disease_desc: '🦠 Disease spread. Crop ruined.',
    insured_safe: '✅ Insurance saved you!',
    not_insured: '❌ Heavy losses',

    // Level 5: Market
    market_title: '🛒 Harvest Time',
    market_subtitle: 'Where to sell for best price?',
    local_trader: '🏪 Local Trader\n(Instant cash)',
    mandi: '🏛️ Mandi\n(Better price)',
    digital: '📱 Digital Payment\n(Online)',
    payment_risk: '⚠️ Payment stuck!',
    payment_fraud: 'Fraud occurred!',

    // Consequences
    consequence_poor: '😔 Drowned in debt.',
    consequence_struggle: '😟 Family under stress.',
    consequence_crisis: '🚨 Land sold.',
    consequence_better: '✅ Managed somehow.',
    consequence_good: '😊 Doing okay.',
    consequence_excellent: '🎉 Did very well!',

    // Final
    final_title: 'Game Over',
    survived: 'You survived 3 years!',
    not_survived: 'You didn\'t survive 3 years.',
    final_money: 'Final Money: ₹',
    final_resilience: 'Resilience: ',
    final_happiness: 'Family Happiness: ',
    play_again: 'Play Again',

    // Buttons
    next: 'Next',
    understood: 'Understood',
    continue: 'Continue',
    six_months: '6 Months Later...',
  }
};

// Helper function to get translated text
function t(key) {
  return strings[gameState.language][key] || key;
}

// Save game to localStorage
function saveGame() {
  localStorage.setItem('sahi-faisla-state', JSON.stringify(gameState));
}

// Load game from localStorage
function loadGame() {
  const saved = localStorage.getItem('sahi-faisla-state');
  if (saved) {
    gameState = JSON.parse(saved);
  }
}

// Update dashboard
function updateDashboard() {
  document.getElementById('money').innerText = gameState.money;
  document.getElementById('season').innerText = `वर्ष ${gameState.year}`;
  
  document.getElementById('resilience-text').innerText = gameState.resilience + '%';
  document.getElementById('happiness-text').innerText = gameState.happiness + '%';
  
  // Update meter fills and colors
  const resilienceFill = document.getElementById('resilience-fill');
  const happinessFill = document.getElementById('happiness-fill');
  
  resilienceFill.style.width = gameState.resilience + '%';
  happinessFill.style.width = gameState.happiness + '%';
  
  // Color coding
  resilienceFill.classList.remove('warning', 'danger');
  happinessFill.classList.remove('warning', 'danger');
  
  if (gameState.resilience < 30) {
    resilienceFill.classList.add('danger');
  } else if (gameState.resilience < 50) {
    resilienceFill.classList.add('warning');
  }
  
  if (gameState.happiness < 30) {
    happinessFill.classList.add('danger');
  } else if (gameState.happiness < 50) {
    happinessFill.classList.add('warning');
  }
  
  saveGame();
}

// Toggle language
function toggleLanguage() {
  gameState.language = gameState.language === 'hi' ? 'en' : 'hi';
  updateDashboard();
  
  // Refresh current screen
  const currentLevel = getCurrentLevel();
  if (currentLevel) {
    currentLevel();
  }
}

// Get current level function
function getCurrentLevel() {
  if (gameState.season === 'kharif' && gameState.year <= 3) {
    return showKharifLevel;
  }
  return null;
}

// Show Welcome Screen
function showWelcome() {
  const screen = document.getElementById('screen');
  screen.innerHTML = `
    <h2 id="title">${t('welcome_title')}</h2>
    <p id="subtitle">${t('welcome_subtitle')}</p>
    <div class="icon">🚜</div>
    <p><strong>${t('character_intro')}</strong></p>
    <p>${t('character_desc')}</p>
    <p>${t('family_desc')}</p>
    <p><strong>${t('money_desc')}</strong></p>
    <button onclick="showCharacterIntro()" class="btn-primary">${t('ready')}</button>
  `;
}

// Character Introduction
function showCharacterIntro() {
  const screen = document.getElementById('screen');
  screen.innerHTML = `
    <h2>👨‍🌾 ${t('character_intro')}</h2>
    <div class="icon">👨‍🌾</div>
    <p>${t('character_desc')}</p>
    <p>${t('family_desc')}</p>
    <p>${t('money_desc')}</p>
    <p style="font-size: 14px; color: #999;">
      आप 3 सालों के लिए सही फैसले लेंगे तो बचेंगे। गलत फैसले लेंगे तो डूब जाएँगे।
    </p>
    <button onclick="startKharif()" class="btn-primary">${t('next')}</button>
  `;
}

// ========================================
// LEVEL 1: KHARIF SEASON
// ========================================

function startKharif() {
  gameState.year = 1;
  gameState.season = 'kharif';
  showKharifLevel();
}

function showKharifLevel() {
  const screen = document.getElementById('screen');
  screen.innerHTML = `
    <h2>${t('kharif_title')}</h2>
    <p>${t('kharif_subtitle')}</p>
    <div class="icon">🌱</div>
    <button onclick="chooseSeed('cheap')" class="btn-secondary">${t('cheap_seed')}</button>
    <button onclick="chooseSeed('good')" class="btn-success">${t('good_seed')}</button>
  `;
}

function chooseSeed(type) {
  if (type === 'cheap') {
    gameState.money -= 3000;
    gameState.resilience -= 10;
    gameState.seedType = 'cheap';
  } else {
    gameState.money -= 6000;
    gameState.resilience += 10;
    gameState.seedType = 'good';
  }
  
  updateDashboard();
  
  // Simulate rain event
  setTimeout(() => showRainEvent(), 1000);
}

function showRainEvent() {
  const screen = document.getElementById('screen');
  const badRain = Math.random() < 0.4; // 40% chance of bad rain
  
  gameState.rainEvent = badRain;
  
  if (badRain) {
    gameState.resilience -= 15;
    gameState.happiness -= 10;
    screen.innerHTML = `
      <h2>${t('bad_rain_title')}</h2>
      <div class="icon">🌧️</div>
      <p>${t('bad_rain_desc')}</p>
      <button onclick="showInsurance()" class="btn-primary">${t('next')}</button>
    `;
  } else {
    gameState.happiness += 10;
    screen.innerHTML = `
      <h2>${t('good_rain_title')}</h2>
      <div class="icon">☀️</div>
      <p>${t('good_rain_desc')}</p>
      <button onclick="showInsurance()" class="btn-primary">${t('next')}</button>
    `;
  }
  
  updateDashboard();
}

// ========================================
// LEVEL 2: LEAN SEASON
// ========================================

function showInsurance() {
  const screen = document.getElementById('screen');
  screen.innerHTML = `
    <h2>${t('insurance_title')}</h2>
    <p>${t('insurance_subtitle')}</p>
    <div class="icon">🛡️</div>
    <button onclick="buyInsurance()" class="btn-success">${t('insurance_yes')}</button>
    <button onclick="skipInsurance()" class="btn-danger">${t('insurance_no')}</button>
  `;
}

function buyInsurance() {
  gameState.money -= 500;
  gameState.insured = true;
  gameState.resilience += 5;
  updateDashboard();
  showExpenses();
}

function skipInsurance() {
  gameState.insured = false;
  updateDashboard();
  showExpenses();
}

function showExpenses() {
  const screen = document.getElementById('screen');
  screen.innerHTML = `
    <h2>${t('expense_title')}</h2>
    <p>${t('expense_subtitle')}</p>
    <p>${t('expense_list')}</p>
    <p><strong>${t('expense_amount')}</strong></p>
    <div class="icon">💸</div>
    <button onclick="useSavings()" class="btn-success">${t('use_savings')}</button>
    <button onclick="decideLoan()" class="btn-danger">${t('take_loan')}</button>
  `;
}

function useSavings() {
  if (gameState.money >= 5000) {
    gameState.money -= 5000;
    gameState.happiness += 5;
    updateDashboard();
    
    showConsequence('✅', 'परिवार खुश है', 'बिना कर्ज के घर चलाया।');
    setTimeout(() => showRiskEvent(), 2500);
  } else {
    showConsequence('❌', 'पैसे नहीं हैं', 'बचत खत्म हो गई। कर्ज लेना पड़ेगा।');
    setTimeout(() => decideLoan(), 2500);
  }
}

function decideLoan() {
  const screen = document.getElementById('screen');
  screen.innerHTML = `
    <h2>${t('credit_title')}</h2>
    <p>${t('credit_subtitle')}</p>
    <div class="icon">💳</div>
    <button onclick="takeMoneylenderLoan()" class="btn-danger">${t('moneylender')}</button>
    <button onclick="takeBankLoan()" class="btn-secondary">${t('bank_loan')}</button>
  `;
}

function takeMoneylenderLoan() {
  gameState.money += 10000;
  gameState.resilience -= 20;
  gameState.happiness -= 15;
  gameState.creditSource = 'moneylender';
  updateDashboard();
  
  showConsequence('⚠️', 'तेज़ ब्याज़!', 'साहूकार के चक्कर में फँस गए। 48% ब्याज़ पर बड़ी रकम लेनी पड़ी।');
  setTimeout(() => showRiskEvent(), 2500);
}

function takeBankLoan() {
  gameState.money += 8000;
  gameState.resilience -= 5;
  gameState.happiness -= 5;
  gameState.creditSource = 'bank';
  updateDashboard();
  
  showConsequence('✅', 'बैंक से कर्ज', 'सुरक्षित और कम ब्याज़ पर कर्ज मिल गया।');
  setTimeout(() => showRiskEvent(), 2500);
}

// ========================================
// LEVEL 4: RISK EVENT
// ========================================

function showRiskEvent() {
  const screen = document.getElementById('screen');
  const risks = [
    { title: t('flood_desc'), icon: '🌊' },
    { title: t('pest_desc'), icon: '🦗' },
    { title: t('disease_desc'), icon: '🦠' }
  ];
  
  const randomRisk = risks[Math.floor(Math.random() * risks.length)];
  
  if (gameState.insured) {
    screen.innerHTML = `
      <h2>${t('risk_event_title')}</h2>
      <div class="icon">${randomRisk.icon}</div>
      <p>${randomRisk.title}</p>
      <p><strong>${t('insured_safe')}</strong></p>
      <p style="font-size: 14px; color: #4caf50;">बीमा ने नुकसान से बचा दिया।</p>
      <button onclick="showMarket()" class="btn-primary">${t('next')}</button>
    `;
    gameState.happiness += 10;
  } else {
    gameState.money -= 8000;
    gameState.resilience -= 25;
    gameState.happiness -= 20;
    screen.innerHTML = `
      <h2>${t('risk_event_title')}</h2>
      <div class="icon">${randomRisk.icon}</div>
      <p>${randomRisk.title}</p>
      <p><strong>${t('not_insured')}</strong></p>
      <p style="font-size: 14px; color: #f44336;">बीमा न लेने से भारी नुकसान हुआ।</p>
      <button onclick="showMarket()" class="btn-primary">${t('next')}</button>
    `;
  }
  
  updateDashboard();
}

// ========================================
// LEVEL 5: MARKET
// ========================================

function showMarket() {
  const screen = document.getElementById('screen');
  screen.innerHTML = `
    <h2>${t('market_title')}</h2>
    <p>${t('market_subtitle')}</p>
    <div class="icon">🛒</div>
    <button onclick="sellToTrader()" class="btn-secondary">${t('local_trader')}</button>
    <button onclick="sellToMandi()" class="btn-success">${t('mandi')}</button>
    <button onclick="sellDigital()" class="btn-primary">${t('digital')}</button>
  `;
}

function sellToTrader() {
  gameState.money += 8000;
  gameState.happiness += 5;
  updateDashboard();
  
  showConsequence('✅', 'व्यापारी को बेचा', 'तुरंत नकद पैसा मिल गया। कम दाम लेकिन सुरक्षित।');
  setTimeout(() => nextYear(), 2500);
}

function sellToMandi() {
  gameState.money += 12000;
  gameState.resilience += 10;
  gameState.happiness += 10;
  updateDashboard();
  
  showConsequence('🎉', 'मंडी में बेचा', 'बेहतर दाम मिल गया। सही फैसला किया!');
  setTimeout(() => nextYear(), 2500);
}

function sellDigital() {
  const success = Math.random() < 0.5;
  
  if (success) {
    gameState.money += 10000;
    gameState.happiness += 5;
    updateDashboard();
    
    showConsequence('✅', 'डिजिटल भुगतान', 'ऑनलाइन सफल रहा। पैसा मिल गया।');
  } else {
    gameState.money -= 5000;
    gameState.resilience -= 15;
    gameState.happiness -= 15;
    updateDashboard();
    
    showConsequence('❌', t('payment_fraud'), 'ऑनलाइन धोखाधड़ी हुई। बहुत खतरनाक!');
  }
  
  setTimeout(() => nextYear(), 2500);
}

// ========================================
// CONSEQUENCE FLASH SCREEN
// ========================================

function showConsequence(emoji, title, description) {
  const modal = document.getElementById('consequenceModal');
  const body = document.getElementById('consequenceBody');
  
  body.innerHTML = `
    <div class="icon">${emoji}</div>
    <p><strong>${title}</strong></p>
    <p>${description}</p>
  `;
  
  modal.classList.add('show');
}

function closeModal() {
  const modal = document.getElementById('consequenceModal');
  modal.classList.remove('show');
}

// ========================================
// YEAR PROGRESSION
// ========================================

function nextYear() {
  gameState.year++;
  
  // Game Over Conditions
  if (gameState.resilience <= 0 || gameState.happiness <= 0 || gameState.money <= 0) {
    showGameOver(false);
    return;
  }
  
  if (gameState.year > 3) {
    showGameOver(true);
    return;
  }
  
  // Reset season and continue
  gameState.season = 'kharif';
  gameState.insured = false;
  gameState.seedType = null;
  
  // Loan interest compounds
  if (gameState.creditSource === 'moneylender') {
    gameState.money -= 2000; // High interest accumulation
  } else if (gameState.creditSource === 'bank') {
    gameState.money -= 500; // Low interest
  }
  
  updateDashboard();
  showKharifLevel();
}

// ========================================
// GAME OVER
// ========================================

function showGameOver(survived) {
  const screen = document.getElementById('screen');
  
  let finalMessage = '';
  let emoji = '';
  
  if (gameState.money < 5000 && gameState.resilience < 30) {
    emoji = '😔';
    finalMessage = 'आप कर्ज में डूब गए। जमीन बेचनी पड़ी।';
  } else if (gameState.resilience < 40 || gameState.happiness < 40) {
    emoji = '😟';
    finalMessage = 'परिवार को बहुत तकलीफ हुई। लेकिन आप जीवित रहे।';
  } else if (gameState.money > 20000 && gameState.resilience > 60) {
    emoji = '🎉';
    finalMessage = 'बहुत शानदार! आपने बुद्धिमानी से सभी फैसले लिए।';
  } else {
    emoji = '✅';
    finalMessage = 'आप 3 साल बचे रहे। बधाई हो!';
  }
  
  screen.innerHTML = `
    <h2>${t('final_title')}</h2>
    <div class="icon">${emoji}</div>
    <p><strong>${finalMessage}</strong></p>
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
    <p><strong>${t('final_money')}</strong>₹${gameState.money}</p>
    <p><strong>${t('final_resilience')}</strong>${gameState.resilience}%</p>
    <p><strong>${t('final_happiness')}</strong>${gameState.happiness}%</p>
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
    <p style="font-size: 14px; color: #666;">
      <strong>सीख:</strong> सही फैसले = स्वस्थ परिवार। गलत फैसले = भारी कर्ज।
    </p>
    <button onclick="resetGame()" class="btn-primary">${t('play_again')}</button>
  `;
}

// Reset Game
function resetGame() {
  gameState = {
    money: 15000,
    resilience: 70,
    happiness: 80,
    year: 1,
    season: 'kharif',
    insured: false,
    seedType: null,
    rainEvent: false,
    creditSource: null,
    language: gameState.language
  };
  
  updateDashboard();
  showWelcome();
}

// ========================================
// INITIALIZATION
// ========================================

// Load saved game on startup
window.addEventListener('load', () => {
  loadGame();
  updateDashboard();
  showWelcome();
});
