"use client";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import React, { createContext } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import styles from './page.module.css'
import { useRouter } from "next/navigation";



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// SwiperCore.use([Autoplay]);

export default function Getstarted() {
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
    const router = useRouter()
    const handleClick = () => {
        router.push('/login');
    };
   
    return (
        <div>
            <div className={styles.wrapper} id="getstarted">
                <div className={styles.co_name}>
                    <h1>Vikes Logistics</h1>
                    {/* <p>Logistics</p> */}
                </div>

                <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    onSwiper={setSwiper}
                    spaceBetween={50}
                    loop={true}
                    slidesPerView={1}
                    pagination={{ clickable: true, draggable: true }}
                    scrollbar={{ draggable: true }}
                    //   onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    <div className={styles.slide_wrapper}>
                        <SwiperSlide>
                            <div className={styles.slide_content}>

                                <Image
                                    src={
                                        "https://img.freepik.com/free-vector/delivery-concept-illustration_114360-130.jpg?t=st=1715895111~exp=1715898711~hmac=3b1970fc0e30f0a36ae0c38b65b3ee98a3561058c3225aedb551f0497cb34273&w=740"
                                    }
                                    width={320}
                                    height={250}
                                    alt="door"
                                />
                                <div className={styles.slide_text}>
                                    <h1 className={styles.title}>D2D DELIVERY</h1>
                                    <p>ding dong delivery at your doorstep <br></br>makes it the most convient and <br /> comfortable platform</p>

                                </div>
                            </div>


                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slide_content}>

                                <Image
                                    src={
                                        "https://img.freepik.com/free-vector/navigation-concept-illustration_114360-956.jpg?t=st=1715900590~exp=1715904190~hmac=e51eceb7aa1293ae2279f684bc545d8354e191a5c3740c3f4947890772cad772&w=740"
                                    }
                                    width={300}
                                    height={250}
                                    alt="door"
                                />
                                <div className={styles.slide_text}>
                                    <h1 className={styles.title}>LIVE TRACKER</h1>
                                    <p>track your item in real-time <br></br>no reckless time wasting</p>

                                </div>
                            </div>


                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slide_content}>

                                <Image
                                    src={
                                        "https://img.freepik.com/free-vector/messenger-concept-illustration_114360-1394.jpg?t=st=1715901045~exp=1715904645~hmac=ea946c1c89db082954c10a84687a0724c59c38c179ac56e25b81dd30234be69b&w=740"
                                    }
                                    width={300}
                                    height={250}
                                    alt="door"
                                />
                                <div className={styles.slide_text}>
                                    <h1 className={styles.title}>SAFE DELIVERY</h1>
                                    <p>the safest and most convient <br></br>way to get your items to their <br /> destination</p>

                                </div>
                            </div>


                        </SwiperSlide>

                    </div>


                </Swiper>
                <div className={styles.get_btn}>
                    <button onClick={handleClick}>Get Started</button>
                    {/* {loader && <div className={styles.loader}><div className={styles.lds-dual-ring}></div></div>} */}
                    
                </div>

            </div>
        </div>
    );
}
