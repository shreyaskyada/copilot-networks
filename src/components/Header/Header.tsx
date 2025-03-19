import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router";
import { HeaderProps } from "./types";
import clsx from "clsx";

const Header: React.FC<HeaderProps> = ({ activeTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  // const toggleSearch = () => {
  //   setIsSearchOpen(!isSearchOpen);
  // };

  const menuItems = [
    // {
    //   name: "Services",
    //   submenu: [
    //     { name: "Web Development", href: "/services/web-development" },
    //     { name: "Mobile Apps", href: "/services/mobile-apps" },
    //     { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    //     { name: "Consulting", href: "/services/consulting" },
    //   ],
    // },

    { name: "Testimonials", href: "#testimonials" },
    { name: "Teams", href: "/teams" },
    { name: "Contact Us", href: "/contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const currentPath = window.location.pathname;

      if (currentPath !== "/") {
        // Use React Router's navigate instead of window.location
        navigate("/", { replace: false });
        // Add a small delay to allow for navigation before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // If already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={clsx(
        "sticky top-0 z-[99]",
        activeTab === 1 || activeTab === 2
          ? "bg-[#002235] text-white"
          : "border-b-[1px] border-b-[#6AA5BD] bg-white text-[#013D55]",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              {activeTab === 1 || activeTab === 2 ? (
                <img src="/dark_logo.svg" alt="Logo" className="h-8 w-auto" />
              ) : (
                <img src="/white_logo.svg" alt="Logo" className="h-8 w-auto" />
              )}
            </NavLink>
          </div>
          <div className="flex items-center gap-[60px]">
            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-[60px] md:flex">
              {menuItems.map((item: any, index: number) => (
                <div key={index} className="group relative">
                  {item?.submenu ? (
                    <button className="flex cursor-pointer items-center font-medium hover:text-blue-600">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <NavLink
                      to={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={({ isActive }) =>
                        `font-medium hover:underline ${isActive && item.href === "/" ? "font-bold underline" : ""}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}

                  {/* {item.submenu && (
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
                  )} */}
                </div>
              ))}
            </nav>

            {/* Search Icon */}
            <div className="relative hidden items-center md:flex">
              {/* <button
                className="text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={toggleSearch}
              >
                <Search className="h-5 w-5" />
              </button> */}

              {/* Desktop Search Dropdown */}
              {/* {isSearchOpen && (
                <div className="absolute right-0 top-10 w-64 bg-white rounded-md shadow-lg p-4 z-20">
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
              )} */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="hover:text-blue-600 focus:outline-none"
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
              {menuItems.map((item: any) => (
                <div key={item.name} className="py-2">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="flex w-full items-center justify-between font-medium hover:text-blue-600"
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
                      {/* {activeSubmenu === item.name && (
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
                      )} */}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block font-medium hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* TODO: Search bar */}
              {/* <div className="pt-4 pb-2">
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
              </div> */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
