/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from "../visitor/Card";
export default function LastProject() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-sky-500 tracking-widest font-medium title-font mb-1">
            LATEST CHALLENGES
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Our newest Challenges
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex flex-col text-center w-full mt-10">
          <a className="text-rose-500 tracking-widest font-medium title-font mb-1 text-center self-center inline-flex items-center">
            <a href="Challenges" className="cursor-pointer">Learn More</a>
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
