import React from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";

export default function ImagePreview({ uploaded, enhanced, loading }) {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
      {/* Original */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-gray-800"
      >
        <h2 className="text-lg font-semibold text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2">
          Original Image
        </h2>
        {uploaded ? (
          <img
            src={uploaded}
            alt="original"
            className="w-full h-80 object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-80 text-gray-400">
            No Image Uploaded
          </div>
        )}
      </motion.div>

      {/* Enhanced */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-gray-800 relative"
      >
        <h2 className="text-lg font-semibold text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white py-2">
          Enhanced Image
        </h2>

        {loading ? (
          <Loading />
        ) : enhanced ? (
          <div className="relative">
            <img
              src={enhanced}
              alt="enhanced"
              className="w-full h-80 object-cover"
            />
            <a
              href={enhanced}
              download="enhanced-image.jpg"
              className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-lg font-medium shadow hover:opacity-90 transition"
            >
              Download
            </a>
          </div>
        ) : (
          <div className="flex items-center justify-center h-80 text-gray-400">
            No Enhanced Image
          </div>
        )}
      </motion.div>
    </div>
  );
}
