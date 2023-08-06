export const setLocalStorage = (name: string, value: string) => {
  return localStorage.setItem(name, value);
};

export const removeLocalStorage = (name: string) => {
  return localStorage.removeItem(name);
};

export const getLocalStorage = (name: string, parsed: boolean = false) => {
  const storedValue = localStorage.getItem(name);

  if (parsed && storedValue) {
    try {
      return JSON.parse(storedValue) as string;
    } catch (error) {
      console.error(`Error parsing localStorage for '${name}': ${error}`);
    }
  }

  return parsed ? null : storedValue;
};

let isSettingStorage = false;

export const setStorage = (
  lang: string,
  dispatch: (type: string) => void,
  type: string,
  option1: string,
  option2: string
) => {
  if (isSettingStorage) return;

  const name = type.toLowerCase();
  const value = lang === option1 ? option2 : option1;

  setLocalStorage(name, value);

  isSettingStorage = true;

  // Minimize page reloads, update state in the Redux store directly
  //   if (lang === option1) {
  //     dispatch({ type, payload: option2 });
  //   } else if (lang === option2) {
  //     dispatch({ type, payload: option1 });
  //   }

  // Reset the flag after a small delay to allow the next setStorage call
  setTimeout(() => {
    isSettingStorage = false;
  }, 100);
};
