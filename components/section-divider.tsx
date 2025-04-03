"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  className?: string
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <motion.div
      className={`flex items-center mb-10 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mr-4"></h2>
      <motion.div
        className="h-1 w-16 bg-emerald-400"
        initial={{ width: 0 }}
        animate={{ width: 64 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.div>
  )
}

