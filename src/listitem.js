import React from 'react';
import './listitem.css'

const listItems = (props) => {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key} >
            <p>{item.text}
            <span className="deleteicon" onClick={()=> props.deleteItem(item.key)} > X </span> </p>
            
        </div>
    })
    return(
        <div>{listItems}</div>
    )
}

export default listItems;
