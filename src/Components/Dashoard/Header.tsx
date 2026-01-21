import { Menu, Moon, Sun } from "lucide-react";
import { useLayoutHook } from "../../Context/LayoutContext";

export default function Header() {
  const { setSidebarOpen, setTheme, theme } = useLayoutHook();

  return (
    <div className="dark:text-white">
      <div className="flex items-center gap-5">
        <div
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white p-2 rounded-lg cursor-pointer"
        >
          <Menu />
        </div>

        <div
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
          className="cursor-pointer"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </div>
      </div>
    </div>
  );
}
