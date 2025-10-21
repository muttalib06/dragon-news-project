import React from "react";
import Header from "../../Components/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSide from "../../Components/homeLayouts/LeftSide";
import { Outlet } from "react-router";
import RightSide from "../../Components/homeLayouts/RightSide";

const HomeLayout = () => {
  return (
    <>
      <header className="max-w-[80%] mx-auto">
        <Header></Header>

        <div className="inline-block mt-5 bg-[#F3F3F3] py-3 px-3">
          <div className="flex gap-5">
            <button className="bg-[#D72050] text-white py-1 px-2 rounded">Latest</button>
           <Marquee>
             <p className="font-semibold">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
             <p className="font-semibold">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
             <p className="font-semibold">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
           </Marquee>
          </div>
        </div>
        <Navbar></Navbar>
      </header>
      <main className="max-w-[80%] mx-auto mt-8 grid grid-cols-12 gap-5">
        <section className="col-span-3 sticky top-5 h-fit">
          <LeftSide></LeftSide>
        </section>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <section className="col-span-3 sticky top-5 h-fit">
          <RightSide></RightSide>
        </section>
      </main>
    </>
  );
};

export default HomeLayout;
