import Header from "../Components/Dashoard/Header";
import Sidebar from "../Components/Dashoard/Sidebar";
import { useLayoutHook } from "../Context/LayoutContext";

export default function DashboardLayout() {
  const { sidebarOpen, isMobile } = useLayoutHook();
  return (
    <div className="flex ">
      {/* left sidebar */}

      {!isMobile && sidebarOpen && (
        <div className="w-75 min-h-screen ">
          <Sidebar />
        </div>
      )}

      {!isMobile && !sidebarOpen && (
        <div className="w-20 min-h-screen">
          <Sidebar />
        </div>
      )}

      {isMobile && (
        <div
          className={`w-75 min-h-screen  fixed z-50 transition-all duration-500 ease-in-out  ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Sidebar />
        </div>
      )}

      {/* right */}

      {isMobile ? (
        <div
          className={`h-20 bg-white flex items-center px-10 fixed top-0 right-0 w-full left-0 `}
        >
          <Header />
        </div>
      ) : (
        <div
          className={`h-20 bg-white dark:bg-gray-800 flex items-center px-10 fixed top-0 right-0 w-full ${sidebarOpen ? "left-75" : "left-20"} `}
        >
          <Header />
        </div>
      )}
    </div>
  );
}
