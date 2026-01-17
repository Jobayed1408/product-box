const features = [
  {
    title: "Product Listing",
    description: "Browse a clean and organized list of products with key details."
  },
  {
    title: "Detailed View",
    description: "View complete product information on a dedicated page."
  },
  {
    title: "Secure Authentication",
    description: "Login using Firebase authentication for protected actions."
  },
  {
    title: "Add New Products",
    description: "Authorized users can easily add new products."
  },
  {
    title: "Responsive Design",
    description: "Optimized for mobile, tablet, and desktop devices."
  },
  {
    title: "Fast Performance",
    description: "Built with Next.js for speed and SEO benefits."
  }
];

export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-primary">Product-Box</span>?
          </h2>
          <p className="mt-4 text-gray-500">
            Product-Box provides everything you need to manage and explore
            products efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
