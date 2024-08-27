// FloatingButton.tsx
import React, { useState } from 'react';
import PopupForm from './PopupForm';


const FloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage form visibility

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-50 bottom-4 right-4 sm:bottom-8 sm:right-8 bg-blue-500 border-2 border-blue-800 font-semibold text-white p-4 rounded-lg hover:skeleton hover:rounded-md shadow-lg hover:bg-blue-700 transition ease-in-out duration-300"
      >
        <div className="flex flex-row gap-1">
          New Entry
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </button>
    
      {/* Popup form */}
      {isOpen && <PopupForm closeForm={() => setIsOpen(false)} />}
    </>
  );
};

export default FloatingButton;
