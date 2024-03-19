import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { MovieCon } from "./MovieCon";

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

  return <div>{isLoading ? <Loading /> : <MovieCon data={data} />}</div>;
};
