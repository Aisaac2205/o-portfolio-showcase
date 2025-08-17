import { Code, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="text-gradient">mí</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Conoce mi trayectoria y pasión por el desarrollo web
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">
                Mi historia y estudios
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Soy un desarrollador Frontend apasionado por crear experiencias digitales excepcionales. 
                Mi formación en ingeniería y mi constante aprendizaje me han permitido especializarme 
                en tecnologías modernas como React, TypeScript y desarrollo web responsive.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Durante mis estudios universitarios, descubrí mi amor por el código y la creación 
                de interfaces intuitivas. He completado múltiples cursos especializados y mantengo 
                una actitud de aprendizaje continuo en este campo en constante evolución.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js', 'Git'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">Desarrollo Frontend</h4>
                </div>
                <p className="text-muted-foreground">
                  Especializado en crear interfaces modernas, responsivas y accesibles 
                  que ofrecen experiencias de usuario excepcionales.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">Soluciones Creativas</h4>
                </div>
                <p className="text-muted-foreground">
                  Encuentro soluciones innovadoras a problemas complejos, 
                  siempre buscando la mejor manera de implementar cada funcionalidad.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">Enfoque en Resultados</h4>
                </div>
                <p className="text-muted-foreground">
                  Mi objetivo es contribuir al éxito de proyectos que generen 
                  impacto positivo y valor real para usuarios y empresas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;