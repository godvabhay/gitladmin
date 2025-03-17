import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { LOGIN_REQUEST } from '../../msalConfig';

export const useAuth = () => {
    const { instance, accounts} = useMsal();
    
    const login = async () => {
        try{
            await instance.loginRedirect(LOGIN_REQUEST);

        }catch(error){
            console.error('login failed',error);
        }
    }

    const logout = () => {
        instance.logoutPopup();
    }

    return {
        isAuthenticated:accounts.length > 0 ,
        account:accounts[0],
        login,
        logout,
    }
}