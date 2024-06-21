"use client";
import React, { useState } from "react";
// import { MdEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import styles from "./page.module.css"; 
import Image from "next/image";
import Link from "next/link";

import { signIn } from "next-auth/react";
import {router, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { ToastContainer, toast } from 'react-toastify';

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //      // next auth signIn
    //    console.log(email,password)
    //     const res=await signIn('credentials', {email,password,redirect:false})
    //   if(res.status===200){
    //   // route to dashhboard
    //   router.push('/home')
    //   }
    //     console.log("Form submitted with data:", formData);
    // };

    const [isChecked, setIsChecked] = useState(false);
    // // handler login
  
    //     const res = await signIn("credentials", {
    //         email: "",
    //         password: "",
    //         redirect: false,
    //     });
    //     console.log(res);
    //     async() =>await res.json();
    //     if (res.status == 200) {
    //         router.push('/home');
    //     }
    // };

    const {status,} = useSession();
    const router = useRouter()
    const handleSubmit = () => {
        signIn("google")
        toast.success("Sign in successfull!");
    }
   

    if( status === "authenticated"){
        // notify()
        
        
        return(
            
            
            router.push("/home")
            
            
        ),
        <ToastContainer/>
        
            
        
    }
    else{

        return (
            <div className={styles.container}>
                <div className={styles.img}>
                    <Image
                        src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg"
                        alt="sign"
                        width={400}
                        height={450}
                    />
                    <div className={styles.log}>
                        <Link href="/sign">Create New Account</Link>
                    </div>
                </div>
    
                <form className={styles.form} >
                    <h2>Sign In</h2>
    
                    <div className={styles.formgroup}>
                        
                        <input
                            className={styles.checkform}
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formgroup}>
                        <label>
                            <RiLockPasswordFill />
                        </label>
                        <input
                            className={styles.checkform}
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
    
                    <div className={styles.terms}>
                        <input
                            type="checkbox"
                            id="terms"
                            value="agreee"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                        />
                        <label for="terms" className={styles.tl}>
                            Remember me.
                        </label>
                        {/* {!isChecked && (
                            <WarningMessage message="Please check the box to continue." />
                        )} */}
                    </div>
                    {/* <button type="submit" onClick={loginHandler}>
                        Log in
                    </button> */}
                    {/* <Butt/> */}
                    <section className={styles.options}>
                        <div className={styles.socialmediaicons}>
                            <button onClick={handleSubmit} className={styles.sb}>
                                login with google
                            </button>
                         
                        </div>
                    </section>
    
                           
                   
                </form>
            </div>
        );
    }
}


export default Login;
