import React from "react";

export default function Checkbox({data,index}) {
    const handleOnChange = (data1) => {
        console.log(data1);
    }
    return (
        <>
            <div className="left-section">
                <input
                    type="checkbox"
                id={`custom-checkbox-${data.value}`}
                name={data.name}
                value={data.name}
                //checked={checkedState[iprops.ndex]}
                onChange={() => handleOnChange(data)}
                />
                <label htmlFor={`custom-checkbox-${data.value}`}>{data.name}</label>
            </div>
        </>
    )
}