import { useState } from "react";
import { useNavigate } from "react-router";
import { MenuItem } from "./types";

export const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
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

  const menuItems: MenuItem[] = [
    {
      name: "Industry",
      submenu: [
        {
          name: "Telecom", href: "", navActiveTab: 0
        },
        { name: "Energy & Utilities", href: "" },
        { name: "Enterprise & Retail", href: "" },
        { name: "Agrivoltaics", href: "" },
      ],
    },
    {
      name: "Products",
      submenu: [
        { name: "Telecom Products", href: "/products/telecom-products" },
        {
          name: "Energy & Utilities Products",
          href: "/products/Energy-and-utilities-products",
        },
        {
          name: "Enterprise & Retail Products",
          href: "enterprise-and-retail-products",
        },
        { name: "Agrivoltaics Products", href: "agrivoltaics-products" },
      ],
    },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Teams", href: "/teams" },
    { name: "Contact Us", href: "/contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const currentPath = window.location.pathname;

      if (currentPath !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return {
    isMenuOpen,
    activeSubmenu,
    menuItems,
    toggleMenu,
    toggleSubmenu,
    scrollToSection,
  };
}; 