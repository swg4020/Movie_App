import { Form, useForm } from "react-hook-form";
import styled from "styled-components";
import { searchMovie } from "../../api";
import { useState } from "react";
import { IMG_URL_SIZE } from "../../constant/url";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

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
const Con = styled.div``;
const Bg = styled.div``;

const Text = styled.div`
  width: 100%;
`;

export const Search = () => {
  const [term, setTerm] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    // =>입력한 내용을 가져올수있다,
  } = useForm();

  const onSubmit = async (data) => {
    const { search: keyword } = data;
    try {
      const { results } = await searchMovie(keyword);
      console.log(results);
      setTerm(results);
    } catch (error) {
      console.log(error);
    }
  };

  const { search } = getValues();
  // =>검색한 값을 가져와서 사용하는 경우 비구조할당으로 줄수있다,

  return (
    <Container>
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
      
      {term ? <Text>{`"${search}"의 검색 결과`}</Text> : ""}

      {term && (
        <ConWrap>
          {term.map((data) => (
            <Con key={data.id}>
              <Link to={`detail/${data.id}`}>
                <Bg>
                  <img
                    src={`${IMG_URL_SIZE.size_200}${data.poster_path}`}
                    alt={data.title}
                  />
                </Bg>
                <h3>{data.title}</h3>
              </Link>
            </Con>
          ))}
        </ConWrap>
      )}
    </Container>
  );
};
