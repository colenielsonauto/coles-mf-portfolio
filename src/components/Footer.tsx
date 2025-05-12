import React from 'react';

const FooterNavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('/#')) {
      if (window.location.pathname === '/') {
        event.preventDefault();
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
      }
    }
  };

  return (
    <a 
      href={href} 
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Cole Nielson. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <FooterNavLink href="/#projects">Projects</FooterNavLink>
            <FooterNavLink href="/#skills">Skills</FooterNavLink>
            <FooterNavLink href="/#about">About</FooterNavLink>
            <FooterNavLink href="/#contact">Contact</FooterNavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
