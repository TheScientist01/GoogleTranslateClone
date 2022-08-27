import React,{useState, useRef, useEffect} from "react";

const Dropdown=({options,selected, onChangedOption})=>{
    
    const [isActive, setIsActive]=useState(false);
    
    const ref=useRef();
    const onChoose=(option)=>{
        setIsActive(false);
        onChangedOption(option);
        
    }


    useEffect(()=>{
        document.body.addEventListener('click',(event)=>{
            if(ref.current.contains(event.target)){
                return;
            }
            else{
                setIsActive(false);
            }
        });
    },[])


    const result=options.map((option)=>
        {
            return(
                <div style={{cursor: "pointer", }} className="p-3 drop-item" onClick={()=>onChoose(option)}>{option.label}</div>
            );
        }
    );
    
    return(
        <div ref={ref}>
        <div onClick={()=>setIsActive(!isActive)} className={`ui pt-3 pb-3 selection dropdown col-12 ${isActive?'active':''}`} style={{}}>
            <div onClick={()=>setIsActive(!isActive)} className="text text-muted my-1" style={{fontWeight: "500", fontSize: "19px"}}>{selected.label}</div>
            <div className={`menu ${isActive?'visible transition':''}`}>{result}</div>
        </div>

        </div>
    );
}


export default Dropdown;