import React from 'react'

export default function Hero() {
    return (
        <div className='hero'>
            <div className="jumbotron jumbotron-fluid mb-5">
                <div className="container text-center py-5">
                    <h1 className="text-primary mb-4 hero">Safe & Faster</h1>
                    <h1 className="text-white display-3 mb-5">Logistics Services</h1>
                    <div className="mx-auto" width={100} max-width={600}>
                        <div className="input-group">
                            <input type="text" className="form-control border-light" padding={30} placeholder="Tracking Id" />
                            <div className="input-group-append">
                                <button className="btn btn-primary px-3">Track & Trace</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
