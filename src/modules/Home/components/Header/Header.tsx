import React, { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const menuItems = [
    {
      name: "Services",
      submenu: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Apps", href: "/services/mobile-apps" },
        { name: "Cloud Solutions", href: "/services/cloud-solutions" },
        { name: "Consulting", href: "/services/consulting" },
      ],
    },

    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-white border-b-[#6AA5BD] border-b-[1px]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex items-center gap-[60px]">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-[60px]">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                      {item.name}
                    </a>
                  )}

                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Icon */}
            <div className="hidden md:flex items-center">
              <button className="text-gray-700 hover:text-blue-600">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.name} className="py-2">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeSubmenu === item.name
                              ? "transform rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {activeSubmenu === item.name && (
                        <div className="mt-2 pl-4 space-y-2 border-l-2 border-gray-200">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-gray-700 hover:text-blue-600 font-medium"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2">
                <div className="flex items-center">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="h-4 w-4 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
