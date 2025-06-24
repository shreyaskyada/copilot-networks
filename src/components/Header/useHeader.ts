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
          name: "Telecom",
          href: "",
          navActiveTab: 0,
        },
        { name: "Energy & Utilities", href: "" },
        { name: "Enterprise & Retail", href: "" },
        { name: "Agrivoltaics", href: "" },
        { name: "Real Estate & Development", href: "", disabled: true },
      ],
    },
    {
      name: "Products",
      submenu: [
        { name: "Telecom Products", href: "#telecom_products" },
        {
          name: "Energy & Utilities Products",
          href: "#energy_product",
        },
        {
          name: "Enterprise & Retail Products",
          href: "",
        },
        { name: "Agrivoltaics Products", href: "#energy_product" },
      ],
    },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Teams", href: "/teams" },
    { name: "News", href: "#" },
    { name: "Contact Us", href: "/contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
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
        }, 200);
      }
    }
  };

  const handleMenuClose = (event: any, href: string) => {
    setIsMenuOpen(false);
    if (href) {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  };

  const handleLogoClick = () => {
    window.scroll(0, 0);
  };

  return {
    isMenuOpen,
    activeSubmenu,
    menuItems,
    toggleMenu,
    toggleSubmenu,
    scrollToSection,
    handleMenuClose,
    handleLogoClick,
  };
};
