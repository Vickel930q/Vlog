"use server"
import { Client } from "square"

const {paymentApi} = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: "sandbox"
})

export async function submitPayment(sourceId){
    try {
        const {result} = await paymentApi.createPayment({
            idempotencyKey: randomUUID(),
            sourceId,
            amountMoney:{
                currency: "USD",
                amount: 100,
            }
        });
        return result;
    } catch (error) {
        console.log(errork)
        
    }
}