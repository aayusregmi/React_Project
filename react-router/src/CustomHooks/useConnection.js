import { useState , useEffect } from "react";
export function useConnection(){
    const[status , setStatus] = useState(navigator.onLine);
    useEffect(()=>{
    function isOnline(){
        setStatus(true)
    }
    function isOffline(){
        setStatus(false)
    }

    window.addEventListener("online" , isOnline);
    window.addEventListener("offline" , isOffline);

    return () =>{
        window.removeEventListener("online" , isOnline);
        window.removeEventListener("offline" , isOffline)
    }

    } , [])

    return status;
}