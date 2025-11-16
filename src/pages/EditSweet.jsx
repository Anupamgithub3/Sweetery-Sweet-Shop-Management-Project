import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditSweet() {
  const navigate = useNavigate();
  const { id } = useParams();

  // TEMP DATA (later from backend)
  const sweetList = [
    { id: 1, name: "Gulab Jamun", price: 50, quantity: 10, description: "Soft and sweet" },
    { id: 2, name: "Rasgulla", price: 40, quantity: 0, description: "Light and spongy" },
    { id: 3, name: "Barfi", price: 60, quantity: 25, description: "Delicious milk sweet" },
  ];

  // Find sweet by ID
  const sweet = sweetList.find((s) => s.id === Number(id));

  // Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  // Populate form on page load
  useEffect(() => {
    if (sweet) {
      setName(sweet.name);
      setPrice(sweet.price);
      setQuantity(sweet.quantity);
      setDescription(sweet.description);
    }
  }, [sweet]);

  const handleUpdate = () => {
    alert("Sweet updated! (UI only for now)");
    navigate("/admin");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Sweet</h2>

        <input
          type="text"
          placeholder="Sweet Name"
          className="w-full p-2 border rounded mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full p-2 border rounded mb-4"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <input
          type="number"
          placeholder="Quantity"
          className="w-full p-2 border rounded mb-4"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <textarea
          placeholder="Description (optional)"
          className="w-full p-2 border rounded mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={handleUpdate}
        >
          Update Sweet
        </button>
      </div>
    </div>
  );
}
