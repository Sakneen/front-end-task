import React, { useCallback } from "react";

import selectStyles from "../styles/Select.module.css";

const Select = ({
  options = [{ value: "", label: "" }],
  value,
  onChangeVlue = () => null,
}) => {
  return (
    <div className={selectStyles.dropdown}>
      <button className={selectStyles.dropbtn}>
        {value
          ? options.filter((option) => option.value === value)[0].label
          : options[0].label}{" "}
        &#9662;
      </button>

      <div className={selectStyles["dropdown-content"]} style={{ left: 0 }}>
        {options.map((option) => (
          <span
            href="#"
            key={option}
            onClick={() => onChangeVlue(option.value)}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Select;
