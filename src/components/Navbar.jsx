import { useState } from "react";
import Logo from "../assets/images/png/Logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [navopen, setNavopen] = useState("false");
  function navOpen() {
    setNavopen(!navopen);
  }
  return (
    <>
      <div className="navbar_bg padding_24 m-0 position-relative">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center  m-0">
            <div>
              <img className="" src={Logo} alt="logo" />
            </div>

            <ul className="d-flex gap-4 align-items-center flex-column flex-lg-row nav_links">
              <li className="cursor_pointer fs_16 fw-normal ff_inter">
                <Link className="text-white nav_design" to="/">
                  Home
                </Link>
              </li>
              <li className="cursor_pointer fs_16 fw-normal ff_inter">
                <Link className="text-white nav_design" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="cursor_pointer fs_16 fw-normal ff_inter">
                <Link className="text-white nav_design" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="cursor_pointer fs_16 fw-normal ff_inter">
                <Link className="text-white nav_design" to="/contact">
                  Contact us
                </Link>
              </li>
              <button
                className="subscribe_btn ms-2 fs_18 fw-bold ff_sen"
                type="submit "
              >
                Subscribe
              </button>
            </ul>

            <div
              className="d-flex flex-column d-lg-none menu"
              onClick={navOpen}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
