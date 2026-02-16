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
                <p className="text-primary font-medium mb-4 tracking-wide">04. What's Next?</p>
                <h2 className="section-title mb-8">Get In Touch</h2>
                <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                    I'm currently looking for new opportunities as a Data Engineer or Full Stack Developer.
                    Whether you have a question or just want to say hi, my inbox is always open!
                </p>
                <a href="mailto:nhatduong01012005@gmail.com" className="btn-primary inline-flex items-center justify-center">
                    Say Hello
                </a>

                <div className="flex justify-center space-x-8 mt-16">
                    <a href="mailto:nhatduong01012005@gmail.com" className="text-slate-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                        <Mail size={24} />
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                        <Linkedin size={24} />
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                        <Github size={24} />
                    </a>
                    <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                        <Facebook size={24} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
export default Contact;
