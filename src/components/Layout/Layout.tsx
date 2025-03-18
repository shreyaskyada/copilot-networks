import React from "react";
import Header from "../Header/Header";
import { LayoutProps } from "./types";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Layout: React.FC<LayoutProps> = ({ activeTab }) => {
  return (
    <div>
      <Header activeTab={activeTab} />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
