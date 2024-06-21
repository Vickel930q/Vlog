"use client"
import Footer from '@/components/Footer/page'
import Navbar from '@/components/Navbar/page'
import Price from '@/components/Price/page'
import Topbar from '@/components/Topbar/page'
import Loader from '@/components/Loader/page'
import React, { useEffect, useState } from 'react'

export default function Pricingpage() {
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
    <Price/>
    <Footer/>
 </div>
  )
}
