"use client";

import NavigationController from "@/components/layout/navigationController";
import { Toaster } from "react-hot-toast";

export default function ClientComponents() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <NavigationController />
    </>
  );
}
