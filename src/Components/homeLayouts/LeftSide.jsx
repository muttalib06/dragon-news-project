import React, { Suspense } from "react";
import AllCategory from "../allCategory/AllCategory";
const categoryPromise = fetch("/categories.json").then((res) => res.json());


const LeftSide = () => {
  return (
    <div>
      <h2 className="font-semibold">All Category</h2>
      <Suspense fallback={<h2>loading....</h2>}>
        <AllCategory categoryPromise={categoryPromise}></AllCategory>
      </Suspense>
    </div>
  );
};

export default LeftSide;
