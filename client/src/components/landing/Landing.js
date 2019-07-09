import React, { Component } from 'react';
import { Link } from "react-router-dom";
import landingImage from '../../images/bag.png';
import './landings.css';

export default class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="main-sec">
                    <header className="py-sm-3 pt-3 pb-2" id="home">
                        <div className="container">
                            <div className="top-w3pvt d-flex">
                                <div id="logo">
                                    <h1>
                                        <a href="javascript:void(0)">
                                            <span className="log-w3pvt">E</span>
                                            xpense Tracker</a>
                                    </h1>
                                </div>
                                <div className="forms ml-auto">
                                    <Link to="/login" className="btn">
                                        <span className="fa fa-user-circle-o"></span>
                                        Log In
                                    </Link>
                                    {/* <a href="javascript:void(0)" className="btn">
                                        <span className="fa fa-user-circle-o"></span>
                                        Log In
                                    </a> */}
                                    <a href="javascript:void(0)" className="btn">
                                        <span className="fa fa-pencil-square-o"></span>
                                        Sign Up
                                    </a>
                                </div>
                            </div>
                            <div className="nav-top-wthree">
                                <nav>
                                    <label htmlFor="drop" className="toggle">
                                        <span className="fa fa-bars"></span>
                                    </label>
                                    <input type="checkbox" id="drop" />
                                    <ul className="menu">
                                        <li className="active"><a href="javascript:void(0);">Home</a></li>
                                        <li><a href="javascript:void(0)">About Us</a></li>
                                        <li>
                                            <label htmlFor="drop-2" className="toggle">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span>
                                            </label>
                                            <a href="javascript:void(0)">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                                            <input type="checkbox" id="drop-2" />
                                            <ul>
                                                <li><a href="javascript:void(0);" className="drop-text">Services</a></li>
                                                <li><a href="javascript:void(0);" className="drop-text">Features</a></li>
                                                <li><a href="javascript:void(0);" className="drop-text">Single Page</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="javascript:void(0);">Collections</a></li>
                                        <li><a href="javascript:void(0);">Contact</a></li>
                                    </ul>
                                </nav>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </header>
                    <div className="banner-wthree-info container">
                        <div className="row">
                            <div className="col-lg-5 banner-left-info">
                                <h3>The Expense <span>Tracker</span></h3>
                                <a href="javascript:void(0);" className="btn shop">Login</a>
                                <a href="javascript:void(0);" className="btn shop">Register</a>
                            </div>
                            <div className="col-lg-7 banner-img">
                                <img src={landingImage} alt="bgimage" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}