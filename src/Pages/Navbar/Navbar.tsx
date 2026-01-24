// src/components/Navbar/Navbar.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavItem from './NavItem';
import Logo from '../../assets/logo_cleaned.png'
import { Link } from 'react-router-dom';


const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', subItems: [
      { label: 'Outreach center', href: '/services/outreach' },
      // { label: 'Test 2', href: '/services/test2' },
      // { label: 'Test 3', href: '/services/test3' },
    ] },
  { label: 'Contact', href: '/contact' },
  { label: 'Careers', href: '/careers' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 px-4 py-4">
      <div className="flex items-center justify-between px-4 py-2 lg:justify-start lg:gap-16">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-24 h-auto object-contain" />
          </Link>
        </div>

        {/* Center: Nav items (Desktop only) */}
        <div className="hidden md:flex items-center space-x-8 mx-auto">
          {/* {navItems.map((item) => (
            <NavItem key={item.label} label={item.label} href={item.href} />
          ))} */}
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              href={item.href}
              subItems={item.subItems}
            />
          ))}
        </div>

        {/* Right: Mobile menu button (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-indigo-100 transition"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-indigo-700" />
            ) : (
              <Menu className="w-6 h-6 text-indigo-700" />
            )}
          </button>
        </div>
      </div>


      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col justify-center items-center px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              href={item.href}
              subItems={item.subItems}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
