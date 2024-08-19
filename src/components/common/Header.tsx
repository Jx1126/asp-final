import logo from "/logo_black.png?url";
import { Link } from "react-router-dom";
import { useState } from 'react';

import AuthMenu from './AuthMenu';

function Header() {

  const [isAuthMenuOpen, setAuthMenuOpen] = useState(false);

  const openAuthMenu = () => {
    setAuthMenuOpen(true);
  }

  const closeAuthMenu = () => {
    setAuthMenuOpen(false);
  }

  return (
    <>
      <div className="relative z-10">
        <div className="navbar bg-slate-300 text-white text-lg font-semibold">
          <div className="navbar-start">
            <Link to='/' className="flex items-center">
              <img
                src={logo}
                className="w-10 h-auto hover:cursor-pointer"
                alt="FinanceForge logo"
              />
              <p className="text-slate-800 hidden sm:block sm:text-base md:text-lg hover:cursor-pointer ml-2">FinanceForge</p>

            </Link>
          </div>

          <div className="navbar-center">
            <div className="hidden sm:block">
              <div className="menu menu-horizontal">
                <Link to="/finance-manager" className="btn btn-ghost">Finance Manager</Link>
                <Link to="/jobs-wealth" className="btn btn-ghost">Jobs & Investment</Link>
                <Link to='/scam-awareness' className="btn btn-ghost">ScamShield</Link>
              </div>
            </div>

            <div className="navbar-center sm:hidden">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary className="text-slate-800  ">Menu</summary>
                    <ul className="p-2 bg-slate-300 text-black">
                      <li>
                        <Link to="/finance-manager">Finance Manager</Link>
                      </li>
                      <li>
                        <Link to="/jobs-wealth">Jobs & Investment</Link>
                      </li>
                      <li>
                        <Link to="/scam-awareness">ScamShield</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-end">
            <button onClick={openAuthMenu} className="btn btn-primary text-base md:text-lg ease-in-out">
              Login
            </button>
          </div>
        </div>
      </div>
      {isAuthMenuOpen && <AuthMenu closeAuthMenu={closeAuthMenu} />}
    </>
  );
}

export default Header;
