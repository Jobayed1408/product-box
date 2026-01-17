import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import CTA from "@/components/home/CTA";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import PopularItems from "@/components/home/PopularItems";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <section>
        <Banner />
        <Features />
        <Categories />
        <PopularItems />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </section>
    </div>
  );
}
