"use client"
import Home from '@/components/Home/page'
import Loader from '@/components/Loader/page'
import React, { useEffect, useState } from 'react'


export default function Homep() {
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    const fakeDataFetch = () =>{
      setTimeout(()=>{
        setLoading(false);
      }, 4000)
    }
    fakeDataFetch();
  },[])
  return (
    loading? <Loader/> : <Home/>
  )
    
    
}
