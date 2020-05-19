import React from "react";
import "./Main.css";
import Item from "../items/Item";
import items from "../items/ItemList";

function Main() {
    const x = items.map(
        item => <Item key={item.id} x={item}/>
    );

    return (
        <body>
            {x}
        </body>
    );
}

export default Main
