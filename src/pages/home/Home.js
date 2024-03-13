import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import styled from "styled-components";

const Banner = styled.section`
  height: 80vh;
  background: url(https://image.tmdb.org/t/p/original/${(props) =>
      props.$bgUrl})
    no-repeat center / cover;
`;

export const Home = () => {
  const [nowData, setNowData] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await nowPlaying();
      setNowData(results);
    })();
  }, []);

  console.log(nowData);

  return (
    <div>
      <Banner $bgUrl={nowData[1].backdrop_path}></Banner>
    </div>
  );
};

// https://image.tmdb.org/t/p/original/
