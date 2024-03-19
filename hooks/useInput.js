import { useCallback, useState } from "react";

export const useInput = ({ initialValue = null }) => {
  const [value, setValue] = useState(initialValue);
  
  const onChangeHandler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return [value, onChangeHandler, reset];
};
