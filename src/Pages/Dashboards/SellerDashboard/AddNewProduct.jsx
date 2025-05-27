import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddNewProduct() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [selectedColor, setSelectedColor] = useState(null);
  const [productCategory, setProductCategory] = useState("phone");
  const [productTag, setProductTag] = useState("new");
  const [stockStatus, setStockStatus] = useState("In Stock");

  const [mainImage, setMainImage] = useState("");
  const [gallery, setGallery] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [colorOptions, setColorOptions] = useState([
    { name: "Pink", class: "bg-pink-200", value: "#fbcfe8" },
    { name: "Blue", class: "bg-blue-200", value: "#bfdbfe" },
    { name: "Green", class: "bg-green-200", value: "#bbf7d0" },
    { name: "Yellow", class: "bg-yellow-100", value: "#fef9c3" },
    { name: "Gray", class: "bg-gray-200", value: "#e5e7eb" },
  ]);
  const [newColorValue, setNewColorValue] = useState("");

  // Tags
  const handleTagAdd = (e) => {
    if (e.key === "Enter" && tagInput.trim() && tags.length < 5) {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setTagInput("");
      }
    }
  };
  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  // Colors
  const toggleColor = (color) => {
    const exists = selectedColors.find((c) => c.value === color.value);
    if (exists) {
      setSelectedColors(selectedColors.filter((c) => c.value !== color.value));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const addNewColor = () => {
    if (newColorValue && !colorOptions.find((c) => c.value === newColorValue)) {
      const newColor = {
        name: `Custom ${colorOptions.length + 1}`,
        class: "",
        value: newColorValue,
      };
      setColorOptions([...colorOptions, newColor]);
      setNewColorValue("");
    }
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setMainImage(newUrl);
    }
  };

  const handleAddToGallery = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setGallery((prev) => [...prev, newUrl]);
    }
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const payload = {
      ...data,
      startDate,
      endDate,
      selectedColor,
      productCategory,
      productTag,
      stockStatus,
      mainImage,
      gallery,
      tags,
      selectedColors,
    };
    console.log("Submitted:", payload);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 text-[#023337]"
    >
      {/* Left Column */}
      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Basic Details</h2>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            {...register("productName")}
            placeholder="Product Name"
            className="w-full border border-gray-200 px-3 py-2 rounded-lg bg-gray-50 outline-none"
          />

          <label className="block text-sm font-medium mt-4 mb-1">
            Product Description
          </label>
          <textarea
            {...register("productDescription")}
            placeholder="Write a detailed description of the product"
            className="w-full border border-gray-200 px-3 py-2 rounded-lg bg-gray-50 outline-none"
            rows={4}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Pricing</h2>
          <label className="block text-sm font-medium mb-1">
            Product Price
          </label>
          <div className="">
            <input
              {...register("productPrice")}
              type="text"
              placeholder="Enter price"
              className="w-full border border-gray-200 px-3 py-2 rounded-lg bg-gray-50 outline-none"
            />
          </div>

          <label className="block text-sm font-medium mt-4 mb-1">
            Discounted Price (Optional)
          </label>
          <div className="">
            <input
              {...register("discountPrice")}
              type="text"
              placeholder="Enter discounted price"
              className="w-full border border-gray-200 px-3 py-2 rounded-lg bg-gray-50 outline-none"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">
              Tax Included
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="yes"
                  {...register("taxIncluded")}
                  defaultChecked
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="no" {...register("taxIncluded")} />
                No
              </label>
            </div>
          </div>

          <label className="block text-sm font-medium mt-4 mb-1">
            Coupon Code
          </label>
          <input
            {...register("couponCode")}
            type="text"
            placeholder="Enter coupon code (optional)"
            className="w-full border border-gray-200 px-3 py-2 rounded-lg bg-gray-50 outline-none"
          />

          <label className="block text-sm font-medium mt-4 mb-1">
            Expiration
          </label>
          <div className="flex gap-2 text-gray-400">
            <input
              type="date"
              onChange={(e) => setStartDate(new Date(e.target.value))}
              className="w-full border border-gray-200 px-3 py-2 rounded-lg bg-gray-50 outline-none"
            />
            <input
              type="date"
              onChange={(e) => setEndDate(new Date(e.target.value))}
              className="w-full border border-gray-200 px-3 py-2 rounded-lg bg-gray-50 outline-none"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Inventory</h2>
          <label className="block text-sm font-medium mb-1">
            Stock Quantity
          </label>
          <input
            {...register("stockQuantity")}
            type="text"
            placeholder="Enter stock quantity"
            className="w-full border border-gray-200 px-3 py-2 rounded-lg bg-gray-50 outline-none"
          />

          <label className="block text-sm font-medium mt-4 mb-1">
            Stock Status
          </label>
          <select
            value={stockStatus}
            onChange={(e) => setStockStatus(e.target.value)}
            className="w-full border border-gray-200 px-3 py-2 rounded-lg bg-gray-50 outline-none"
          >
            <option>In Stock</option>
            <option>Out of Stock</option>
          </select>

          <label className="flex items-center gap-2 mt-4">
            <input type="checkbox" />
            Highlight this product in a featured section.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Publish Product
        </button>
      </div>

      {/* Right Column */}
      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Upload Product Image</h2>
          {/* Main Image Block */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="border border-gray-200 p-2 rounded mb-4 place-content-center place-items-center">
              <img
                src={mainImage}
                className="w-72 h-72 object-cover border border-gray-100 mb-2 rounded-lg"
              />

              <label className="inline-block border border-gray-100 px-4 py-1 rounded cursor-pointer hover:bg-gray-100">
                Upload image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleMainImageChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Gallery */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-20 h-20 object-cover rounded border"
                />
              ))}

              {/* Add New Image Button */}
              <label className="w-20 h-20 border border-dashed border-gray-200 rounded flex items-center justify-center text-gray-500 cursor-pointer text-3xl font-bold">
                +
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAddToGallery}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Product Category</h2>
          <select
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            className="w-full border border-gray-200 px-3 py-2 rounded-lg bg-gray-50 outline-none"
          >
            <option value="phone">Phone</option>
            <option value="accessory">Accessory</option>
            <option value="tablet">Tablet</option>
            <option value="laptop">Laptop</option>
            <option value="camera">Camera</option>
          </select>
        </div>

        {/* Tags Input */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-1"
              >
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  className="text-xs font-bold"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagAdd}
            placeholder="Type tag & press Enter"
            className="w-full border border-gray-200 px-3 py-2 rounded-lg bg-gray-50 outline-none"
          />
          <p className="text-sm text-gray-500 mt-1">Max 5 tags allowed</p>
        </div>

        {/* Color Selection with Add */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Select Colors</h2>
          <div className="flex gap-3 flex-wrap">
            {colorOptions.map((color, index) => {
              const isSelected = selectedColors.find(
                (c) => c.value === color.value
              );
              return (
                <div
                  key={index}
                  onClick={() => toggleColor(color)}
                  className={`w-8 h-8 rounded cursor-pointer ${
                    color.class || ""
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                >
                  {isSelected && (
                    <div className="w-full h-full rounded ring-2 ring-offset-2 ring-blue-400"></div>
                  )}
                </div>
              );
            })}

            {/* Input for new color hex */}
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={newColorValue}
                onChange={(e) => setNewColorValue(e.target.value)}
                className="w-8 h-8 p-0 border rounded"
              />
              <button
                onClick={addNewColor}
                className="px-3 py-1.5 border border-gray-200 rounded text-sm hover:bg-gray-100"
              >
                Add Color
              </button>
            </div>
          </div>

          {/* Selected Colors */}
          <div className="mt-2 text-sm text-gray-700">
            Selected Colors:{" "}
            {selectedColors.map((c, i) => (
              <span key={i} className="mr-2">
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
