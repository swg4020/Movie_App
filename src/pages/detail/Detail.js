import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { IMG_URL } from "../../constant/url";

const Container = styled.div`
  padding: 150px;
  display: flex;
  justify-content: space-between;
`;

const Bg = styled.div`
  width: 48%;
`;

const Con = styled.div`
  width: 46%;
  h3 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .info {
    font-size: 20px;
    margin-bottom: 20px;
  }

  p {
    padding-top: 50px;
    border-top: 1px solid #808080;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 28px;
    opacity: 0.7;
  }
`;

const Genres = styled.ul`
  list-style: disc;
  margin-left: 26px;
  li {
    margin-bottom: 10px;
  }
  li:last-child {
    margin-bottom: 50px;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  // =>쿼리값을 가져와서 아이디 값을 준다,
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        setData(detailData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  console.log(data);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Bg>
            <img src={`${IMG_URL}${data?.poster_path}`} alt={data?.title} />
          </Bg>
          <Con>
            <h3>{data?.title}</h3>
            <div className="info">{data?.vote_average}점</div>
            <div className="info">{data?.runtime}분</div>
            <div className="info">{data?.release_date}</div>
            <Genres className="info">
              <li>코믹</li>
              <li>액션</li>
              <li>판타지</li>
            </Genres>
            <p>{data?.overview}</p>
          </Con>
        </Container>
      )}
    </div>
  );
};
