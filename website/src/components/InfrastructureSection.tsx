"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
    HiOutlineServer,
    HiOutlineChip,
    HiOutlineCloud,
    HiOutlineLockClosed,
} from "react-icons/hi";

const specs = [
    {
        icon: HiOutlineChip,
        label: "NVMe SSD",
        detail: "Up to 7GB/s read speeds",
    },
    {
        icon: HiOutlineServer,
        label: "Bare Metal",
        detail: "No noisy neighbors",
    },
    {
        icon: HiOutlineCloud,
        label: "Auto-Scaling",
        detail: "Pay for what you use",
    },
    {
        icon: HiOutlineLockClosed,
        label: "Enterprise Security",
        detail: "Encrypted at rest & transit",
    },
];

const delayClasses = ["reveal-delay-3", "reveal-delay-4", "reveal-delay-5", "reveal-delay-6"];

export default function InfrastructureSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="infrastructure" ref={sectionRef} className="relative py-32 overflow-hidden">
            <div className="orb orb-cyan w-[400px] h-[400px] top-40 -right-20 opacity-10" />
            <div className="orb orb-purple w-[350px] h-[350px] bottom-20 -left-20 opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Image */}
                    <div className={`relative ${visible ? "reveal reveal-delay-1" : "opacity-0"}`}>
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#a855f7]/20 to-[#38bdf8]/20 rounded-3xl blur-2xl opacity-50" />
                        <div className="relative rounded-2xl overflow-hidden border border-[#4d4d4d] animate-pulse-glow">
                            <Image
                                src="/images/infrastructure.png"
                                alt="Game Nexus Infrastructure"
                                width={600}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div>
                        <span className={`inline-block text-[#38bdf8] text-sm font-semibold tracking-widest uppercase mb-4 ${visible ? "reveal reveal-delay-1" : "opacity-0"}`}>
                            Infrastructure
                        </span>
                        <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 ${visible ? "reveal reveal-delay-2" : "opacity-0"}`}>
                            Enterprise-Grade
                            <br />
                            <span className="gradient-text">Hardware</span>
                        </h2>
                        <p className={`text-[#999999] text-lg mb-10 leading-relaxed ${visible ? "reveal reveal-delay-3" : "opacity-0"}`}>
                            Our nodes run on cutting-edge bare metal servers with the latest
                            AMD EPYC and Intel Xeon processors. Every server gets dedicated
                            resources — no shared hosting, no performance throttling.
                        </p>

                        {/* Specs grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {specs.map((spec, i) => {
                                const Icon = spec.icon;
                                return (
                                    <div
                                        key={spec.label}
                                        className={`glass-card p-5 ${visible ? `reveal ${delayClasses[i]}` : "opacity-0"}`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center flex-shrink-0">
                                                <Icon className="text-lg text-[#38bdf8]" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#dedede] text-sm mb-0.5">
                                                    {spec.label}
                                                </h4>
                                                <p className="text-xs text-[#666666]">
                                                    {spec.detail}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
