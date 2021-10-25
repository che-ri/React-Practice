import Head from "next/head";

//head에 대한 내용을 넣는다.
export default function Home() {
    return (
        <div>
            <Head>
                <title>셰리</title>
            </Head>
            <ul>
                <li>🎹</li>
                <li>💻</li>
                <li>⛺</li>
            </ul>
        </div>
    );
}
