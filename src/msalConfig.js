
export const MSAL_CONFIG = {
    auth: {
        clientId:"ac58c26c-5d60-4f28-86ef-ff860b9e5398",
        authority:"https://login.microsoftonline.com/d44ff723-4fa7-405e-afc0-43c21e573043",
        redirectUri: `${typeof window !== 'undefined' ? `${process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL}`:''}`

        
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    }
}

export const LOGIN_REQUEST = {
    scopes: ["openid", "offline_access"]
};