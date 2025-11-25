"use client";

// import { toast } from "react-toastify";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AddProduct() {
const [title, setTitle] = useState("");
const [shortDesc, setShortDesc] = useState("");
const [fullDesc, setFullDesc] = useState("");
const [price, setPrice] = useState("");
const [date, setDate] = useState("");
const [priority, setPriority] = useState("");
const [photo, setPhoto] = useState("");

  const [message, setMessage] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/api/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Redirecting...</p>;

  // 

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    title,
    shortDesc,
    fullDesc,
    price,
    date,
    priority,
    photo,
    email: session.user.email,
    postedBy: session.user.displayName,
    postedDate: new Date(),
  };

  axios
    .post("http://localhost:5000/products", formData)
    .then((data) => {
     alert("Product Successfully Added");
      console.log(data.data);

      // reset fields
      setTitle("");
      setShortDesc("");
      setFullDesc("");
      setPrice("");
      setDate("");
      setPriority("");
      setPhoto("");
    })
    .catch((error) => {
      console.log(error);
    });
};

  // 
  return <div>Welcome, {session.user.name}
  
  {/*  */}

<div className="p-6">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-3 mt-4">
  <div>
    <label>Product Title:</label><br />
    <input 
      type="text" 
      value={title} 
      onChange={(e) => setTitle(e.target.value)} 
      className="input" 
      required 
    />
  </div>

  <div>
    <label>Short Description:</label><br />
    <input 
      type="text" 
      value={shortDesc} 
      onChange={(e) => setShortDesc(e.target.value)} 
      className="input" 
      required 
    />
  </div>

  <div>
    <label>Full Description:</label><br />
    <input 
      type="text" 
      value={fullDesc} 
      onChange={(e) => setFullDesc(e.target.value)} 
      className="input" 
      required 
    />
  </div>

  <div>
    <label>Price:</label><br />
    <input 
      type="number" 
      value={price} 
      onChange={(e) => setPrice(e.target.value)} 
      className="input" 
      required 
    />
  </div>

  <div>
    <label>Date:</label><br />
    <input 
      type="date" 
      value={date} 
      onChange={(e) => setDate(e.target.value)} 
      className="input" 
      required 
    />
  </div>

  <div>
    <label>Priority:</label><br />
    <input 
      type="number" 
      value={priority} 
      onChange={(e) => setPriority(e.target.value)} 
      className="input" 
      required 
    />
  </div>

  <div>
    <label>Photo URL:</label><br />
    <input 
      type="text" 
      value={photo} 
      onChange={(e) => setPhoto(e.target.value)} 
      className="input" 
      required 
    />
  </div>

        <button type="submit" className="btn">Add Product</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>


  



  {/*  */}
  </div>;
}
