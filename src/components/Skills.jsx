// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        "Programming Languages": ["Python", "SQL", "C++", "JavaScript"],
        "Data Engineering": ["Apache Airflow", "dbt", "Docker", "PostgreSQL", "MinIO", "Azure (ADLS Gen2, Data Factory, Databricks)"],
        "Web Development": ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
        "Computer Science": ["Machine Learning (basic)", "Natural Language Processing (basic)"]
    };

    return (
        <section id="skills" className="py-20 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center mb-16 justify-center">
                    <h2 className="section-title mb-0">Technical Skills</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div key={index} className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 border-l-4 border-primary pl-4">{category}</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                                {items.map((skill, idx) => (
                                    <li key={idx} className="flex items-center text-slate-700 text-sm font-medium">
                                        <span className="text-primary mr-2">▹</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
