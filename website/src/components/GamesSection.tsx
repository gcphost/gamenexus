"use client";

import { RiStackFill } from "react-icons/ri";
import { StaggerGroup, StaggerItem, FadeUp } from "./motion";

const CDN = "https://images.gamecp.com/images";

const games = [
    { name: "Minecraft", gameGroup: "minecraft", players: "238M+", color: "#22c55e" },
    { name: "Rust", gameGroup: "rust", players: "14M+", color: "#f97316" },
    { name: "Counter-Strike 2", gameGroup: "cs2", players: "45M+", color: "#38bdf8" },
    { name: "Palworld", gameGroup: "palworld", players: "25M+", color: "#a855f7" },
    { name: "Valheim", gameGroup: "valheim", players: "12M+", color: "#ec4899" },
    { name: "Space Engineers", gameGroup: "spaceengineers", players: "5M+", color: "#06b6d4" },
    { name: "Satisfactory", gameGroup: "satisfactory", players: "8M+", color: "#eab308" },
    { name: "50+ More", gameGroup: null, players: "& counting", color: "#64748b" },
];

export default function GamesSection() {
    return (
        <section id="games" className="relative py-32 overflow-hidden">
            <div className="orb orb-cyan w-[500px] h-[500px] top-0 left-1/4 opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <FadeUp>
                        <span className="inline-block text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-4">
                            Game Library
                        </span>
                    </FadeUp>
                    <FadeUp delay={1}>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Your Favorite <span className="gradient-text">Games</span>
                        </h2>
                    </FadeUp>
                    <FadeUp delay={2}>
                        <p className="text-[#999999] text-lg max-w-2xl mx-auto">
                            Deploy servers for major titles from GameCP&apos;s built-in library—50+
                            templates with mod sources, updates, and one-click installs where the
                            game supports it.
                        </p>
                    </FadeUp>
                </div>

                {/* Games grid */}
                <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {games.map((game) => (
                        <StaggerItem
                            key={game.name}
                            className="group relative bg-[#2e2e2e] border border-[#4d4d4d] rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2"
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
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 overflow-hidden"
                                    style={{
                                        background: `${game.color}15`,
                                        border: `1px solid ${game.color}25`,
                                    }}
                                >
                                    {game.gameGroup ? (
                                        <img
                                            src={`${CDN}/${game.gameGroup}/icon.webp`}
                                            alt={game.name}
                                            className="w-10 h-10 object-contain"
                                        />
                                    ) : (
                                        <RiStackFill className="text-3xl" style={{ color: game.color }} />
                                    )}
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
                        </StaggerItem>
                    ))}
                </StaggerGroup>

                {/* Browse all CTA */}
                <FadeUp delay={3} className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-[#38bdf8] font-medium transition-colors group"
                    >
                        Browse All Games
                        <span className="group-hover:translate-x-1 transition-transform">
                            &rarr;
                        </span>
                    </a>
                </FadeUp>
            </div>
        </section>
    );
}
