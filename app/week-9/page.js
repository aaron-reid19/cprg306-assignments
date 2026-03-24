"use client"
import { useRouter } from "next/navigation";
// Import the useUserAuth hook
import { useUserAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
 
export default function Page(){
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
    const router = useRouter();

    useEffect(() => {
        if (user) router.push("week-9/shopping-list");
    }, [user, router]);

    const handleSignIn = async () => {
        try {
            // Sign in to Firebase with GitHub authentication
            await gitHubSignIn(); 
            router.push("week-9/shopping-list");
        }
        catch (error) {
            console.error("Sign-in failed", error)
        }
    }
    const handleSignOut = async () => {
        try {
            // Sign out of Firebase
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
                <button onClick={handleSignOut}></button>
            </>
            )}
        </main>
    )
}


