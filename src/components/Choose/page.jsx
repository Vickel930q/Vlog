import Image from "next/image";
import React from "react";
import { FaRegCircleDot } from "react-icons/fa6";

export default function Choose() {
    return (
        <div>
            <div className="container-fluid bg-secondary my-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <Image className="img-fluid w-100" src="/feature.jpg" width={100} height={200} alt="img" />
                        </div>
                        <div className="col-lg-7 py-5 py-lg-0">
                            <h6 className="text-primary text-uppercase font-weight-bold">
                                Why Choose Us
                            </h6>
                            <h1 className="mb-4">
                                Faster, Safe and Trusted Logistics Services
                            </h1>
                            <p className="mb-4">
                                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                                sed diam duo
                            </p>
                            <ul className="list-inline">
                                <li>
                                    <h6>
                                        <i className="far fa-dot-circle text-primary mr-3"><FaRegCircleDot /></i>Best
                                        In Industry
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        <i className="far fa-dot-circle text-primary mr-3"><FaRegCircleDot /></i>
                                        Emergency Services
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        <i className="far fa-dot-circle text-primary mr-3"><FaRegCircleDot /></i>24/7
                                        Customer Support
                                    </h6>
                                </li>
                            </ul>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
