import { LocalStorageKeys } from "../enum/LocalStorageKeys.enum";

export const isUserLoggedIn = (): boolean => {
    const loggedInStateus = localStorage.getItem(LocalStorageKeys.IS_LOGGED_IN);
    return loggedInStateus == null ? false : ( `${loggedInStateus}` === 'true' ? true : false);
};

export const clearLocalStorage = () => {
    localStorage.removeItem(LocalStorageKeys.IS_LOGGED_IN);
};

export const addUserLoginStatusToLocalStorage = (isLoggedIn: string) => {
    localStorage.setItem(LocalStorageKeys.IS_LOGGED_IN, isLoggedIn);
};