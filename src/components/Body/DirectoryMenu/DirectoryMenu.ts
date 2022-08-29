import styled from "styled-components";
import colors from "values/colors";
import Image from "next/image";

const DirectoryMenuContainer = styled.div`
  background: white;
  width: 100%;
  height: 32px;
  padding: 8px;
  margin-top: -31px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled(Image)``;

const DirectoryText = styled.p`
  width: 32px;
  height: 14px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.4px;
  color: ${colors.openGrey};
  margin: 8px 10px;
  &:hover {
    text-decoration-line: underline;
    color: ${colors.darkGrey};
    cursor: pointer;
  }
`;

const RightArrow = styled(Image)``;

export default {
  container: DirectoryMenuContainer,
  Logo,
  DirectoryText,
  RightArrow,
};
