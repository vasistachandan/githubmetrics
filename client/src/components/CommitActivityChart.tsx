import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { GitCommit } from "@/types/github";

interface CommitActivityChartProps {
  commitData: GitCommit[];
}

export default function CommitActivityChart({ commitData }: CommitActivityChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Group commits by month
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Process data
  const commitsByMonth = commitData.reduce((acc: Record<string, number>, commit) => {
    const date = new Date(commit.commit.author.date);
    const monthIndex = date.getMonth();
    const monthName = months[monthIndex];
    
    acc[monthName] = (acc[monthName] || 0) + 1;
    return acc;
  }, {});

  // Fill in missing months with zero counts
  const normalizedCommitsByMonth = months.reduce((acc: Record<string, number>, month) => {
    acc[month] = commitsByMonth[month] || 0;
    return acc;
  }, {});

  // Find max commits for scaling
  const maxCommits = Math.max(...Object.values(normalizedCommitsByMonth), 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={chartRef} className="w-full">
      <div className="chart-container h-40">
        {Object.entries(normalizedCommitsByMonth).map(([month, count], index) => {
          const height = Math.max((count / maxCommits) * 100, 5); // minimum 5% height for visibility
          return (
            <div
              key={month}
              className="chart-bar"
              style={{
                height: isVisible ? `${height}%` : "0%",
                left: `${(index / 11) * 95}%`,
                transition: `height 0.5s ease ${index * 0.05}s`
              }}
              title={`${month}: ${count} commits`}
            ></div>
          );
        })}
      </div>
      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        {months.map((month) => (
          <span key={month} className="text-xs">{month}</span>
        ))}
      </div>
    </div>
  );
}
