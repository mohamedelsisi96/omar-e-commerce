import { createContext, useEffect, useState } from "react";




export  const AuthContext=createContext()

export default function AuthContextProvider({children}){
    let [userLogged,setUserLogged]=useState(false)
    useEffect(()=>{
        if(localStorage.getItem('token') ){
            setUserLogged(true) 
        }else{
            setUserLogged(false) 
        }
    },[])

    return <AuthContext.Provider value={{userLogged,setUserLogged}}>
        {children}
    </AuthContext.Provider>
}