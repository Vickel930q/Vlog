import Image from 'next/image'
import React from 'react'
import './loader.css'

export default function Loader() {
  return (
    <div className='loader'>
        <div className="svg_wraper">
            <Image src="/load.svg" alt='svg' width={520} height={220}/>
        </div>
       
    </div>
  )
}
