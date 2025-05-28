import { Link } from "react-router-dom";

const CategoriesOverview = () => {
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
  ];

  return (
    <div className=" p-3 border border-gray-200 rounded-lg shadow-lg">
      <div className="">
        <p className="text-xl font-semibold mb-3">Categories</p>
        {categoryData.map((category) => (
          <div
            key={category.id}
            className=" border border-gray-200 p-3 mb-2 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 "
          >
            <div className="flex items-center gap-3">
              <img
                src={category.categoryImage}
                alt={category.categoryName}
                className="w-12 h-12 object-cover rounded border border-gray-200"
              />
              <h3 className="font-semibold">{category.categoryName}</h3>
            </div>
          </div>
        ))}
        <div className="text-center mt-4 mb-2">
          <Link className="underline text-purple-700">
            View All Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesOverview;
