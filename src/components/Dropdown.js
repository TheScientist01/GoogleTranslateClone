import React from "react";
import { dropdownActiveIn, dropdownActiveOut, dropdownDeactive, inputLang, outputLang} from "../redux/actions";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";



const Dropdown = ({ options }) => {
    const dispatch = useDispatch();
    const isActive = useSelector(state => state.dropdown.isActive);
    const isActiveIn = useSelector(state => state.dropdown.isActiveIn);
    const inLang=useSelector(state=>state.language.inLang);
    const outLang=useSelector(state=>state.language.outLang);
    // const isActiveOut = useSelector(state => state.dropdown.isActiveOut);
    
    const onChoose = (option) => {
        if(isActiveIn){
            dispatch(inputLang(option));
        }
        else{
            dispatch(outputLang(option));
        }
        dispatch(dropdownDeactive());          
    }


    // useEffect(() => {
    //     document.body.addEventListener('click', (event) => {
    //         if (ref.current.contains(event.target)) {
    //             return;
    //         }
    //         else {
    //             // dispatch(dropdownDeactive());
    //         }
    //     });
    // }, [])


    const list = options.map((option) => {
        return (<div key={option.value} onClick={() => {onChoose(option)}} className="col-2 py-3 list-element">{option.label}</div>)
    });

    return (
        <div>
        <div className="row no-gutters" style={{ borderRadius: "10px 10px 0 0" }}>
            <div className="col-6" style={{ borderRadius: "inherit" }}>
                <div className={`ui dropdown bg-white col-12 ${isActive ? "active" : ""}`}>
                    <div className="text text-muted py-3 px-3 selected-lang" style={{ fontWeight: "500", fontSize: "19px" }}>{inLang.label}</div>
                    <button onClick={() => { isActive ? dispatch(dropdownDeactive()) : dispatch(dropdownActiveIn()) }} className="btn btn-lg gray-button ml-5"><i className="fa-solid fa-chevron-down text-secondary"></i></button>
                </div>
            </div>
            <div className="col-6" style={{ borderRadius: "inherit" }}>
                <div className={`ui dropdown bg-white col-12 ${isActive ? "active" : ""}`}>
                    <div className="text text-muted py-3 px-3 selected-lang" style={{ fontWeight: "500", fontSize: "19px" }}>{outLang.label}</div>
                    <button onClick={() => { isActive ? dispatch(dropdownDeactive()) : dispatch(dropdownActiveOut()) }} className="btn btn-lg gray-button ml-5"><i className="fa-solid fa-chevron-down text-secondary"></i></button>
                    {/* <div className={`menu ${isActive?'visible transition':''}`}>{result}</div> */}
                    {/* <div style={{ width: "92.5vw" }} className={`row ${isActive ? '' : 'd-none'}`}>
                        <div className="col-12 py-2" style={{ background: "white", border: "1px 0 1px 0 solid #dddddd" }}>
                            <button onClick={() => dispatch(dropdownDeactive())} className="btn"><i className="fa-solid fa-arrow-left"></i></button>
                            <input type={"text"} style={{ outline: "none", border: "none", fontSize: "18px", width: "90%" }} className="ml-4" placeholder="Seach languages"></input>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div style={{ width: "92.5vw" }} className={`row no-gutters ${isActive ? '' : 'd-none'}`}>
                        <div className="col-12 py-2" style={{ background: "white", border: "1px 0 1px 0 solid #dddddd" }}>
                            <button onClick={() => dispatch(dropdownDeactive())} className="btn"><i className="fa-solid fa-arrow-left"></i></button>
                            <input type={"text"} style={{ outline: "none", border: "none", fontSize: "18px", width: "90%" }} className="ml-4" placeholder="Seach languages"></input>
                        </div>
                        <div className="row m-0 bg-white">{list}</div>
            </div>
        </div>
    );
}


export default Dropdown;