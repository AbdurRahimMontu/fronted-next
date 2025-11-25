"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ManageProduct() {

  const [jobs, setJobs] = useState([]);
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
        .get(`http://localhost:5000/manageProduct?email=${session.user.email}`)
        .then(res => setJobs(res.data))
        .catch(err => console.log(err));
    }
  }, [session?.user?.email]);


  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/manageProduct/${id}`)
      .then(() => {
        setJobs(prev => prev.filter(job => job._id !== id));
      })
      .catch(err => console.log(err));
  };

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Redirecting...</p>;

  return (
    <div>
      Welcome, {session.user.name}

      <div className='bg-base-300 py-10'>
        <h2 className='text-3xl font-semibold text-center pb-5'>My Posted Jobs</h2>

        <div className='w-11/12 mx-auto overflow-x-auto'>
          <table className='table'>
            <thead>
              <tr className='text-center bg-purple-500 text-white'>
                <th>Name</th>
                <th>Job Title</th>
                <th>Job Category</th>
                <th>Delete</th>
                <th>Update</th>
                <th>View</th>
              </tr>
            </thead>

            <tbody>
              {jobs?.map(job => (
                <tr key={job._id}>

                  <td className='font-bold'>
                    {session?.user?.name}
                  </td>

                  <td className='text-xl font-semibold'>
                    {job.title}
                  </td>

                  <td className='text-xl font-semibold'>
                    {job.category}
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(job._id)}
                      className='btn btn-outline w-full hover:bg-purple-500 hover:text-white'
                    >
                      Delete
                    </button>
                  </td>

                  <td>
                    <Link
                      href={`/updateJob/${job._id}`}
                      className='btn btn-outline w-full hover:bg-purple-500 hover:text-white'
                    >
                      Update
                    </Link>
                  </td>

                  <td>
                    <Link
                    href={`/manageProduct/:id${job._id}`}
                      className='btn btn-outline w-full hover:bg-purple-500 hover:text-white'
                    >
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










// 
// "use client";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export default function ManageProduct() {

//   const [jobs, setJobs] = useState([]);
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   // Redirect if unauthenticated
//   useEffect(() => {
//     if (status === "unauthenticated") {
//       router.replace("/api/auth/signin");
//     }
//   }, [status, router]);

//   // Fetch data when session is loaded
//   useEffect(() => {
//     if (session?.user?.email) {
//       axios.get(`http://localhost:5000/manageProduct?email=${session.user.email}`)
//         .then(res => {
//           setJobs(res.data);
//         })
//         .catch(err => console.log(err));
//     }
//   }, [session?.user?.email]);

//   if (status === "loading") return <p>Loading...</p>;
//   if (!session) return <p>Redirecting...</p>;

//   return (
//     <div>
//       Welcome, {session.user.name}

//       <div className="bg-base-300 py-10">
//         <h2 className="text-3xl font-semibold text-center pb-5">My Posted Jobs</h2>

//         <div className="w-11/12 mx-auto overflow-x-auto">
//           <table className="table">
//             <thead>
//               <tr className="text-center bg-purple-500 text-white">
//                 <th>Name</th>
//                 <th>Job Title</th>
//                 <th>Job Category</th>
//                 <th>Delete</th>
//                 <th>Update</th>
//                 <th>View</th>
//               </tr>
//             </thead>

//             <tbody>
//               {jobs?.map(job => (
//                 <tr key={job._id}>

//                   {/* User */}
//                   <td>
//                     <div className="font-bold">{session.user.name}</div>
//                   </td>

//                   {/* Title */}
//                   <td>
//                     <span className="text-xl font-semibold">{job.title}</span>
//                   </td>

//                   {/* Category */}
//                   <td>
//                     <span className="text-xl font-semibold">{job.category}</span>
//                   </td>

//                   {/* Next: Add Delete / Update / View */}
//                   <td>Delete Button</td>
//                   <td>Update Button</td>
//                   <td>View Button</td>

//                 </tr>
//               ))}
//             </tbody>

//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
