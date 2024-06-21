"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { MdEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import WarningMessage from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function Form() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [checkboxClicked, setCheckboxClicked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    


    const submitForm= async(e)=>{
        e.preventDefault();
        // const fullName = e.target[0].value
        // const email = e.target[1].value
        // const password = e.target[2].value
        

       
      
        // Validation

        const errors = {};
        if (!fullName) {
            errors.fullName = "Full name is required";
        }
       
        if (!email) {
            errors.email = "Email is required";
        }
        if (!password) {
            errors.password = "Password is required";
        } else if (
            password.length < 8 ||
            !/[A-Z]/.test(password) ||
            !/[a-z]/.test(password) ||
            !/[!@#$%^&*(),.?":{}|<>]/.test(password)
        ) {
            errors.password =
                "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one special character";
        }
        
        if (!checkboxClicked) {
            errors.checkboxClicked = "Please agree to the terms and conditions";
        }

        // Set the errors object to the errors state
        setErrors(errors);
        // If there are no errors, you can proceed with form submission
        if (Object.keys(errors).length === 0) {
            // Here you can make your API call or any other action
            console.log("Form submitted successfully:", {
                fullName,
                email,
                password,
               
            });
        }
    //      //send request to api
    //     try {
    //         const res = await fetch('http://localhost:3000/api/register/',{
    //             method: "POST",
    //             headers:{
    //                 "Content-Type": "application/json"
    //             },
    //             body:JSON.stringify({
    //                 fullName, email, password, confirmPassword

    //             })
    //         });

    //         if(res.ok){
    //             const form = e.target;
    //             form.reset();
    //         }

    //         else{
    //             console.log("registration failed")
    //         }
                
    //     } catch (error) {
    //         console.log('error during registration', error)
    //     }
    try {
        const res = await fetch("/api/register",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                fullName, email, password
            })
        })
        if(res.status === 400){
            setErrors("User already exist");
            

        } if(res.status === 200){
            setErrors("");
            router.push("/login")
           

        }


    } catch (error) {
        console.log('error during registration', error)
        
    }
    


    }

  
      
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={submitForm}>
                <h2>Register</h2>
                <div className={styles.formgroup}>
                    <label htmlFor="">
                        <IoPersonSharp />
                    </label>
                    <input
                        className={styles.checkform}
                        placeholder="Full Name"
                        type="text"
                        name="fullname"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    {errors.fullName && (
                        <p className={styles.error}>{errors.fullName}</p>
                    )}
                </div>
               

                <div className={styles.formgroup}>
                    <label htmlFor="">
                        <MdEmail />
                    </label>
                    <input
                        className={styles.checkform}
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>
                <div className={styles.formgroup}>
                    <label htmlFor="">
                        <RiLockPasswordFill />
                    </label>
                    <div className={styles.ck}>
                        <input
                            className={styles.checkform}
                            placeholder="Password"
                            type={showPassword ? "password" : "text"}
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <p type="button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <IoEyeOff /> : <IoEye />}
                        </p>
                    </div>

                    {errors.password && <p className={styles.error}>{errors.password}</p>}
                </div>
                
                <div className={styles.terms}>
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        value={checkboxClicked}
                        checked={checkboxClicked}
                        className={styles.check}
                        onChange={() => setCheckboxClicked(!checkboxClicked)}
                    />
                   

                    <label for="terms">
                        <Link href="#"> I agree to Terms of Service</Link>.
                    </label>
                    {errors.checkboxClicked && (
                        <p className={styles.error}>{errors.checkboxClicked}</p>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className={styles.img}>
                <Image
                    src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg"
                    alt="sign"
                    width={400}
                    height={450}
                />
                <div className={styles.log}>
                    <Link href="/login">Already have an account? Log in here!</Link>
                </div>
            </div>
            {/* <div className={styles.log2}>
                <Link href="/login">Already have an account? Log in here!</Link>
            </div> */}


          
        </div>
    );
}
