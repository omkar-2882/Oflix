import React, { useEffect, useState } from "react";
import logo from "./netflixlogo.png";
import "./Navbar.css";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isScrolled ? "black-bg" : ""
  return (
    <>
      <header className={headerClass}>
        <div className="header-container container">
          <div className="left-cont">
            <img src={logo} alt="" />

            <ul className="nav-list">
              {/* <li className="nav-item active">Home</li> */}
              {/* <li className="nav-item">Tv Shows</li>
              <li className="nav-item">Movies</li>
              <li className="nav-item">News & Popular</li>
              <li className="nav-item">My List</li>
              <li className="nav-item">Browse By Languages</li> */}
            </ul>
          </div>
          <div className="right-cont">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-bell"></i>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
