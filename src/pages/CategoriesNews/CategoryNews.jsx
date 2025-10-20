import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();
  const idNumber = Number(id);

  const newsData = useLoaderData();
  useEffect(() => {
    if (idNumber === 0) {
      setCategoryNews(newsData);
      return;
    } else if (idNumber === 1) {
      const filteredData = newsData.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filteredData);
    } else {
      const filteredData = newsData.filter(
        (news) => news.category_id === idNumber
      );
     setCategoryNews(filteredData)
    }
  }, [idNumber, newsData]);

  return (
    <div>
      <h2 className="font-semibold">Category News {categoryNews.length}</h2>
    </div>
  );
};

export default CategoryNews;
