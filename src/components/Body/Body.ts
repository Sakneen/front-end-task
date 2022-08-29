import styled from "styled-components";
import colors from "values/colors";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 92vh;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding: 6vh 8vw;
  background: ${colors.bodyBackground};
`;

const Title = styled.h5`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: black;
`;


export default {
  Container,
  Title,
};
