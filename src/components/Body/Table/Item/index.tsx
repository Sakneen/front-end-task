import { TableContext } from "components/Body";
import React, { useContext } from "react";
import { useAppDispatch } from "redux/store";
import Unit from "redux/Unit";
import images from "values/images";
import Item from "./Item";

const ItemMain = ({ item, index }: any) => {
  const { setShowModal } = useContext(TableContext);
  const dispatch = useAppDispatch();
  return (
    <Item.Container isOdd={index % 2 !== 0}>
      <Item.Text isHeader={false}>{item.unit_id}</Item.Text>
      <Item.Text isHeader={false}>{item.unit_type}</Item.Text>
      <Item.Text isHeader={false}>{item.total_price}</Item.Text>
      <Item.Text isHeader={false}>{item.bua}</Item.Text>
      <Item.TextBackgrounded isForSale={item.for_sale}>
        {item.for_sale ? "For Sale" : "Not For Sale"}
      </Item.TextBackgrounded>
      <Item.Image
        onClick={() => {
          if (item.photos.length === 0) return;
          setShowModal(true);
          dispatch(Unit.actions.doSetImagesToView(item.photos));
        }}
        width={40}
        height={40}
        src={item.photos.length === 0 ? images.body.item.empty : item.photos[0]}
        alt="No Photos"
      />
    </Item.Container>
  );
};

export default ItemMain;
