import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

const Item = ({ item, id }) => {
    return (
        <>
            {item && (
                <ItemContainer>
                    <span>Product.{id}</span>
                    <img src={item?.image_link} alt={item?.name} />
                    <strong>{item?.name}</strong>
                    <strong>{item?.price}</strong>
                    <Button color="orange" onClick={() => {}}>
                        구매하기
                    </Button>
                </ItemContainer>
            )}
        </>
    );
};

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: pink;
    img {
        width: 150px;
        border-radius: 50%;
    }
`;

export default Item;
