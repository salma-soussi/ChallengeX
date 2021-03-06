import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClosedComment from "./ClosedComment";
import OpenComment from "./OpenComment";
import ReplyComment from "./ReplyComment";
import SimpleComment from "./SimpleComment";

export default function Comments({ idProject, idUser }) {
  const [add, setAdd] = useState(true);
  const toggle = (idC) => {
    setAdd((prev) => !prev);
    if (!add) {
      comment.reply = "";
    } else {
      comment.reply = idC;
    }
  };
  const history = useNavigate();
  const [comment, setComment] = useState({
    idProject: idProject,
    idUser: "123",
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
    fetch("http://localhost:4000/comments/", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => history(`/Challenges/${idProject}`));
  };
  console.log(comment);
  return (
    <section>
      <div className="antialiased container px-5 pt-12 mx-auto lg:w-10/12 ">
        <div className="flex flex-col text-center w-full mb-14">
          <h2 className="text-xs text-sky-500 tracking-widest font-medium title-font mb-1">
            COMMENTS
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Our challengers Comments
          </h1>
        </div>

        <div className="space-y-4">
          <SimpleComment />
          <ClosedComment />
          <OpenComment toggle={toggle} idComment="456" />
          <form className="w-full   rounded-lg  pt-2" onSubmit={handleSubmit}>
            {add ? (
              <h2 className="pt-3 pb-2 text-gray-800 text-lg tracking-widest font-medium title-font uppercase">
                Add a new comment
              </h2>
            ) : (
              <h2 className="pt-3 pb-2 text-gray-800 text-lg tracking-widest font-medium title-font uppercase">
                Reply to a comment
              </h2>
            )}

            <div className="w-full md:w-full mb-2 mt-2">
              <textarea
                className="bg-white-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="comment"
                placeholder="Type Your Comment"
                required
                value={comment.comment}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-full flex justify-end ">
              <input
                type="submit"
                className="bg-rose-500 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-white transition ease-in duration-200 text-center text-base font-medium py-1 px-4 rounded-lg tracking-wide   self-end"
                value="Post Comment"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
