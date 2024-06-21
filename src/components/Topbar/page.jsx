import Link from 'next/link'
import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";

export default function Topbar() {
    return (
        <div className='wrap'>
            <div className="container-fluid bg-dark">
                <div className="row py-2 px-lg-5">
                    <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center text-white">
                            <small><i className="fa fa-phone-alt mr-2"><FaPhoneAlt /></i><Link href="tel: +1 905-3543-374"> +1 905-3543-374</Link></small>
                            <small className="px-3">|</small>
                            <small><i className="fa fa-envelope mr-2"><FaRegEnvelope /></i><Link href="mailto: vikeslogistics@gmail.com"> vikeslogistics@gmail.com</Link></small>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <Link className="text-white px-2" href="">
                                <i className="fab fa-facebook-f"><FaFacebook /></i>
                            </Link>
                            <Link className="text-white px-2" href="">
                                <i className="fab fa-twitter"><FaXTwitter /></i>
                            </Link>
                            <Link className="text-white px-2" href="">
                                <i className="fab fa-linkedin-in"><FaLinkedin /></i>
                            </Link>
                            <Link className="text-white px-2" href="">
                                <i className="fab fa-instagram"><IoLogoInstagram /></i>
                            </Link>
                            <Link className="text-white pl-2" href="">
                                <i className="fab fa-youtube"><FaYoutube /></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
