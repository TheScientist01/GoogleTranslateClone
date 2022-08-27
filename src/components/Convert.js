import axios from "axios";
import React,{useEffect, useState} from "react";



const Convert=({options,inLang, outLang,text})=>{
    const [result, setResult]=useState("");
    const [status, setStatus]=useState(1);
    const [inputLanguage, setInputLanguage]=useState(inLang);
    const [debouncedText, setDebouncedText]=useState(text);
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebouncedText(text);
            setStatus(2);
        },500);

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
            if(inputLanguage.value!==data.data.detections[0][0].language && debouncedText!==""){
                document.getElementById("suggestion").style.display="block";
                document.getElementById("detect").innerHTML=options.map(option=>{return (option.value===data.data.detections[0][0].language?option.label:"")}).filter((n)=>{return n!==","?n:""});
            }
            else{
                document.getElementById("suggestion").style.display="none";
            }
            
        };
        doDetection();
    },[debouncedText]);

    useEffect(()=>{

        const doTranslation=async()=>{
            const {data}=await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params:{
                q:debouncedText,
                target:outLang.value,
                source:inputLanguage.value,
                key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
            }
        });
        setResult(data.data.translations[0].translatedText);
        setStatus(3);
        };
        doTranslation();
    },[debouncedText, inLang,outLang])


    if(result===""){
        return(<div className="m-4 text-muted"><h2>Translate</h2></div>) 
    }
    
    switch (status) {
        case 2:
            return(<div className="m-4 text-muted"><h2>Translating...</h2></div>);
        case 3:
            return(<div className="m-4" style={{ color: "black"}}><h2>{result}</h2></div>);
        default:
            return
    }
}


export default Convert;