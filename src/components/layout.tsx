// src/components/layout.tsx
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow">
        <nav className="container mx-auto px-6 py-4">
          <Link to="/" className="text-xl font-bold">
            Vehicle Tracker
          </Link>
        </nav>
      </header>
      <main className="container mx-auto p-6">
        <Outlet /> {/* Ini adalah tempat konten halaman akan dirender */}
      </main>
    </div>
  );
};

export default Layout;
