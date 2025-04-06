import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface StepProps {
  number: number;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center mb-4 border border-primary">
        <span className="text-xl font-bold text-white">{number}</span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-foreground">
        {description}
      </p>
    </div>
  );
}

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Enter Username",
      description: "Simply provide a GitHub username in the search field to start analyzing their profile."
    },
    {
      number: 2,
      title: "Process Data",
      description: "Our system fetches and processes GitHub API data to generate comprehensive analytics."
    },
    {
      number: 3,
      title: "View Insights",
      description: "Explore beautiful visualizations and metrics to gain insights into GitHub activity."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">How It Works</h2>
          <p className="mt-4 text-foreground max-w-2xl mx-auto">
            Get started in just a few simple steps and unlock powerful GitHub insights instantly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <Step 
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="relative overflow-hidden rounded-lg shadow-xl">
            <CardContent className="p-0">
              <div className="relative">
                <div className="aspect-video w-full bg-secondary bg-[url('https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1200')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent rounded-lg"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-medium">
                    "GitHubMetrics transformed how I showcase my work to potential employers. The visualizations make my profile stand out."
                  </p>
                  <div className="mt-2 flex items-center">
                    <Avatar className="h-10 w-10 bg-primary text-white">
                      <AvatarFallback>GH</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="text-white font-medium">GitHub User</p>
                      <p className="text-sm text-foreground">Open Source Contributor</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
