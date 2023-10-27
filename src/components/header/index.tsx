import React, { useState, useEffect } from "react";
import SVG from "@common/svg";
import { useRouter } from "next/router";
import SidebarMenu from "./menu";
import { useAuth } from "@context/auth-context";

const Header: React.FunctionComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector(".sidebar");
      if (sidebar && !sidebar.contains(event.target as Node)) {
        closeSidebar();
      }
    };

    const handleDocumentClick = (event: MouseEvent) => {
      // Fermer le sidebar lorsqu'on clique en dehors de celui-ci
      if (sidebarOpen) {
        const sidebar = document.querySelector(".sidebar");
        if (sidebar && !sidebar.contains(event.target as Node)) {
          closeSidebar();
        }
      }
    };

    // Ajouter le gestionnaire d'événements pour fermer le sidebar lorsqu'on clique en dehors
    document.addEventListener("click", handleDocumentClick);

    // Nettoyer les gestionnaires d'événements lorsqu'on les composants sont démontés
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [sidebarOpen]);

  return (
    <header className="flex flex-row bg-mainColor shadow-lg border-b border-bottom-3 border-black items-center justify-between py-4">
      <div className="md:grow md:w-1/4 md:ml-5" onClick={toggleSidebar}>
        <SVG width={40} height={40} name="Home" />
      </div>
      <div
        className={`w-2/4 md:grow hover:cursor-pointer ${
          sidebarOpen ? "hidden md:block" : ""
        } ${isAuthenticated && "md:ml-[270px]"}`}
        onClick={() => router.push("/")}
      >
        <SVG width={240} height={40} name="Logo" />
      </div>
      {!isAuthenticated && (
        <div className="md:w-auto md:mx-5 hidden md:block">
          <button
            className="border border-black h-auto md:p-2 px-4 py-2"
            onClick={() => router.push("/account/sign-in")}
          >
            Sign in / Sign up
          </button>
        </div>
      )}
      <div className="md:grow-0 md:mx-14">
        <span onClick={() => router.push("/account")} className="hover:cursor-pointer">
          <SVG width={50} height={30} name="Alien" />
        </span>
      </div>
      {/* {sidebarOpen && <SidebarMenu onClose={closeSidebar} />} */}
    </header>
  );
};

export default Header;
