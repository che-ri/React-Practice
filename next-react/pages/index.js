import Axios from "axios";
import React, { useState, useEffect } from "react";

export default function Home() {
    const [list, setList] = useState([]);
    const API_URL =
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

    function getData() {
        Axios.get(API_URL)
            .then((res) => setList(res.data))
            .catch((err) => window.alert(err));
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <title>셰리</title>
        </div>
    );
}
