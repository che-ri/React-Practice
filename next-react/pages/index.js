import Axios from "axios";
import React, { useState, useEffect } from "react";
import Head from "next/head";

import ListItem from "../src/components/ListItem";

//head에 대한 내용을 넣는다.
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
            <Head>
                <title>셰리</title>
            </Head>
            <ListItem list={list} />
        </div>
    );
}
