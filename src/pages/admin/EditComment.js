import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SideBarAdmin from "../../components/admin/SideBarAdmin";
export default function EditComment() {
  const { id } = useParams();
  const history = useNavigate();
  const [comment, setComment] = useState({
    idProject: "",
    idUser: "",
    comment: "",
    reply: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/projects/" + id, {
      method: "PATCH",
      body: JSON.stringify(comment),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => history(`/app/Comments`));
  };
  useEffect(() => {
    fetch("http://localhost:4000/projects/" + id)
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);
  console.log(comment);
  return (
    <div className="flex  justify-start relative  m-0">
      <SideBarAdmin />
      <div className="flex flex-col p-1 relative w-full pl-20">
        <form className="container pr-9 mt-10 " onSubmit={handleSubmit}>
          <div className="p-4 bg-gray-100  dark:bg-slate-800  rounded-lg bg-opacity-5">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4">
                <Link to="app/Users" className="block relative">
                  <img
                    alt="profile"
                    src="	https://source.unsplash.com/random/360x480"
                    className="mx-auto object-cover rounded-full h-16 w-16 "
                  />
                </Link>
                <h1 className="text-gray-600 dark:text-white">Charlie Black</h1>
              </div>
            </div>
          </div>
          <div className="space-y-6 bg-white">
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Project</h2>
              <div className="max-w-sm mx-auto md:w-2/3">
                <div className=" relative ">
                  <input
                    type="text"
                    disabled
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-50 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    name="idProject"
                    value={comment.comment}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Comment</h2>
              <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div>
                  <div className=" relative ">
                    <label className="text-gray-700" htmlFor="name">
                      <textarea
                        className="flex-1 appearance-none border border-gray-50 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        id="comment"
                        placeholder="Enter your comment"
                        name="comment"
                        rows="5"
                        cols="40"
                        value={comment.comment}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <div className=" relative ">
                    <label
                      htmlFor="Toggle1"
                      className="inline-flex items-center space-x-4 cursor-default text-coolGray-800"
                    >
                      <span>Reply</span>
                      <span className="relative">
                        {comment.comment ? (
                          <input
                            id="Toggle1"
                            type="checkbox"
                            className="hidden peer bg-coolGray-700"
                            checked
                            disabled
                            value={comment.comment}
                          />
                        ) : (
                          <input
                            id="Toggle1"
                            type="checkbox"
                            className="hidden peer bg-coolGray-700"
                            disabled
                            value={comment.comment}
                          />
                        )}

                        <div className="w-10 h-6 rounded-full shadow-inner bg-red-300 peer-checked:bg-green-300"></div>
                        <div
                          className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow
                      bg-white peer-checked:right-0 peer-checked:left-auto bg-coolGray-100 peer-checked:bg-white"
                        ></div>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
              <button
                type="submit"
                className="py-2 px-4  bg-blue-800 hover:bg-blue-900 focus:ring-blue-700 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
