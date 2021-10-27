import React from "react";
import { Grid, Image } from "semantic-ui-react";

const ListItem = ({ list }) => {
    console.log(list);
    return (
        <Grid columns={3} divided>
            <Grid.Row>
                {list.map((item) => (
                    <Grid.Column>
                        <Image src={item.image_link} alt={item.name} />
                        <strong>{item.name}</strong>
                        <span>$ {item.price}</span>
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    );
};

export default ListItem;
