import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2">
              <Github className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-bold">
                <span className="text-white">GitHub</span>
                <span className="text-primary">Metrics</span>
              </h2>
            </div>
            <p className="mt-4 text-foreground max-w-xs">
              Visualize GitHub profiles with beautiful metrics and insights for developers and recruiters.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-foreground hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-foreground hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-foreground hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-foreground hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-foreground hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="text-foreground hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-foreground hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-foreground hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-foreground hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-foreground hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-foreground text-sm">
            &copy; {new Date().getFullYear()} GitHubMetrics. All rights reserved. Not affiliated with GitHub Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
