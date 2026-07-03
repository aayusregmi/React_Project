import { useEffect, useState } from "react";

function useConnectionstatus(){
    const [statusOnline , setOnline] = useState(navigator.onLine);
    useEffect(()=>{
     function hanldeonline(){
        setOnline(true)
     }
     function handleOffline(){
        setOnline(false);
     }
     window.addEventListener("online" , hanldeonline);
     window.addEventListener("offline" , handleOffline);
      
    return () => 
      {window.removeEventListener("online" , hanldeonline);
                 window.removeEventListener("offline" , handleOffline);}

    }

,[])
  
 return statusOnline;
}
export default useConnectionstatus;

