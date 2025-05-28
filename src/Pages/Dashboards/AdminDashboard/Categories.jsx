import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CommonModal from "../../../components/UI/CommonModal";
import { FaCamera } from "react-icons/fa";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState(null);
  const { register, handleSubmit, reset, setValue } = useForm();

  const categoryData = [
    {
      id: 1,
      categoryName: "Electronics",
      categoryImage: "https://picsum.photos/seed/electronics/300/200",
    },
    {
      id: 2,
      categoryName: "Fashion",
      categoryImage: "https://picsum.photos/seed/fashion/300/200",
    },
    {
      id: 3,
      categoryName: "Home & Kitchen",
      categoryImage: "https://picsum.photos/seed/homekitchen/300/200",
    },
    {
      id: 4,
      categoryName: "Books",
      categoryImage: "https://picsum.photos/seed/books/300/200",
    },
    {
      id: 5,
      categoryName: "Toys & Games",
      categoryImage: "https://picsum.photos/seed/toys/300/200",
    },
    {
      id: 6,
      categoryName: "Sports",
      categoryImage: "https://picsum.photos/seed/sports/300/200",
    },
    {
      id: 7,
      categoryName: "Beauty",
      categoryImage: "https://picsum.photos/seed/beauty/300/200",
    },
    {
      id: 8,
      categoryName: "Automotive",
      categoryImage: "https://picsum.photos/seed/automotive/300/200",
    },
    {
      id: 9,
      categoryName: "Grocery",
      categoryImage: "https://picsum.photos/seed/grocery/300/200",
    },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      setValue("categoryImage", url); // store image URL in form state
    }
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
    toast.success("Category added successfully!");
    setShowModal(false);
    reset();
    setPreview(null);
  };

  return (
    <div className="p-10">
      <Toaster position="top-right" />
      <SectionTitle title="Categories" />
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-[#023337]">
          Categories List
        </h1>
        <button onClick={() => setShowModal(true)}>
          <span className="text-white bg-[#006850] p-3 rounded-lg">
            Add Category
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className=" border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-4"
          >
            <img
              src={category.categoryImage}
              alt={category.categoryName}
              className="w-20 h-20 object-cover rounded border border-gray-200"
            />
            <h3 className="text-xl font-semibold mb-2">
              {category.categoryName}
            </h3>
          </div>
        ))}
      </div>

      <CommonModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          reset();
          setPreview(null);
        }}
        title="Add New Category"
      >
        <div className="p-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category Name
              </label>
              <input
                type="text"
                {...register("categoryName", { required: true })}
                className="mt-1 block w-full border border-gray-300 rounded-md outline-none shadow-sm p-2"
                placeholder="Enter category name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category Image
              </label>

              <label className="relative flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4 cursor-pointer hover:border-[#006850] transition aspect-video overflow-hidden">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                ) : (
                  <>
                    <FaCamera className="text-3xl text-gray-400 mb-2 z-10" />
                    <span className="text-sm text-gray-500 z-10">
                      Click to upload
                    </span>
                  </>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#006850] text-white p-3 rounded-lg hover:bg-[#005740]"
            >
              Add Category
            </button>
          </form>
        </div>
      </CommonModal>
    </div>
  );
};

export default Categories;
