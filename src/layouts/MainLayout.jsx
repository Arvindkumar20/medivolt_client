import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <Toaster />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
