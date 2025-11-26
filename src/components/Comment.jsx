import React from "react";
import { motion } from "motion/react";

const ClientComment = () => {
return ( <div className="bg-base-300 py-5"> <h2 className="text-2xl text-center py-5 font-bold">Client Comment</h2>


  <div className="grid lg:grid-cols-4 pt-5 md:grid-cols-2 grid-cols-1 w-11/12 mx-auto gap-8">

    {/* Card 1 */}
    <div className="hero bg-base-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <div className="hero-content flex flex-col items-center text-center">
        <motion.img
          whileHover={{ scale: 1.2 }}
          src="/client1.jpg"
          alt="Client1"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow"
        />
        <p className="py-4 text-base sm:text-lg text-justify leading-relaxed">
          The quality of their work exceeded my expectations. 
          <br />
          <span className="font-semibold">Martin Cope</span>, Design Director at Pixel
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="hero bg-base-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <div className="hero-content flex flex-col items-center text-center">
        <motion.img
          whileHover={{ scale: 1.2 }}
          src="/client2.jpg"
          alt="Client2"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow"
        />
        <p className="py-4 text-base sm:text-lg text-justify leading-relaxed">
          Outstanding service and unmatched professional.
          <br />
          <span className="font-semibold">Samantha Reed</span>, Marketing Manager at TechSol Inc
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="hero bg-base-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <div className="hero-content flex flex-col items-center text-center">
        <motion.img
          whileHover={{ scale: 1.2 }}
          src="/client3.jpg"
          alt="Client3"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow"
        />
        <p className="py-4 text-base sm:text-lg text-justify leading-relaxed">
          They went above and beyond to meet my needs!
          <br />
          <span className="font-semibold">Emily Parker</span>, CEO at Elegance Boutique
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="hero bg-base-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <div className="hero-content flex flex-col items-center text-center">
        <motion.img
          whileHover={{ scale: 1.2 }}
          src="/client4.jpg"
          alt="Client4"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow"
        />
        <p className="py-4 text-base sm:text-lg text-justify leading-relaxed">
          Truly exceptional results — highly recommended!
          <br />
          <span className="font-semibold">Martin Cope</span>, Design Director at Pixel
        </p>
      </div>
    </div>

  </div>
</div>


);
};

export default ClientComment;
