import {
  Building2,
  Users,
  FolderKanban,
  BarChart3,
  Rocket,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create Workspace",
      description:
        "Set up your workspace and organize your team in minutes.",
      icon: Building2,
    },
    {
      id: 2,
      title: "Invite Team Members",
      description:
        "Invite teammates and assign roles with secure permissions.",
      icon: Users,
    },
    {
      id: 3,
      title: "Create Projects & Tasks",
      description:
        "Plan projects, create tasks, and assign work to your team.",
      icon: FolderKanban,
    },
    {
      id: 4,
      title: "Track Progress",
      description:
        "Monitor project progress with dashboards and real-time updates.",
      icon: BarChart3,
    },
    {
      id: 5,
      title: "Deliver Faster",
      description:
        "Collaborate efficiently and complete projects on time.",
      icon: Rocket,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            HOW IT WORKS
          </h2>

          <h3 className="mt-4 text-4xl font-bold text-slate-900">
            Manage Projects in Five Simple Steps
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Everything you need to organize your team, track work, and deliver
            projects faster.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20">
          {/* Timeline (Desktop Only) */}
          <div className="absolute left-0 right-0 top-14 hidden h-1 bg-slate-200 lg:block">
            <div className="h-full w-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Step Number */}
                  <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
                    {String(step.id).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
                    <Icon className="h-8 w-8 text-violet-600" />
                  </div>

                  {/* Title */}
                  <h4 className="mb-3 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;