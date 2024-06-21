import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";


export default function Footer() {
  return (
    <div>
        <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
            <div className="col-lg-7 col-md-6">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Get In Touch</h3>
                        <p><i className="fa fa-map-marker-alt mr-2"><FaMapMarkerAlt /></i> 406, Bridge Cir, Covinton GA, 30016 USA</p>
                        <p><i className="fa fa-phone-alt mr-2"><FaPhoneAlt /></i>+1 905-3543-374</p>
                        <p><i className="fa fa-envelope mr-2"><FaRegEnvelope /></i>vikeslogistics@gmail.com</p>
                        <div className="d-flex justify-content-start mt-4">
                            <Link className="btn btn-outline-light btn-social mr-2" href="#"><i className="fab fa-twitter"><FaXTwitter /></i></Link>
                            <Link className="btn btn-outline-light btn-social mr-2" href="#"><i className="fab fa-facebook-f"><FaFacebook /></i></Link>
                            <Link className="btn btn-outline-light btn-social mr-2" href="#"><i className="fab fa-linkedin-in"><FaLinkedin /></i></Link>
                            <Link className="btn btn-outline-light btn-social" href="#"><i className="fab fa-instagram"><IoLogoInstagram /></i></Link>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Quick Links</h3>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"><IoIosArrowForward /></i>Home</Link>
                            <Link className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"><IoIosArrowForward /></i>About Us</Link>
                            <Link className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"><IoIosArrowForward /></i>Our Services</Link>
                            <Link className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"><IoIosArrowForward /></i>Pricing Plan</Link>
                            <Link className="text-white" href="#"><i className="fa fa-angle-right mr-2"><IoIosArrowForward /></i>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 mb-5">
                <h3 className="text-primary mb-4">Newsletter</h3>
                <p>Subscribe To Our Newsletter</p>
                <div className="w-100">
                    <div className="input-group">
                        <input type="text" className="form-control border-light" style={{padding: 30}} placeholder="Your Email Address"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary px-4">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5">
        <div className="row">
            <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p className="m-0 text-white">&copy; VIKE LOGISTICS. All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 text-center text-md-right">
                <ul className="nav d-inline-flex">
                    <li className="nav-item">
                        <Link className="nav-link text-white py-0" href="#">Privacy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white py-0" href="#">Terms</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white py-0" href="#">FAQs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white py-0" href="#">Help</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}
