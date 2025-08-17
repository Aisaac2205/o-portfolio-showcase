import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Información personal */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient">Isaac Sarceño</h3>
              <p className="text-muted-foreground">
                Desarrollador Frontend especializado en crear experiencias web excepcionales 
                con React y tecnologías modernas.
              </p>
            </div>

            {/* Enlaces rápidos */}
            <div className="space-y-4">
              <h4 className="font-semibold">Enlaces rápidos</h4>
              <nav className="space-y-2">
                <a 
                  href="#sobre-mi" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre mí
                </a>
                <a 
                  href="#proyectos" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Proyectos
                </a>
                <a 
                  href="#contacto" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </a>
              </nav>
            </div>

            {/* Redes sociales */}
            <div className="space-y-4">
              <h4 className="font-semibold">Conecta conmigo</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card/50 border border-border/50 hover:bg-card transition-all duration-300 glow-on-hover"
                  aria-label="GitHub de Isaac Sarceño"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card/50 border border-border/50 hover:bg-card transition-all duration-300 glow-on-hover"
                  aria-label="LinkedIn de Isaac Sarceño"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:isaac@example.com"
                  className="p-3 rounded-lg bg-card/50 border border-border/50 hover:bg-card transition-all duration-300 glow-on-hover"
                  aria-label="Email de Isaac Sarceño"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                ¿Tienes un proyecto en mente? <br />
                <a 
                  href="mailto:isaac@example.com" 
                  className="text-primary hover:underline"
                >
                  ¡Hablemos!
                </a>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Isaac Sarceño. Todos los derechos reservados.
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Hecho con <Heart className="h-4 w-4 text-red-500 fill-current" /> en Guatemala
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;