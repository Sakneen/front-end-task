import styled from "styled-components";
import colors from "values/colors";
import Image from "next/image";

type THeaderText = {
  isHeader?: boolean;
};

type TContainer = {
  isOdd?: boolean;
  isHeader?: boolean;
};

type TTextBackgrounded = {
  isForSale: boolean;
};

const ItemContainer = styled.div<TContainer>`
  width: 100%;
  height: ${({ isHeader }) => (isHeader ? "40px" : "56px")};
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 10vw 10vw 10vw 10vw 7vw 3.3vw;
  gap: 5.5vw;
  align-items: center;
  background: ${({ isOdd }) => (isOdd ? "#fff" : " #F5F5F5")};
`;

const Text = styled.p<THeaderText>`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: ${({ isHeader }: any) => (isHeader ? 500 : 400)};
  font-size: ${({ isHeader }: any) => (isHeader ? "16px" : "14px")};
  line-height: ${({ isHeader }: any) => (isHeader ? "21px" : "18px")};
  color: #000000;
`;

const TextBackgrounded = styled.p<TTextBackgrounded>`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 12px;
  color: #fff;
  padding: 4px 8px;
  background: ${({ isForSale }) => (isForSale ? "#2419BE" : "#616161")};
  border-radius: 3px;
  height: 20px;
  max-width: ${({ isForSale }) => (isForSale ? "5vw" : "7vw")};
`;

const GalleryImage = styled(Image)`
  &:hover {
    cursor: pointer;
  }
`;

export default {
  Container: ItemContainer,
  Text,
  TextBackgrounded,
  Image: GalleryImage,
};
