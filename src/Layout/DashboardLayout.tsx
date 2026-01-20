import Header from "../Components/Dashoard/Header";
import Sidebar from "../Components/Dashoard/Sidebar";
import { useLayoutHook } from "../Context/LayoutContext";

export default function DashboardLayout() {
  const { sidebarOpen, isMobile } = useLayoutHook();
  return (
    <div className="flex ">
      {/* left sidebar */}

      {!isMobile && sidebarOpen ? (
        <div className="w-75 min-h-screen bg-white">
          <Sidebar />
        </div>
      ) : (
        <div className="w-20 min-h-screen bg-white">
          <Sidebar />
        </div>
      )}

      {isMobile && (
        <div className="w-75 min-h-screen bg-white">
          <Sidebar />
        </div>
      )}

      {/* right */}
      <div className="flex-1 ">
        <Header />
      </div>
    </div>
  );
}
