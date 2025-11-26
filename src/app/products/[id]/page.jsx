"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Details() {
  const [product, setProduct] =useState({})
const { id } = useParams();
  useEffect(()=>{
         fetch(`http://localhost:5000/products/${id}`)
         .then(res => res.json())
         .then(data=> setProduct(data))
  },[id])
  
  return (
    <div className='min-h-screen w-11/12 mx-auto'>
{/* if (!product) return <div>Loading...</div>; */}
   <div key={product._id} className="card bg-base-100 shadow-sm">
     <figure className="p-5">
       `<img
         src={product.photo}
         alt={product.title} />`
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
       <div>
        {product.fullDesc}
       </div>
     </div>
      <Link href={`/products`} product={product} className='btn btn-outline w-full hover:bg-purple-500 hover:text-white'>
                Back
        </Link>
   </div>
    </div>

  )
}

