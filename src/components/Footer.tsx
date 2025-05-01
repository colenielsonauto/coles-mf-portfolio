
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
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground">
              Projects
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground">
              Skills
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
