import React from "react";

function Food(props) {
    console.log(props);
    return <h1 style={{ color: `${props.color}` }}>I like {props.fav}</h1>;
}

function App() {
    return (
        <>
            <div>Hello!</div>
            <Food
                fav="melon"
                color="green"
                name="props"
                propsArray={[1, 2, 3, 4, true]}
            />
            <Food fav="blueberry" color="blue" />
            <Food fav="strawberry" color="red" />
            <Food fav="fineapple" color="yellow" />
        </>
    );
}

export default App;
