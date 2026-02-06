import {
  Zap,
  MessageSquare,
  Clock,
  LayoutDashboard,
  Brain,
  Tag,
} from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="w-6 h-6 text-chart-1" />,
    title: "Multi-channel Inbox",
    description:
      "Unify Email, Web forms, and WhatsApp webhooks into a single, streamlined dashboard.",
  },
  {
    icon: <Brain className="w-6 h-6 text-chart-3" />,
    title: "AI Urgency Detection",
    description:
      "Automatically identify payment issues, potential churn, and high-priority bugs.",
  },
  {
    icon: <Tag className="w-6 h-6 text-chart-4" />,
    title: "Smart Tagging",
    description:
      "AI automatically categorizes tickets by topic, sentiment, and language.",
  },
  {
    icon: <Zap className="w-6 h-6 text-chart-5" />,
    title: "Auto-Assignment",
    description:
      "Route tickets to the right agent instantly based on expertise and workload.",
  },
  {
    icon: <Clock className="w-6 h-6 text-chart-4" />,
    title: "SLA Timers",
    description:
      "Never miss a deadline with dynamic countdowns and breach alerts.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-chart-2" />,
    title: "Admin Analytics",
    description:
      "Track response times, resolution rates, and team performance in real-time.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-14 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Everything you need to <br className="hidden sm:block" />
            <span className="text-primary">scale support</span> without the
            chaos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SupportIQ brings the power of LLMs to your help desk, automating the
            busywork so you can focus on the customer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-accent/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
