import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import RightSide from "../../Components/homeLayouts/RightSide";
import { NavLink, useLoaderData, useParams } from "react-router";
import NewsDetailCard from "../../Components/NewsDetailCard";

const NewsDetail = () => {
  const [newsDetail, setNewsDetail] = useState({});
  const { id } = useParams();
  console.log(typeof id)
  const newsData = useLoaderData();
  useEffect(() => {
    const findNews = newsData.find((news) => news.id === id);
    setNewsDetail(findNews)
  }, [id,newsData]);
  return (
    <div className="max-w-[80%] mx-auto">
      <header>
        <Header></Header>
      </header>

      <main className="grid grid-cols-12 gap-6">
        <div className="col-span-9 space-y-4">
          <h2 className="font-semibold">Dragon News</h2>
          <div className="space-y-5">
                <NewsDetailCard newsDetail={newsDetail}></NewsDetailCard>

                <NavLink to={`/categoryNews/${newsDetail.category_id}`} className="bg-[#D72050] text-white py-1 px-2 py-2 rounded">All news in this category</NavLink>
          </div>
        </div>
        <div className="col-span-3">
          <RightSide></RightSide>
        </div>
      </main>
    </div>
  );
};

export default NewsDetail;
