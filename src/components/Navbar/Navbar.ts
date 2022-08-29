import styled from "styled-components";
import colors from "values/colors";
import Image from "next/image";

const NavContainer = styled.div`
  padding: 14px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 8vh;
  background-color: ${colors.primary};
`;

const Logo = styled(Image)``;

export default {
  Container: NavContainer,
  Logo,
};
