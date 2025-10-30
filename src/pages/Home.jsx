import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white px-6 text-center">
      
      {/* 🌀 Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 🧠 Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
      >
        Enhance Images with AI Precision
      </motion.h1>

      {/* 💬 Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-2xl text-gray-300 mb-12 text-lg leading-relaxed"
      >
        Experience next-level photo enhancement powered by artificial intelligence. 
        Sharpen details, balance colors, and restore clarity — effortlessly.
      </motion.p>

      {/* 🌈 Animated Gradient Button */}
      <motion.button
        whileHover={{
          scale: 1.1,
          background:
            "linear-gradient(90deg, #22c55e, #3b82f6, #8b5cf6)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/main")}
        className="relative px-10 py-3 rounded-full text-lg font-semibold bg-green-600 hover:bg-green-700 transition-all duration-500 shadow-lg shadow-green-500/20"
      >
        Get Started
      </motion.button>

      {/* ✨ Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.7,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-20 text-gray-500 text-sm tracking-widest uppercase"
      >
        Built with React ⚡ Tailwind ⚡ Framer Motion
      </motion.p>
    </div>
  );
}
