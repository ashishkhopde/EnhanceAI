import React, {useState} from 'react'
import { motion } from 'framer-motion';

export default function ImageUpload({ uploadImageHandler }) {

  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      uploadImageHandler(file);
    }
  };

  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImageHandler(file);
    }
  }

  return (
     <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-white/10 backdrop-blur-lg border-2 border-dashed rounded-2xl p-10 transition-all duration-200 ease-in-out ${
        dragging ? "border-blue-500 bg-blue-500/10" : "border-gray-700"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <label
        htmlFor="fileInput"
        className="flex flex-col items-center justify-center cursor-pointer text-center"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={showImageHandler}
          accept="image/*"
        />
        <svg
          className="w-16 h-16 text-blue-400 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"
          />
        </svg>
        <span className="text-lg font-medium text-gray-200">
          Drag & drop or click to upload your image
        </span>
        <p className="text-gray-500 mt-2 text-sm">Supports PNG, JPG, JPEG</p>
      </label>
    </motion.div>
  )
}
