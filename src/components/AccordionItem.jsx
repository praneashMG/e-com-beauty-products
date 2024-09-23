import React, { useState } from 'react';

// Sample data for the accordion
const accordionItems = [
  {
    title: 'Ingredients',
    icon: '🌿', // Example icon (can use an SVG or FontAwesome icon here)
    content: `Diatomaceous Earth, Algin, Calcium Sulfate, Tetrasodium Pyrophosphate, Cyanopsis...`,
  },
  {
    title: 'How to use',
    icon: '💬',
    content: `Apply a thin layer of the product to clean skin. Leave on for 10-15 minutes.`,
  },
  {
    title: 'Shipping',
    icon: '🚚',
    content: 'Free shipping for orders over $50.',
  },
  {
    title: 'Return policy',
    icon: '↩️',
    content: 'You can return the product within 30 days for a full refund.',
  },
];

const AccordionItem = ({ title, content, icon, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full flex justify-between items-center p-4 text-left text-gray-800 focus:outline-none"
        onClick={onClick}
      >
        <span className="flex items-center space-x-3">
          <span>{icon}</span>
          <span className="text-lg font-semibold">{title}</span>
        </span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div className="p-4 text-gray-600">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 w-full max-w-md mx-auto">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          icon={item.icon}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
