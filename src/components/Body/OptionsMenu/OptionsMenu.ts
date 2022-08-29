import styled from "styled-components";
import colors from "values/colors";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2vh;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Text = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  margin-right: 10px;
`;

const Input = styled.input`
  width: 123px;
  height: 24px;
  ::placeholder {
    color: #616161;
  }
`;

const SortText = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  color: #000000;
  margin: 0 10px;
`;

const SortImage = styled(Image)``;

export default { Container, Text, RowWrapper, Input, SortImage, SortText };
