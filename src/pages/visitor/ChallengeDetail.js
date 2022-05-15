export default function ChallengeDetail() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto lg:w-10/12 ">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-sky-500 tracking-widest font-medium title-font mb-1">
            CHALLENGE
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Our challenge detail
          </h1>
        </div>
        <div className="flex flex-wrap px-5mx-auto">
          <div className="md:w-1/2 md:pr-12 md:py-8 ">
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Brief
            </h2>
            <p className="leading-relaxed text-base">
              Locavore cardigan small batch roof party blue bottle blog meggings
              sartorial jean shorts kickstarter migas sriracha church-key synth
              succulents. Actually taiyaki neutra, distillery gastropub pok pok
              ugh.
            </p>

            <button
              type="button"
              className="py-2 px-4 flex justify-center items-center  bg-rose-500 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full mt-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download . ZIP
            </button>
          </div>
          <div className="md:w-1/2 md:pr-12 md:py-8 md:pl-12 ">
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 pb-1">
              Getting started
            </h2>
            <ol className="">
              <li className="list-decimal ml-5 py-1 ">
                Download the starter code
              </li>
              <li className="list-decimal ml-5 py-1">
                Set up the project with version control (e.g. Git)
              </li>
              <li className="list-decimal ml-5 py-1">
                Read the README.md file and have a look around the project
              </li>
              <li className="list-decimal ml-5 py-1">
                Download the design file, we provide both Sketch and Figma
                versions of the design
              </li>
              <li className="list-decimal ml-5 py-1">
                Get colors, fonts, etc. from the design system in the design
                file
              </li>
              <li className="list-decimal ml-5 py-1">
                Set up your project/file architecture however you want
              </li>
              <li className="list-decimal ml-5 py-1">Start coding!</li>
            </ol>
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 py-2">
              Ideas to test yourself
            </h2>
            <ul className="leading-relaxed text-base">
              <li className="list-disc ml-5 py-1">
                {" "}
                Write your styles using a pre-processor, such as Sass, Less or
                Stylus
              </li>
              <li className="list-disc ml-5 py-1">
                Train your eye for detail by getting your solution as close to
                the design as you can
              </li>
              <li className="list-disc ml-5 py-1">
                Try estimating the time it will take for you to build the
                project. Then see if the time taken matches up to your estimate.
                Project estimations are a skill that is often overlooked but is
                important for professional developers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
