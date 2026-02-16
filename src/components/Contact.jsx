import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Facebook } from 'lucide-react';

const github = "https://github.com/TrNhDuong";
const linkedin = "https://www.linkedin.com/in/nhatduowngtran";
const facebook = "https://www.facebook.com/trannhat.duowng";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 container mx-auto text-center max-w-2xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <p className="text-green font-mono mb-4">04. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
                <p className="text-slate text-lg mb-10">
                    I'm currently looking for new opportunities as a Data Engineer or Full Stack Developer.
                    Whether you have a question or just want to say hi, my inbox is always open!
                </p>
                <a href="mailto:nhatduong01012005@gmail.com" className="inline-block border border-green text-green px-8 py-4 rounded hover:bg-green/10 transition-colors font-mono">
                    Say Hello
                </a>

                <div className="flex justify-center space-x-8 mt-12">
                    <a href="mailto:nhatduong01012005@gmail.com" className="text-slate hover:text-green transition-colors duration-300">
                        <Mail size={24} />
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors duration-300">
                        <Linkedin size={24} />
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors duration-300">
                        <Github size={24} />
                    </a>
                    <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors duration-300">
                        <Facebook size={24} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
export default Contact;
