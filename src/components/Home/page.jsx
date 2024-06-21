"use client"
import React from 'react'
import Topbar from "@/components/Topbar/page";
import Navbar from "@/components/Navbar/page";
import Hero from "@/components/Hero/page";
import About from "@/components/About/page";
import Quote from "@/components/Quote/page";
import Footer from "@/components/Footer/page";
import { router, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";




export default function Home() {
  const { status, } = useSession();
  const router = useRouter()
  if (status === "unauthenticated") {

    return (

      <div class="lds-dual-ring"></div>,


      
      router.push("/login")
    )
  

  }
  else {

    return (
      <div>

        <Topbar />
        <Navbar />
        <Hero />
        <About />
        <Quote />
        <Footer />










      </div>
    )
  }


}
