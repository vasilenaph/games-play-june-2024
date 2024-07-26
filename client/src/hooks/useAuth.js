import { useContext } from "react";

import { login } from "../api/auth-api";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const {changeAuthState} = useContext(AuthContext);

    const loginHandler = async (username, password) => {
        const result = await login(username, password);
        
        changeAuthState(result);
    }

    return loginHandler;
}