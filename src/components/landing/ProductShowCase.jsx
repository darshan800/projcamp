import DashboardPreview from "./Dashboardpreview";


const ProductShowcase = () => {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            Product Preview
          </span>

          <h2 className="mt-6 text-5xl font-bold">See ProjectCamp in Action</h2>
          <div className="mt-16 flex justify-center">
            <DashboardPreview />
          </div>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            A clean and intuitive workspace to manage projects, collaborate with
            your team, and track progress effortlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
