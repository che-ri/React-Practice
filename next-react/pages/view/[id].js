import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import Item from "../../src/components/Item";

// url뒤에 view/ 뒤에 어떠한 값을 넣어도 라우팅 된다.
const DynamicRouteComponent = () => {
    const [item, setItem] = useState(null);

    const {
        query: { id },
    } = useRouter();

    useEffect(() => {
        if (id) {
            const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
            function getData() {
                axios.get(API_URL).then(res => setItem(res.data));
            }
            getData();
        }
    }, [id]);

    return <Item item={item} id={id} />;
};

export default DynamicRouteComponent;
