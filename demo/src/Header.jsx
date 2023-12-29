
import React from 'react'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light   ">
                <div className="container">
                    <a className="navbar-brancdd" href="#"><img src='https://htmldemo.net/bakerfresh/bakerfresh/assets/images/logo.svg'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a style={{color:'#BC8157'}} className="nav-link active fw-bold" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  fw-bold text-dark" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled  fw-bold text-dark" href="#" tabIndex={-1} aria-disabled="true">Pages</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link disabled  fw-bold text-dark" href="#" tabIndex={-1} aria-disabled="true">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled  fw-bold text-dark" href="#" tabIndex={-1} aria-disabled="true">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex fs-5 align-items-center justify-content-between text-dark">
                        <i  class="fa-solid fa-magnifying-glass"></i>
                        <i class="fa-solid fa-cart-shopping px-4"></i>
                        <i class="fa-solid fa-user"></i>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header;