import { Header } from "semantic-ui-react";
import styled from "styled-components";

//components
import Gnb from "./Gnb";

const Top = () => {
    return (
        <div>
            <Header as="h1">메이블린</Header>
            <Gnb />
        </div>
    );
};

export default Top;
