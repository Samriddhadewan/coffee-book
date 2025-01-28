import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div role="tablist" className="tabs flex border w-full tabs-bordered">
      <div className="mx-auto flex gap-40 ">
        {categories.map((category) => (
          <Link
            to={`/category/${category.category}`}
            key={category.id}
            role="tab"
            className="tab border border-red-700 "
          >
            {category.category}.
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
