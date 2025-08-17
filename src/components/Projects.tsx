import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, X, ZoomIn } from 'lucide-react';
import project1Image from '@/assets/project1.jpg';
import project2Image from '@/assets/project2.jpg';
import project3Image from '@/assets/project3.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dashboard Analítico",
    description: "Aplicación React con visualización de datos en tiempo real, gráficos interactivos y sistema de autenticación. Implementada con TypeScript y diseño responsive.",
    image: project1Image,
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  },
  {
    id: 2,
    title: "E-commerce Moderno",
    description: "Plataforma de comercio electrónico completa con carrito de compras, procesamiento de pagos y panel de administración. Diseño adaptable y optimizado para conversiones.",
    image: project2Image,
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  },
  {
    id: 3,
    title: "Landing Page Creativa",
    description: "Sitio web corporativo con animaciones suaves, diseño moderno y optimización SEO. Implementado con las mejores prácticas de rendimiento web.",
    image: project3Image,
    tags: ["React", "Framer Motion", "Next.js", "CSS3"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="proyectos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mis <span className="text-gradient">Proyectos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explora algunos de mis trabajos más recientes y las tecnologías que utilizo 
              para crear experiencias web excepcionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden group glow-on-hover"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={`Screenshot del proyecto ${project.title}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="glass"
                      size="sm"
                      onClick={() => openLightbox(project)}
                      className="backdrop-blur-md"
                    >
                      <ZoomIn className="h-4 w-4 mr-2" />
                      Ver imagen
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Ver código fuente de ${project.title} en GitHub`}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Ver demo en vivo de ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-foreground hover:text-primary"
              onClick={closeLightbox}
              aria-label="Cerrar imagen ampliada"
            >
              <X className="h-6 w-6" />
            </Button>
            
            <div className="glass-card rounded-2xl overflow-hidden">
              <img
                src={selectedProject.image}
                alt={`Vista ampliada del proyecto ${selectedProject.title}`}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-muted-foreground">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;