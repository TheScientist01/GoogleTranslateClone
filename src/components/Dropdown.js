import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, selected, onChangedOption }) => {

    const [isActive, setIsActive] = useState(false);

    const ref = useRef();
    const onChoose = (option) => {
        setIsActive(false);
        onChangedOption(option);
        setIsActive(!isActive);
    }


    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            else {
                setIsActive(false);
            }
        });
    }, [])


    // const result = options.map((option) => {

    //     return (
    //         <div style={{ cursor: "pointer", }} className="p-3 drop-item" onClick={() => onChoose(option)}>{option.label}</div>
    //     );
    // }
    // );

    const list = options.map((option) => {
        return (<div onClick={() => {onChoose(option)}} className="col-2 py-3 list-element">{option.label}</div>)
    });

    return (
        <div ref={ref}>
            <div className={`ui dropdown bg-white col-12 ${isActive ? 'active' : ''}`}>
                <div  className="text text-muted py-3 px-3 selected-lang" style={{ fontWeight: "500", fontSize: "19px" }}>{selected.label}</div>
                <button onClick={() => setIsActive(!isActive)} className="btn btn-lg gray-button ml-5"><i className="fa-solid fa-chevron-down text-secondary"></i></button>
                {/* <div className={`menu ${isActive?'visible transition':''}`}>{result}</div> */}
                <div style={{ width: "92.5vw" }} className={`row ${isActive ? '' : 'd-none'}`}>
                    <div className="col-12 py-2" style={{background:"white" ,border: "1px 0 1px 0 solid #dddddd"}}>
                        <button onClick={() => setIsActive(!isActive)} className="btn"><i className="fa-solid fa-arrow-left"></i></button>
                        <input type={"text"} style={{ outline: "none", border: "none", fontSize:"18px", width:"90%" }} className="ml-4" placeholder="Seach languages"></input>
                    </div>
                    <div className="row m-0 bg-white">{list}</div>
                </div>
            </div>

        </div>
    );
}


export default Dropdown;