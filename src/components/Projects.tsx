import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, X, ZoomIn } from 'lucide-react';
import project1Image from '@/assets/project1.png';
import project2Image from '@/assets/project2.png';
import pupusas from '@/assets/pupusas.png';
import pupusas2 from '@/assets/pupusas2.png';

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
    tags: ["React", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "NestJS"],
    githubUrl: "https://github.com/Aisaac2205/balompie-shop",
    demoUrl: "https://balompie-shop-production.up.railway.app/"
  },
  {
    id: 2,
    title: "Página Web de Pupusería",
    description: "Página web para pedidos para una pupuseria de Quesada, Jutiapa. Diseño adaptable y optimizado para ventas.",
    image: pupusas,
    image2: pupusas2,
    tags: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Aisaac2205/DonaToya",
      demoUrl: "https://donatoya.up.railway.app/"
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
              Mis <span className="text-gradient">Proyectos Destacados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explora una selección de mis proyectos más destacados, donde combino 
              tecnologías modernas con diseño intuitivo para crear experiencias digitales excepcionales
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`glass-card rounded-2xl overflow-hidden group glow-on-hover transform transition-all duration-500 hover:scale-[1.02] ${
                  index % 2 === 0 ? 'lg:hover:rotate-1' : 'lg:hover:-rotate-1'
                }`}
              >
                {/* Header del proyecto */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-60 hover:opacity-100 transition-opacity"
                        asChild
                      >
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`Ver código fuente de ${project.title} en GitHub`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-60 hover:opacity-100 transition-opacity"
                        asChild
                      >
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`Ver demo en vivo de ${project.title}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Galería de imágenes con carousel */}
                <div className="relative px-6 pb-6">
                  <div className="relative">
                    {/* Imagen principal con efecto parallax */}
                    <div className="relative group/image overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 z-10 pointer-events-none"></div>
                      <img
                        src={project.image}
                        alt={`Screenshot del proyecto ${project.title}`}
                        className="w-full h-72 object-cover transition-all duration-700 group-hover/image:scale-110 group-hover/image:rotate-1"
                        loading="lazy"
                      />
                      
                      {/* Overlay con información */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 z-20">
                        <div className="transform translate-y-8 group-hover/image:translate-y-0 transition-transform duration-500 delay-100">
                          <p className="text-white/90 text-sm mb-3 line-clamp-2">
                            Vista principal del proyecto {project.title}
                          </p>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => openLightbox(project)}
                            className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 text-white hover:text-white w-fit"
                          >
                            <ZoomIn className="h-4 w-4 mr-2" />
                            Ver en detalle
                          </Button>
                        </div>
                      </div>
                      
                      {/* Badge de proyecto */}
                      <div className="absolute top-4 left-4 z-30">
                        <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full border border-white/20">
                          Proyecto #{project.id}
                        </span>
                      </div>
                    </div>
                    
                    {/* Imagen secundaria como thumbnail */}
                    {project.image2 && (
                      <div className="mt-4 relative group/thumb">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="col-span-2">
                            <div className="h-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10 flex items-center justify-center">
                              <span className="text-xs text-muted-foreground font-medium">
                                Vista previa adicional
                              </span>
                            </div>
                          </div>
                          <div className="relative overflow-hidden rounded-lg group/preview cursor-pointer" onClick={() => openLightbox({...project, image: project.image2!})}>
                            <img
                              src={project.image2}
                              alt={`Vista adicional del proyecto ${project.title}`}
                              className="w-full h-20 object-cover transition-all duration-500 group-hover/preview:scale-125 group-hover/preview:brightness-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <ZoomIn className="h-4 w-4 text-white drop-shadow-lg" />
                            </div>
                            <div className="absolute inset-0 ring-2 ring-primary/0 group-hover/preview:ring-primary/50 transition-all duration-300 rounded-lg"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Indicadores de galería */}
                  <div className="flex justify-center mt-4 gap-2">
                    <div className="h-1 w-8 bg-primary rounded-full"></div>
                    {project.image2 && (
                      <div className="h-1 w-4 bg-primary/30 rounded-full"></div>
                    )}
                  </div>
                </div>

                {/* Footer con botones principales */}
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      className="group/btn relative overflow-hidden"
                      asChild
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Ver código fuente de ${project.title} en GitHub`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    <Button 
                      variant="default" 
                      className="group/btn relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                      asChild
                    >
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Ver demo en vivo de ${project.title}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
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

      {/* Lightbox Modal Mejorado */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl w-full animate-in zoom-in-95 duration-300">
            {/* Header del modal */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary text-sm font-medium rounded-full border border-primary/30">
                  {selectedProject.title}
                </span>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:text-white hover:bg-white/10"
                    asChild
                  >
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:text-white hover:bg-white/10"
                    asChild
                  >
                    <a 
                      href={selectedProject.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                onClick={closeLightbox}
                aria-label="Cerrar imagen ampliada"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Contenedor de la imagen */}
            <div 
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={`Vista ampliada del proyecto ${selectedProject.title}`}
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
              />
              
              {/* Overlay con información */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="max-w-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-xs text-white font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navegación si hay imagen adicional */}
            {selectedProject.image2 && (
              <div className="flex justify-center mt-4">
                <div className="flex gap-2 bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
                  <button
                    className="w-3 h-3 rounded-full bg-primary transition-all duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject({...selectedProject, image: selectedProject.image});
                    }}
                  />
                  <button
                    className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject({...selectedProject, image: selectedProject.image2!});
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;