"use client"
import About from '@/components/About/page'
import Choose from '@/components/Choose/page'
import Footer from '@/components/Footer/page'
import Mission from '@/components/Mission/page'
import Navbar from '@/components/Navbar/page'
import Services from '@/components/Serve/page'
import Topbar from '@/components/Topbar/page'
import React from 'react'
import Loader from '@/components/Loader/page'
import { useEffect, useState } from 'react'

export default function Aboutpage() {
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    const fakeDataFetch = () =>{
      setTimeout(()=>{
        setLoading(false);
      }, 2000)
    }
    fakeDataFetch();
  },[])
  return (
    loading? <Loader/> : <div>
    <Topbar />
    <Navbar />
    <About />
    <Mission />
    <Choose />
    <Services/>
    <Footer />
  </div>
  )
 
}
