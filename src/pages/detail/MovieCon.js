import styled from "styled-components";
import { IMG_URL } from "../../constant/url";
import { spacing } from "../../components/GlobalStyled";

const { padding_640, padding_450 } = spacing;

const Container = styled.div`
  padding: 150px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    padding: 100px ${padding_640} 150px ${padding_640};
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 100px ${padding_450} 150px ${padding_450};
  }
`;

const Bg = styled.div`
  width: 48%;
  height: 700px;
  img {
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    height: auto;
  }
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

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-top: 30px;
    h3 {
      line-height: 90px;
    }
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    margin-top: 30px;

    h3 {
      font-size: 50px;
      line-height: 70px;
    }

    .imfo,
    p {
      font-size: 15px;
    }
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

export const MovieCon = ({ data }) => {
  return (
    <Container>
      <Bg>
        <img src={`${IMG_URL}${data?.poster_path}`} alt={data?.title} />
      </Bg>
      <Con>
        <h3>{data?.title}</h3>
        <div className="info">{Math.ceil(data?.vote_average)}점</div>
        <div className="info">{data?.runtime}분</div>
        <div className="info">{data?.release_date}</div>
        <Genres className="info">
          {data?.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </Genres>
        <p>{data?.overview}</p>
      </Con>
    </Container>
  );
};
