import React, { createContext, useContext, useEffect, useState } from "react";
import { checkUserIsLoggedIn } from "../api/firebase";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userData, setUserData] = useState();
  // 만약 정보가 있다면, state가 아닌 localStorage에서 데이터를 가져와야 함.

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
