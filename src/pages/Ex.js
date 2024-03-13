import { useEffect, useState } from "react";

export const Ex = () => {
  const [num, setNum] = useState(0);

  //   useEffect(() => {
  //     // console.log("마운트 및 업데이트될때 실행");
  //   });

  //   useEffect(() => {
  //     console.log("마운트 될때만 실행");
  //   }, []);
  //   =>빈 배열(deps)로 작성시 마운트 될때만 실행함

  useEffect(() => {
    console.log("num 값이 변경될때만 실행");
    return () => console.log("cleanup 함수 실행");
  }, [num]);
  //   =>배열의 값이 변경될때 마다 useEffect내부에 있는 함수가 실행됨
  //   개인추가 설명: 배열안의 값이 바귀거나 달라졌을때 실행됨.

  return (
    <div>
      <h3>{num}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

// 이번 프로젝트 정리
// *useEffect
// =>컴포넌트가 랜더링 되기전, 후, 수정, 정리 등을 수행 할 수 있음
// =>mount : 첫 랜더링
// =>update: 리 랜더링
// =>unmount: 화면에서 사라질때
// =>콜백함수: 랜더링 되거나 리 랜더링될때 실행함
// =>deps: 화면에 첫 랜더링 될때 또는 값이 변경될때
// =>cleanup: 랜더링 후 마지막으로 정리되어야 할 내용 실행
