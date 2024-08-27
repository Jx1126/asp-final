import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface DropdownItem {
  title: string;
  description: string;
}

interface DropdownListProps {
  items: DropdownItem[];
}

function DropdownList({ items }: DropdownListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 shadow-md rounded-lg overflow-hidden bg-white transition-all duration-300"
        >
          <button
            className="w-full px-6 py-4 text-xl font-semibold flex justify-center items-center bg-white hover:bg-gray-200 focus:outline-none transition-colors duration-200"
            onClick={() => toggleDropdown(index)}
            style={{ minHeight: '70px' }}
          >
            <span className="mr-4 text-md sm:text-lg">{item.title}</span>
            <span className="ml-auto">
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50 text-center">
              <p className="text-gray-700 leading-relaxed text-md sm:text-lg">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DropdownList;