# SupportIQ (AI-Powered Customer Support Triage SaaS) 🚀  

SupportIQ is a modern SaaS application that helps small and growing teams manage customer support efficiently by automatically **classifying, prioritizing, and routing support tickets using AI**.

The platform is designed to reduce response time, prevent SLA breaches, and give teams a clear, real-time view of their support workload.

---

## 🧠 Problem It Solves

Small startups and support teams often struggle with:
- High volume of incoming tickets
- No clear way to identify urgent issues
- Manual ticket assignment
- Missed SLAs and delayed responses

SupportIQ solves this by using **AI-driven triage** and **automation** to ensure the right tickets reach the right agents at the right time.

---

## ✨ Key Features

### 🔹 Multi-Channel Ticket Ingestion
- Web form support (initial MVP)
- Extensible design for Email & WhatsApp integration
- Unified inbox for all customer queries

### 🔹 AI-Powered Ticket Classification
- Automatic categorization (login, payment, bug, abuse, etc.)
- AI-based urgency detection
- Confidence-based fallback to rule-based logic

### 🔹 Smart Ticket Prioritization
- Priority levels: Low, Medium, High, Critical
- SLA deadlines calculated based on priority
- Visual indicators for urgent tickets

### 🔹 Auto-Assignment Engine
- Automatically assigns tickets to available agents
- Skill-based and load-balanced routing
- Manual reassignment when needed

### 🔹 SLA Monitoring & Alerts
- SLA timers per ticket
- Real-time SLA breach detection
- Visual alerts for overdue responses

### 🔹 Real-Time Dashboard
- Live ticket updates using WebSockets
- Agent workload overview
- Priority and status breakdowns

### 🔹 Analytics & Insights
- Ticket volume trends
- Priority distribution
- Agent performance metrics

### 🔹 Theme-Aware UI
- Light / Dark mode using CSS variables
- Consistent design tokens across the app
- Tailwind + dynamic theming support

---

## 🧩 Tech Stack

### Frontend
- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **Material UI**
- **shadcn/ui**
- Client & Server Components
- Real-time UI updates

### Backend
- Next.js API Routes or FastAPI (to be decided)
- MongoDB
- REST APIs
- WebSocket (Socket.io)

### AI & Automation
- OpenAI API for ticket classification
- Hybrid AI + rule-based logic
- Background jobs for SLA tracking

