import styled from "styled-components";
import colors from "values/colors";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 3vh;
`;

const RightArrow = styled(Image)``;
const LeftArrow = styled(Image)``;

export default { Container, RightArrow, LeftArrow };
