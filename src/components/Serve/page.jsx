import React from 'react'
import Image from 'next/image'
import { FaRegCircleDot } from "react-icons/fa6";

export default function Services() {
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
                            Our Services
                        </h6>
                        <h1 className="mb-4">
                            Fast and Reliable
                        </h1>
                        <p className="mb-4">
                          We offer a comprehensive range of logistics services tailored to meet the diverse needs of our clients. Our services include:
                        </p>
                        <ul className="list-inline">
                            <li>
                                <h6>
                                    <i className="far fa-dot-circle text-primary mr-3"><FaRegCircleDot /></i>Freight Transportation: Efficient and reliable transportation solutions for a variety of <br /> goods, ensuring timely deliveries across domestic and international routes.
                                </h6>
                            </li>
                            <li>
                                <h6>
                                    <i className="far fa-dot-circle text-primary mr-3"><FaRegCircleDot /></i>
                                    Warehousing and Distribution: Secure storage facilities and advanced distribution networks designed to optimize your inventory management and streamline your supply chain.
                                </h6>
                            </li>
                            <li>
                                <h6>
                                    <i className="far fa-dot-circle text-primary mr-3"><FaRegCircleDot /></i>24/7
                                    Customs Brokerage: Expert handling of customs clearance processes to facilitate smooth and hassle-free international trade.
                                </h6>
                            </li>
                            <li>
                                <h6>
                                    <i className="far fa-dot-circle text-primary mr-3"><FaRegCircleDot /></i>24/7
                                    Supply Chain Solutions: Customized solutions to enhance your supply chain performance, reduce costs, and improve operational efficiency.
                                </h6>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
