export default function Pagination({
  elementParPage,
  totalElements,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalElements / elementParPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="px-5 bg-3hite py-2 flex flex-col xs:flex-row items-center xs:justify-between dark:bg-gray-800 dark:text-white">
      <div className="flex items-center">
        <button
          type="button"
          className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
          onClick={() => (currentPage > 1 ? paginate(currentPage - 1) : "")}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
        {pageNumbers.map((num) => {
          return num === currentPage ? (
            <button
              type="button"
              className="w-full px-4 py-2 border text-base text-indigo-500 bg-white hover:bg-gray-100 "
              onClick={() => paginate(num)}
            >
              {num}
            </button>
          ) : (
            <button
              key={num}
              type="button"
              className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
              onClick={() => paginate(num)}
            >
              {num}
            </button>
          );
        })}
        <button
          type="button"
          className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
          onClick={() =>
            currentPage < pageNumbers[pageNumbers.length - 1]
              ? paginate(currentPage + 1)
              : ""
          }
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
