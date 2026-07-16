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
        title:"File Attachments",
        description:"Attach files to tasks and projects for easy access.",
        icon:""
    },
    {
        title:"Project Notes",
        description:"Add notes to projects and tasks for better context.",
        icon:""
    },
    {
        title:"Secure Authentication",
        description:"Secure login and authentication for your team.",
        icon:""
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Everything You Need</h2>

        <p className="text-center text-gray-500 mt-4">
          Powerful tools to manage projects from start to finish.
        </p>

        {/* Features Displaying */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature) => {
            return (
              <Card
                key={feature.title}
                className="
                                 rounded-3xl
                                border
                                shadow-sm
                                hover:shadow-2xl
                                hover:-translate-y-2
                                transition-all
                                duration-300
                                cursor-pointer
                                "
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>

                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 leading-7">{feature.description}</p>
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
