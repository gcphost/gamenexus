"use client";

import { HiArrowRight } from "react-icons/hi";

export default function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38bdf8]/5 to-transparent" />
            <div className="orb orb-cyan w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
            <div className="orb orb-purple w-[400px] h-[400px] top-0 right-0 opacity-10" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="relative">
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-[#38bdf8] via-[#a855f7] to-[#ec4899] rounded-3xl opacity-30" />
                    <div className="relative bg-[#2e2e2e] rounded-3xl p-12 sm:p-16">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Ready to
                            <br />
                            <span className="gradient-text">Level Up?</span>
                        </h2>
                        <p className="text-[#999999] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                            Join thousands of gamers who&apos;ve already made the switch.
                            Deploy your first server in under 60 seconds — no credit card required.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-[#666666]">
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                                No credit card needed
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                                7-day money-back guarantee
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                                Cancel anytime
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
