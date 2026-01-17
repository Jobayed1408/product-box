const steps = [
  "Browse Products",
  "View Details",
  "Login to Add Items",
  "Manage Products Easily",
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="card bg-base-200 p-6">
              <div className="text-4xl font-bold text-primary mb-2">
                {index + 1}
              </div>
              <p className="font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
