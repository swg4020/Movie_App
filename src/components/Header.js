import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { colors } from "./GlobalStyled";

const Container = styled.header`
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  a {
    color: ${colors.point};
  }
`;

const Nav = styled.ul`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  li {
    margin-left: 100px;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Logo>
        <Link to={routes.home}>MOVIE</Link>
      </Logo>

      <Nav>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.search}>Search</Link>
        </li>
      </Nav>
    </Container>
  );
};
