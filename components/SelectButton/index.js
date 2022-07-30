import React, { useState } from "react";
import { Button, MenuItem, MenuList, Popover } from "@mui/material";
import styles from "./styles.module.css";
const SelectButton = ({ value, onChange = () => null, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Button
        className={styles.button}
        onClick={(event) => {
          setIsOpen(true);
          setAnchorEl(event.currentTarget);
        }}
      >
        {value}
      </Button>
      <Popover open={isOpen} anchorEl={anchorEl} onClose={handleClose}>
        <MenuList>
          <MenuItem
            onClick={() => {
              onChange(options[0]);
              handleClose();
            }}
          >
            {options[0]}
          </MenuItem>
          <MenuItem
            onClick={() => {
              onChange(options[1]);
              handleClose();
            }}
          >
            {options[1]}
          </MenuItem>
          <MenuItem
            onClick={() => {
              onChange(options[2]);
              handleClose();
            }}
          >
            {options[2]}
          </MenuItem>
        </MenuList>
      </Popover>
    </>
  );
};
export default SelectButton;
