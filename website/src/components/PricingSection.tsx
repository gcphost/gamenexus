"use client";

import { HiCheck, HiArrowRight } from "react-icons/hi";
import { RiFlashlightFill, RiVipCrownFill, RiRocketFill } from "react-icons/ri";
import { StaggerGroup, StaggerItem, FadeUp } from "./motion";

const plans = [
    {
        name: "Starter",
        icon: RiFlashlightFill,
        price: "$4.99",
        period: "/mo",
        description: "Perfect for small communities and testing",
        color: "#38bdf8",
        features: [
            "2 GB RAM",
            "1 Game Server",
            "10 GB SSD Storage",
            "Full Panel Features",
        ],
        featured: false,
        cta: "Get Started",
    },
    {
        name: "Pro",
        icon: RiVipCrownFill,
        price: "$14.99",
        period: "/mo",
        description: "For serious gamers and growing communities",
        color: "#a855f7",
        features: [
            "8 GB RAM",
            "5 Game Servers",
            "50 GB NVMe Storage",
            "Full Panel Features",
        ],
        featured: true,
        cta: "Go Pro",
    },
    {
        name: "Enterprise",
        icon: RiRocketFill,
        price: "$49.99",
        period: "/mo",
        description: "Maximum power for large networks",
        color: "#22c55e",
        features: [
            "32 GB RAM",
            "Unlimited Servers",
            "250 GB NVMe Storage",
            "Full Panel Features",
        ],
        featured: false,
        cta: "Contact Sales",
    },
];

export default function PricingSection() {
    return (
        <section id="pricing" className="relative py-32 overflow-x-clip">
            <div className="orb orb-purple w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2 opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-20">
                    <FadeUp>
                        <span className="inline-block text-[#22c55e] text-sm font-semibold tracking-widest uppercase mb-4">
                            Simple Pricing
                        </span>
                    </FadeUp>
                    <FadeUp delay={1}>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Plans That <span className="gradient-text">Scale</span>
                        </h2>
                    </FadeUp>
                    <FadeUp delay={2}>
                        <p className="text-[#999999] text-lg max-w-2xl mx-auto">
                            No hidden fees. No contracts. Scale up or down anytime.
                            Start free and upgrade when you&apos;re ready.
                        </p>
                    </FadeUp>
                </div>

                {/* Pricing cards */}
                <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                    {plans.map((plan) => {
                        const Icon = plan.icon;
                        return (
                            <StaggerItem
                                key={plan.name}
                                className={`pricing-card ${plan.featured ? "featured" : ""} p-8 ${plan.featured ? "md:-mt-4 md:pb-12" : ""}`}
                            >
                                {/* Featured badge */}
                                {plan.featured && (
                                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#38bdf8] to-[#a855f7] text-white">
                                        Most Popular
                                    </span>
                                )}

                                {/* Plan header */}
                                <div className="text-center mb-8">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                                        style={{
                                            background: `${plan.color}15`,
                                            border: `1px solid ${plan.color}25`,
                                        }}
                                    >
                                        <Icon className="text-2xl" style={{ color: plan.color }} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-[#dedede]">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-[#666666] mb-4">
                                        {plan.description}
                                    </p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-5xl font-extrabold text-[#dedede]">
                                            {plan.price}
                                        </span>
                                        <span className="text-[#666666] text-lg">
                                            {plan.period}
                                        </span>
                                    </div>
                                </div>

                                {/* Features list */}
                                <ul className="space-y-3.5 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <HiCheck
                                                className="flex-shrink-0 text-lg"
                                                style={{ color: plan.color }}
                                            />
                                            <span className="text-sm text-[#999999]">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button
                                    className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${plan.featured ? "btn-glow" : "btn-ghost"}`}
                                >
                                    <span>{plan.cta}</span>
                                    <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </StaggerItem>
                        );
                    })}
                </StaggerGroup>

            </div>
        </section>
    );
}
