"use client";

import Navbar from "../navbar";
import Sidebar from "../sidebar";

export default function NavigationController() {
  return (
    <div className="h-16  ">
      <Navbar />
      <Sidebar />
    </div>
  );
}
