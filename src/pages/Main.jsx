import React, { useState } from 'react'
import { motion } from 'framer-motion';
import ImageUpload from '../components/ImageUpload'
import ImagePreview from '../components/ImagePreview'

import { enhancedImageAPI } from '../utils/enhancedImageAPI';
import { useClerk, useUser } from '@clerk/clerk-react';


export default function Main() {

  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useUser();
  const { openSignIn } = useClerk();


  const uploadImageHandler = async (file) => {

    setUploadImage(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file)); //use to convert file into link
    setLoading(true);

    // call API to enhance the image
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (err) {
      console.log(err);
      alert("Error while enhancing the image. Please try again.")
    }
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white px-6 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          EnhancerAI
        </h1>
        <p className="text-gray-400 max-w-lg mb-8">
          Please sign in to access AI image enhancement features.
        </p>
        <button
          onClick={() => openSignIn({})}
          className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
        >
          Sign In
        </button>
      </div>
    );
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white px-6 py-16 mt-5">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,197,94,0.25)]">
          EnhancerAI
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Upload your photo and let our AI enhance it with sharper clarity,
          richer colors, and perfect lighting — all in just seconds.
        </p>
      </motion.div>

      {/* Upload Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl"
      >
        <ImageUpload uploadImageHandler={uploadImageHandler} />
      </motion.div>

      {/* Image Preview Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9 }}
        className="w-full mt-10"
      >
        <ImagePreview
          loading={loading}
          uploaded={uploadImage}
          enhanced={enhancedImage}
        />
      </motion.div>

      {/* Subtle footer / note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-12 text-gray-500 text-sm text-center"
      >
        ⚡ Powered by AI | Secure image processing — no data stored
      </motion.p>
    </div>
  )
}
