import React, { createContext, useState } from "react";
import Body from "./Body";
import DirectoryMenu from "./DirectoryMenu";
import OptionsMenu from "./OptionsMenu";
import Paginator from "./Paginator";
import Table from "./Table";

export const TableContext = createContext<any>({});

const BodyMain = () => {
  return (
    <Body.Container>
      <Body.Title>Dashboard</Body.Title>
      <DirectoryMenu />
      <OptionsMenu />
      <Table />
      <Paginator />
    </Body.Container>
  );
};

export default BodyMain;
