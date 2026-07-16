import { Button } from "@/components/ui/button";
import DashboardPreview from "./DashboardPreview";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <span className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-4 py-2 text-sm font-medium">
             Built for Modern Teams
          </span>

          <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight">
            Manage Projects
            <br />
            <span className="text-violet-600">
              Without the Chaos.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
            Plan projects, assign tasks, collaborate with your
            team, upload files, and deliver work faster from
            one beautiful workspace.
          </p>

          <div className="mt-10 flex gap-4">
            <Button size="lg">
              Get Started
            </Button>

            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-gray-600 text-sm font-medium">

            <div>✔ Unlimited Projects</div>

            <div>✔ Team Collaboration</div>

            <div>✔ Secure Authentication</div>

          </div>

        </div>

        {/* Right Side */}
        <DashboardPreview />

      </div>
    </section>
  );
};

export default Hero;