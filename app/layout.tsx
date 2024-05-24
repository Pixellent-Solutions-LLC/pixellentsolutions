'use client';

import "styles/tailwind.css";
import { Navbar } from "components/Navbar/Navbar";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
