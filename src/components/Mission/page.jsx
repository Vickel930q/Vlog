import React from 'react'
import Image from 'next/image'

export default function Mission() {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 pb-4 pb-lg-0">
                        <Image className="img-fluid w-100" src="https://img.freepik.com/free-photo/magnifying-glass-enlarging-word_1134-334.jpg?t=st=1716903823~exp=1716907423~hmac=b64907c42e4ab443bcaf4e7fb02db322a6893854b720287be3f57fdc65e928e4&w=740" width={100} height={100} alt="#" />

                    </div>
                    <div className="col-lg-7">
                        <h6 className="text-primary text-uppercase font-weight-bold">Our Mission</h6>
                        <h1 className="mb-4">Reliable</h1>
                        <p className="mb-4">At VIKES LOGISTICS, our mission is to redefine the logistics experience by delivering exceptional service, innovative solutions, and unmatched reliability. We aim to be your trusted partner in logistics, helping you navigate the complexities of supply chain management with ease and efficiency.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
