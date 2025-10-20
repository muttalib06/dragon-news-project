import React, { use } from "react";
import { NavLink } from "react-router";

const AllCategory = ({ categoryPromise }) => {
  const categories = use(categoryPromise);
  return (
    <div>
      <ul className="text-[#9F9F9F] space-y-2 mt-3 flex flex-col justify-center items-start">
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              to={`/categoryNews/${category.id}`}
              className={({ isActive }) => (isActive ? "btn border-0 bg-[#E7E7E7]" : "hover:btn border-0")}
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
