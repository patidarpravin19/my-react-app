import React from 'react';

export default function TodoItem(props) {
    return (
        <>
            <div className="col-sm-12" key={props.item.id}>
                <h4>{props.item.id}</h4>
                <h4>{props.item.name}</h4>
                <p>{props.item.description}</p>
                <button className="btn btn-sm btn-danger" onClick={() => { props.onDelete(props.item) }}>Delete</button>
            </div>
            <hr />
        </>
    )
}