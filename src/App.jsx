import React from 'react'
import Home from './components/Home'

// use picwish API to enhance the image

export default function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100 py-8 px-4'>

      {/* Header  */}
      <div className="text-center mb-8">
        <h1 className='text-5xl font-bold text-gray-800 mb-2'>EnhanceAI - AI Image Enhancer</h1>
        <p className='text-lg text-gray-500'>Upload your image and let AI enhance to in seconds!</p>
      </div>

      <Home />

      {/* Footer */}
      <div className="text-sm text-gray-500 mt-10 border-t pt-4">
        Powered By © <span className="font-semibold text-gray-700">Ashish Khopde</span>
      </div>

    </div>
  )
}
