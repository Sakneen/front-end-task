import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Unit, { selectPage, selecTotalCount } from "redux/Unit";
import Circles from "./Circles";

const CirclesMain = () => {
  const page = useSelector(selectPage);
  const totalCount = useSelector(selecTotalCount);
  return (
    <>
      {totalCount > 10 ? (
        <>
          {page === 1
            ? [page, page + 1, page + 2].map((item, index) => (
                <Circle item={item} key={index} page={page} />
              ))
            : page === Math.round(totalCount / 5)
            ? [page - 2, page - 1, page].map((item, index) => (
                <Circle item={item} key={index} page={page} />
              ))
            : [page - 1, page, page + 1].map((item, index) => (
                <Circle item={item} key={index} page={page} />
              ))}
        </>
      ) : totalCount <= 10 && totalCount > 5 ? (
        [1, 2].map((item, index) => (
          <Circle item={item} key={index} page={page} />
        ))
      ) : (
        <Circle item={1} key={0} page={page} />
      )}
    </>
  );
};

const Circle = ({ item, page }: any) => {
  const dispatch = useDispatch();
  return (
    <Circles.Circle
      activeCircle={item === page}
      onClick={(e) => {
        e.preventDefault();
        dispatch(Unit.actions.doSetPage(item));
      }}
    >
      <p>{item}</p>
    </Circles.Circle>
  );
};

export default CirclesMain;
