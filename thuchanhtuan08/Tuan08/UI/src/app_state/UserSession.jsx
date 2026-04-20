import { createContext, useState, useContext } from 'react';

const UserSession = createContext();

export function SessionProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    setShowSignInForm(false);
  };

  const logout = () => setIsLoggedIn(false);

  return (
    <UserSession.Provider value={{ isLoggedIn, login, logout, showSignInForm, setShowSignInForm }}>
      {children}
    </UserSession.Provider>
  );
}

export function useSession() {
  return useContext(UserSession);
}
