"use client"
import { signIn } from 'next-auth/react';
import { useRouter,redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
export default function Signin() {
    const router = useRouter();
    const session = useSession()
    if(session.data)
        redirect("/")
    else{
    return (
        <div>
            <button onClick={async () => {
                // try {
                    const res = await signIn("google",{redirect:false});
                    console.log(res)
              
            }}>
                Login with Google
            </button>

          
        </div>
    );
}
}
