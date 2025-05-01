
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-sm font-medium transition-colors hover:text-accent"
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
          <span className="text-lg font-bold tracking-tight">Cole Nielson</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
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
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
