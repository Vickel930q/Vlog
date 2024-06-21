"use client"
import React from 'react'
import { FaTruck } from "react-icons/fa";
import Link from 'next/link'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export default function Navbar() {
  const { data: session } = useSession();
  const [showNav, setShowNav] = useState(false)

  const handleMenu = () => {
    if (showNav) {
      setShowNav(false)
    }
    else {
      setShowNav(true)
    }
  }

  const [loading, setLoading] = useState(false);


  const handleLoad = () => {

    setLoading(!loading)
    setTimeout(() => { setLoading(false) }, 5000)
    signOut()



  }










  // return (
  //   <div className="flex flex-wrap items-center justify-between h-16 px-4 mt-2 bg-white shadow">
  //     <Hamburger toggled={showNav} toggle={handleMenu} />
  return (
    <div className='wrapd'>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
          <Link href="\" className="navbar-brand ml-lg-3">
            <h1 className="m-0 display-5 text-uppercase text-primary"><i className="fa fa-truck mr-2"><FaTruck /></i>VIKES</h1>
          </Link>

          <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
            <div className="navbar-nav m-auto py-0">
              <Link href="/home" className="nav-item nav-link active">Home</Link>
              <Link href="/about" className="nav-item nav-link">About</Link>
              <Link href="/price" className="nav-item nav-link">Price</Link>
              <Link href="/contact" className="nav-item nav-link">Contact</Link>
              <Link href="/tracking" className="nav-item nav-link">Tracking</Link>
            </div>
            <Image className='profileimg' src={session?.user?.image} width={50} height={50} alt='img' />
            <p className='profilename'>{session?.user?.name}</p>
            <button className="btn btn-primary py-2 px-4 my-2 logout" onClick={handleLoad}>
              {loading ? <ClipLoader
                color='white'
                loading={loading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />

                : 'Sign Out'}
            </button>







          </div>
          <div type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" onClick={handleMenu} >
            <Hamburger size={20} direction="right" duration={0.4} distance="lg" easing="ease-in" color='black' rounded />
          </div>
          {
            showNav &&
            <div className='mobile-navbar'>
              <div className="detail">

                <Image className='profileimg' src={session?.user?.image} width={50}
                  height={50} alt='img' />
                <p className='profilename'>{session?.user?.name}</p>
              </div>
              <p className='profilemail'>{session?.user?.email}</p>
              <Link href="/home" className="nav-item nav-links">Home</Link>
              <Link href="/about" className="nav-item nav-links">About</Link>
              <Link href="/price" className="nav-item nav-links">Price</Link>
              <Link href="/contact" className="nav-item nav-links">Contact</Link>
              <button className="btn btn-primary py-2 px-4 my-2 logout" onClick={handleLoad}>
                {loading ? <ClipLoader
                  color='white'
                  loading={loading}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                  : 'Sign Out'}

              </button>
            </div>
          }




        </nav>
      </div>
    </div>
  )
}
