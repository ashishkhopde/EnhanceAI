import React, {useState} from 'react'

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
    <div
      className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl '
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >

      <label
        htmlFor="fileInput"
        className={`flex flex-col items-center justify-center w-full cursor-pointer border-2 border-dashed rounded-xl p-10 text-center hover:border-blue-500 hover:bg-blue-50 transition duration-200 ease-in-out ${dragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
      >
        <input type="file" id='fileInput' className='hidden' onChange={showImageHandler} />
        <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
        </svg>
        <span className='text-lg font-medium text-gray-600'>
          Click or drag your image here
        </span>
      </label>

    </div>
  )
}
