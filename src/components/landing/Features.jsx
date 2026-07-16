import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { FolderKanban, SquareCheckBig, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Project Management",
      description: "Organize projects and collaborate with your team.",
      icon: <FolderKanban className="h-6 w-6 text-violet-600" />,
    },

    {
      title: "Task Tracking",
      description: "Track tasks and progress with ease.",
      icon: <SquareCheckBig className="h-6 w-6 text-violet-600" />,
    },
    {
      title: "Team Collaboration",
      description: "Invite members and work together seamlessly.",
      icon: <Users className="h-6 w-6 text-violet-600" />,
    },
    {
      title: "File Attachments",
      description: "Attach files to tasks and projects for easy access.",
      icon: "",
    },
    {
      title: "Project Notes",
      description: "Add notes to projects and tasks for better context.",
      icon: "",
    },
    {
      title: "Secure Authentication",
      description: "Secure login and authentication for your team.",
      icon: "",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            Features
          </span>
        </div>
        <h2 className="mt-6 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          Everything You Need
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-gray-600 leading-8">
          Powerful tools to manage projects from planning to deployment, all in
          one collaborative workspace.
        </p>

        {/* Features Displaying */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature) => {
            return (
              <Card
                key={feature.title}
                className="group rounded-3xl border shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-3
                            hover:shadow-2xl
                            "
              >
                <CardHeader className="pb-2">
                  <div
                    className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center
            mb-5
                    transition-transform
                    duration-300
                    group-hover:scale-110"

                  >
                    {feature.icon}
                  </div>

                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-7">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
