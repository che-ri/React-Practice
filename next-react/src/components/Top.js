import { Header } from "semantic-ui-react";

//components
import Gnb from "./Gnb";

const Top = () => {
    return (
        <div>
            <img src="/images/비행기.png" alt="logo" />
            <Header as="h1">셰리</Header>
            <Gnb />
        </div>
    );
};

export default Top;
