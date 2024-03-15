import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import styled from "styled-components";
import { MainBanner } from "./MainBanner";
import { Loading } from "../../components/Loading";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../constant/url";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Section = styled.section`
  padding: 100px;
  padding-right: 0;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Bg = styled.div`
  height: 370px;
  background: url(${IMG_URL}${(props) => props.$bgUrl}) no-repeat center / cover;
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  margin-top: 20px;
`;

export const Home = () => {
  const [isLoding, setIsLoding] = useState(true);

  const [nowData, setNowData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowData(results);
        setIsLoding(false);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, []);

  console.log(nowData);

  return (
    <>
      {isLoding ? (
        //isLoding이 true면 로딩중이고 false면 로딩이 끝나면서 불러와진다.
        <Loading />
      ) : (
        <>
          {nowData && (
            <>
              <MainBanner imgUrl={nowData} />

              <Section>
                <Title>현재 상영 영화</Title>
                <Swiper slidesPerView={5.2} spaceBetween={20}>
                  {nowData.map((data) => (
                    <SwiperSlide key={data.id}>
                      <Link to="#">
                        <Bg $bgUrl={data.poster_path} />
                        <MovieTitle>{data.title}</MovieTitle>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Section>
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
