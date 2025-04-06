import SearchBar from "./SearchBar";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Star, GitFork, AlertCircle } from "lucide-react";
import { Github } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-mesh-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Visualize Your <span className="text-primary">GitHub</span> Profile Like Never Before
            </h1>
            <p className="mt-4 text-lg text-foreground max-w-lg">
              Unlock insights from your GitHub activity with beautiful visualizations and metrics. Perfect for developers, teams, and recruiters.
            </p>
            
            <SearchBar className="mt-8 max-w-md" />
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <Card className="w-full max-w-md bg-secondary rounded-lg shadow-xl overflow-hidden border border-border">
                <CardContent className="p-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                      <BarChart className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Repository Analytics</h3>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Stars</span>
                      <div className="flex items-center">
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="bg-[#F1E05A] h-full" style={{ width: '75%' }}></div>
                        </div>
                        <span className="ml-2 text-sm font-medium">2.4k</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Forks</span>
                      <div className="flex items-center">
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="bg-[#8250DF] h-full" style={{ width: '45%' }}></div>
                        </div>
                        <span className="ml-2 text-sm font-medium">986</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Issues</span>
                      <div className="flex items-center">
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="bg-[#FFA657] h-full" style={{ width: '25%' }}></div>
                        </div>
                        <span className="ml-2 text-sm font-medium">143</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-sm font-medium mb-2">Commit Activity</h4>
                    <div className="chart-container">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="chart-bar" 
                          style={{ 
                            height: `${20 + Math.random() * 80}%`, 
                            left: `${i * 5}%` 
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-secondary rounded-lg border border-border flex items-center justify-center shadow-lg transform rotate-6">
                <Github className="h-10 w-10 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
