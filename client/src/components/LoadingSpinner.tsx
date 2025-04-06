import { Loader2 } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <Loader2 className="h-12 w-12 text-primary animate-spin" />
      <p className="mt-4 text-lg text-muted-foreground">Loading GitHub data...</p>
    </div>
  );
}
