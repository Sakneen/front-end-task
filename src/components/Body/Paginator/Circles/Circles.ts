import styled from "styled-components";
import colors from "values/colors";

type TCircle = {
  activeCircle: boolean;
};

const Circle = styled.div<TCircle>`
  background: ${({ activeCircle }) =>
    activeCircle ? colors.primary : colors.deactiveCircle};
  border-radius: 16px;
  width: 32px;
  height: 32px;
  padding: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ activeCircle }) => (activeCircle ? "white" : colors.openGrey)};
  margin: 0 10px;
  &:hover{
    cursor: pointer;
  }
`;

export default {
  Circle,
};
