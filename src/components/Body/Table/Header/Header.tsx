import React from "react";
import { headerData } from "./data";
import Item from "../Item/Item";

const Header = () => {
  return (
    <Item.Container isOdd>
      {headerData.map((item, index) => (
        <Item.Text isHeader key={index}>
          {item}
        </Item.Text>
      ))}
    </Item.Container>
  );
};

export default Header;
