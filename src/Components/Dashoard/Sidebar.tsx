import {
  Calendar,
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
  type LucideIcon,
} from "lucide-react";
import FullLogo from "../../assets/brandlyFullLogo.png";
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
  const { sidebarOpen } = useLayoutHook();

  console.log(sidebarOpen);

  return (
    <div className="select-none">
      {/* logo */}
      <div className="h-20 border-b  border-gray-100 border-r flex items-center px-10">
        <img src={FullLogo} alt="Logo" />
      </div>

      {/* sidebar links container */}

      <div className="space-y-2 my-5 px-4">
        {sidebarLinks.map((sidebarLink, index) => (
          <div
            key={index}
            className="flex items-center gap-4 pl-3 py-3 rounded-md hover:bg-blue-400 hover:text-white transition-all duration-200 ease-in-out cursor-pointer"
          >
            <span>
              <sidebarLink.icon />
            </span>
            <div className="whitespace-nowrap">{sidebarLink.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
