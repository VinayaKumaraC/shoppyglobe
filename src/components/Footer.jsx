// Footer components
export default function Footer() {
  return (
    <div className="bg-[#131921] text-white mt-10">

      {/* TOP */}
      <div className="text-center py-3 border-b border-gray-700">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm hover:underline"
        >
          Back to top
        </button>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 text-sm">

        <div>
          <h3 className="font-bold mb-2">Get to Know Us</h3>
          <p>About</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Make Money</h3>
          <p>Sell products</p>
          <p>Affiliate</p>
          <p>Advertise</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Payment</h3>
          <p>Credit Card</p>
          <p>UPI</p>
          <p>Net Banking</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Help</h3>
          <p>Customer Service</p>
          <p>Returns</p>
          <p>Support</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center py-3 border-t border-gray-700 text-xs">
        © 2026 ShoppyGlobe. All rights reserved.
      </div>

    </div>
  );
}