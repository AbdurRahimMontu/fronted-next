export default function ContactSection() {
  return (
    <div className="bg-base-200 py-16">
      <div className="w-11/12 md:w-10/12 mx-auto grid md:grid-cols-2 gap-12">


        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Have questions or need assistance? We are here to help!  
            Contact us anytime and our support team will respond as soon as possible.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <span className="text-gray-800 font-medium">+880 1234-567890</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <span className="text-gray-800 font-medium">support@electronics.com</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <span className="text-gray-800 font-medium">Dhaka, Bangladesh</span>
            </p>
          </div>
        </div>


        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

