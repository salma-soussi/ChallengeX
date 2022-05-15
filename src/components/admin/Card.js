import { Link } from "react-router-dom";

export default function Card({ data }) {
  const tags = data.tags.map((tag, index) => (
    <div
      className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl"
      key={index}
    >
      {tag}
    </div>
  ));
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-4">
      <Link to={`/app/Projects/${data._id}`} className="w-full block h-full">
        <img
          alt="blog"
          src="https://source.unsplash.com/random/360x480"
          className="max-h-40 w-full object-cover"
        />
        <div className="bg-white dark:bg-gray-800 w-full p-4">
          <p className="text-indigo-500 text-md font-medium">{data.type}</p>
          <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
            {data.title}
          </p>
          <p className="text-gray-400 dark:text-gray-300 font-light text-md">
            {data.description}
          </p>
          <div className="flex flex-wrap justify-starts items-center mt-4">
            {tags}
          </div>
        </div>
      </Link>
    </div>
  );
}
