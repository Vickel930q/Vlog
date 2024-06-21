"use client";
import React from "react";
import { useRef } from "react";
import emailjs, { sendForm } from "@emailjs/browser";
import Link from "next/link";
import { router, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


export default function Contact() {

    // const templateParams = {
    //     name: 'James',
    //     notes: 'Check this out!',
    // };

    // emailjs
    //     .sendForm(
    //         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
    //         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
    //         templateParams,
    //         process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? "",


    //     )
    //     .then(
    //         (response) => {
    //             console.log('SUCCESS!', response.status, response.text);
    //         },
    //         (err) => {
    //             console.log('FAILED...', err);
    //         },
    //     );

    const { status, } = useSession();
    const router = useRouter()
    if (status === "unauthenticated") {

        return (


            router.push("/login")


        )
    }
    else {

        return (
            <div>
                <div className="jumbotron jumbotron-fluid mb-5 hero">
                    <div className="container text-center py-5">
                        <h1 className="text-white display-3">Contact</h1>

                    </div>
                </div>

                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 pb-4 pb-lg-0 ">
                                <div className="bg-primary text-dark text-center p-4">
                                    <h4 className="m-0">
                                        <i className="fa fa-map-marker-alt text-white mr-2"></i>406, Bridge Cir, Covinton GA, 30016 USA
                                    </h4>
                                </div>
                                <iframe
                                    className="embed-responsive-item"
                                    style={{ width: 444 }}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                    frameborder="0"
                                    margin="border:0;"
                                    allowfullscreen=""
                                    aria-hidden="false"
                                    tabindex="0"
                                    width={100}
                                    height={470}
                                ></iframe>
                            </div>
                            <div className="col-lg-7">
                                <h6 className="text-primary text-uppercase font-weight-bold">
                                    Contact Us
                                </h6>
                                <h1 className="mb-4">Contact For Any Queries</h1>
                                <div
                                    className="contact-form bg-secondary"
                                    style={{ padding: 30 }}
                                >
                                    <div id="success"></div>
                                    <form
                                        name="sentMessage"
                                        id="contactForm"
                                        onSubmit={sendForm}

                                    >
                                        <div className="control-group">
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-control border-0 p-4"
                                                id="name"
                                                placeholder="Your Name"
                                                required="required"
                                                data-validation-required-message="Please enter your name"
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control border-0 p-4"
                                                id="email"
                                                placeholder="Your Email"
                                                required="required"
                                                data-validation-required-message="Please enter your email"
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>

                                        <div className="control-group">
                                            <textarea
                                                className="form-control border-0 py-3 px-4"
                                                rows="3"
                                                id="message"
                                                placeholder="Message"
                                                required="required"
                                                data-validation-required-message="Please enter your message"
                                            ></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div>
                                            <button
                                                className="btn btn-primary py-3 px-4"
                                                type="submit"
                                                id="sendMessageButton"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
