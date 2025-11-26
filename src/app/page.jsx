"use client";
import Stat from "@/components/Stat";
import ClientComment from "../components/Comment";
import Link from "next/link";
import React, { useState, useEffect } from "react";
export default function Home() {
   const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log(err));
    }, []);
  
  return (
<div>
    <div className="flex  items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/CxG1Vcf/Laptop-Stand.jpg)",
    
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Electronics Shop</h1>
      <p className="mb-5">
        Our electronics shop offers high-quality gadgets, reliable accessories, expert customer service, and affordable prices to ensure a smart and satisfying shopping experience.
      </p>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
<div>
    <h2 className="py-10 text-3xl text-center">
    Feature Product
  </h2>
    <div className="grid grid-cols-4 bg-base-100 gap-5 py-5 w-11/12 mx-auto">
      {products.slice(0, 8).map(product => (
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
        <div className="text-center py-5">
           <Link href={`/products`} className='btn btn-outline  hover:bg-purple-500 hover:text-white'>
                Show More
        </Link> 
        </div>
        <ClientComment></ClientComment>
        <Stat></Stat>
</div>

</div>
  );
}
