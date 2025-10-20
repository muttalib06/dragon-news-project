import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import News from "../../Components/News/News";

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
        <h2 className="font-semibold">News Found {categoryNews.length}</h2>

        <div className="grid grid-cols-1 gap-3 mt-5">
                {categoryNews.map(news => <News key={news.id} news={news}></News>)}

        </div>
       
    </div>
  );
};

export default CategoryNews;
