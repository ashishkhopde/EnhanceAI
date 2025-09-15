import React from 'react'

export default function Loading() {
  return (
    <div className="flex justify-center items-center space-x-2 h-full">
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-150"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-300"></div>
    </div>
  )
}
