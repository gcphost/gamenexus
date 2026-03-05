"use client";

import { useEffect, useRef, useState } from "react";
import {
    HiOutlineLightningBolt,
    HiOutlineShieldCheck,
    HiOutlineCog,
    HiOutlineTerminal,
    HiOutlineGlobe,
    HiOutlineCube,
} from "react-icons/hi";

const features = [
    {
        icon: HiOutlineLightningBolt,
        title: "Instant Deploy",
        description:
            "One-click server deployment with pre-configured templates. Get your game server or app running in under 60 seconds.",
        color: "#38bdf8",
    },
    {
        icon: HiOutlineShieldCheck,
        title: "DDoS Protection",
        description:
            "Enterprise-grade DDoS mitigation on every server. Play without interruption, no matter the attack vector.",
        color: "#22c55e",
    },
    {
        icon: HiOutlineCog,
        title: "Full Control Panel",
        description:
            "Manage files, console, mods, plugins, and configurations through a beautiful dark-themed control panel.",
        color: "#a855f7",
    },
    {
        icon: HiOutlineTerminal,
        title: "Web Console",
        description:
            "Full terminal access right in your browser. Execute commands, view real-time logs, and debug with ease.",
        color: "#f97316",
    },
    {
        icon: HiOutlineGlobe,
        title: "Global Locations",
        description:
            "Data centers across North America, Europe, and Asia-Pacific. Low-latency connections for players worldwide.",
        color: "#ec4899",
    },
    {
        icon: HiOutlineCube,
        title: "App Marketplace",
        description:
            "Deploy databases, CRMs, websites, and more from our curated marketplace. Not just games — anything you need.",
        color: "#38bdf8",
    },
];

const delayClasses = [
    "reveal-delay-1",
    "reveal-delay-2",
    "reveal-delay-3",
    "reveal-delay-4",
    "reveal-delay-5",
    "reveal-delay-6",
];

export default function FeaturesSection() {
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
        <section id="features" ref={sectionRef} className="relative py-32 overflow-hidden">
            <div className="orb orb-purple w-[400px] h-[400px] top-20 -right-20 opacity-10" />
            <div className="orb orb-cyan w-[300px] h-[300px] bottom-20 -left-20 opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-[#38bdf8] text-sm font-semibold tracking-widest uppercase mb-4">
                        Why Game Nexus
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Built for <span className="gradient-text">Performance</span>
                    </h2>
                    <p className="text-[#999999] text-lg max-w-2xl mx-auto">
                        Everything you need to host, manage, and scale your game servers
                        and applications — all from one powerful platform.
                    </p>
                </div>

                {/* Feature grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className={`feature-card ${visible ? `reveal ${delayClasses[i]}` : "opacity-0"
                                    }`}
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                                    style={{
                                        background: `${feature.color}15`,
                                        border: `1px solid ${feature.color}25`,
                                    }}
                                >
                                    <Icon className="text-2xl" style={{ color: feature.color }} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#dedede]">
                                    {feature.title}
                                </h3>
                                <p className="text-[#999999] leading-relaxed text-[15px]">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
