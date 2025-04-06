import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Menu, 
  X, 
  GitFork
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-secondary z-50 shadow-md glassmorphism">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Github className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">
              <span className="text-white">GitHub</span>
              <span className="text-primary">Metrics</span>
            </h1>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features">
            <a className="text-sm font-medium hover:text-white transition-colors">
              Features
            </a>
          </Link>
          <Link href="#how-it-works">
            <a className="text-sm font-medium hover:text-white transition-colors">
              How It Works
            </a>
          </Link>
        </nav>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>
      
      {isMenuOpen && (
        <div className="px-4 py-2 bg-secondary border-t border-border md:hidden">
          <nav className="flex flex-col space-y-3 py-2">
            <Link href="#features">
              <a 
                className="text-sm font-medium hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
            </Link>
            <Link href="#how-it-works">
              <a 
                className="text-sm font-medium hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
