import React from "react";
import styled, {css} from "styled-components";

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

/* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

/* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해 줍니다. */
${props =>props.inverted &&css
    `
      background: darkblue;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      
    `}
`;

const StyledComponent =() =>(
    <div color="blue" >
        <Button inverted={true}>안녕하세요</Button>
        <Button>테두리만</Button>
    </div>
);

export default StyledComponent;