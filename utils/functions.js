export const getPath = (asPath) => {
 const queryParamIndex = asPath.indexOf("?");

 const path =
  asPath.substring(1, queryParamIndex === -1 ? undefined : queryParamIndex) ||
  "Home"; //clear query params

 return path.charAt(0).toUpperCase() + path.slice(1); // return capitalized title
};
