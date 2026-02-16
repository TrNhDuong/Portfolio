// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center mb-10 justify-center">
                    <h2 className="section-title mb-0">About Me</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10 items-center">
                    <div className="md:col-span-2 text-slate-700 leading-relaxed space-y-4 text-lg">
                        <p>
                            Hello! I'm <span className="text-primary font-semibold">Trần Nhật Dương</span>, a third-year Information Technology student at
                            <span className="text-primary font-semibold"> University of Science, VNU-HCM (HCMUS)</span> (Class of 2023).
                            I enjoy solving complex problems and building efficient systems.
                        </p>
                        <p>
                            My passion lies in <span className="text-primary font-medium">Data Engineering</span>, backed by a deep understanding of how software products are built from the ground up.
                            I don't just see data in isolation;
                            I understand its critical role in the full product development loop.
                        </p>
                        <p>
                            I am now looking for an <span className="text-primary font-medium">Internship opportunity</span> to step out of the classroom and into the industry.
                            My goal is to apply my analytical mindset to solve actual data challenges while learning from a professional engineering team.
                            I am ready to work hard, adapt quickly, and grow.
                        </p>
                    </div>

                    <div className="md:col-span-1 flex justify-center md:justify-start">
                        <div className="relative group w-64 h-64">
                            <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-300 opacity-20"></div>
                            <div className="absolute inset-0 bg-white rounded-2xl border border-white/50 shadow-glass flex items-center justify-center overflow-hidden group-hover:-translate-y-2 transition-transform duration-300">
                                <span className="text-primary text-6xl font-display font-bold">ND</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
