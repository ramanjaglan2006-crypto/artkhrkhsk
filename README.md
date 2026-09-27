# Arthrakshak 🛡️💰

**Arthrakshak** is an intelligent, comprehensive financial management and wealth protection platform designed to give individuals and families complete control over their income, expenses, investments, credit cards, and strategic long-term goals.

---

## 👤 Author & Lead Contributor
- **Raman Kumar** ([@raman](https://github.com/raman))

---

## ✨ Key Features

- **Dashboard & Financial Wellness Overview**: Real-time net worth tracking, monthly savings velocity, expense distribution, and AI-driven health scores.
- **Income & Expense Tracking**: Dynamic categories, multi-channel income feeds, bill management, and recurring expenditure insights.
- **Credit Cards & Debt Management**: Card usage stats, reward points tracking, due date alerts, and payoff strategies.
- **Strategic Goals & Family Ledger**: Milestone planning (education, home, retirement), shared family wallets, and term/health insurance tracking.
- **AI Financial Assistant**: Intelligent conversational insights powered by modern LLMs to help optimize savings and investments.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd arthrkhshk
   ```

2. **Install dependencies:**
   ```bash
   npm install
   npm install --prefix frontend
   npm install --prefix backend
   ```

3. **Environment Setup:**
   Create a `.env` file in the `backend/` directory with your database URI and API keys:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   GROQ_API_KEY=your_groq_api_key
   ```

4. **Run Locally:**

   - **Frontend Dev Server:**
     ```bash
     cd frontend
     npm run dev
     ```

   - **Backend Server:**
     ```bash
     cd backend
     npm start
     ```

---

## 🛠️ Built With

- **Frontend**: React 19, Vite, Framer Motion, Recharts, Lucide Icons, Manrope Font
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), Google Generative AI / Groq SDK
- **Deployment**: Vercel Serverless / Node.js Host

---

## 📄 License

Distributed under the ISC License. Designed and maintained by **Raman Kumar**.
