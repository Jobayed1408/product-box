import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Explore Product-Box?
        </h2>
        <p className="mt-4 text-lg">
          Browse products or login to start adding your own.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/items" className="btn btn-outline text-white hover:text-primary border-white">
            View Products
          </Link>
          <Link href="/register" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
