"use client";

import Image from "next/image";
import { HiArrowRight, HiPlay } from "react-icons/hi";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
            {/* Background orbs */}
            <div className="orb orb-cyan w-[600px] h-[600px] -top-40 -right-40" />
            <div className="orb orb-purple w-[500px] h-[500px] -bottom-20 -left-40" />
            <div className="orb orb-pink w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Hero background image (subtle) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt=""
                    fill
                    className="object-cover opacity-15"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/70 to-[#1a1a1a]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
                {/* Badge */}
                <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-[#38bdf8] text-sm font-medium mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                    Powered by GameCP
                </div>

                {/* Heading */}
                <h1 className="reveal reveal-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6">
                    Your Games.
                    <br />
                    <span className="gradient-text">Your Servers.</span>
                    <br />
                    Your Rules.
                </h1>

                {/* Subtitle */}
                <p className="reveal reveal-delay-2 text-lg sm:text-xl text-[#999999] max-w-2xl mx-auto mb-10 leading-relaxed">
                    Deploy game servers and applications in under 60 seconds.
                    Full control, zero hassle. From Minecraft to custom apps —
                    we power it all.
                </p>

                {/* CTA Buttons */}
                <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <a
                        href="#"
                        className="btn-glow px-8 py-4 text-base rounded-2xl flex items-center gap-2 group"
                    >
                        <span>Start Hosting Free</span>
                        <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#"
                        className="btn-ghost px-8 py-4 text-base rounded-2xl flex items-center gap-2"
                    >
                        <HiPlay className="text-[#38bdf8]" />
                        Watch Demo
                    </a>
                </div>

                {/* Dashboard preview */}
                <div className="reveal reveal-delay-4 relative max-w-5xl mx-auto">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#38bdf8]/20 via-[#a855f7]/20 to-[#ec4899]/20 rounded-3xl blur-2xl opacity-50" />
                    <div className="relative rounded-2xl overflow-hidden border border-[#4d4d4d] shadow-2xl">
                        <Image
                            src="/images/dashboard-preview.png"
                            alt="Game Nexus Dashboard"
                            width={1200}
                            height={675}
                            className="w-full h-auto"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-40" />
                    </div>
                </div>

                {/* Stats row */}
                <div className="reveal reveal-delay-5 grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
                    {[
                        { value: "99.9%", label: "Uptime SLA" },
                        { value: "< 50ms", label: "Avg Latency" },
                        { value: "200+", label: "Games Supported" },
                        { value: "24/7", label: "Expert Support" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-[#666666]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <div className="w-5 h-8 rounded-full border-2 border-[#666666] flex justify-center pt-1.5">
                    <div className="w-1 h-2 rounded-full bg-[#666666]" />
                </div>
            </div>
        </section>
    );
}
