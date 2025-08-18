import { Code, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiNodedotjs, 
  SiReact, 
  SiTypescript, 
  SiGit, 
  SiGithub, 
  SiAmazon 
} from 'react-icons/si';

const About = () => {
  return (
    <motion.section 
      id="sobre-mi" 
      className="py-20 bg-gradient-subtle"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="text-gradient">mí</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Conoce mi trayectoria y pasión por el desarrollo web
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>

          {/* Technology Stack Section */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4">
                Tecnologías que <span className="text-gradient">domino</span>
              </h3>
              <p className="text-muted-foreground text-lg">
                Las herramientas que uso para crear experiencias digitales excepcionales
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
                { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
                { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
                { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
                { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
                { name: 'React', Icon: SiReact, color: '#61DAFB' },
                { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
                { name: 'Git', Icon: SiGit, color: '#F05032' },
                { name: 'GitHub', Icon: SiGithub, color: '#181717' },
                { name: 'AWS', Icon: SiAmazon, color: '#FF9900' },
              ].map((tech, index) => (
                <motion.div 
                  key={tech.name}
                  className="group flex flex-col items-center space-y-3"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="relative p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:shadow-xl"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                    style={{
                      '--tech-color': tech.color,
                    } as React.CSSProperties}
                  >
                    <tech.Icon 
                      className="text-4xl transition-all duration-300 group-hover:scale-110" 
                      style={{ color: tech.color }}
                    />
                    <motion.div 
                      className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                      style={{ backgroundColor: tech.color }}
                    />
                  </motion.div>
                  <span className="text-sm font-medium text-center transition-colors duration-300 group-hover:text-primary">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;