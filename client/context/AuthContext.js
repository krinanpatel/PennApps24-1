import { createContext, useState } from "react";
import axios from "axios";
import {useEffect} from "react";

export const AuthData = createContext();

export default function AuthContext({children}) {
    const login = () => {
        useEffect
    }


    return(
        <AuthData.Provider value={{}}>
            {children}
        </AuthData.Provider>
    )
}