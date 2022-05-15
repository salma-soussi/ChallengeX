import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Improve your coding skills by building real projects
          </h1>
          <p className="mb-8 leading-relaxed">
            Solve real-world challenges whilst working to professional designs
            and algorithms. Join 355,533 developers building projects, reviewing
            code, and helping each other get better.
          </p>

          <button
            type="button"
            className=" py-2 px-4  bg-rose-500 hover:bg-rose-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 w-32 rounded-full"
          >
            <Link to="signIn">Sign in</Link>
          </button>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://source.unsplash.com/random/720x600"
          />
        </div>
      </div>
    </section>
  );
}
