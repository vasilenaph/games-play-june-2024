import { login } from "../api/auth-api";

export const useLogin = () => {
    const loginHandler = async (username, password) => {
        const result = await login(username, password);

        console.log(result)
        // TODO: Update app state
    }

    return loginHandler;
}