import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if it's a hash link for the home page
    if (href.startsWith('/#')) {
      // Check if currently on the home page
      if (window.location.pathname === '/') {
        event.preventDefault(); // Prevent default jump
        const targetId = href.substring(2); // Remove '/#'
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Update URL hash without full page reload
          window.history.pushState(null, '', href);
        }
      } 
      // If not on the home page, let the default link behavior handle navigation (href="/#section")
    }
    // If it's not a home page hash link (e.g., could be a different page link in the future), let default behavior happen
  };

  return (
    <a 
      href={href} 
      className="text-sm font-medium transition-colors hover:text-accent"
      onClick={handleClick} // Add the click handler
    >
      {children}
    </a>
  );
};

// New component for the home link
const HomeLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-lg font-bold tracking-tight transition-colors hover:text-accent" // Use similar styling but keep font bold
  >
    {children}
  </a>
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Wrap name in HomeLink */}
          <HomeLink href="/">Cole Nielson</HomeLink>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Update hrefs to include / */}
          <NavLink href="/#projects">Projects</NavLink>
          <NavLink href="/#skills">Skills</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
          <ThemeToggle />
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={18} />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b">
          <nav className="container py-4 flex flex-col space-y-4">
            {/* Update hrefs to include / */}
            <NavLink href="/#projects">Projects</NavLink>
            <NavLink href="/#skills">Skills</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
