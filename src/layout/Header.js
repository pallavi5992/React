import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import profile from '../assets/img/profile.png';
const Header = (props) => {
  const {handleTrigger}=props
  const [showDropdown, setshowDropdown] = useState(false);
  const [selectshow, setselectshow] = useState(false);
  const dropdown = () => {
    setshowDropdown(!showDropdown) 
    setselectshow(false)
  }
  const selectdropdown = () => { 
    setselectshow(!selectshow)
    setshowDropdown(false)
   }
  return (
    <>
      <div className="content-wrapper">
        <header className="p-3  border-bottom">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="#" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              <i className="bi me-4 text-white fs-4 fa fa-bars" aria-hidden="true"
               onClick={handleTrigger} 
              />
            </a>
            <form className="col-12 col-lg-auto mb-1 mt-1  me-lg-auto me-lg-3">
              <div className="header-search-hs">
                <button className="border-0" type><i className="fa fa-search" /></button>
                <input type="search" className="form-control border-0" placeholder="Search..." aria-label="Search" />
              </div>
            </form>
            <div className="col-lg-auto mb-3 mb-lg-0 me-lg-5">
              <div className="dropdown">
                <div className={`bell-icn position-relative${showDropdown ? " show   " : null}`} aria-hidden="true" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded={showDropdown ? true : false}>
                  <i className="bi text-white fs-5 fa fa-bell " onClick={dropdown} />
                  <span className="pulse-button position-absolute top-0 start-100 translate-middle bg-danger border-0 rounded-circle ">4</span></div>
                <ul className={`dropdown-menu ${showDropdown ? " show " : ""}`} aria-labelledby="dropdownMenuButton2 ">
                  <li><a className="dropdown-item " href="# ">Action</a></li>
                  <li><a className="dropdown-item " href="# ">Another action</a></li>
                  <li><a className="dropdown-item " href="# ">Something else here</a></li>
                </ul>
              </div>
            </div>
            <div className="dropdown text-end dropdown-st">
              <a href="#" className={`link-dark text-decoration-none dropdown-toggle${selectshow ? " show " : ""}`} id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="true" onClick={selectdropdown}>
                <img src={profile} alt="" width={32} height={32} />
                <div className="text-user-n">
                  <h4>Dr. Ali Afdjei</h4>
                  <p>Specialite</p>
                </div>
              </a>
              <ul className={`dropdown-menu text-small${selectshow ? " show " : ""}`} aria-labelledby="dropdownUser1" data-popper-placement="bottom-start">
                {/* <li><a className="dropdown-item" href="#">New project...</a></li> */}
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><Link to="/doctorprofile" className="dropdown-item">Profile</Link></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><Link to="/" className="dropdown-item">Sign out</Link></li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
export default Header