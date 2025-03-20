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
        { name: "Telecom Products", href: "" },
        {
          name: "Energy & Utilities Products",
          href: "",
        },
        {
          name: "Enterprise & Retail Products",
          href: "",
        },
        { name: "Agrivoltaics Products", href: "" },
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

      navigate("/", { replace: false, state: { navActiveTab: 0 } });
      if (currentPath !== "/") {
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
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