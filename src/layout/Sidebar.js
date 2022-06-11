import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/img/Logo.png'
import { sidebar_details } from '../ApiData';
const Sidebar = () => {
    const [addActive, setaddActive] = useState(sidebar_details)
    const onActive = (e, index) => {
        addActive.map((item, i) => {
            if (index == i) {
                item.status = "active"
            }
            else {
                item.status = ""
            }
        })
        setaddActive(setaddActive)
    }
    return (
        <>
            <div class="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar-style">
                <div class="toggle-btn">
                    <i class="bi me-4 fs-4 fa fa-close" aria-hidden="true"></i>
                </div>
                <a href="#" class="text-decoration-none">
                    <span class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none justify-content-center dsh-logo">
                        <img src={logo} />
                    </span>
                </a>
                <div class="hr-style"></div>
                <ul class="nav nav-pills flex-column mb-auto mt-3">
                    {addActive.map((ele, index) => {
                        return (
                            <li class="nav-item">
                                <Link
                                    to={ele.url}
                                    key={index}
                                    className={`nav-link ${ele.status}`}
                                    onClick={(e) => onActive(e, index)}
                                    aria-current="page">
                                    {ele.icon}
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ele.name}</span>
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </>
    )
}
export default Sidebar