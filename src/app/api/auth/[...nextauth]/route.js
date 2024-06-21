// import user from "@/models/user";
// import connectDb from "@/utils/db";
// import NextAuth from "next-auth"
// import bcrypt from "bcryptjs"
// import CredentialsProvider from "next-auth/providers/credentials";
// export const authOptions = {
//     // Configure one or more authentication providers
//     providers: [
//         CredentialsProvider({
//             name: "credentials",
//             id: "credentials",

//             // we need to authorize our credentials, that is check if submitted 
//             //user credentials matches the one in the DB
//             async authorize(credentials) {
//                 try {
//                     // call database connection
//                     await connectDb()
//                     //    destructure the credentials object
//                     const { email, password } = credentials
//                     console.log(email,password)
//                     // check if user email exist in the databse
//                     const userExists =await user.findOne({ email: email })
//                     if (userExists) {
//                         // remeber we hashed user password and stored it in the database
//                         const passwordTrue=bcrypt.compareSync(password, userExists.password)
//                         if(passwordTrue){
//                             // if user email and password are corect
//                             return userExists
//                         }
//                         else{
//                             throw new Error("Invalid Credentials 1")
//                         }
//                     }
//                     else{
//                         throw new Error('Invalid credentials 2')
//                     }
//                 }
//                 catch (err) {
//                     console.log(err.message)
//                     throw new Error("Server Error")
//                 }
//             }
//         }),
//         // ...add more providers here
//     ],
//     // specify your error pages 
//     pages:{
//         error:'/login'
//     }
// }
// const handler= NextAuth(authOptions)
// export {handler as GET, handler as POST}

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

const GOOGLE_CLIENT_ID =process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

export const authOptions={
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ]
}
const handler=NextAuth(authOptions)
export {handler as GET, handler as POST}