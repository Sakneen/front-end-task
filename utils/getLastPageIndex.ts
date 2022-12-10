export const getLastPageIndex = (arr: string): number => {
  const pages = arr.split("_page");
  const lastPageLink = pages[pages.length - 1];
  const lastPageIndex = lastPageLink.substring(
    lastPageLink.indexOf("=") + 1,
    lastPageLink.indexOf("&")
  );

  return +lastPageIndex;
};
