import React, {useState} from "react";
import { dropdownActiveIn, dropdownActiveOut, dropdownDeactive, inputLang, outputLang, switchLang} from "../redux/actions";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import SearchBar from "./SearchBar";

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

    const [list, setList]=useState([]);

    const createList=(term="")=>{
        setList(options.map((option) => {
           if(option.label.toUpperCase().includes(term.toUpperCase())||option.value.toUpperCase().includes(term.toUpperCase())){
                return <div key={option.value} onClick={() => {onChoose(option)}} className="col-2 py-3 list-element">{option.label}</div>
           } 
        }));
    }

    return (
        <div>
        <div className="row no-gutters" style={{ borderRadius: "10px 10px 0 0", position: "relative" }}>
            <div className="col-6" style={{ borderRadius: "inherit" }}>
                <div className={`ui dropdown bg-white col-12 ${isActive ? "active" : ""}`}>
                    <div className="text py-3 px-3 selected-lang" style={{ fontWeight: "500", fontSize: "19px" }}>{inLang.label}</div>
                    <button onClick={() => { isActive ? dispatch(dropdownDeactive()) : dispatch(dropdownActiveIn()) }} className="btn btn-lg gray-button ml-5"><i className="fa-solid fa-chevron-down text-secondary"></i></button>
                </div>
            </div>
            <button onClick={()=>dispatch(switchLang(inLang,outLang))} className="btn btn-lg switch-button"><i className="fa-solid fa-right-left text-secondary"></i></button>
            <div className="col-6" style={{ borderRadius: "inherit" }}>
                <div className={`ui dropdown bg-white col-12 ${isActive ? "active" : ""}`}>
                    <div className="text  p-3 ml-3 selected-lang" style={{ fontWeight: "500", fontSize: "19px" }}>{outLang.label}</div>
                    <button onClick={() => { isActive ? dispatch(dropdownDeactive()) : dispatch(dropdownActiveOut()) }} className="btn btn-lg gray-button ml-5"><i className="fa-solid fa-chevron-down text-secondary"></i></button>
                </div>
            </div>
        </div>
        <div style={{ width: "92.5vw" }} className={`row no-gutters ${isActive ? '' : 'd-none'}`}>
                        <div className="col-12" style={{ background: "white", border: "1px solid #dddddd", padding: "10px 0" }}>
                            <button onClick={() => dispatch(dropdownDeactive())} className="btn btn-lg"><i className="fa-solid fa-arrow-left text-secondary" style={{fontSize:"20px"}}></i></button>
                            <SearchBar createList={createList} />
                        </div>
                        <div className="row col-12 m-0 bg-white">{list}</div>
            </div>
        </div>
    );
}


export default Dropdown;