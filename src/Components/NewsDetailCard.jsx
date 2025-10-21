import React from "react";

const NewsDetailCard = ({ newsDetail }) => {
  const { image_url, details, title } = newsDetail;
  return (
    <div className="space-y-4">
      <img className="w-full h-96" src={image_url} alt="" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-justify">{details}</p>
    </div>
  );
};

export default NewsDetailCard;
