import React, { createContext, useContext, useEffect, useState } from "react";
import { checkUserIsLoggedIn } from "../api/firebase";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userData, setUserData] = useState();
  useEffect(() => {
    checkUserIsLoggedIn(setUserData);
  }, []);

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
