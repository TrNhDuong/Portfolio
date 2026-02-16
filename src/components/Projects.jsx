import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "VietnamWorks Data Pipeline",
            description: "End-to-end ETL pipeline automating recruitment data collection and processing. Built with Python, Airflow, and dbt.",
            tech: ["Python", "Airflow", "Docker", "dbt", "PostgreSQL"],
            links: { github: "https://github.com/TrNhDuong/VietnamWorks_DE_Pipeline", external: "#" } // Placeholder links
        },
        {
            title: "Vietnamese-Chinese Sentence Alignment",
            description: "NLP research project for bilingual sentence alignment using Vecalign and LaBSE embeddings.",
            tech: ["Python", "NLP", "Vecalign", "LaBSE"],
            links: { github: "https://github.com/TrNhDuong/Vie-Cn_Sentence-Alignment", external: "#" }
        },
        {
            title: "Online Recruitment Platform",
            description: "Full-stack web application for job matching and recruitment management.",
            tech: ["MongoDB", "Express", "Node.js", "React"],
            links: { github: "https://github.com/TrNhDuong/Job_Portal", external: "#" }
        }
    ];

    return (
        <section id="projects" className="py-20 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center mb-16 justify-center">
                    <h2 className="section-title mb-0">Key Projects</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-card p-8 flex flex-col group h-full">
                            <div className="flex justify-between items-center mb-6">
                                <Folder className="text-primary group-hover:text-secondary transition-colors" size={40} />
                                <div className="flex space-x-4 text-slate-500">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={22} /></a>
                                    <a href={project.links.external} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><ExternalLink size={22} /></a>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-slate-600 mb-6 text-base leading-relaxed flex-grow">{project.description}</p>
                            <div className="mt-auto">
                                <ul className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <li key={i} className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
