import { Menu } from "lucide-react";
import { useLayoutHook } from "../../Context/LayoutContext";

export default function Header() {
  const { sidebarOpen, setSidebarOpen } = useLayoutHook();

  return (
    <div
      className={`h-20 bg-white flex items-center px-10 fixed top-0 right-0 w-full ${sidebarOpen ? "left-75" : "left-20"} transition-all duration-500 ease-in-out`}
    >
      <div
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer"
      >
        <Menu />
      </div>
    </div>
  );
}
