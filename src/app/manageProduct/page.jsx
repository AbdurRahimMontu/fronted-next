"use client";
import axios from 'axios';
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

export default function ManageProduct() {

  const [products, setProducts] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();


  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/api/auth/signin");
    }
  }, [status, router]);


  useEffect(() => {
    if (session?.user?.email) {
      axios
        .get(`https://backend-next-gi6k.vercel.app/manageProduct?email=${session.user.email}`)
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
    }
  }, [session?.user?.email]);


  const handleDelete = (id) => {
    axios
      .delete(`https://backend-next-gi6k.vercel.app/manageProduct/${id}`)
      .then(() => {
        setProducts(prev => prev.filter(product => product._id !== id));
      })
      .catch(err => console.log(err));
  };

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Redirecting...</p>;

  return (
    <div>
      {/* Welcome, {session.user.name} */}

      <div className='bg-base-300 py-10'>
        <h2 className='text-3xl font-semibold text-center pb-5'>My Posted products</h2>

        <div className='w-11/12 mx-auto overflow-x-auto'>
          <table className='table'>
            <thead>
              <tr className='text-center bg-purple-500 text-white'>
                <th>Name</th>
                <th>Product Title</th>
                <th>Short Description</th>
                <th>Delete</th>
                <th>Update</th>
                <th>View</th>
              </tr>
            </thead>

            <tbody>
              {products?.map(product => (
                <tr key={product._id}>

                  <td className='font-bold'>
                    {session?.user?.name}
                  </td>

                  <td className='text-xl font-semibold'>
                    {product.title}
                  </td>

                  <td className='text-xl font-semibold'>
                    {product.shortDesc}
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className='btn btn-outline w-full hover:bg-purple-500 hover:text-white'
                    >
                      Delete
                    </button>
                  </td>

                  <td>
                    <Link
                      href={`/updateproduct/${product._id}`}
                      className='btn btn-outline w-full hover:bg-purple-500 hover:text-white'
                    >
                      Update
                    </Link>
                  </td>

                  <td>
                    <Link href={`/products/${product._id}`} product={product} className='btn btn-outline w-full hover:bg-purple-500 hover:text-white'>
                View Details
        </Link>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}









