import React from "react";
import { useRouter } from "next/router";

interface SidebarMenuProps {
  onClose: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ onClose }) => {
  const router = useRouter();

  return (
    <div
      className="z-20 fixed top-0 left-0 min-h-screen w-1/4 bg-mainColor shadow-lg"
      onClick={onClose}
    >
      <div className="p-4 cursor-pointer">
        <p className="text-right font-nineties m-10">Children</p>
        <p className="text-right font-nineties m-10">Adult</p>
        <p className="text-right font-nineties m-10">Vintage</p>
      </div>
    </div>
  );
};

export default SidebarMenu;
