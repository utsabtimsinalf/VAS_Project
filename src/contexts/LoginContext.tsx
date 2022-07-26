import React, { useEffect, useState } from "react";
import { isUserLoggedIn as isUserLoggedInStorage, addUserLoginStatusToLocalStorage } from '../util/localstorage.util';

/**
 * Holds Context for UserLogin
 * Since on Refresh Context value resets Need to Store on 
 * LocalStorage for maintaining Persistance
 */

export interface ContextInterface {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children: JSX.Element;
}
export const loginContext = React.createContext<ContextInterface | null>(null);

export const LoginContextProvider = (props: Props) => {
  // clearLocalStorage();
  const { children } = props;
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(isUserLoggedInStorage);

  useEffect(() => {
    addUserLoginStatusToLocalStorage(`${isUserLoggedIn}`);
  },[isUserLoggedIn]);

  const contextValue = {
    isUserLoggedIn,
    setIsUserLoggedIn,
  };
  return (
    <loginContext.Provider value={contextValue}>{children}</loginContext.Provider>
  );
};
