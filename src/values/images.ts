const images: TImages = {
  nav: {
    logo: "/logo.png",
  },
  body: {
    directoryMenu: {
      logo: "/logo_in_Direc.png",
      rightArrow: "/right_arrow.png",
    },
    item: { empty: "/empty.png" },
    paginator: {
      leftArrow: "/left_arrow.png",
      rightArrow: "/right_arrow.png",
    },
    optionsMenu: {
      sort: "/sort.png",
    },
  },
};

type TImages = {
  nav: TLogo;
  body: TBody;
};

type TBody = {
  directoryMenu: TDirectory;
  paginator: {
    leftArrow: any;
    rightArrow: any;
  };
  optionsMenu: {
    sort: any;
  };
  item: { empty: any };
};

type TDirectory = {
  logo: any;
  rightArrow: any;
};

type TLogo = {
  logo: any;
};

export default images;
