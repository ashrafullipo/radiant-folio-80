import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import LIpo from "../assets/IMG_Lipo.jpg"

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-30" />
                <img
                  src={LIpo}
                  alt="Profile"
                  className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto glass border-2 border-primary/20"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold">
                Passionate about creating amazing digital experiences
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am a passionate C# .NET Core MVC Developer** who enjoys solving problems and building clean, efficient backend systems. Along with my backend expertise in HTML, React, JavaScript, and Tailwind CSS, I also focus on creating SEO-friendly systems** and can collaborate smoothly with SEO teams to handle technical challenges. 
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My goal is to grow as a backend developer, contribute to impactful projects, and deliver solutions that add real value to the organization.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass p-4 rounded-xl">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="glass p-4 rounded-xl">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="glass p-4 rounded-xl">
                  <div className="text-3xl font-bold gradient-text">30+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="glass p-4 rounded-xl">
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-muted-foreground">Dedication</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
