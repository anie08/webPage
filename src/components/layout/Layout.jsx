import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/layout/components/header/Header.jsx";
import ContactUs from "../contactUs/ContactUs.jsx";
import Footer from "../layout/components/footer/Footer.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Layout;
