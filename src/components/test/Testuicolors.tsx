
const Testuicolors = () => {
    return (
        <div>
               <div className="bg-gray-100 text-gray-900">
        {/* 🛍️ Hero Section */}
        <section className="relative bg-gradient-to-r from-red-600 to-rose-600 text-white py-20 px-6 text-center">
          <h1 className="text-5xl font-bold">🔥 Limited Time Offer!</h1>
          <p className="mt-4 text-lg">Get up to <span className="font-bold text-yellow-300">50% OFF</span> on top products.</p>
          <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
            Shop Now
          </button>
        </section>

        {/* 🛒 Product Card Section */}
        <div className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200">
            <img src="https://via.placeholder.com/300" alt="Product" className="w-full rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">Luxury Smart Watch</h3>
            <p className="text-gray-600 mt-2">Premium design with advanced features.</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-red-600 font-bold text-lg">$199</span>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200">
            <img src="https://via.placeholder.com/300" alt="Product" className="w-full rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">Wireless Headphones</h3>
            <p className="text-gray-600 mt-2">Deep bass & noise cancellation.</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-red-600 font-bold text-lg">$149</span>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200">
            <img src="https://via.placeholder.com/300" alt="Product" className="w-full rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">Gaming Keyboard</h3>
            <p className="text-gray-600 mt-2">RGB lighting & mechanical switches.</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-red-600 font-bold text-lg">$89</span>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* 🔥 Flash Sale Banner */}
        <section className="bg-pink-600 text-white text-center py-10">
          <h2 className="text-4xl font-bold">🚀 FLASH SALE IS LIVE!</h2>
          <p className="mt-2 text-lg">Hurry, before time runs out.</p>
          <button className="mt-4 bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
            Grab the Deals
          </button>
        </section>

        {/* 💬 Testimonial Section */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-center">What Our Customers Say</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <p className="text-gray-600">"The best shopping experience! Fast delivery and amazing quality."</p>
              <h4 className="mt-4 font-semibold text-lg">- Sarah J.</h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <p className="text-gray-600">"Customer service was super helpful. Love my new headphones!"</p>
              <h4 className="mt-4 font-semibold text-lg">- David R.</h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <p className="text-gray-600">"Great deals and amazing discounts. Highly recommend!"</p>
              <h4 className="mt-4 font-semibold text-lg">- Emily W.</h4>
            </div>
          </div>
        </section>

        {/* ⚡ Footer Section */}
        <footer className="bg-gray-900 text-gray-400 py-8 text-center">
          <p>&copy; 2025 PasherDukan.com | All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
          </div>
        </footer>
      </div>
        </div>
    );
};

export default Testuicolors;