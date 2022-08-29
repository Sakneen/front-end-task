import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/store";
import Unit, { selectPage } from "redux/Unit";
import images from "values/images";
import OptionsMenu from "./OptionsMenu";
import Picker from "./Picker/Picker";

const OptionsMenuMain = () => {
  const [filterText, setFilterText] = useState("");
  const dispatch = useAppDispatch();
  const page = useSelector(selectPage);
  useEffect(() => {
    dispatch(Unit.thunks.doGetUnits({ page, filter: filterText }));
  }, [filterText]);
  return (
    <OptionsMenu.Container>
      <OptionsMenu.RowWrapper>
        <OptionsMenu.Text>Filters by ID:</OptionsMenu.Text>
        <OptionsMenu.Input
          placeholder="ex: 458394"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </OptionsMenu.RowWrapper>
      <OptionsMenu.RowWrapper>
        <OptionsMenu.SortImage
          src={images.body.optionsMenu.sort}
          width={18}
          height={18}
        />
        <OptionsMenu.SortText>Sort by: </OptionsMenu.SortText>
        <Picker page={page} />
      </OptionsMenu.RowWrapper>
    </OptionsMenu.Container>
  );
};

export default OptionsMenuMain;
