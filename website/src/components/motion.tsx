"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 0) => ({
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: i * 0.12,
            ease: "easeOut",
        },
    }),
};

const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number = 0) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const slideLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const slideRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

type FadeUpProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    as?: "div" | "section" | "span" | "p" | "h1" | "h2" | "h3";
};

function FadeUp({ children, className, delay = 0, as = "div" }: FadeUpProps) {
    const Component = motion.create(as);
    return (
        <Component
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={delay}
            className={className}
        >
            {children}
        </Component>
    );
}

type StaggerGroupProps = {
    children: ReactNode;
    className?: string;
};

function StaggerGroup({ children, className }: StaggerGroupProps) {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <motion.div variants={staggerItem} className={className}>
            {children}
        </motion.div>
    );
}

export {
    FadeUp,
    StaggerGroup,
    StaggerItem,
    fadeUp,
    fadeIn,
    scaleUp,
    slideLeft,
    slideRight,
    staggerContainer,
    staggerItem,
};
