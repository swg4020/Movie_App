import { useEffect, useState } from "react";
import { nowPlaying, poPular, topRated, upComing } from "../../api";
import { MainBanner } from "./MainBanner";
import { Loading } from "../../components/Loading";
import { Movies } from "./Movies";
import { PageTitle } from "../../components/PageTitle";

export const Home = () => {
  const [isLoding, setIsLoding] = useState(true);

  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        const { results: popResult } = await poPular();
        const { results: TopResult } = await topRated();
        const { results: UpResult } = await upComing();
        // { results: UpResult } =>변수 이름을 추가로 변경하기

        setNowData(nowResult);
        setPopData(popResult);
        setTopData(TopResult);
        setUpData(UpResult);

        setIsLoding(false);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, []);

  return (
    <>
      {isLoding ? (
        //isLoding이 true면 로딩중이고 false면 로딩이 끝나면서 불러와진다.
        <Loading />
      ) : (
        <>
          {nowData && (
            <>
              <PageTitle title={"Home"} />
              <MainBanner imgUrl={nowData} />

              <Movies movieData={nowData} titleText={"현재 상영 영화"} />
              <Movies movieData={topData} titleText={"평점이 높은 영화"} />
              <Movies movieData={popData} titleText={"인기 영화"} />
              <Movies movieData={upData} titleText={"개봉 예정 영화"} />
            </>
          )}
        </>
        //가져올때 조건을 걸어서 데이터가 불러와지면 뒤에 배너 태그도 불러와진다. 이것을 안하면 오류가발생한다
        //이유는 프롭스로 값을 가져와야하는대 서로 불러와지는 경우에는 프롭스를 먼저 가져와야함으로 오류가 발생
        //스타일드 컴포넌트가 없을 경우에는 $를 붙여줄필요는 없다.
      )}
    </>
  );
};

// https://image.tmdb.org/t/p/original/

// *예외
// 1.컴파일 에러 : 프로그램이 실행 되기 전에 발생하는 오류

// 2.런타임 에러 : 프로램이 실행 중 발생하는 오류

// *try ~ catch
// =>발생 할 것 같은 예외 코드를 처리해주는 과정
// ex)
// try{
//   예외 가능성 있는 코드
// }catch(error){
//   예외가 발생했을때 처리
// }finally{
//   예외와 상관 없이 무조건 실행되어야 하는 코드😎
// }
