import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddSweet() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleAdd = () => {
    if (!name.trim()) {
      alert("Please enter a sweet name");
      return;
    }

    const newSweet = {
      id: Date.now(),
      name: name.trim(),
      price: Number(price) || 0,
      quantity: Number(quantity) || 0,
      description: description.trim(),
      img: imagePreview || null,
    };

    // navigate back to admin and pass the new sweet via navigation state
    navigate("/admin", { state: { newSweet } });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add New Sweet
        </h2>

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
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          className="w-full p-2 border rounded mb-4"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <textarea
          placeholder="Description (optional)"
          className="w-full p-2 border rounded mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* Image upload */}
        <label className="block mb-3 text-sm text-gray-600">Image (optional)</label>
        <input
          type="file"
          accept="image/*"
          className="w-full mb-3"
          onChange={(e) => {
            const file = e.target.files && e.target.files[0];
            if (file) {
              setImageFile(file);
              const reader = new FileReader();
              reader.onload = (ev) => {
                setImagePreview(ev.target.result);
              };
              reader.readAsDataURL(file);
            } else {
              setImageFile(null);
              setImagePreview("");
            }
          }}
        />

        {imagePreview && (
          <div className="mb-3">
            <img src={imagePreview} alt="preview" className="w-32 h-24 object-cover rounded" />
          </div>
        )}

        <button
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          onClick={handleAdd}
        >
          Add Sweet
        </button>
      </div>
    </div>
  );
}
