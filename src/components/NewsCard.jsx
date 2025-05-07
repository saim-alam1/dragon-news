import { FaStar, FaEye, FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    published_date,
    rating,
    total_view,
    details,
  } = news;

  // console.log(thumbnail_url);

  return (
    <div className="card bg-base-100 border-1 border-base-300 rounded-xl">
      <div className="flex items-center justify-between gap-3 p-4">
        <div className="flex items-center gap-3.5">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author?.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <FaRegBookmark size={20} className="cursor-pointer"></FaRegBookmark>
          <IoShareSocialOutline size={20} className="cursor-pointer"></IoShareSocialOutline>
        </div>
      </div>

      <h2 className="font-bold px-4 cursor-pointer hover:underline">{title}</h2>

      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="rounded-xl max-h-52 object-cover w-full"
        />
      </figure>

      <div className="card-body pt-2">
        <p className="text-sm text-gray-600">
          {details.length > 150
            ? details.slice(0, 150) + "..."
            : details}
        </p>
        <Link to={`/news-details/${id}`} className="text-orange-600 font-semibold cursor-pointer hover:underline w-fit">
          Read More
        </Link>
        <div className="card-actions justify-between items-center mt-2 text-sm text-gray-700">
          <div className="flex items-center gap-1 text-orange-500">
            <FaStar /> {rating.number}
          </div>
          <div className="flex items-center gap-1">
            <FaEye /> {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;