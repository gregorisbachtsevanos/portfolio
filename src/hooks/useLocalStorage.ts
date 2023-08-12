import { useState } from 'react';

type StoredValue<T> = [T, (value: T) => void, () => void, () => T | null];

const useLocalStorage = <T>(key: string, initialValue: T): StoredValue<T> => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error retrieving data from local storage:', error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error storing data in local storage:', error);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(initialValue);
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data from local storage:', error);
    }
  };

  const getValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error retrieving data from local storage:', error);
      return null;
    }
  };

  return [storedValue, setValue, removeValue, getValue];
};

export default useLocalStorage;
