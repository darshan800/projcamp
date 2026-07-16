import {Bot,Briefcase,Phone} from "lucide-react"

const DashboardPreview = () => {
  return (
    <div className="rounded-3xl border bg-white shadow-2xl p-6">

      <div className="flex justify-between items-center border-b pb-4">

        <h2 className="font-semibold">
          Dashboard
        </h2>

        <div className="flex gap-2">

          <div className="w-3 h-3 rounded-full bg-red-400" />

          <div className="w-3 h-3 rounded-full bg-yellow-400" />

          <div className="w-3 h-3 rounded-full bg-green-400" />

        </div>

      </div>

      <div className="mt-6 space-y-5">

        <div className="rounded-xl bg-violet-100 p-4">
          <Briefcase className="w-5 h-5" />
  <span>Marketing Website</span>
        </div>

        <div className="rounded-xl bg-gray-100 p-4">
          <Phone className="w-5 h-5" />
          <span>Mobile App</span>
        </div>

        <div className="rounded-xl bg-green-100 p-4">
          <Bot className="w-5 h-5" />
          <span>AI Assistant</span>
        </div>

      </div>

      <div className="mt-8 rounded-xl border p-4">

        <h3 className="font-semibold mb-4">
          Today's Tasks
        </h3>

        <div className="space-y-3">

          <div className="flex justify-between">
            <span>Landing Page</span>
            <span>✓</span>
          </div>

          <div className="flex justify-between">
            <span>Backend API</span>
            <span>⏳</span>
          </div>

          <div className="flex justify-between">
            <span>Deploy App</span>
            <span>✓</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardPreview;