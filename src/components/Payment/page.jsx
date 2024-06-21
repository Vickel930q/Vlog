"use client"
import { submitPayment } from '@/app/actions/actions'
import React from 'react'
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk'

export default function Paymentform() {
    const appId = "sandbox-sq0idb-veL0puyRM1GkWubiUrKRYQ";
    const locationId = "main";
    return (
        <PaymentForm
            applicationId={appId}
            locationId={locationId}
            cardTokenizeResponseReceived={async (token) => {
                const result = await submitPayment(token.token);
                console.log(token);
            }}
        >
            <CreditCard />

        </PaymentForm>


    )
}
