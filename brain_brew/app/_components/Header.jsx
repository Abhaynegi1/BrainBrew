import Image from "next/image";
import { Button } from "@/components/ui/button";

import React from "react";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center p-2 shadow-sm">
        <Image src="/logo.svg" width={200} height={200} alt="logo" />
        <Button className="bg-[#724e2c] text-white hover:bg-[#5a3d22]">
          Get Started
        </Button>
      </div>
    </>
  );
}

export default Header;
