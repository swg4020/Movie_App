import { Form, useForm } from "react-hook-form";
import styled from "styled-components";
import { searchMovie } from "../../api";
import { useState } from "react";
import { IMG_URL_SIZE } from "../../constant/url";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";

const Container = styled.section`
  padding: 150px;
`;

const SForm = styled.form`
  input {
    all: unset;
    border-bottom: 1px solid #555;
    font-size: 24px;
    padding-left: 5px;
    padding-bottom: 10px;
    width: 100%;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 10px;

  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
`;
const Con = styled.div`
  h3 {
    margin-top: 10px;
  }
`;
const Bg = styled.div`
  height: 350px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.p`
  width: 100%;
  font-size: 19px;
  padding: 50px;
`;

export const Search = () => {
  const [term, setTerm] = useState();
  const [keyword, setKeyword] = useState("");
  const [isLoding, setIsLoding] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // =>입력한 내용을 가져올수있다,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    setIsLoding(true);
    const { search: keyword } = data;
    try {
      const { results } = await searchMovie(keyword);
      console.log(results);
      setTerm(results);
      setKeyword(keyword);
      setIsLoding(false);
    } catch (error) {
      console.log(error);
    }
  };

  // const { search } = getValues();
  // =>검색한 값을 가져와서 사용하는 경우 비구조할당으로 줄수있다,
  // console.log(search);

  return (
    <Container>
      <PageTitle title={"Search"} />
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("search", {
            required: "내용을 입력해주세요",
          })}
          type="text"
          placeholder="찾으시는 영화가 있나요?"
        />
        <FaSearch />
      </SForm>

      {errors ? errors?.search?.message : ""}
      {term ? <Text>"{keyword}"의 검색 결과</Text> : ""}

      {term && (
        <ConWrap>
          {isLoding ? (
            <Loading />
          ) : (
            <>
              {term.map((data) => (
                <Con key={data.id}>
                  <Link to={`detail/${data.id}`}>
                    <Bg>
                      {data.poster_path ? (
                        <img
                          src={`${IMG_URL_SIZE.size_200}${data.poster_path}`}
                          alt={data.title}
                        />
                      ) : (
                        <img
                          src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                          alt="이미지 없음"
                        />
                      )}
                    </Bg>
                    <h3>{data.title}</h3>
                  </Link>
                </Con>
              ))}
            </>
          )}
        </ConWrap>
      )}
    </Container>
  );
};
