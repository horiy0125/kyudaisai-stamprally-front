export const isAvailableLocalStorage = () => {
  return typeof window !== `undefined`;
};

export const getLocalStorageValue = (key: string): string | null => {
  if (isAvailableLocalStorage()) {
    const data = window.localStorage.getItem(key);
    return data ? data : null;
  }
  return null;
};

export const setLocalStorageValue = (key: string, value: string): void => {
  if (isAvailableLocalStorage()) {
    window.localStorage.setItem(key, value);
  }
};

export const clearLocalStorageValue = (key: string): void => {
  if (isAvailableLocalStorage()) {
    window.localStorage.removeItem(key);
  }
};
