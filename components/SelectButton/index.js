import React, { useEffect, useState } from "react";
import { Button, MenuItem, MenuList, Popover } from "@mui/material";
import styles from "./styles.module.css";
const SelectButton = ({ index, onChange = () => null, options = [] }) => {
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
        {options[index]}
      </Button>
      <Popover
        disableScrollLock
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MenuList>
          {options.map((element, index) => {
            return (
              <MenuItem
                key={index}
                onClick={() => {
                  onChange(index);
                  handleClose();
                }}
              >
                {element}
              </MenuItem>
            );
          })}
        </MenuList>
      </Popover>
    </>
  );
};
export default SelectButton;
