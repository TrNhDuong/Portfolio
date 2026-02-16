// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        "Programming Languages": ["Python", "SQL", "C++", "JavaScript"],
        "Data Engineering": ["Apache Airflow", "dbt", "Docker", "PostgreSQL", "MinIO", "Azure (ADLS Gen2, Data Factory, Databricks)"],
        "Web Development": ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
        "Computer Science": ["Machine Learning (Basic)", "Natural Language Processing (Basic)"]
    };

    return (
        <section id="skills" className="py-20 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mr-4"><span className="text-green font-mono">02.</span> Technical Skills</h2>
                    <div className="h-px bg-lightest-navy flex-grow max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div key={index} className="bg-light-navy p-6 rounded shadow-lg hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-xl font-bold text-slate-100 mb-4">{category}</h3>
                            <ul className="grid grid-cols-2 gap-2">
                                {items.map((skill, idx) => (
                                    <li key={idx} className="flex items-center text-slate text-sm font-mono">
                                        <span className="text-green mr-2">▹</span> {skill}
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
