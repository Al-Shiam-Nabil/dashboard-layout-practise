import {
  Calendar,
  ChevronDown,
  CircleCheckBig,
  CircleQuestionMark,
  Command,
  Folder,
  Mail,
  MessageCircle,
  Monitor,
  PanelBottom,
  PieChart,
  SquareCheckBig,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import FullLogo from "../../assets/brandlyFullLogo.png";
import LogoIcon from "../../assets/logoIcon.png";
import { useLayoutHook } from "../../Context/LayoutContext";

type SubmenuTypes = {
  label: string;
  path: string;
};

type SidebarTypes = {
  label: string;
  path?: string;
  icon: LucideIcon;
  subMenus?: SubmenuTypes[];
};
const sidebarLinks: SidebarTypes[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: Monitor,
  },
  {
    label: "to do",
    path: "/dashboard/todos",
    icon: SquareCheckBig,
  },
  {
    label: "Events",
    path: "/dashboard/events",
    icon: Calendar,
  },
  {
    label: "Projects",
    path: "/dashboard/projects",
    icon: Command,
  },
  {
    label: "Tasks",
    path: "/dashboard/tasks",
    icon: CircleCheckBig,
  },
  {
    label: "Email Marketing",
    path: "/uhfuiwef",
    icon: Mail,
  },
  {
    label: "Notes",
    path: "/dashboard/notes",
    icon: PanelBottom,
  },
  {
    label: "Messages",
    path: "/juhdfufh",
    icon: MessageCircle,
  },
  {
    label: "Teams",
    icon: Users,
    subMenus: [
      {
        label: "Team members",
        path: "/dashboard/team-members",
      },
      {
        label: "Time cards",
        path: "/jwehu",
      },
      {
        label: "Leave",
        path: "/dashboard/leave",
      },
      {
        label: "timeline",
        path: "/uidg",
      },
      {
        label: "Announcements",
        path: "/oihaseyh",
      },
    ],
  },
  {
    label: "Reports",
    path: "/dashboard/reports",
    icon: PieChart,
  },
  {
    label: "Files",
    path: "/dashboard/files",
    icon: Folder,
  },
  {
    label: "Help & Support",

    icon: CircleQuestionMark,
    subMenus: [
      {
        label: "Help",
        path: "/uqw",
      },
    ],
  },
];

export default function Sidebar() {
  const { sidebarOpen, isMobile, setSidebarOpen } = useLayoutHook();
  const [subMenuOpen, setSubMenuOpen] = useState<number | null>(null);

  return (
    <div className="select-none relative bg-white">
      {/* logo */}
      <div className="h-20 border-b bg-white  border-gray-100 border-r flex items-center  sticky top-0 left-0">
        {!isMobile && sidebarOpen && (
          <img src={FullLogo} alt="Logo" className="px-10" />
        )}

        {!isMobile && !sidebarOpen && (
          <img src={LogoIcon} alt="Logo" className="pl-6" />
        )}

        {isMobile && (
          <>
            <img src={FullLogo} alt="Logo" className="px-10" />
            <div
              onClick={() => setSidebarOpen((prev) => !prev)}
              className="absolute right-4 top-4"
            >
              <X stroke="gray" />
            </div>
          </>
        )}
      </div>

      {/* sidebar links container */}

      <div className="h-screen overflow-y-auto overflow-x-hidden sidebar-scroll">
        <div className="space-y-2 my-5 px-4 ">
          {sidebarLinks.map((sidebarLink, index) => (
            <div key={index}>
              <NavLink
                to={sidebarLink.path!}
                onClick={() =>
                  setSubMenuOpen((prev) => (prev === index ? null : index))
                }
                key={index}
                className={({ isActive }) =>
                  `flex items-center justify-between gap-4 px-3 py-3 rounded-md hover:bg-blue-400 hover:text-white  cursor-pointer group  ${isActive && sidebarLink.path && "bg-blue-400 text-white"}`
                }
              >
                <div className="flex items-center gap-4 ">
                  {" "}
                  <span>
                    <sidebarLink.icon />
                  </span>
                  {!isMobile ? (
                    <div
                      className={` whitespace-nowrap
    ${
      sidebarOpen
        ? "opacity-100"
        : "opacity-0 group-hover:opacity-100 absolute left-[110%] bg-blue-400 p-2 rounded-lg"
    }
  `}
                    >
                      {sidebarLink.label}
                    </div>
                  ) : (
                    <div className="whitespace-nowrap">{sidebarLink.label}</div>
                  )}
                </div>

                {sidebarLink.subMenus && sidebarOpen && (
                  <div>
                    <ChevronDown size={18} className="group-hover:text-white" />
                  </div>
                )}
              </NavLink>

              {sidebarLink.subMenus && sidebarOpen && subMenuOpen === index && (
                <div className="my-3 ml-5 rounded-lg bg-blue-100">
                  {sidebarLink.subMenus?.map((subMenu, ind) => (
                    <div
                      key={ind}
                      className="my-2 px-4 py-2.5   hover:bg-blue-400 hover:text-white cursor-pointer"
                    >
                      <div className="">{subMenu.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
