"use client";

import { useEffect, useRef, useState } from "react";
import {
    RiGamepadFill,
    RiSwordFill,
    RiSpaceShipFill,
    RiSettings3Fill,
    RiStackFill,
} from "react-icons/ri";
import {
    TbCube,
    TbFlame,
    TbTarget,
} from "react-icons/tb";

const games = [
    { name: "Minecraft", icon: TbCube, players: "238M+", color: "#22c55e" },
    { name: "Rust", icon: TbFlame, players: "14M+", color: "#f97316" },
    { name: "Counter-Strike 2", icon: TbTarget, players: "45M+", color: "#38bdf8" },
    { name: "Palworld", icon: RiGamepadFill, players: "25M+", color: "#a855f7" },
    { name: "Valheim", icon: RiSwordFill, players: "12M+", color: "#ec4899" },
    { name: "Space Engineers", icon: RiSpaceShipFill, players: "5M+", color: "#06b6d4" },
    { name: "Satisfactory", icon: RiSettings3Fill, players: "8M+", color: "#eab308" },
    { name: "200+ More", icon: RiStackFill, players: "& counting", color: "#64748b" },
];

const delayClasses = [
    "reveal-delay-1",
    "reveal-delay-2",
    "reveal-delay-3",
    "reveal-delay-4",
    "reveal-delay-5",
    "reveal-delay-6",
    "reveal-delay-6",
    "reveal-delay-6",
];

export default function GamesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="games" ref={sectionRef} className="relative py-32 overflow-hidden">
            <div className="orb orb-cyan w-[500px] h-[500px] top-0 left-1/4 opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-4">
                        Game Library
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Your Favorite <span className="gradient-text">Games</span>
                    </h2>
                    <p className="text-[#999999] text-lg max-w-2xl mx-auto">
                        Instantly deploy servers for the world&apos;s most popular games. Pre-configured
                        templates with mod support, auto-updates, and one-click installs.
                    </p>
                </div>

                {/* Games grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {games.map((game, i) => {
                        const Icon = game.icon;
                        return (
                            <div
                                key={game.name}
                                className={`group relative bg-[#2e2e2e] border border-[#4d4d4d] rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${visible ? `reveal ${delayClasses[i]}` : "opacity-0"
                                    }`}
                                style={{
                                    ["--card-color" as string]: game.color,
                                }}
                            >
                                {/* Glow top bar on hover */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: `linear-gradient(90deg, transparent, ${game.color}, transparent)`,
                                    }}
                                />

                                <div className="flex flex-col items-center text-center gap-4">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                        style={{
                                            background: `${game.color}15`,
                                            border: `1px solid ${game.color}25`,
                                        }}
                                    >
                                        <Icon className="text-3xl" style={{ color: game.color }} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#dedede] mb-1">
                                            {game.name}
                                        </h3>
                                        <p className="text-sm text-[#666666]">
                                            {game.players} players
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Browse all CTA */}
                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-[#38bdf8] font-medium transition-colors group"
                    >
                        Browse All Games
                        <span className="group-hover:translate-x-1 transition-transform">
                            &rarr;
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
