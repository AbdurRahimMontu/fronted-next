"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://backend-next-gi6k.vercel.app/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
<div>
  <h2 className="py-5 text-3xl text-center">All Products</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-base-100 gap-5 py-5 w-11/12 mx-auto">
      {products.map(product => (
<div key={product._id} className="card bg-base-100 shadow-sm">
  <figure className="p-5">
    `<img
      src={product.photo}
      alt="Backpak" />`
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {product.title}
    </h2>
    <p>{product.shortDesc}</p>
    <div className="flex justify-between">
<div className="badge badge-outline">Price: ${product.price}</div>
<div className="badge badge-outline">{product.priority}</div>
    </div>
          <Link href={`/products/${product._id}`} product={product} className='btn btn-outline w-full hover:bg-purple-500 hover:text-white'>
                View Details
        </Link>
  </div>
</div>
           
      ))}
    </div>
</div>
  );
}
