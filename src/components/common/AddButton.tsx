import React from 'react'

interface Props {
    children: React.ReactNode
    onClick: () => void
}

export default function AddButton({children, onClick}:Props) {

  return (
    <button 
        onClick={onClick}
        className="text-lg font-medium px-4 py-2 bg-[#FFAB91] drop-shadow-md rounded-md uppercase" 
    >
        {children}
    </button>
  )
}
