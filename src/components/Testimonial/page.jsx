'use client'
import Image from 'next/image'
import React from 'react'
import { IoMdQuote } from "react-icons/io";
import SwiperCore, { Autoplay } from "swiper";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Autoplay]);

export default function Testimonial() {
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiper) {
            const interval = setInterval(() => {
                if (swiper.isEnd) {
                    swiper.slideTo(0);
                } else {
                    swiper.slideNext();
                }
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [swiper]);
    return (
        <div>
            <div class="container-fluid py-5">
                <div className='container'>
                    
                <div class="text-center pb-2">
                                <h6 class="text-primary text-uppercase font-weight-bold">Testimonial</h6>
                                <h1 class="mb-4">Our Clients Say</h1>
                            </div>
                    <Swiper
                        // install Swiper modules
                        modules={[Pagination]}
                        color='orange'
                        onSwiper={setSwiper}
                        spaceBetween={50}
                        loop={true}
                        slidesPerView={1}
                        pagination={{ clickable: true, draggable: true }}
                        scrollbar={{ draggable: true }}
                        //   onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                        autoplay={{ delay: 1500 }}

                    >


                        <SwiperSlide>

                            <div class="owl-carousel testimonial-carousel">
                                <div class="position-relative bg-secondary p-4">
                                    <i class="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: '-6px', right: 0 }} ><IoMdQuote /></i>
                                    <div class="d-flex align-items-center mb-3">
                                        <Image class="img-fluid rounded-circle" src="/testimonial-1.jpg" width={60} height={60} alt="img" />
                                        <div class="ml-3">
                                            <h6 class="font-weight-semi-bold m-0">David TJ</h6>
                                            <small>-Operations Manager at Tech Innovators Inc.</small>
                                        </div>
                                    </div>
                                    <p class="m-0">Vikes Logistics has been an invaluable partner in our supply chain management. Their efficient and reliable service ensures that our products reach our customers on time, every time. Their team is always responsive and proactive in addressing our needs. We could not ask for a better logistics partner</p>
                                </div>
                            </div>

                        </SwiperSlide>
                        {/* Second Slide */}

                        <SwiperSlide>
                            <div className="position-relative bg-secondary p-4">
                                <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: '-6px', right: 0 }}><IoMdQuote /></i>
                                <div className="d-flex align-items-center mb-3">
                                    <Image className="img-fluid rounded-circle" src="/testimonial-2.jpg" width={60} height={60} alt="img" />
                                    <div className="ml-3">
                                        <h6 className="font-weight-semi-bold m-0">Awesome Obed</h6>
                                        <small>- Back-end Developer</small>
                                    </div>
                                </div>
                                <p className="m-0">We’ve been working with Vikes Logistics for over a year now, and their service has been exceptional. Their warehousing and distribution solutions have significantly streamlined our operations, allowing us to focus more on growing our business. We highly recommend them to anyone in need of top-notch logistics services.</p>
                            </div>
                           
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="position-relative bg-secondary p-4">
                                <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: '-6px', right: 0 }}><IoMdQuote /></i>
                                <div className="d-flex align-items-center mb-3">
                                    <Image className="img-fluid rounded-circle" src="/testimonial-3.jpg" width={60} height={60} alt="img" />
                                    <div className="ml-3">
                                        <h6 className="font-weight-semi-bold m-0">Andrew Debry</h6>
                                        <small>- Front-end Developer</small>
                                    </div>
                                </div>
                                <p className="m-0">The team at Vikes Logistics is professional, efficient, and incredibly reliable. They’ve handled our international shipments with ease, ensuring that all customs processes are smoothly managed. Their dedication to customer satisfaction is evident in every interaction we’ve had with them.</p>
                            </div>
                           
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="position-relative bg-secondary p-4">
                                <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: '-6px', right: 0 }}><IoMdQuote /></i>
                                <div className="d-flex align-items-center mb-3">
                                    <Image className="img-fluid rounded-circle" src="/testimonial-4.jpg" width={60} height={60} alt="img" />
                                    <div className="ml-3">
                                        <h6 className="font-weight-semi-bold m-0">Justice Ojay</h6>
                                        <small>-Supply Chain Director at Elite Retail Group</small>
                                    </div>
                                </div>
                                <p className="m-0">Choosing Vikes Logistics for our logistics needs was one of the best decisions we’ve made. Their transportation services are fast and dependable, and their customer service is outstanding. They’ve truly become an extension of our business, and we look forward to continuing our partnership with them.</p>
                            </div>
                           
                        </SwiperSlide>

                    </Swiper>
                </div>

            </div>
        </div>
    )
}
