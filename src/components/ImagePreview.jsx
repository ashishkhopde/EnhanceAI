import React from 'react'
import Loading from './Loading'

export default function ImagePreview({ uploaded, enhanced, loading }) {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>

      {/* original image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2'>
          Original Image
        </h2>

        {uploaded
          ? <img src={uploaded} alt="" className='w-full h-full object-cover' />
          : <div className='flex items-center justify-center h-80 bg-gray-200'>
            No Image Selected
          </div>
        }

      </div>

      {/* enhance image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl font-semibold text-center bg-blue-800 text-white py-2'>
          Enhanced Image
        </h2>

        {enhanced && !loading && (
          <div className="relative">
            <img src={enhanced} alt="" className='w-full h-full object-cover' />

            {/* Download Button */}
            <a
              href={enhanced}
              download="enhanced-image.jpg"
              className="absolute bottom-3 right-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Download
            </a>
          </div>
        )}

        {loading
          ? <Loading />
          : !enhanced && (<div className='flex items-center justify-center h-80 bg-gray-200'>
            No Enhanced Image
          </div>)
        }
      </div>

    </div>
  )
}
