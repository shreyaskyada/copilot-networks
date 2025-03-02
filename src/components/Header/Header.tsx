import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
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

    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="border-b-[1px] border-b-[#6AA5BD] bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex items-center gap-[60px]">
            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-[60px] md:flex">
              {menuItems.map((item) => (
                <div key={item.name} className="group relative">
                  {item.submenu ? (
                    <button className="flex cursor-pointer items-center font-medium text-gray-700 hover:text-blue-600">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="font-medium text-gray-700 hover:text-blue-600"
                    >
                      {item.name}
                    </a>
                  )}

                  {item.submenu && (
                    <div className="invisible absolute left-0 z-10 mt-2 w-48 origin-top-left transform rounded-md bg-white py-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
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
            <div className="relative hidden items-center md:flex">
              <button
                className="cursor-pointer text-gray-700 hover:text-blue-600"
                onClick={toggleSearch}
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Desktop Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute top-10 right-0 z-20 w-64 rounded-md bg-white p-4 shadow-lg">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Search className="h-4 w-4 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
                      placeholder="Search"
                      autoFocus
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
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
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.name} className="py-2">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="flex w-full items-center justify-between font-medium text-gray-700 hover:text-blue-600"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeSubmenu === item.name
                              ? "rotate-180 transform"
                              : ""
                          }`}
                        />
                      </button>
                      {activeSubmenu === item.name && (
                        <div className="mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
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
                      className="block font-medium text-gray-700 hover:text-blue-600"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2">
                <div className="flex items-center">
                  <div className="relative w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Search className="h-4 w-4 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
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
