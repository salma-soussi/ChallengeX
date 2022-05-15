/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
export default function NavBar() {
  return (
    <header className="text-gray-500 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-4xl font-bold">ChallengeX</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
          <a href="/" className="mr-5 hover:text-gray-900 font-light text-lg  hover:font-semibold">
            Home
          </a>
          <a href="Challenges" className="mr-5 hover:text-gray-900 font-light text-lg hover:font-semibold">
            Challenges
          </a>
          <a href="Contact" className="mr-5 hover:text-gray-900 font-light text-lg hover:font-semibold">
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="py-2 px-4  bg-rose-500 hover:bg-rose-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 w-32 rounded-full tex"
        >
        <Link to="signIn">Sign in</Link>
          
        </button>
        <DropDownMenu />
      </div>
    </header>
  );
}
