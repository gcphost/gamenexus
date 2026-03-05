"use client";

import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { RiGamepadLine } from "react-icons/ri";

const navLinks = [
    { label: "Games", href: "#games" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Infrastructure", href: "#infrastructure" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "py-3 bg-[#1a1a1a]/85 backdrop-blur-xl border-b border-[#4d4d4d]"
                    : "py-5 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#38bdf8] to-[#a855f7] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-shadow duration-300">
                        <RiGamepadLine className="text-white text-lg" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-[#dedede]">
                        Game<span className="gradient-text">Nexus</span>
                    </span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-[#999999] hover:text-[#38bdf8] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#38bdf8] after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <a href="#pricing" className="btn-ghost px-5 py-2.5 text-sm">
                        View Plans
                    </a>
                    <a href="#" className="btn-glow px-5 py-2.5 text-sm">
                        <span>Get Started</span>
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-[#dedede] text-2xl"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a1a1a] border-b border-[#4d4d4d] px-6 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-base font-medium text-[#999999] hover:text-[#38bdf8] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-4 flex flex-col gap-3">
                        <a href="#pricing" className="btn-ghost px-5 py-3 text-sm text-center">
                            View Plans
                        </a>
                        <a href="#" className="btn-glow px-5 py-3 text-sm text-center">
                            <span>Get Started</span>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
