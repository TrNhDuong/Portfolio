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
                <div className="flex items-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mr-4"><span className="text-green font-mono">01.</span> About Me</h2>
                    <div className="h-px bg-lightest-navy flex-grow max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    <div className="md:col-span-2 text-slate leading-relaxed space-y-4">
                        <p>
                            Hello! I'm <span className="text-green">Trần Nhật Dương</span>, a third-year Information Technology student at
                            <span className="text-green"> University of Science, VNU-HCM (HCMUS)</span> (Class of 2023).
                            I enjoy solving complex problems and building efficient systems.
                        </p>
                        <p>
                            My passion lies in Data Engineering, backed by a deep understanding of how software products are built from the ground up. 
                            I don't just see data in isolation; 
                            I understand its critical role in the full product development loop.
                        </p>
                        <p>
                            I am now looking for an Internship opportunity to step out of the classroom and into the industry. 
                            My goal is to apply my analytical mindset to solve actual data challenges while learning from a professional engineering team. 
                            I am ready to work hard, adapt quickly, and grow.
                        </p>
                    </div>

                    <div className="md:col-span-1 flex justify-center md:justify-start">
                        <div className="relative group w-64 h-64">
                            {/* Placeholder for image or strictly stylized box if no image provided */}
                            <div className="absolute top-4 left-4 w-full h-full border-2 border-green rounded-md z-0 transition-transform group-hover:top-2 group-hover:left-2"></div>
                            <div className="absolute w-full h-full bg-light-navy rounded-md z-10 hover:bg-transparent transition-colors flex items-center justify-center border border-lightest-navy overflow-hidden">
                                <span className="text-green text-6xl font-mono relative z-20">ND</span>
                                <div className="absolute inset-0 bg-green/20 mix-blend-multiply hover:bg-transparent transition-all"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
