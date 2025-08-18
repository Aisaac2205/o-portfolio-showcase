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
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full bg-gradient-subtle flex items-center justify-center text-4xl font-bold text-primary">
                        IS
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Isaac Sarceño</h3>
                  <p className="text-primary font-medium">Desarrollador Frontend</p>
                </div>
              </div>
              
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

          {/* Technology Stack Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                Tecnologías que <span className="text-gradient">domino</span>
              </h3>
              <p className="text-muted-foreground text-lg">
                Las herramientas que uso para crear experiencias digitales excepcionales
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-yellow-600' },
                { name: 'HTML5', icon: '🟧', color: 'from-orange-400 to-orange-600' },
                { name: 'CSS3', icon: '🔵', color: 'from-blue-400 to-blue-600' },
                { name: 'Bootstrap', icon: '🟣', color: 'from-purple-400 to-purple-600' },
                { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
                { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-cyan-600' },
                { name: 'TypeScript', icon: '🔷', color: 'from-blue-500 to-blue-700' },
                { name: 'Git', icon: '🔴', color: 'from-red-400 to-red-600' },
                { name: 'GitHub', icon: '⚫', color: 'from-gray-600 to-gray-800' },
              ].map((tech, index) => (
                <div 
                  key={tech.name}
                  className="group flex flex-col items-center space-y-3 animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${tech.color} shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110`}>
                    <span className="text-3xl block transform transition-transform duration-300 group-hover:rotate-12">
                      {tech.icon}
                    </span>
                    <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                  <span className="text-sm font-medium text-center transition-colors duration-300 group-hover:text-primary">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;