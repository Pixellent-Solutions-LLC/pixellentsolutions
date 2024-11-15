'use client';

import { useState, useEffect } from 'react';
import "styles/tailwind.css";
import { Navbar } from "components/Navbar/Navbar";
import LogoLoader from "components/LogoLoader/LogoLoader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Total animation time + small buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-gray-100">
        {loading && <LogoLoader />}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
