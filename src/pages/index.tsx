import Body, { TableContext } from "components/Body";
import ImageViewer from "components/Body/ImageViewer";
import Navbar from "components/Navbar";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/store";
import Unit, { selectPage } from "redux/Unit";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const page = useSelector(selectPage);
  
  useEffect(() => {
    dispatch(Unit.thunks.doGetUnits({ page }));
  }, [page]);

  return (
    <TableContext.Provider value={{ showModal, setShowModal }}>
      <Navbar />
      <Body />
      <ImageViewer showModal={showModal} setShowModal={setShowModal} />
    </TableContext.Provider>
  );
};

export default Index;
