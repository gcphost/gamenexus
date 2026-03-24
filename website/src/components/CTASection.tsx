"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { scaleUp, fadeUp } from "./motion";

export default function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38bdf8]/5 to-transparent" />
            <div className="orb orb-cyan w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
            <div className="orb orb-purple w-[400px] h-[400px] top-0 right-0 opacity-10" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    variants={scaleUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="relative"
                >
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-[#38bdf8] via-[#a855f7] to-[#ec4899] rounded-3xl opacity-30" />
                    <div className="relative bg-[#2e2e2e] rounded-3xl p-12 sm:p-16">
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0}
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
                        >
                            Ready to
                            <br />
                            <span className="gradient-text">Level Up?</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1}
                            className="text-[#999999] text-lg max-w-xl mx-auto mb-10 leading-relaxed"
                        >
                            Launch from GameCP&apos;s template library in minutes. Start on a
                            free or paid Game Nexus tier—billing details are on each plan card
                            above.
                        </motion.p>
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={2}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <a
                                href="#"
                                className="btn-glow px-10 py-4 text-base rounded-2xl flex items-center gap-2 group"
                            >
                                <span>Start Free Today</span>
                                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#"
                                className="btn-ghost px-10 py-4 text-base rounded-2xl"
                            >
                                Talk to Sales
                            </a>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={3}
                            className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-[#666666]"
                        >
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                                No credit card needed
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                                24-hour money-back guarantee
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                                Cancel anytime
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
