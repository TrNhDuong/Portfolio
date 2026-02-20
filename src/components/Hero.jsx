import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 container mx-auto pt-20 relative">
            <div className="absolute top-20 right-0 -z-10 opacity-20 hidden md:block animate-float">
                <div className="w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-primary font-medium text-lg mb-6 tracking-wide">Hi, my name is</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-slate-900 font-display text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                        Trần Nhật Dương<span className="text-primary">.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3 className="text-slate-500 font-display text-3xl md:text-6xl font-bold mb-8">
                        I build things for the <span className="text-gradient">data world</span>.
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-2xl"
                >
                    <p className="text-slate-600 text-lg md:text-xl mb-12 leading-relaxed">
                        I'm a Data Engineer based in Ho Chi Minh City.
                        Currently a student at <span className="text-primary font-semibold">HCMUS</span>, I specialize in building
                        robust data pipelines and scalable web applications that turn complex data into actionable insights.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link to="projects" smooth={true} duration={500} className="btn-primary flex items-center justify-center gap-2 cursor-pointer group">
                        Check out my work
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="contact" smooth={true} duration={500} className="btn-outline flex items-center justify-center cursor-pointer">
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
