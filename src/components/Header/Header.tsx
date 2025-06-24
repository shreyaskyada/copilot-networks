import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router";
import { HeaderProps } from "./types";
import clsx from "clsx";
import { useHeader } from "./useHeader";

const Header: React.FC<HeaderProps> = ({ activeTab }) => {
  const {
    isMenuOpen,
    activeSubmenu,
    menuItems,
    toggleMenu,
    toggleSubmenu,
    scrollToSection,
    handleMenuClose,
    handleLogoClick,
  } = useHeader();

  return (
    <header className="sticky top-0 z-[99] bg-[#002235] text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink
              to="/"
              className="flex items-center"
              onClick={handleLogoClick}
            >
              <img src="/dark_logo.svg" alt="Logo" className="h-8 w-auto" />
            </NavLink>
          </div>
          <div className="flex items-center gap-[60px]">
            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-[60px] md:flex">
              {menuItems.map((item, index: number) => (
                <div key={index} className="group relative">
                  {item?.submenu ? (
                    <button className="flex cursor-pointer items-center font-medium hover:text-[#77A3BA]">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <NavLink
                      to={item.href || ""}
                      onClick={(e) => {
                        scrollToSection(e, item.href || "");
                      }}
                      className={({ isActive }) =>
                        `font-medium hover:underline ${isActive && item.href === "/" ? "font-bold underline" : ""}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}

                  {item.submenu && (
                    <div className="invisible absolute left-0 z-10 mt-2 w-48 origin-top-left transform rounded-md bg-white py-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      {item.submenu.map((subItem, index) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={(event) => {
                            subItem.disabled
                              ? undefined
                              : handleMenuClose(event, subItem.href);
                          }}
                          state={
                            subItem.disabled
                              ? undefined
                              : {
                                  navActiveTab: index,
                                }
                          }
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#013D55] hover:text-white"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* <a href="https://thecopilotgroup.com/" target="_blank">
                <img src="/copilot_hub.png" className="h-[32px]" />
              </a> */}
            </nav>

            {/* Search Icon */}
            <div className="relative hidden items-center">
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
              {menuItems.map((item) => (
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
                      {activeSubmenu === item.name && (
                        <div className="mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                          {item.submenu.map((subItem, index) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={(event) => {
                                subItem.disabled
                                  ? undefined
                                  : handleMenuClose(event, subItem.href);
                              }}
                              state={
                                subItem.disabled
                                  ? undefined
                                  : {
                                      navActiveTab: index,
                                    }
                              }
                              className={clsx(
                                "block py-2 text-sm hover:text-blue-600",
                                activeTab === index + 1 &&
                                  "font-bold underline",
                              )}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.href || ""}
                      className="block font-medium hover:text-blue-600"
                      onClick={(e) => {
                        scrollToSection(e, item.href || "");
                        toggleMenu();
                      }}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
              <a href="https://www.copilotnet.com/" target="_blank">
                <img src="/copilot_hub.png" className="h-[32px]" />
              </a>
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
