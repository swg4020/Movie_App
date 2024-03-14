import styled from "styled-components";
import { IMG_URL } from "../../constant/url";

const Banner = styled.section`
  height: 80vh;
  background: url(${IMG_URL}${(props) => props.$bgUrl}) no-repeat center / cover;
`;

export const MainBanner = ({ imgUrl }) => {
  return <Banner $bgUrl={imgUrl[9]?.backdrop_path}></Banner>;
};
