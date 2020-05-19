import React from "react"

function Item(id) {
    return (
        <div>
            <h2 color="#3AC1EF">{id.x.name}</h2>
            <p>Time: {id.x.hour} : {id.x.min}</p>
            <p>Desc: {id.x.description}</p>
        </div>
    );
}

export default Item
