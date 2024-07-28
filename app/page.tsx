"use client"
// 
import { useSession } from "next-auth/react";
// import 
import { signIn,signOut } from "next-auth/react";
export default function Home() {
  const session = useSession()
  return (<>
  <div>
  {JSON.stringify(session.data) }
  </div>
  <div onClick={()=>{signIn()}}>Signin</div>
  <div onClick={()=>{signOut()}}>Signout</div> 
  </>
  );
}
// import { Next_Auth } from "@/lib/auth";
// import { getServerSession } from "next-auth"

// async function getUser() {
//   const session = await getServerSession(Next_Auth);
//   console.log(session)
//   return session;
// }

// export default async function Home() {
//   const session = await getUser();

//   return (
//     <div>
//       dfmkldmnfkl
//       {JSON.stringify(session)}
//     </div>
    
//   );
// }
