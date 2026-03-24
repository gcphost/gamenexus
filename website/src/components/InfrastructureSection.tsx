"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    HiOutlineServer,
    HiOutlineChip,
    HiOutlineCloud,
    HiOutlineLockClosed,
} from "react-icons/hi";
import { FadeUp, slideLeft, slideRight, staggerContainer, staggerItem } from "./motion";

const specs = [
    {
        icon: HiOutlineChip,
        label: "NVMe Storage",
        detail: "Lightning-fast read/write speeds so your worlds load instantly.",
    },
    {
        icon: HiOutlineServer,
        label: "Dedicated Resources",
        detail: "Your CPU and RAM are yours alone — no noisy neighbors slowing you down.",
    },
    {
        icon: HiOutlineCloud,
        label: "Instant Scaling",
        detail: "Upgrade your plan in seconds as your community grows.",
    },
    {
        icon: HiOutlineLockClosed,
        label: "DDoS Mitigation",
        detail: "Network-level protection keeps your servers online during attacks.",
    },
];

export default function InfrastructureSection() {
    return (
        <section id="infrastructure" className="relative py-32 overflow-hidden">
            <div className="orb orb-cyan w-[400px] h-[400px] top-40 -right-20 opacity-10" />
            <div className="orb orb-purple w-[350px] h-[350px] bottom-20 -left-20 opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Image */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#a855f7]/20 to-[#38bdf8]/20 rounded-3xl blur-2xl opacity-50" />
                        <div className="relative rounded-2xl overflow-hidden border border-[#4d4d4d] animate-pulse-glow">
                            <Image
                                src="/images/infrastructure.png"
                                alt="Game Nexus Infrastructure"
                                width={1730}
                                height={1002}
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <span className="inline-block text-[#38bdf8] text-sm font-semibold tracking-widest uppercase mb-4">
                            Infrastructure
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
                            Enterprise-Grade
                            <br />
                            <span className="gradient-text">Hardware</span>
                        </h2>
                        <p className="text-[#999999] text-lg mb-10 leading-relaxed">
                            Our servers are built for gaming from the ground up. High-clock
                            CPUs, NVMe storage, and low-latency networks so your players
                            get the smoothest experience possible.
                        </p>

                        {/* Specs grid */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {specs.map((spec) => {
                                const Icon = spec.icon;
                                return (
                                    <motion.div
                                        key={spec.label}
                                        variants={staggerItem}
                                        className="glass-card p-5"
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
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
