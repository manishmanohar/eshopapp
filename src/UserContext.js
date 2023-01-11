import {createContext, useState} from 'react';

export const UserContext = createContext({loggedIn: false});

const Context = ({ children }) => {
    const [user, setUser] = useState(() => ({
        loggedIn: true,
        isAdmin: true,
    }));
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
};

export default Context;