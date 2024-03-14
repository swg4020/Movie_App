import { ClockLoader } from "react-spinners";
import styled from "styled-components";
import { colors } from "./GlobalStyled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Container>
      <ClockLoader color={colors.point} />
    </Container>
  );
};
