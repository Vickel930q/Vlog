"use client"
import React from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'


export default function Butt() {


    return (
        <div>
            <section className={styles.options}>
                <div className={styles.socialmediaicons}>
                    <button onClick={() => signIn("google")} className={styles.sb}>
                        login with google
                    </button>
                </div>
            </section>
        </div>
    )
}
