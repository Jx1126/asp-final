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
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        New Entry
      </button>

      {/* Popup form */}
      {isOpen && <PopupForm closeForm={() => setIsOpen(false)} />}
    </>
  );
};

export default FloatingButton;
