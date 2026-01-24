// src/components/Navbar/NavItem.tsx
import { Link } from 'react-router-dom';
import React from 'react';

interface SubItem {
  label: string;
  href: string;
}

interface NavItemProps {
  label: string;
  href?: string; // optional so dropdown parent doesn't need a link
  subItems?: SubItem[];
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, subItems, onClick }) => {
  return (
    <div className="relative group">
      {/* Parent menu item */}
      {href ? (
        <Link
          to={href}
          className="block px-4 py-2 text-teal-500 hover:text-teal-300 text-lg font-bold font-[Nunito]"
          onClick={onClick}
        >
          {label}
        </Link>
      ) : (
        <span
          className="block px-4 py-2 text-teal-500 hover:text-teal-300 text-lg font-bold font-[Nunito] cursor-pointer"
        >
          {label}
        </span>
      )}

      {/* Dropdown menu */}
      {subItems && (
        <div className="absolute left-0 top-full mt-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50 
                        opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto 
                        transition-opacity duration-200 ease-in-out">
          {subItems.map((sub) => (
            <Link
              key={sub.label}
              to={sub.href}
              className="block px-4 py-2 text-gray-700 hover:bg-teal-100 hover:text-teal-600"
              onClick={onClick}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
