import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, X, ZoomIn } from 'lucide-react';
import project1Image from '@/assets/project1.png';
import project2Image from '@/assets/project2.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  image2?: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [

  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Plataforma de comercio electrónico completa con carrito de compras, procesamiento de pagos y panel de administración. Diseño adaptable y optimizado para ventas.",
    image: project1Image,
    image2: project2Image,
    tags: ["React", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Express"],
    githubUrl: "https://github.com/Aisaac2205/balompie-shop",
    demoUrl: "https://balompie-shop-production.up.railway.app/"
  },

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
              Mi <span className="text-gradient">Proyecto Destacado</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Actualmente trabajando en una plataforma de comercio electrónico completa 
              que demuestra mis habilidades en desarrollo full stack
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-4xl w-full mx-4 md:mx-0">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="glass-card rounded-2xl overflow-hidden group glow-on-hover"
                >
                  {/* Galería de imágenes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 md:p-6">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={`Screenshot del proyecto ${project.title}`}
                        className="w-full h-48 md:h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
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
                    
                    {project.image2 && (
                      <div className="relative">
                        <img
                          src={project.image2}
                          alt={`Screenshot adicional del proyecto ${project.title}`}
                          className="w-full h-48 md:h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                          <Button
                            variant="glass"
                            size="sm"
                            onClick={() => openLightbox({...project, image: project.image2!})}
                            className="backdrop-blur-md"
                          >
                            <ZoomIn className="h-4 w-4 mr-2" />
                            Ver imagen
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 group-hover:text-primary transition-colors text-center md:text-left">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-lg text-center md:text-left">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6 md:mb-8 justify-center md:justify-start">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 md:px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs md:text-sm text-primary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 text-sm"
                        asChild
                      >
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`Ver código fuente de ${project.title} en GitHub`}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Ver Código
                        </a>
                      </Button>
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="flex-1 text-sm"
                        asChild
                      >
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`Ver demo en vivo de ${project.title}`}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Ver Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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