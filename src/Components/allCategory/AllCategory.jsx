import React, { use } from "react";
import { NavLink } from "react-router";

const AllCategory = ({ categoryPromise }) => {
  const categories = use(categoryPromise);
  return (
    <div>
      <ul className="text-[#9F9F9F] space-y-4 mt-3 flex flex-col justify-center items-start">
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              to={`/categoryNews/${category.id}`}
              className={({ isActive }) => (isActive ? " text-black px-3 py-2 rounded-md border-0 bg-[#E7E7E7]" : "hover:bg-[#E7E7E7] hover:px-3 hover:py-2 hover:rounded-md hover:border-0")}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCategory;
