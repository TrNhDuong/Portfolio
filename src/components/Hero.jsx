import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-6 container mx-auto pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h1 className="text-green font-mono text-lg mb-4">Hi, my name is</h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="text-slate-100 text-4xl md:text-7xl font-bold mb-4">Trần Nhật Dương.</h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h3 className="text-slate text-3xl md:text-6xl font-bold mb-6">I build things for the data world.</h3>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-xl"
            >
                <p className="text-slate text-lg mb-10 leading-relaxed">
                    I'm a Data Engineer and Full Stack Developer based in Ho Chi Minh City.
                    Currently a student at <span className="text-green">HCMUS</span>, I specialize in building
                    robust data pipelines and scalable web applications.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <Link to="projects" smooth={true} duration={500} className="border border-green text-green px-8 py-4 rounded hover:bg-green/10 transition-colors font-mono cursor-pointer">
                    Check out my work!
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
