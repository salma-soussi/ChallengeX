import { useState } from "react";

export default function Comments() {
  const [add, setAdd] = useState(true);
  const toggle = () => setAdd((prev) => !prev);
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
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <img
                className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-white">
              <strong>Sarah</strong>{" "}
              <span className="text-xs text-sky-400">3:34 PM</span>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex -space-x-2 mr-2">
                  <img
                    className="rounded-full w-6 h-6 border border-white"
                    src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt=""
                  />
                  <img
                    className="rounded-full w-6 h-6 border border-white"
                    src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt=""
                  />
                </div>
                <div className="text-sm text-rose-500 font-semibold">
                  5 Replies
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <img
                className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-white">
              <strong>Sarah</strong>{" "}
              <span className="text-xs text-sky-400">3:34 PM</span>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <h4
                className="my-5 uppercase tracking-wide text-rose-400 font-bold text-xs"
                onClick={toggle}
              >
                Replies
              </h4>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <img
                      className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                      src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>Sarah</strong>{" "}
                    <span className="text-xs text-sky-400">3:34 PM</span>
                    <p className="text-xs sm:text-sm">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <img
                      className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                      src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>Sarah</strong>{" "}
                    <span className="text-xs text-sky-400">3:34 PM</span>
                    <p className="text-xs sm:text-sm">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="w-full   rounded-lg  pt-2">
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
                name="body"
                placeholder="Type Your Comment"
                required
              ></textarea>
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
