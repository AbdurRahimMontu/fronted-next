export default function AboutSection() {
  return (
    <div className="bg-base-200 ">
      <div className="w-11/12 md:w-10/12 mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div>
          <img
            src="/client1.jpg"
            alt="About"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Our Electronics Shop</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We provide high-quality electronic products designed to deliver
            reliability, performance, and advanced technology. Our shop ensures
            a smooth experience with trusted components, modern gadgets, and
            excellent customer support.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            With a passion for innovation and customer satisfaction, we aim to
            offer the best electronics at affordable prices so you get maximum
            value and long-lasting performance.
          </p>

          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
}
