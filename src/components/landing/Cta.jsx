import React from "react";
import { ArrowRight, Play } from "lucide-react";

const Cta = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-8 py-16 text-center shadow-2xl lg:px-20">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Ready to Simplify Project Management?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100">
            Organize projects, collaborate with your team, track progress, and
            deliver work faster with ProjectCamp.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary Button */}
            <button className="flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-violet-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* Secondary Button */}
            <button className="flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
              <Play className="h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Small Text */}
          <p className="mt-8 text-sm text-violet-200">
            No credit card required • Free to get started
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;