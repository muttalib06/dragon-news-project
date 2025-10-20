import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const News = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 bg-gray-50">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="font-semibold text-gray-800">{author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString("en-CA")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-blue-600" />
          <FaShareAlt className="cursor-pointer hover:text-blue-600" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-5 pt-4 text-xl font-semibold text-gray-800 leading-snug hover:text-blue-600 transition">
        {title}
      </h2>

      {/* Thumbnail */}
      <div className="px-5 mt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-md w-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="px-5 py-4 text-gray-700 text-sm leading-relaxed">
        {details.slice(0, 180)}...
        <span className="text-orange-500 font-semibold cursor-pointer hover:underline ml-1">
          Read More
        </span>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t flex justify-between items-center text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-700 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default News;
