import * as FaIcons from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav__left">
          <img src={Logo} className="nav__left__logo" alt="logo" />
          <ul className="nav__left__list">
            <li className="nav__left__list__item">Categories</li>
            <li className="nav__left__list__item">Courses</li>
          </ul>
        </div>
        <div className="nav__right">
          <form className="nav__right__search">
            <input
              type="text"
              className="nav__right__search__input"
              placeholder="Search Courses..."
            />
            <button className="nav__right__search__button">
              <FaIcons.FaSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navigation;


// import React from "react";
// import Logo from "../assets/logo.png"
// import Falcons  from 'react-icons/fa';

// //import * as Falcons from "react-icon/fa";

// const Navigation = () => {
//     return(
//         <div className="nav-container">
//             <div className="nav">
//                 <div className="nav__left">
//                     <img src={Logo} alt="Logo"></img>
//                     <ul className="nav__left__list"> 
//                         <div className="nav__left__list">Categories</div>
//                         <div className="ul nav__left__list_item">Courses</div>
//                     </ul>
//                 </div>
//                 <div className="nav__right">
//                     <form className="nav_right_search">
//                         <input type="text"
//                         className="nav__right__search__input"
//                         placeholder="Search Courses..."
//                          />
//                          <button className="nav__right__search__button">
//                             <Falcons.FaSearch />

//                          </button>
//                     </form>
//                 </div>


//             </div>

//         </div>
//     )
// }

// export default Navigation;