import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'daniel',
    email: 'daniel@gmail.com'
  });
  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}


export function useUser() {
  return useContext(UserContext);
}