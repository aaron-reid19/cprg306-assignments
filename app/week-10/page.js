"use client"
import { useRouter } from "next/navigation";
import { useUserAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
 
export default function Page(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) router.push("/week-10/shopping-list");
    }, [user, router]);

    const handleSignIn = async () => {
        try {
            await gitHubSignIn(); 
            router.push("/week-10/shopping-list");
        }
        catch (error) {
            console.error("Sign-in failed", error)
        }
    }
    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        }
        catch(error){
            console.error("sign-out failed", error)
        }
    }
    
    return (
        <main>
            {!user ? (
                <button onClick={handleSignIn}>Sign in with GitHub</button>
            ):(
            <>
                <p>
                    Welcome, {user.displayName} ({user.email})
                </p>
                <button onClick={handleSignOut}>signOut</button>
            </>
            )}
        </main>
    )
}
