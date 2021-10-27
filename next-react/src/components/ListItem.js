import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Link from "next/link";

const ListItem = ({ list }) => {
    return (
        <Grid columns={3} divided>
            <Grid.Row>
                {list.map(item => (
                    <Grid.Column key={item.id}>
                        <Link href={`/view/${item.id}`}>
                            <a href="">
                                <Image src={item.image_link} alt={item.name} />
                                <strong>{item.name}</strong>
                                <span>{item.product_type}</span>
                                <span>$ {item.price}</span>
                            </a>
                        </Link>
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    );
};

export default ListItem;
