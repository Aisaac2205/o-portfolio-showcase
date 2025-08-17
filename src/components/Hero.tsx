import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              👋 ¡Hola! Soy desarrollador Frontend
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Isaac Sarceño</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Especializado en <span className="text-primary font-semibold">React</span> y tecnologías modernas. 
            Creo experiencias web excepcionales que combinan diseño elegante con funcionalidad robusta.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('proyectos')}
              className="min-w-[160px]"
            >
              Ver Proyectos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contacto')}
              className="min-w-[160px]"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contactar
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card transition-all duration-300 glow-on-hover"
              aria-label="GitHub de Isaac Sarceño"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card transition-all duration-300 glow-on-hover"
              aria-label="LinkedIn de Isaac Sarceño"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;