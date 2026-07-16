import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  Calendar,
} from "lucide-react";

const ProductDashboard = () => {
  return (
    <div className="mt-16 rounded-3xl border bg-white shadow-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-5">
        <h2 className="text-xl font-semibold">ProjectCamp Dashboard</h2>

        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
      </div>

      {/* Dashboard Layout */}
      <div className="grid grid-cols-4 gap-6 mt-8">
        <div className="rounded-xl bg-slate-50 p-5 border">
          <h3 className="font-semibold mb-6">Workspace</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </div>

            <div className="flex items-center gap-3">
              <FolderKanban className="w-5 h-5" />
              Projects
            </div>

            <div className="flex items-center gap-3">
              <CheckSquare className="w-5 h-5" />
              Tasks
            </div>

            <div className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              Team
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              Calendar
            </div>
          </div>
        </div>

        <div className="col-span-3 bg-gray-50 rounded-xl p-4">Main Content</div>
      </div>
    </div>
  );
};

export default ProductDashboard;
