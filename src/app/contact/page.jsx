"use client"
import Contact from '@/components/Contact/page'
import Footer from '@/components/Footer/page'
import Navbar from '@/components/Navbar/page'
import Topbar from '@/components/Topbar/page'
import Loader from '@/components/Loader/page'
import React, { useEffect, useState } from 'react'

export default function Contactpage() {
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
    loading? <Loader/> :<div>
    <Topbar/>
    <Navbar/>
    <Contact/>
    <Footer/>
 </div>
  )
 
}
