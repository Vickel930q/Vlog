"use client"
import Image from 'next/image'
import React from 'react'
import { router, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";





export default function About() {
    const { status, } = useSession();
  const router = useRouter()
  if (status === "unauthenticated") {

    return (


      router.push("/login")


    )
  }
  else{
    
      return (
  
  
  
          <div className="container-fluid py-5 hero">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-5 pb-4 pb-lg-0">
                          <Image className="img-fluid w-100" src="https://img.freepik.com/free-photo/truck-with-white-trailer-that-says-scania-side_123827-23486.jpg?t=st=1716902020~exp=1716905620~hmac=31fa1176e68d45a7fee044a25fec0ae05275fc6d41634a8001f20bf523f2e0a9&w=740" width={100} height={100} alt="#" />
                          <div className="bg-primary text-dark text-center p-4">
                              <h3 className="m-0">2+ Years Experience</h3>
                          </div>
                      </div>
                      <div className="col-lg-7">
                          <h6 className="text-primary text-uppercase font-weight-bold">About Us</h6>
                          <h1 className="mb-4">Trusted & Faster Logistic Service Provider</h1>
                          <p className="mb-4">Welcome to Vickes! Since our inception over two years ago, Vikes has been dedicated to providing top-notch logistics solutions to businesses and individuals alike. We are committed to ensuring that your goods are delivered safely, on time, and with the utmost professionalism.</p>
  
                      </div>
                  </div>
              </div>
          </div>
  
  
  
      )
  }
}
