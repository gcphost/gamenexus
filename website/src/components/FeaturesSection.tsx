"use client";

import {
    HiOutlineLightningBolt,
    HiOutlineShieldCheck,
    HiOutlineCog,
    HiOutlineTerminal,
    HiOutlineGlobe,
    HiOutlineCube,
} from "react-icons/hi";
import { StaggerGroup, StaggerItem, FadeUp } from "./motion";

const features = [
    {
        icon: HiOutlineLightningBolt,
        title: "Instant Deploy",
        description:
            "Spin up from 50+ GameCP game templates—one-click installs and sensible defaults so you spend time playing, not tweaking config.",
        color: "#38bdf8",
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Docker Isolation",
        description:
            "Every game server runs in its own container with dedicated resources. No noisy neighbors, predictable performance.",
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
        title: "Pick your region",
        description:
            "Choose a location that matches your players. Availability depends on our current datacenter footprint—ask sales if you need a specific metro.",
        color: "#ec4899",
    },
    {
        icon: HiOutlineCube,
        title: "App Marketplace",
        description:
            "Extend your panel with community-built extensions and integrations from the GameCP App Store.",
        color: "#38bdf8",
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="relative py-32 overflow-hidden">
            <div className="orb orb-purple w-[400px] h-[400px] top-20 -right-20 opacity-10" />
            <div className="orb orb-cyan w-[300px] h-[300px] bottom-20 -left-20 opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-20">
                    <FadeUp>
                        <span className="inline-block text-[#38bdf8] text-sm font-semibold tracking-widest uppercase mb-4">
                            Why Game Nexus
                        </span>
                    </FadeUp>
                    <FadeUp delay={1}>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Built for <span className="gradient-text">Performance</span>
                        </h2>
                    </FadeUp>
                    <FadeUp delay={2}>
                        <p className="text-[#999999] text-lg max-w-2xl mx-auto">
                            Hosting plus the real GameCP feature set: templates, Docker,
                            mods, backups, monitoring hooks, API access on qualifying plans,
                            and optional WHMCS-style tooling where we enable it.
                        </p>
                    </FadeUp>
                </div>

                {/* Feature grid */}
                <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <StaggerItem key={feature.title} className="feature-card">
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
                            </StaggerItem>
                        );
                    })}
                </StaggerGroup>
            </div>
        </section>
    );
}
