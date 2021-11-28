import React, { useEffect, useState, useContext } from 'react'
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../Store/Fb_Context'

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div id="header" class="header fixed-top ">
            <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

                <a href="/" class="logo d-flex align-items-center">
                    <img src="../../../Image/logo .png" alt="" />
                    <span>SMS APP</span>
                </a>

                <nav id="navbar" class={isMobile ? "navbar-mobile" : "navbar"}>
                    <ul
                    // onClick={()=>setIsMobile(false)}
                    >
                        <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a class="nav-link scrollto" href="#about">About</a></li>

                        <li><a class="nav-link scrollto" href="#contact">Report</a></li>

                        {/* {user ? <li class="dropdown" ><a class="getstarted scrollto"> {user.Name} <i class="bi bi-chevron-down"></i></a>
                            <ul class="dropdown-active">
                                <li><a href="/form">Logout</a></li>

                            </ul>
                        </li> : <li><a class="getstarted scrollto" href="#contact">LOGIN</a></li>} */}


                        <li class="dropdown" ><a class="getstarted scrollto">LOGIN<i class="bi bi-chevron-down"></i></a>
                            <ul class="dropdown-active">
                                <li><a href="/form">Logout</a></li>
                            </ul>
                        </li>

                    </ul>
                    <i class="mobile-menu-icon"
                        onClick={() => setIsMobile(!isMobile)}
                    >
                        {isMobile ? (
                            <i class="bi bi-x"></i>
                        ) : (
                            <i class="bi bi-list"></i>
                        )}
                    </i>

                </nav>
                {/* -- .navbar --*/}

            </div>
        </div>
    )
}

export default Header


{/* <i class="bi bi-list mobile-nav-toggle"></i> */ }