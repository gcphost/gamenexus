"use client";

import { HiStar } from "react-icons/hi";
import { StaggerGroup, StaggerItem, FadeUp } from "./motion";

const testimonials = [
    {
        name: "Alex 'Frag' Martinez",
        role: "Rust Community Owner",
        avatar: "A",
        content:
            "Switched from another host and the Rust template in GameCP just worked—console in the browser, Docker isolation, and fewer random restarts for us.",
        stars: 5,
        color: "#f97316",
    },
    {
        name: "Sarah Chen",
        role: "Minecraft Network Admin",
        avatar: "S",
        content:
            "Managing multiple Minecraft instances from one GameCP dashboard is what sold us. Backups and file manager beat bouncing between SSH sessions.",
        stars: 5,
        color: "#22c55e",
    },
    {
        name: "Marcus 'DarkLord' Weber",
        role: "CS2 Tournament Organizer",
        avatar: "M",
        content:
            "We run monthly CS2 tournaments and need rock-solid reliability. Game Nexus has been consistently stable for us and support is responsive.",
        stars: 5,
        color: "#a855f7",
    },
    {
        name: "Emily Rodriguez",
        role: "Indie Game Developer",
        avatar: "E",
        content:
            "The GameCP API on our plan lets us script server lifecycle. The App Store is panel extensions—not magic Heroku for random databases, and that honesty matters.",
        stars: 5,
        color: "#38bdf8",
    },
    {
        name: "Jake 'NeonBlade' Kim",
        role: "Palworld Server Host",
        avatar: "J",
        content:
            "Palworld came up fast from a template; mod tooling hooks into the sources GameCP supports. Support SLA depends on your tier, but we've had quick replies.",
        stars: 5,
        color: "#ec4899",
    },
    {
        name: "Tom Harrison",
        role: "Hosting Reseller",
        avatar: "T",
        content:
            "White-label and WHMCS-style workflows are a GameCP tier thing—we resell Game Nexus plus that stack where our contract allows. Clients see a modern panel.",
        stars: 5,
        color: "#06b6d4",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="relative py-32 overflow-hidden">
            <div className="orb orb-pink w-[400px] h-[400px] top-20 left-1/4 opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <FadeUp>
                        <span className="inline-block text-[#ec4899] text-sm font-semibold tracking-widest uppercase mb-4">
                            Testimonials
                        </span>
                    </FadeUp>
                    <FadeUp delay={1}>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Loved by <span className="gradient-text">Gamers</span>
                        </h2>
                    </FadeUp>
                    <FadeUp delay={2}>
                        <p className="text-[#999999] text-lg max-w-2xl mx-auto">
                            Illustrative feedback from the kind of crews that run GameCP day to
                            day—your mileage still depends on plan, region, and workload.
                        </p>
                    </FadeUp>
                </div>

                {/* Testimonial grid */}
                <StaggerGroup className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((t) => (
                        <StaggerItem
                            key={t.name}
                            className="break-inside-avoid glass-card p-6"
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
                        </StaggerItem>
                    ))}
                </StaggerGroup>
            </div>
        </section>
    );
}
