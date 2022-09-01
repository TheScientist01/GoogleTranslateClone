import axios from "axios";
import React,{useEffect, useState} from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { detectLang, outputText } from "../redux/actions";

const Convert=({options})=>{
    const dispatch=useDispatch();
    const text=useSelector(state=>state.text.inputText);
    const [debouncedText, setDebouncedText]=useState(text);
    const inLang=useSelector(state=>state.language.inLang);
    const outLang=useSelector(state=>state.language.outLang);
    const output=useSelector(state=>state.text.outputText);
    useEffect(()=>{
        
        const timer=setTimeout(()=>{
            setDebouncedText(text);
        },300);
        
        return ()=>{clearTimeout(timer);};
    },[text,inLang,outLang]);


    useEffect(()=>{
        const doDetection=async()=>{
            const {data}=await axios.post('https://translation.googleapis.com/language/translate/v2/detect',{},{
                params: {
                    q:debouncedText,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            });
            if(inLang.value!==data.data.detections[0][0].language && debouncedText!==""){
                document.getElementById("suggestion").style.display="block";
                options.forEach(option => {
                    if(option.value===data.data.detections[0][0].language){
                        dispatch(detectLang(option));
                    }
                });
            }
            else{
                document.getElementById("suggestion").style.display="none";
            }
            
        };
        doDetection();
    },[debouncedText, inLang,options]);

    useEffect(()=>{
        
        const doTranslation=async()=>{
            const {data}=await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params:{
                    q:debouncedText,
                    target:outLang.value,
                    source:inLang.value,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            });
            dispatch(outputText(data.data.translations[0].translatedText));
        };
        doTranslation();
    },[debouncedText, inLang,outLang]);

    if(output===""){
        return(<div className="m-4 text-muted"><h2>Translate</h2></div>);
    }
    return(<div className="m-4" style={{ color: "black"}}><h2>{output}</h2></div>); 

}


export default Convert;