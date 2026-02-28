import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import resume from '../assets/CV_TranNhatDuong.pdf';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="hero" smooth={true} duration={500} className="text-2xl font-display font-bold text-gray-900 cursor-pointer tracking-tighter hover:text-primary transition-colors">
                    ND<span className="text-primary">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="text-slate-600 hover:text-primary font-medium transition-colors cursor-pointer text-sm tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="btn-outline px-5 py-2 text-sm">
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 hover:text-primary transition-colors">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-lg">
                    <div className="flex flex-col items-center space-y-6">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="text-slate-600 hover:text-primary font-medium transition-colors cursor-pointer text-lg"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href={resume} target="_blank" rel="noopener noreferrer" className="btn-outline px-6 py-2">
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
