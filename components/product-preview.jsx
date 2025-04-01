"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ProductPreview() {
  const products = [
    {
      id: 1,
      name: "Wooden Wall Shelf",
      description: "Handcrafted wooden wall shelf with metal accents",
      image: "https://i.imgur.com/Ij1Ysrm.jpg",
    },
    {
      id: 2,
      name: "Metal Candle Holder",
      description: "Elegant metal candle holder with intricate design",
      image: "https://i.imgur.com/JGkTu9S.jpg",
    },
    {
      id: 3,
      name: "Wooden Clock",
      description: "Modern wooden clock with metal hands",
      image: "https://i.imgur.com/8FyXSHx.png",
    },
    {
      id: 4,
      name: "Metal Wall Art",
      description: "Contemporary metal wall art for modern homes",
      image: "https://i.imgur.com/Ij1Ysrm.jpg",
    },
  ]

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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="group relative overflow-hidden rounded-lg border bg-white p-2 shadow-md"
          variants={item}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
        >
          <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
            <div className="mt-2">
              <motion.span
                className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded"
                whileHover={{ scale: 1.05 }}
              >
                Coming Soon
              </motion.span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

