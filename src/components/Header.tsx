import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gradient">
            Isaac Sarceño
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection('contacto')}
              className="ml-4"
            >
              Hablemos
            </Button>
          </div>

          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              ☰
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;