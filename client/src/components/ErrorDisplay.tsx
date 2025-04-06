import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ErrorDisplayProps {
  message: string;
  onRetry: () => void;
}

export default function ErrorDisplay({ message, onRetry }: ErrorDisplayProps) {
  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
          <h2 className="text-xl font-bold mb-2">Error Loading Data</h2>
          <p className="text-muted-foreground mb-4">{message}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={onRetry}>Try Again</Button>
      </CardFooter>
    </Card>
  );
}
