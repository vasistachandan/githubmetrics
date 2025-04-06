import { useState, FormEvent } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className = "" }: SearchBarProps) {
  const [username, setUsername] = useState("");
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      toast({
        title: "Please enter a username",
        description: "GitHub username cannot be empty",
        variant: "destructive",
      });
      return;
    }
    
    navigate(`/user/${username.trim()}`);
  };

  const fillExampleUser = (exampleUser: string) => {
    setUsername(exampleUser);
  };

  return (
    <div className={className}>
      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-muted" />
        </div>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full pl-10 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none text-white placeholder-muted-foreground"
          placeholder="Enter GitHub username"
          required
        />
        <Button
          type="submit"
          className="absolute right-2.5 bottom-2 bg-primary text-white px-4 py-1 h-8 rounded-md hover:bg-opacity-80 transition-all"
        >
          Search
        </Button>
      </form>
      <div className="flex items-center mt-3 text-sm">
        <span className="text-muted-foreground mr-2">Try:</span>
        <div className="space-x-2">
          <Button 
            variant="link" 
            className="text-primary hover:underline p-0 h-auto" 
            onClick={() => fillExampleUser("facebook")}
          >
            facebook
          </Button>
          <Button 
            variant="link" 
            className="text-primary hover:underline p-0 h-auto" 
            onClick={() => fillExampleUser("google")}
          >
            google
          </Button>
          <Button 
            variant="link" 
            className="text-primary hover:underline p-0 h-auto" 
            onClick={() => fillExampleUser("microsoft")}
          >
            microsoft
          </Button>
        </div>
      </div>
    </div>
  );
}
