import { useState } from "react";
import gulab from "../assets/sweets/gulab-jamun.jpeg";
import rasgulla from "../assets/sweets/rasgulla.jpeg";
import barfi from "../assets/sweets/barfi.jpeg";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [filterAvailability, setFilterAvailability] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");

  const [sweets, setSweets] = useState([
    {
      id: 1,
      name: "Gulab Jamun",
      quantity: 10,
      price: 50,
      offerPrice: 40,
      rating: 4.8,
      img: gulab,
    },
    {
      id: 2,
      name: "Rasgulla",
      quantity: 0,
      price: 40,
      offerPrice: 35,
      rating: 4.5,
      img: rasgulla,
    },
    {
      id: 3,
      name: "Barfi",
      quantity: 25,
      price: 60,
      offerPrice: 50,
      rating: 4.9,
      img: barfi,
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (sweet) => {
    if (sweet.quantity === 0) return; // guard

    // decrement inventory
    setSweets((prev) =>
      prev.map((s) => (s.id === sweet.id ? { ...s, quantity: s.quantity - 1 } : s))
    );

    setCart((prev) => {
      const existing = prev.find((c) => c.id === sweet.id);
      if (existing) {
        return prev.map((c) => (c.id === sweet.id ? { ...c, qty: c.qty + 1 } : c));
      }
      return [...prev, { id: sweet.id, name: sweet.name, price: sweet.offerPrice ?? sweet.price, qty: 1, img: sweet.img }];
    });
  };

  const removeFromCart = (itemId) => {
    const item = cart.find((c) => c.id === itemId);
    if (!item) return;

    // restore inventory by the qty removed
    setSweets((prev) => prev.map((s) => (s.id === itemId ? { ...s, quantity: s.quantity + item.qty } : s)));
    setCart((prev) => prev.filter((c) => c.id !== itemId));
  };

  const decreaseOne = (itemId) => {
    const item = cart.find((c) => c.id === itemId);
    if (!item) return;

    // increase inventory by 1
    setSweets((prev) => prev.map((s) => (s.id === itemId ? { ...s, quantity: s.quantity + 1 } : s)));

    setCart((prev) =>
      prev
        .map((c) => (c.id === itemId ? { ...c, qty: c.qty - 1 } : c))
        .filter((c) => c.qty > 0)
    );
  };

  const cartTotal = cart.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
  <div className="min-h-screen py-10 px-4 flex justify-center relative candy-bg">

      {/* 🎁 BIG SWEET-BOX CONTAINER */}
      <div className="
        w-full max-w-6xl p-10 rounded-3xl shadow-2xl 
        bg-gradient-to-br from-[#F3EAFF] to-[#E4CCFF]
        relative
        "
        style={{
          boxShadow: `
            inset 0 0 20px rgba(0,0,0,0.18),
            inset 0 0 40px rgba(0,0,0,0.12),
            0 8px 20px rgba(0,0,0,0.15)
          `,
          border: "8px solid rgba(255,255,255,0.7)",
        }}
      >

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-8 text-violet-700 tracking-wide drop-shadow">
          🍬 Sweet Box
        </h1>

        {/* Search + Filters */}
        <div className="max-w-3xl mx-auto mb-10 flex flex-col md:flex-row items-center gap-3">
          <input
            type="text"
            placeholder="Search sweets..."
            className="flex-1 p-3 rounded-xl shadow-inner bg-white focus:ring-2 focus:ring-pink-400 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="p-3 rounded-xl bg-white border"
            value={filterAvailability}
            onChange={(e) => setFilterAvailability(e.target.value)}
          >
            <option value="all">All</option>
            <option value="in">In Stock</option>
            <option value="out">Out of Stock</option>
          </select>

          <input
            type="number"
            placeholder="Min price"
            className="w-28 p-3 rounded-xl bg-white border"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            min="0"
          />

          <input
            type="number"
            placeholder="Max price"
            className="w-28 p-3 rounded-xl bg-white border"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            min="0"
          />

          <input
            type="number"
            placeholder="Min rating"
            className="w-28 p-3 rounded-xl bg-white border"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
            min="0"
            max="5"
            step="0.1"
          />

          <button
            className="px-4 py-2 rounded-xl bg-white border"
            onClick={() => {
              setSearch("");
              setFilterAvailability("all");
              setMinPrice("");
              setMaxPrice("");
              setMinRating("");
            }}
          >
            Clear
          </button>
        </div>

        {/* Grid of sweets inside the box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {sweets
            .filter((sweet) => {
              const matchesName = sweet.name
                .toLowerCase()
                .includes(search.toLowerCase());

              let matchesAvailability = true;
              if (filterAvailability === "in") matchesAvailability = sweet.quantity > 0;
              if (filterAvailability === "out") matchesAvailability = sweet.quantity === 0;

              // price filter (use offerPrice)
              const offer = Number(sweet.offerPrice ?? sweet.price ?? 0);
              let matchesPrice = true;
              if (minPrice !== "") matchesPrice = matchesPrice && offer >= Number(minPrice);
              if (maxPrice !== "") matchesPrice = matchesPrice && offer <= Number(maxPrice);

              // rating filter
              let matchesRating = true;
              if (minRating !== "") matchesRating = sweet.rating >= Number(minRating);

              return matchesName && matchesAvailability && matchesPrice && matchesRating;
            })
            .map((sweet) => (
              <div
                key={sweet.id}
                className="
                  bg-white rounded-xl p-5 shadow-xl hover:shadow-2xl 
                  transform hover:-translate-y-1 transition
                "
                style={{
                  boxShadow: `
                    0 4px 10px rgba(0,0,0,0.2),
                    inset 0 0 8px rgba(0,0,0,0.08)
                  `,
                }}
              >
                {/* Image */}
                <img
                  src={sweet.img}
                  alt={sweet.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {sweet.name}
                </h2>

                <div className="flex items-center gap-3 mb-2">
                  <p className="text-lg font-bold text-orange-700">
                    ₹{sweet.offerPrice}
                  </p>
                  <p className="line-through text-gray-500">₹{sweet.price}</p>
                </div>

                <p className="text-yellow-600 font-semibold mb-2">
                  ⭐ {sweet.rating}
                </p>

                <span
                  className={`
                    inline-block px-3 py-1 rounded-full text-sm font-semibold 
                    ${sweet.quantity > 0
                      ? "bg-green-200 text-green-700"
                      : "bg-red-200 text-red-700"
                    }
                  `}
                >
                  {sweet.quantity > 0 ? `${sweet.quantity} in stock` : "Out of Stock"}
                </span>

                <button
                  onClick={() => addToCart(sweet)}
                  disabled={sweet.quantity === 0}
                  className={`
                    w-full mt-4 p-3 rounded-lg font-semibold text-white transition
                    ${sweet.quantity === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-pink-600 hover:bg-pink-700"
                    }
                  `}
                >
                  {sweet.quantity === 0 ? "Unavailable" : "Add to cart"}
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Cart panel */}
      <aside className="fixed right-6 top-20 w-80 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-3">Cart</h3>
        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-3">
            {cart.map((it) => (
              <div key={it.id} className="flex items-center gap-3">
                <img src={it.img} alt={it.name} className="w-12 h-10 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-medium">{it.name}</div>
                  <div className="text-sm text-gray-500">₹{it.price} x {it.qty}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <button onClick={() => decreaseOne(it.id)} className="text-sm px-2 py-1 bg-gray-100 rounded">-</button>
                  <button onClick={() => removeFromCart(it.id)} className="text-sm px-2 py-1 bg-red-50 text-red-600 rounded">Remove</button>
                </div>
              </div>
            ))}

            <div className="border-t pt-3">
              <div className="flex justify-between font-semibold">Total <span>₹{cartTotal}</span></div>
              <button className="w-full mt-3 bg-green-600 text-white py-2 rounded hover:bg-green-700">Checkout</button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
