import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import resume from '../assets/CV_Tran_Nhat_Duong.pdf';

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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="hero" smooth={true} duration={500} className="text-green font-mono text-xl font-bold cursor-pointer">
                    ND.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="text-light-slate hover:text-green transition-colors cursor-pointer font-mono text-sm"
                        >
                            <span className="text-green mr-1">0{index + 1}.</span> {link.name}
                        </Link>
                    ))}
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="border border-green text-green px-4 py-2 rounded hover:bg-green/10 transition-colors font-mono text-sm">
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-green">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-light-navy/95 backdrop-blur-md shadow-lg py-4">
                    <div className="flex flex-col items-center space-y-4">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="text-light-slate hover:text-green transition-colors cursor-pointer font-mono"
                            >
                                0{index + 1}. {link.name}
                            </Link>
                        ))}
                        <a href={resume} target="_blank" rel="noopener noreferrer" className="border border-green text-green px-4 py-2 rounded hover:bg-green/10 transition-colors font-mono text-sm">
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
