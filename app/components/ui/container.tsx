"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  reverse?: boolean;
  id?: string;
}

export function Container({
  children,
  className,
  delay = 0.2,
  reverse,
  id,
}: ContainerProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: delay, duration: 0.4, ease: "easeInOut" }}
      className={cn("w-full h-full", className)}
    >
      {children}
    </motion.section>
  );
}
