"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SocialLinks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="flex justify-center gap-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div variants={item}>
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm hover:bg-gray-50"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Facebook className="h-5 w-5 text-amber-700" />
          </motion.div>
        </Link>
      </motion.div>

      <motion.div variants={item}>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm hover:bg-gray-50"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Instagram className="h-5 w-5 text-amber-700" />
          </motion.div>
        </Link>
      </motion.div>

      <motion.div variants={item}>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm hover:bg-gray-50"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Twitter className="h-5 w-5 text-amber-700" />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  )
}

