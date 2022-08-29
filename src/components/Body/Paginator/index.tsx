import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/store";
import Unit, { selecTotalCount, selectPage } from "redux/Unit";
import images from "values/images";
import CirclesMain from "./Circles";
import Paginator from "./Paginator";

const PaginatorMain = () => {
  const dispatch = useAppDispatch();
  const page = useSelector(selectPage);
  const totalCount = useSelector(selecTotalCount);
  return (
    <Paginator.Container>
      <Paginator.LeftArrow
        src={images.body.paginator.leftArrow}
        width={8}
        height={12}
        onClick={() => {
          if (page === 1) return;
          dispatch(Unit.actions.doGetPrevPage());
        }}
      />
      <CirclesMain />
      <Paginator.RightArrow
        src={images.body.paginator.rightArrow}
        width={8}
        height={12}
        onClick={() => {
          if (page === Math.round(totalCount / 5)) return;
          dispatch(Unit.actions.doGetNextPage());
        }}
      />
    </Paginator.Container>
  );
};

export default PaginatorMain;
