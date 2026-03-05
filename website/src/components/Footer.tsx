import { RiGamepadLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FaDiscord, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

const footerLinks = {
    Product: ["Game Hosting", "App Hosting", "Marketplace", "Pricing", "Enterprise"],
    Games: ["Minecraft", "Rust", "CS2", "Palworld", "Valheim", "All Games"],
    Resources: ["Documentation", "API Reference", "Status Page", "Blog", "Tutorials"],
    Company: ["About", "Careers", "Contact", "Privacy Policy", "Terms of Service"],
};

const socialLinks = [
    { icon: FaDiscord, href: "#", label: "Discord" },
    { icon: FaXTwitter, href: "#", label: "X" },
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-[#4d4d4d] bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                {/* Top section */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
                    {/* Brand column */}
                    <div className="col-span-2 sm:col-span-3 lg:col-span-2">
                        <a href="#" className="flex items-center gap-2.5 mb-5">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#38bdf8] to-[#a855f7] flex items-center justify-center">
                                <RiGamepadLine className="text-white text-lg" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-[#dedede]">
                                Game<span className="gradient-text">Nexus</span>
                            </span>
                        </a>
                        <p className="text-sm text-[#666666] leading-relaxed mb-6 max-w-xs">
                            Next-generation game and application hosting. Powered by GameCP —
                            deploy anything, anywhere.
                        </p>

                        {/* Newsletter */}
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-[#2e2e2e] border border-[#4d4d4d] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#dedede] placeholder:text-[#666666] focus:outline-none focus:border-[#38bdf8] transition-colors"
                                />
                            </div>
                            <button className="btn-glow px-5 py-2.5 text-sm rounded-xl">
                                <span>Subscribe</span>
                            </button>
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-semibold text-sm text-[#dedede] mb-4">
                                {title}
                            </h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-[#666666] hover:text-[#38bdf8] transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="section-divider mb-8" />

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#666666]">
                        &copy; {new Date().getFullYear()} Game Nexus. All rights reserved. Powered by{" "}
                        <a
                            href="https://gamecp.com"
                            className="text-[#38bdf8] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GameCP
                        </a>
                        .
                    </p>

                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-xl bg-[#2e2e2e] border border-[#4d4d4d] flex items-center justify-center text-[#666666] hover:text-[#38bdf8] hover:border-[#38bdf8]/30 transition-all duration-300"
                                >
                                    <Icon className="text-sm" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
