import { useEffect, useState } from "react";
const usePersistedState = (initialState, sessionStorageKey) => {
  const [state, setState] = useState(() => {
    const persisitedValue = sessionStorage.getItem(sessionStorageKey);
    return persisitedValue ? JSON.parse(persisitedValue) : initialState;
  });

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
  }, [state, sessionStorageKey]);
  return [state, setState];
};
export const useSearchStr = () => {
  return usePersistedState("", "searchString");
};
