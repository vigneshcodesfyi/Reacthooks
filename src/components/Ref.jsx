import React, { useEffect, useRef, useState } from 'react';

const Ref = () => {
    const [first, setFirst] = useState("");
    console.log("Testing");

    const inputRef = useRef();

    const display = () => {
        console.log(inputRef.current.value);
    };

    useEffect(() => {
       
            inputRef.current = first;
       
        console.log(inputRef.current.value);


    }, [first]);

    return (
        <>
            <p>USE STATE: {first}</p>

            <input
                type='text'
                ref={inputRef}
                value={first}
                onChange={(e) => {
                   setFirst(e.target.value);
                 }}
            />
            <p>USE STATE: {inputRef.current}</p>

            <button onClick={display}>Show me the value</button>
        </>
    );
};

export default Ref;
