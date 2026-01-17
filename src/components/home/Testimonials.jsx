const testimonials = [
  {
    name: "Rahim",
    comment: "Product-Box is simple, fast, and very easy to use."
  },
  {
    name: "Ayesha",
    comment: "Clean UI and smooth experience. Loved it!"
  },
  {
    name: "Karim",
    comment: "Perfect platform for managing product listings."
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="card bg-base-100 shadow-md">
              <div className="card-body">
                <p className="italic">"{item.comment}"</p>
                <h4 className="mt-4 font-semibold text-primary">
                  — {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
