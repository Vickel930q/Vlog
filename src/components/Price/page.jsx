"use client"
import React from 'react'
import Testimonial from '../Testimonial/page'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import CheckoutButton, { Checkpage } from '@/checkout'

export default function Price() {
    const [planName, setPlanName] = useState("");
    const [price, setPrice] = useState("");
  
    const router = useRouter()
    
    // useEffect(() => {
    //     const query = new URLSearchParams(window.location.search);
    //     setPlanName(query.get("planName"));
    //     setPrice(query.get("price"));
    //   }, []);

    // const handleOrderClick = (planName, price) => {
    //     Swal.fire({
          
    //         title: `Are you sure you want to confirm the order for the ${planName} plan?`,
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "green",
    //         cancelButtonColor: "red",
    //         confirmButtonText: "Yes, Order it!"

    //     }).then((result) => {
    //         if (result.isConfirmed) {

    //             Swal.fire({
    //                 title: "Order Confirmed!",
    //                 text: "Processing Payment",
    //                 icon: "success"
    //             });
                
    //             // router.push(`/checkout?planName=${encodeURIComponent(planName)}&price=${encodeURIComponent(price)}`);
    //         }
    //     });
    // };

    const { status } = useSession();

    if (status === "unauthenticated") {
        router.push("/login");
        return null;
    } else {
        return (
            <div>
                <div className="price">
                    <div className="jumbotron jumbotron-fluid mb-5">
                        <div className="container text-center py-5">
                            <h1 className="text-white display-3">Price</h1>
                        </div>
                    </div>
                    <div className="container-fluid pt-5">
                        <div className="container">
                            <div className="text-center pb-2">
                                <h6 className="text-primary text-uppercase font-weight-bold">Pricing Plan</h6>
                                <h1 className="mb-4">Affordable Pricing Packages</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-5">
                                    <div className="bg-secondary">
                                        <div className="text-center p-4">
                                            <h1 className="display-4 mb-0">
                                                <small className="align-top text-muted font-weight-medium pdo" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>300<small className="align-bottom text-muted font-weight-medium pdo" style={{ fontSize: '16px', lineHeight: '40px' }}>/Mo</small>
                                            </h1>
                                        </div>
                                        <div className="bg-primary text-center p-4">
                                            <h3 className="m-0">Basic</h3>
                                            <p className='prl'>Ideal for small businesses and occasional shippers</p>
                                        </div>
                                        <div className="d-flex flex-column align-items-center py-4">
                                            <ul>
                                                <p><b>Freight Transportation:</b> Up to 1,000 kg per month</p>
                                                <p><b>Warehousing:</b> 100 sq. ft. of storage space</p>
                                                <p><b>Customs Brokerage:</b> Basic documentation and clearance for up to<br /> 5 shipments per month</p>
                                                <p><b>Customer Support:</b> Email support with a 24-hour response time</p>
                                            </ul>
                                            <button className="btn btn-primary py-2 px-4 my-2" onClick={(()=>(
                                                Checkpage({
                                                    lineItems:[
                                                        {
                                                            price:"price_1PQzArIeyMgEUq7es99L3PnW",
                                                            quantity: 1,
                                                            
                                                        }
                                                    ]
                                                })
                                            ))}>Order Basic</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-5">
                                    <div className="bg-secondary">
                                        <div className="text-center p-4">
                                            <h1 className="display-4 mb-0">
                                                <small className="align-top text-muted font-weight-medium pdo" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>1500<small className="align-bottom text-muted font-weight-medium pdo" style={{ fontSize: '16px', lineHeight: '40px' }}>/Mo</small>
                                            </h1>
                                        </div>
                                        <div className="bg-primary text-center p-4">
                                            <h3 className="m-0">Standard</h3>
                                            <p className='prl'>Perfect for growing businesses with regular shipping needs</p>
                                        </div>
                                        <div className="d-flex flex-column align-items-center py-4">
                                            <ul>
                                                <p><b>Freight Transportation:</b> Up to 5,000 kg per month</p>
                                                <p><b>Warehousing:</b> 500 sq. ft. of storage space</p>
                                                <p><b>Customs Brokerage:</b> Comprehensive documentation and clearance for up to<br /> 20 shipments per month</p>
                                                <p><b>Customer Support:</b> Email and phone support with a 12-hour response time</p>
                                            </ul>
                                            <button className="btn btn-primary py-2 px-4 my-2" onClick={(()=>(
                                                Checkpage({
                                                    lineItems:[
                                                        {
                                                            price:"price_1PQzI0IeyMgEUq7eTWXQyqiw",
                                                            quantity: 1
                                                        }
                                                    ]
                                                })
                                            ))}>Order Standard</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-5">
                                    <div className="bg-secondary">
                                        <div className="text-center p-4">
                                            <h1 className="display-4 mb-0">
                                                <small className="align-top text-muted font-weight-medium pdo" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>5000<small className="align-bottom text-muted font-weight-medium pdo" style={{ fontSize: '16px', lineHeight: '40px' }}>/Mo</small>
                                            </h1>
                                        </div>
                                        <div className="bg-primary text-center p-4">
                                            <h3 className="m-0">Premium</h3>
                                            <p className='prl'>Designed for large businesses with extensive logistics requirements</p>
                                        </div>
                                        <div className="d-flex flex-column align-items-center py-4">
                                            <ul>
                                                <p><b>Freight Transportation:</b> Up to 20,000 kg per month</p>
                                                <p><b>Warehousing:</b> 2,000 sq. ft. of storage space</p>
                                                <p><b>Customs Brokerage:</b> Full-service documentation and clearance for unlimited shipments</p>
                                                <p><b>Customer Support:</b> Dedicated account manager with 24/7 support</p>
                                            </ul>
                                            <button className="btn btn-primary py-2 px-4 my-2" onClick={(()=>(
                                                Checkpage({
                                                    lineItems:[
                                                        {
                                                            price:"price_1PQzVhIeyMgEUq7edRKHw03a",
                                                            quantity: 1
                                                        }
                                                    ]
                                                })
                                            ))}>Order Premium</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Testimonial />
            </div>
        )
    }
}
