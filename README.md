# 🚜 Sahi Faisla - किसान वित्तीय जीवन सिमुलेशन

**Financial Literacy Game for Rural Farmers**

A mobile-first, interactive web game that teaches small farmers financial decision-making through realistic scenarios and consequences.

![Game Status](https://img.shields.io/badge/Status-Production%20Ready-green)
![Language](https://img.shields.io/badge/Language-HTML%2FCSS%2FJS-blue)
![Platform](https://img.shields.io/badge/Platform-Web-orange)

---

## 🎯 Game Overview

**Sahi Faisla** (सही फैसला - "Right Decision") is a **single-page web application** where players take on the role of **Ramesh**, a small farmer, and make critical financial decisions over 3 farming years.

### Learning Goals:
- 💰 **Budget Planning** - Managing limited resources
- 🛡️ **Risk Management** - Understanding insurance
- 💳 **Responsible Credit** - Banking vs. moneylenders
- 📱 **Digital Safety** - Online payment risks
- 👨‍👩‍👧 **Family Welfare** - Balancing income and wellbeing

---

## 🎮 How to Play

### Starting the Game:
1. Open `index.html` in any modern web browser
2. Click **"शुरू करें"** (Start)
3. Follow the story and make decisions at each screen

### Game Flow (5 Levels):

| Level | Season | Decision | Learning |
|-------|--------|----------|----------|
| **1** | 🌾 Kharif | Choose seeds (cheap ₹3K vs good ₹6K) | Budget planning |
| **2** | 🏠 Lean Months | Pay expenses (use savings vs take loan) | Emergency funds |
| **3** | 💳 Credit | Borrow (moneylender 48% vs bank 12%) | Smart borrowing |
| **4** | 🛡️ Risk Event | Buy insurance (₹500) before disaster | Risk management |
| **5** | 🛒 Market | Sell crop (trader vs mandi vs digital) | Market awareness |

### Dashboard (Always Visible):
```
💰 Money (₹)          → Your available cash
📅 Year               → Current farming year (1-3)
🟢 Resilience (%)     → Mental strength (0-100)
😊 Happiness (%)      → Family wellbeing (0-100)
```

**Color Coding:**
- 🟢 Green: 50-100% (Good)
- 🟡 Yellow: 30-50% (Warning)
- 🔴 Red: 0-30% (Critical)

---

## 🌟 Key Features

### 1. **Random Events** 🎲
- Rain delays affecting crops
- Pest attacks and crop disease
- Digital payment fraud risks
- System generates realistic consequences

### 2. **Consequence Flash Screens** ⚡
- Shows "6 महीने बाद..." (6 months later)
- Visual feedback on decision outcomes
- Emotional impact of choices
- Builds financial awareness

### 3. **Multiple Endings**
```
🎉 Excellent (Money > ₹20K, Resilience > 60%)
✅ Good (Survived 3 years healthily)
⚠️ Struggling (Low resilience/happiness but alive)
❌ Failed (Out of money, debt crisis, or family crisis)
```

### 4. **Progress Saving** 💾
- Auto-saves game state to **localStorage**
- Resume interrupted sessions
- No server needed

### 5. **Bilingual Support** 🌐
- Click **"🌐 EN/हिंदी"** to toggle
- Default: Hindi (for accessibility)
- Full translations for all 5 levels

### 6. **Mobile-First Design** 📱
- Works on smartphones, tablets, desktops
- Large touch-friendly buttons
- Single decision per screen
- Responsive grid layout

---

## 📁 File Structure

```
sahi-faisla/
├── README.md              ← You are here
├── index.html             ← Main HTML file
├── style.css              ← Styling (mobile-first, responsive)
├── script.js              ← Game logic & state management
└── assets/
    ├── icons/             ← Icon placeholders
    ├── images/            ← Image files
    └── audio/             ← Sound effect files (optional)
```

### File Sizes:
- **index.html**: ~3 KB
- **style.css**: ~6 KB
- **script.js**: ~15 KB
- **Total**: ~24 KB (lightweight, fast loading)

---

## 🚀 Getting Started

### Local Testing:
```bash
# Option 1: Direct browser open
Open sahi-faisla/index.html in Chrome/Firefox/Safari

# Option 2: Simple HTTP server (Python)
python -m http.server 8000
# Visit: http://localhost:8000/sahi-faisla/

# Option 3: VS Code Live Server Extension
Right-click index.html → "Open with Live Server"
```

### Deploy to Web:

#### **Netlify (Free):**
1. Connect GitHub repo
2. Deploy → Auto-deploys on push
3. Get live URL instantly

#### **GitHub Pages (Free):**
1. Push to GitHub
2. Enable Pages in Settings
3. Access at: `username.github.io/repo-name`

#### **Vercel (Free):**
1. Import project
2. Deploy
3. Auto-scaling CDN

---

## 🎨 UI/UX Design

### Color Scheme:
- **Primary**: Orange (#ff9800) - Action buttons
- **Success**: Green (#4caf50) - Good decisions
- **Danger**: Red (#f44336) - Risky choices
- **Secondary**: Purple (#667eea) - Neutral options
- **Background**: Purple gradient

### Typography:
- **Main Font**: Segoe UI / Verdana
- **Headings**: 28-32px, bold
- **Body Text**: 16px
- **Mobile**: Large, readable sans-serif

### Animations:
- Slide-in transitions (0.4s)
- Button scale on click
- Meter bar color transitions
- Modal fade-in effects

---

## 🧠 Game Variables (State Management)

```javascript
gameState = {
  money: 15000,           // Starting cash (₹)
  resilience: 70,         // Stress/mental strength (0-100)
  happiness: 80,          // Family wellbeing (0-100)
  year: 1,                // Current year (1-3)
  season: 'kharif',       // farming season
  insured: false,         // Insurance purchased?
  seedType: null,         // 'cheap' or 'good'
  rainEvent: false,       // Did rain affect crops?
  creditSource: null,     // 'moneylender' or 'bank'
  language: 'hi'          // 'hi' or 'en'
}
```

**Saved to localStorage**: Persistent across sessions
**Reset on**: "Play Again" button

---

## 📊 Game Logic Rules

### Money Flow:
```
Start                   ₹15,000
- Kharif seeds          -₹3,000 to -₹6,000
- Lean season expenses  -₹5,000
- Insurance (optional)  -₹500
- Loan interest         -₹500 to -₹2,000/year
= Final amount          ₹? (varies)
```

### Resilience Changes:
| Action | Change |
|--------|--------|
| Buy good seeds | +10 |
| Buy cheap seeds | -10 |
| Bad rain event | -15 |
| Take moneylender loan | -20 |
| Take bank loan | -5 |
| Buy insurance | +5 |
| Risk event (uninsured) | -25 |
| Sell at Mandi | +10 |

### Happiness Changes:
| Action | Change |
|--------|--------|
| Good rain | +10 |
| Use savings | +5 |
| Moneylender loan | -15 |
| Risk event | -20 |
| Sell at Mandi | +10 |

### Game Over Conditions:
```javascript
// FAIL CONDITIONS:
if (money <= 0)          // No money left
if (resilience <= 0)     // Complete breakdown
if (happiness <= 0)      // Family crisis

// WIN CONDITIONS:
if (year > 3 && alive)   // Survived 3 years
```

---

## 🌐 Bilingual Content

**All text is translatable:**
- Level instructions
- Button labels
- Consequences
- Final scores

### To Add More Languages:
1. Edit `script.js`
2. Add new language object:
```javascript
strings.fr = {
  welcome_title: "Votre histoire commence",
  // ... add all keys
}
```
3. Update toggle logic

---

## 🔧 Technical Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure, accessibility |
| **CSS3** | Mobile-first, responsive grid |
| **Vanilla JS** | No dependencies, lightweight |
| **localStorage API** | Client-side data persistence |
| **No Backend** | Fully client-side processing |

### Browser Support:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## 🎓 Educational Framework

This game teaches **Behavioural Finance** principles:

### Concepts Covered:
1. **Scarcity Mindset** - Limited resources force prioritization
2. **Loss Aversion** - Fear of debt vs. opportunity cost
3. **Risk Assessment** - Insurance vs. gamble
4. **Time Value of Money** - Interest Rate Impact
5. **Digital Literacy** - Payment safety
6. **Family Economics** - Balancing growth and security

### For Educators:
- Use as classroom discussion starter
- Ask students: "What would you do differently?"
- Compare real farmer experiences
- Discuss government schemes (crop insurance, bank loans)

---

## 🐛 Known Limitations

1. **No Audio**: Audio files placeholder - add `.mp3` files to `assets/audio/`
2. **No Images**: Icon placeholders - add farmer imagery to `assets/images/`
3. **Offline Only**: No API calls, no multiplayer
4. **localStorage Limit**: ~5-10MB per domain (enough for this game)
5. **Single Player**: Not designed for multiplayer

---

## ✨ Future Enhancement Ideas

- 🎵 Add background music & sound effects
- 🎨 Add farmer illustrations & animated backgrounds
- 📊 Leaderboard (local high scores)
- 👥 Multiplayer mode (compare decisions)
- 📱 Mobile app (React Native wrapper)
- 🌍 More languages (Spanish, Marathi, Bengali)
- 📈 Advanced analytics (decision tracking)
- 🤖 AI advisor (suggest best decisions)

---

## 📝 License & Attribution

**Created for**: Financial literacy education  
**Target Users**: Rural farmers, low-literacy communities  
**Language**: Hindi (Primary), English (Secondary)  
**License**: Free to use, modify, and distribute  
**Attribution**: Not required, but appreciated!

---

## 🤝 Contributing

Want to improve this game?

1. **Test** - Play all 5 levels, find edge cases
2. **Translate** - Add new language strings
3. **Design** - Create farmer illustrations
4. **Sound** - Record game audio (background, effects)
5. **Content** - Suggest new levels or scenarios

---

## 📞 Support & Feedback

**Issues Found?**
- Check browser console (F12) for errors
- Clear localStorage: `localStorage.clear()` in console
- Test in different browser

**Questions?**
- Review game flow in `script.js`
- Check styling in `style.css`
- Read HTML structure in `index.html`

---

## 🙏 Acknowledgments

- Inspired by real stories of Indian farmers
- Research-backed financial literacy curriculum
- Designed for zero-internet environments
- Built with accessibility in mind

---

## 📅 Version History

| Version | Date | Changes |
|---------|------|---------|
| **1.0** | Feb 2026 | Initial release - 5 levels, bilingual, localStorage |

---

**Play Smart. Survive. Thrive. 🚜**

```
सही फैसला = आर्थिक सुरक्षा
गलत फैसला = कर्ज का दलदल

Make the Right Decision!
```

---

### Quick Start Commands:

```bash
# Windows (open in default browser)
start index.html

# Mac
open index.html

# Linux
xdg-open index.html

# Or use Python server
python3 -m http.server
```

**Then visit:** `http://localhost:8000/sahi-faisla/`

---

**Built with ❤️ for rural financial empowerment**
