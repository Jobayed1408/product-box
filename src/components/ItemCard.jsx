import Image from "next/image";
import Link from "next/link";

export default function ItemCard({ item }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition duration-300">
      <figure>
        <Image
          width={300}
          height={250}
          src={item.image}
          alt={item.name}
          className="h-48 w-full object-fit rounded-t-lg"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>

        <p className="text-gray-500">
          {item.description?.slice(0, 20)}
          {item.description?.length > 20 && "..."}
        </p>


        <div className="flex justify-between items-center mt-4">
          <span className="text-primary font-bold">
            ${item.price.toFixed(2)}
          </span>

          <Link
            className="btn btn-sm btn-outline"
            href={`/items/${item._id}`} // using id from JSON
          >
            View Details
          </Link>
        </div>

        <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
          
          <span>Sold: {item.sold}</span>
          <span>Rating: {item.ratings} ⭐</span>
        </div>


      </div>
    </div>
  );
}
