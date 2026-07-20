import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  Calendar,
  Search,
  Bell,
  Moon,
  User,
  SearchAlert,
  Settings,
  CheckCircle,
  Clock3,
  TrendingUp,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import logo from "../../assets/images/logo.jpg";

const ProductDashboard = () => {
  const activeProjects = [
    {
      id: 1,
      name: "Marketing Website",
      status: "In Progress",
      progress: 78,
      members: 5,
      due: "Tomorrow",
      badgeClass: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 2,
      name: "Mobile App",
      status: "Completed",
      progress: 100,
      members: 8,
      due: "Completed",
      badgeClass: "bg-green-100 text-green-700",
    },
    {
      id: 3,
      name: "AI Assistant",
      status: "Planning",
      progress: 0,
      members: 6,
      due: "Next Week",
      badgeClass: "bg-blue-100 text-blue-700",
    },
  ];

  const todaysTasks = [
    {
      id: 1,
      task: "Landing Page",
      priority: "High",
      due: "Today",
      completed: true,
      badgeClass: "bg-red-100 text-red-700",
    },
    {
      id: 2,
      task: "Backend API",
      priority: "Medium",
      due: "Tomorrow",
      completed: false,
      badgeClass: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 3,
      task: "Database Design",
      priority: "Low",
      due: "Friday",
      completed: false,
      badgeClass: "bg-green-100 text-green-700",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "David",
      role: "Frontend Developer",
    },
    {
      id: 2,
      name: "Sarah",
      role: "UI Designer",
    },
    {
      id: 3,
      name: "Alex",
      role: "Backend Developer",
    },
  ];

  const analytics = [
    {
      id: 1,
      title: "Projects",
      value: "12",
      growth: "+12%",
      icon: FolderKanban,
    },
    {
      id: 2,
      title: "Completed",
      value: "184",
      growth: "+8%",
      icon: CheckCircle,
    },
    {
      id: 3,
      title: "Hours",
      value: "126h",
      growth: "+4%",
      icon: Clock3,
    },
    {
      id: 4,
      title: "Productivity",
      value: "89%",
      growth: "+5%",
      icon: TrendingUp,
    },
  ];
  const cardClass =
    "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg";
  return (
    <div
      className="
                        mt-16
                        rounded-3xl
                        border
                        border-slate-200
                        bg-slate-50
                        shadow-xl
                        p-8
"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-5">
        <div>
          <h2 className="text-xl font-bold">Design Team</h2>

          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />

            <input
              type="text"
              placeholder="Search projects,tasks ..."
              className="w-72
                          rounded-full
                          border
                          border-slate-200
                          bg-white
                          py-2
                          pl-10
                          pr-4
                          text-sm
                          focus:outline-none
                          focus:ring-2
                          focus:ring-gray-500 "
            />
          </div>
        </div>

        <div className="flex  items-center gap-6">
          <button className="rounded-full border border-slate-200 p-2 transition hover:bg-slate-100">
            <Moon className="h-5 w-5 cursor-pointer text-slate-600" />
          </button>

          <button className="rounded-full border border-slate-200 p-2 transition hover:bg-slate-100">
            <Bell className="h-5 w-5 cursor-pointer text-slate-600" />
          </button>

          <button className="rounded-full border border-slate-200 p-2 transition hover:bg-slate-100">
            <User className="h-5 w-5 cursor-pointer text-slate-600" />
          </button>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
        {analytics.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className={cardClass}>
              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100">
                <Icon className="h-6 w-6 text-violet-600" />
              </div>

              {/* Value */}
              <h3 className="text-3xl font-bold text-slate-900">
                {item.value}
              </h3>

              {/* Title */}
              <p className="mt-1 text-sm font-medium text-slate-500">
                {item.title}
              </p>

              {/* Growth */}
              <div className="mt-4 flex items-center gap-2">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                  {item.growth}
                </span>

                <span className="text-xs text-slate-400">this month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        <div className="rounded-xl bg-gradient-to-br from-white to-slate-100 p-5 border lg:col-span-1">
          <div className="flex  text-center items-center gap-5 mb-6">
            <img src={logo} className="h-7 w-7 rounded-full" />
            <h3 className="font-semibold ">Workspace</h3>
          </div>

          <div className="space-y-2">
            <div
              className="flex items-center gap-3 rounded-2xl bg-violet-100 px-3 py-2 font-medium 
              hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </div>

            <div className="flex items-center gap-3 rounded-2xl px-3 py-2 hover:bg-slate-100 cursor-pointer transition">
              <FolderKanban className="w-5 h-5" />
              Projects
            </div>

            <div className="flex items-center gap-3 rounded-2xl px-3 py-2 hover:bg-slate-100 cursor-pointer transition">
              <CheckSquare className="w-5 h-5" />
              Tasks
            </div>

            <div className="flex items-center gap-3 rounded-2xl px-3 py-2 hover:bg-slate-100 cursor-pointer transition">
              <Users className="w-5 h-5" />
              Team
            </div>

            <div className="flex items-center gap-3 rounded-2xl px-3 py-2 hover:bg-slate-100 cursor-pointer transition">
              <Calendar className="w-5 h-5" />
              Calendar
            </div>
            <div className="my-4 border-t"></div>

            <div className="flex items-center gap-3 rounded-2xl px-3 py-2 hover:bg-slate-100 cursor-pointer transition">
              <Settings className="w-5 h-5" />
              Settings
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Active Projects */}
          <div className={cardClass}>
            <h3 className="text-lg font-semibold mb-5">Active Projects</h3>

            <div className="space-y-4">
              {activeProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl border border-slate-200 p-4"
                >
                  <div className="flex items-center gap-2">
                    <FolderKanban className="w-4 h-4 text-violet-600" />

                    <p className="font-medium">{project.name}</p>
                  </div>

                  <span
                    className={`mt-3 inline-block rounded-full px-3 py-1 text-xs ${project.badgeClass}`}
                  >
                    {project.status}
                  </span>
                  <div className="h-2 w-full mt-3 rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-violet-600"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                    <span>{project.members} Members</span>
                    <span>Due: {project.due}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Tasks */}
          <div className={cardClass}>
            <h3 className="mb-5 text-lg font-semibold">Today's Tasks</h3>

            <div className="space-y-4">
              {todaysTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
                >
                  {/* Left */}
                  <div className="flex items-start gap-3">
                    <Checkbox checked={task.completed} readOnly />

                    <div>
                      <p
                        className={`font-medium ${
                          task.completed
                            ? "text-slate-400 line-through"
                            : "text-slate-900"
                        }`}
                      >
                        {task.task}
                      </p>

                      <span
                        className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${task.badgeClass}`}
                      >
                        {task.priority}
                      </span>
                    </div>
                  </div>

                  {/* Right */}
                  <span className="text-sm text-slate-500">📅 {task.due}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div className={cardClass}>
            <h3 className="text-lg font-semibold mb-5">Team Members</h3>

            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-semibold text-violet-700">
                      {member.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </div>

                  {/* Online Status */}
                  <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                </div>
              ))}
            </div>
          </div>
          {/*Project Progress */}
          <div className={cardClass}>
            <h3 className="text-lg font-semibold mb-5">Project Progress</h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span className="font-semibold">78%</span>
                </div>

                <div className="w-full h-3 rounded-full bg-gray-200">
                  <div className="h-3 w-[78%] rounded-full bg-violet-600"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-slate-50 p-4 text-center">
                  <p className="text-3xl font-bold text-green-600">12</p>
                  <p className="text-sm font-bold text-gray-500">Completed</p>
                </div>

                <div className="rounded-lg bg-slate-50 p-4 text-center">
                  <p className="text-3xl font-bold text-orange-500">3</p>
                  <p className="text-sm font-bold text-gray-500">Remaining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDashboard;
