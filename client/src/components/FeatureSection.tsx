import { 
  GitFork, 
  BarChart2, 
  Code, 
  Users, 
  AlertCircle, 
  TrendingUp 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgClass: string;
  iconClass: string;
}

function FeatureCard({ icon, title, description, iconBgClass, iconClass }: FeatureCardProps) {
  return (
    <div className="bg-secondary rounded-lg p-6 border border-border hover:border-primary transition-all">
      <div className={`w-12 h-12 rounded-lg ${iconBgClass} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-foreground">
        {description}
      </p>
    </div>
  );
}

export default function FeatureSection() {
  const features = [
    {
      icon: <GitFork className={`h-5 w-5 text-primary`} />,
      title: "Repository Analysis",
      description: "Explore detailed insights about repositories, including stars, forks, languages, and commit frequency.",
      iconBgClass: "bg-primary bg-opacity-10",
      iconClass: "text-primary"
    },
    {
      icon: <BarChart2 className={`h-5 w-5 text-[#2EA043]`} />,
      title: "Commit Activity",
      description: "Visualize commit patterns over time with interactive charts showing contribution frequency and intensity.",
      iconBgClass: "bg-[#2EA043] bg-opacity-10",
      iconClass: "text-[#2EA043]"
    },
    {
      icon: <Code className={`h-5 w-5 text-[#8250DF]`} />,
      title: "Language Breakdown",
      description: "Get a clear visualization of programming languages used across all repositories with percentage breakdowns.",
      iconBgClass: "bg-[#8250DF] bg-opacity-10",
      iconClass: "text-[#8250DF]"
    },
    {
      icon: <Users className={`h-5 w-5 text-[#FFA657]`} />,
      title: "Collaboration Insights",
      description: "Discover collaboration patterns, including top contributors, pull request activity, and review metrics.",
      iconBgClass: "bg-[#FFA657] bg-opacity-10",
      iconClass: "text-[#FFA657]"
    },
    {
      icon: <AlertCircle className={`h-5 w-5 text-[#F85149]`} />,
      title: "Issue Tracking",
      description: "Monitor issue status, resolution rates, and identify common patterns to improve project management.",
      iconBgClass: "bg-[#F85149] bg-opacity-10",
      iconClass: "text-[#F85149]"
    },
    {
      icon: <TrendingUp className={`h-5 w-5 text-[#F1E05A]`} />,
      title: "Growth Metrics",
      description: "Track repository growth over time, including star acquisition rate, fork patterns, and community engagement.",
      iconBgClass: "bg-[#F1E05A] bg-opacity-10",
      iconClass: "text-[#F1E05A]"
    }
  ];

  return (
    <section id="features" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Powerful Features</h2>
          <p className="mt-4 text-foreground max-w-2xl mx-auto">
            Our advanced tools help you gain insights from GitHub profiles and repositories with beautifully visualized data.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBgClass={feature.iconBgClass}
              iconClass={feature.iconClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
