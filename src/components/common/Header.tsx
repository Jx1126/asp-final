import logo from "/logo_black.png?url";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

import AuthMenu from './AuthMenu';

function Header() {

  const url = useLocation();
  const [isAuthMenuOpen, setAuthMenuOpen] = useState(false);

  useEffect(() => {
    const publicRoutes = ['/', '/scam-awareness'];
    publicRoutes.includes(url.pathname) ? setAuthMenuOpen(false) : setAuthMenuOpen(true);
  }, [location]);

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
              <p className="text-slate-800 hidden sm:block md:text-lg hover:cursor-pointer ml-2">FinanceForge</p>

            </Link>
          </div>

          <div className="navbar-center">
            <div className="hidden sm:block">
              <div className="menu menu-horizontal">
                <a href="#features" className="btn btn-ghost">Features</a>
                <a href="#testimonials" className="btn btn-ghost">Testimonials</a>
                <Link to='/scam-awareness' className="btn btn-ghost">ScamShield</Link>
              </div>
            </div>

            <div className="navbar-center sm:hidden">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary className="text-slate-800  ">Menu</summary>
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
