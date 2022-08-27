import React, { useCallback } from "react";

import textInputStyles from "../../styles/shared-component-styles/TextInput.module.css";

const TextInput = ({ placeholder, value, onChangeText = () => null }) => {
  const handleChange = useCallback((e) => onChangeText(e.target.value), []);
  return (
    <input
      className={textInputStyles.input}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextInput;
