import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  Calendar,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const ProductDashboard = () => {
  const activeProjects = [
    {
      id: 1,
      name: "Marketing Website",
      status: "In Progress",
      color: "violet-700",
      contrastColor: "violet-100",
    },
    {
      id: 2,
      name: "Mobile App",
      status: "Completed",
      color: "green-700",
      contrastColor: "green-100",
    },
    {
      id: 3,
      name: "AI Assistant",
      status: "Planning",
      color: "yellow-700",
      contrastColor: "yellow-100",
    },
  ];

  const todaysTasks = [
    {
      id: 1,
      task: "Landing Page",
      status: "Done",
      color: "green-700",
      contrastColor: "green-100",
    },
    {
      id: 2,
      task: "Backend API",
      status: "In Progress",
      color: "yellow-700",
      contrastColor: "yellow-100",
    },
    {
      id: 3,
      task: "Database Design",
      status: "Todo",
      color: "blue-700",
      contrastColor: "blue-100",
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
          <h2 className="text-xl font-bold">ProjectCamp Dashboard</h2>

          <p className="text-sm text-slate-500">Welcome back, Darshan 👋</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
      </div>

      {/* Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        <div className="rounded-xl bg-gradient-to-brfrom-white to-slate-100 p-5 border lg:col-span-1">
          <h3 className="font-semibold mb-6">Workspace</h3>

          <div className="space-y-2">
            <div className="flex items-center gap-3 rounded-xl bg-violet-100 px-3 py-2 font-medium text-violet-700 cursor-pointer">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </div>

            <div className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100 cursor-pointer transition">
              <FolderKanban className="w-5 h-5" />
              Projects
            </div>

            <div className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100 cursor-pointer transition">
              <CheckSquare className="w-5 h-5" />
              Tasks
            </div>

            <div className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100 cursor-pointer transition">
              <Users className="w-5 h-5" />
              Team
            </div>

            <div className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100 cursor-pointer transition">
              <Calendar className="w-5 h-5" />
              Calendar
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
              ))}
            </div>
            </div>
            
              {/* Today's Tasks */}
            <div className={cardClass}>
              <h3 className="text-lg font-semibold mb-5">Today's Tasks</h3>

              <div className="space-y-4">
                {todaysTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-3 rounded-lg border p-3"
                  >
                    <Checkbox checked={task.completed} readOnly />

                    <p className="font-medium">{task.task}</p>
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
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
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
