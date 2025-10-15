"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Components/Navbar/page";
import Footer from "./Components/Footer/page";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname?.toLowerCase().startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}
