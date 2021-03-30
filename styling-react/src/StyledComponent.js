import React from "react";
import styled, { css } from "styled-components";

const Circle = styled.div`
width: 5rem;
height: 5rem;
background: black;
border-radius: 50%;
`;

function StyledComponent(){
    return <Circle/>
}

export default StyledComponent;