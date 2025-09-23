import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserStateProvider = ({ children }) => {

    //Status
    // 0 -> Logged Out
    // 1 -> OTP
    // 2 -> Logged In
    const [userValue, setUserValue] = useState({status: 0, jwtToken: ""});

    return (
        <UserContext.Provider value={{ userValue, setUserValue }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserState = () => useContext(UserContext);