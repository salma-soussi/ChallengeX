import { Link } from "react-router-dom";

export default function UserElTab({ user, deleted }) {
  return (
    <tr>
      <td
        className="px-5 py-3 border-b border-gray-200 bg-white text-sm"
        key={user._id}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link to="#" className="block relative">
              <img
                alt="profile"
                src="https://source.unsplash.com/random/360x480"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </Link>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap flex-nowrap">
              {user.name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user.body}</p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        {user.email}
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user.createdAt}</p>
      </td>
      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm ">
        <form onSubmit={() => deleted(user._id)}>
          <button className="text-sky-600 hover:text-sky-900" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5  text-red-600 hover:text-red-900"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </td>
    </tr>
  );
}
