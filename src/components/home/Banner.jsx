import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    return (
        <section className="bg-base-100">
            <div className="container mx-auto px-2 md:px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Discover & Manage Products Easily with
                        <span className="text-primary"> Product-Box</span>
                    </h1>

                    <p className="mt-4 text-base md:text-lg text-gray-500">
                        Product-Box is a simple and powerful platform to explore products,
                        view details, and manage items seamlessly.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <Link href={'/items'} className="btn btn-primary">
                            Explore Products
                        </Link>
                       
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                   <Image 
                      src="https://i.ibb.co.com/LdnTnRM2/Chat-GPT-Image-Jan-17-2026-12-29-19-AM.png"
                      alt="Banner Image"
                      width={500}
                      height={400}
                   />
                </div>

            </div>
        </section>
    );
}
