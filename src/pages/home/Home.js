import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import styled from "styled-components";
import { MainBanner } from "./MainBanner";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const [isLoding, setIsLoding] = useState(true);

  const [nowData, setNowData] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await nowPlaying();
      setNowData(results);
      setIsLoding(false);
    })();
  }, []);

  console.log(nowData);

  return (
    <>
      {isLoding ? (
        //isLoding이 true면 로딩중이고 false면 로딩이 끝나면서 불러와진다.
        <Loading />
      ) : (
        <>{nowData && <MainBanner imgUrl={nowData} />}</>
        //가져올때 조건을 걸어서 데이터가 불러와지면 뒤에 배너 태그도 불러와진다. 이것을 안하면 오류가발생한다
        //이유는 프롭스로 값을 가져와야하는대 서로 불러와지는 경우에는 프롭스를 먼저 가져와야함으로 오류가 발생
        //스타일드 컴포넌트가 없을 경우에는 $를 붙여줄필요는 없다.
      )}
    </>
  );
};

// https://image.tmdb.org/t/p/original/
