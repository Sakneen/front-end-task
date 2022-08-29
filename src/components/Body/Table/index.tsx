import React from "react";
import { useSelector } from "react-redux";
import { useLoadingSelector } from "redux/selectors";
import Unit, { selectUnits } from "redux/Unit";
import Header from "./Header/Header";
import Item from "./Item";
import Table from "./Table";
import ClipLoader from "react-spinners/ClipLoader";

const TableMain = () => {
  const data: any = useSelector(selectUnits);
  const isLoading = useLoadingSelector(Unit.thunks.doGetUnits);
  return (
    <Table.Container style={{ height: isLoading && "43.7vh" }}>
      <Header />
      {isLoading ? (
        <ClipLoader />
      ) : (
        <>
          {data.map((item: any, index: number) => (
            <Item key={index} item={item} index={index} />
          ))}
        </>
      )}
    </Table.Container>
  );
};

export default TableMain;
