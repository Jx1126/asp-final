import logo from "/logo_white.png?url";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar bg-blue-600 text-white text-lg font-semibold">
      <div className="navbar-start">
        <Link to='/' className="flex items-center">
          <img
            src={logo}
            className="w-10 h-auto hover:cursor-pointer"
            alt="FinanceForge logo"
          />
          <p className="text-base md:text-lg hover:cursor-pointer ml-2">FinanceForge</p>
        </Link>
      </div>

      <div className="navbar-center">
        <div className="hidden sm:block">
          <div className="menu menu-horizontal">
            <a className="btn btn-ghost">Features</a>
            <a className="btn btn-ghost">Testimonials</a>
            <Link to='/scam-awareness' className="btn btn-ghost">ScamShield</Link>
          </div>
        </div>

        <div className="navbar-center sm:hidden">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="text-base">Menu</summary>
                <ul className="p-2 bg-black">
                  <li><a>Features</a></li>
                  <li><a>Testimonials</a></li>
                  <li><Link to='/scam-awareness' >ScamShield</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <a href="#" className="btn btn-secondary text-base md:text-lg !border-white !text-white hover:!border-gray-200 ease-in-out">
          Login
        </a>
      </div>
    </div>
  );
}

export default Header;
