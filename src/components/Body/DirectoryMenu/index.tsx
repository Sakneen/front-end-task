import React from "react";
import images from "values/images";
import DirectoryMenu from "./DirectoryMenu";

const DirectoryMenuMain = () => {
  return (
    <DirectoryMenu.container>
      <DirectoryMenu.RightArrow
        src={images.body.directoryMenu.logo}
        width={13}
        height={13}
      />
      <DirectoryMenu.DirectoryText>Home</DirectoryMenu.DirectoryText>
      <DirectoryMenu.RightArrow
        src={images.body.directoryMenu.rightArrow}
        width={5}
        height={8}
      />
      <DirectoryMenu.DirectoryText>Dashboard</DirectoryMenu.DirectoryText>
    </DirectoryMenu.container>
  );
};

export default DirectoryMenuMain;
