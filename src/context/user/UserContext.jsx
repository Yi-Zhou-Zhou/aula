import { createContext, useReducer } from "react";
import { UserReducer } from "./UserReducer";

const defaultUserState = {
    "rol": "201873081-0",
}

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, dispatch] = useReducer(UserReducer, defaultUserState);

    const updateRol = rol => {
        dispatch({ type: 'UPDATE_ROL', payload: rol });
    }

    return (
        <UserContext.Provider value={{
            user,
            updateRol
        }}>
            {children}
        </UserContext.Provider>
    );
}