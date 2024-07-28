import  CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import { signIn } from "next-auth/react";

export const Next_Auth = {
    providers:[
        CredentialsProvider({
            name:"Email" ,
            credentials : {
                username:{ label:'email' , type:'text' , placeholder:''},
                password:{ label : 'password' , type : 'password' , placeholder :''}
            },
            async authorize(credentials:any):Promise<any> { //what to do after sign in
                // console.log(credentials.username)
                const id= 1;  //logic for finding the id from db
                if(id){
                    return {  //what will be there in jwt token
                        id:1,
                        name:"Anirban"
                    }
                }
                else{
                    return null
                }
            },
        }),
        GoogleProvider({
            clientId :process.env.GOOGLE_CLIENT || "",
          clientSecret:process.env.GOOGLE_SECRET  || ""  
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
          })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{ 
        jwt:({user,token}:any)=>{    // can make changes in the jwt token 

            console.log("token=",token)
            return token
        },
        session:({session,user,token}:any)=>{    // can update the session and add extra details in it 
            console.log(session)
            if(session && session.user){
                session.user.id = token.sub
                console.log(session)
                return session
            }
            return session
        },
    },
    pages:{
        signIn:"/signin"
    }
   
}