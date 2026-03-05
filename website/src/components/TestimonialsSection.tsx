"use client";

import { useEffect, useRef, useState } from "react";
import { HiStar } from "react-icons/hi";

const testimonials = [
    {
        name: "Alex 'Frag' Martinez",
        role: "Rust Community Owner",
        avatar: "A",
        content:
            "Switched from another host and the difference is night and day. Our Rust server handles 300 players with zero lag. The control panel is beautiful.",
        stars: 5,
        color: "#f97316",
    },
    {
        name: "Sarah Chen",
        role: "Minecraft Network Admin",
        avatar: "S",
        content:
            "Managing 12 Minecraft servers from one dashboard is a dream. The auto-backup system has saved us multiple times. Best hosting decision we've made.",
        stars: 5,
        color: "#22c55e",
    },
    {
        name: "Marcus 'DarkLord' Weber",
        role: "CS2 Tournament Organizer",
        avatar: "M",
        content:
            "We run monthly CS2 tournaments and need rock-solid reliability. Game Nexus delivers 99.99% uptime and the DDoS protection actually works.",
        stars: 5,
        color: "#a855f7",
    },
    {
        name: "Emily Rodriguez",
        role: "Indie Game Developer",
        avatar: "E",
        content:
            "I use the app marketplace to host my game's backend, database, and website all from one platform. The API access is incredible for automation.",
        stars: 5,
        color: "#38bdf8",
    },
    {
        name: "Jake 'NeonBlade' Kim",
        role: "Palworld Server Host",
        avatar: "J",
        content:
            "Set up a Palworld dedicated server in literally 30 seconds. The one-click mod installer is clutch. Support team responds in minutes, not hours.",
        stars: 5,
        color: "#ec4899",
    },
    {
        name: "Tom Harrison",
        role: "Hosting Reseller",
        avatar: "T",
        content:
            "The white-label features let me run my own hosting brand on Game Nexus infrastructure. My clients love the panel and I love the margins.",
        stars: 5,
        color: "#06b6d4",
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

export default function TestimonialsSection() {
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
        <section ref={sectionRef} className="relative py-32 overflow-hidden">
            <div className="orb orb-pink w-[400px] h-[400px] top-20 left-1/4 opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-[#ec4899] text-sm font-semibold tracking-widest uppercase mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Loved by <span className="gradient-text">Gamers</span>
                    </h2>
                    <p className="text-[#999999] text-lg max-w-2xl mx-auto">
                        Join thousands of satisfied gamers, communities, and developers who
                        trust Game Nexus for their hosting needs.
                    </p>
                </div>

                {/* Testimonial grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            className={`break-inside-avoid glass-card p-6 ${visible ? `reveal ${delayClasses[i]}` : "opacity-0"
                                }`}
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.stars }).map((_, si) => (
                                    <HiStar key={si} className="text-amber-400 text-sm" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-[#999999] text-[15px] leading-relaxed mb-5">
                                &ldquo;{t.content}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                                    style={{ background: t.color }}
                                >
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-[#dedede]">
                                        {t.name}
                                    </p>
                                    <p className="text-xs text-[#666666]">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
