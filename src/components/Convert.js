import axios from "axios";
import React,{useEffect, useState} from "react";



const Convert=({options,inLang, outLang,text, translatedText})=>{
    const [result, setResult]=useState("");
    const [debouncedText, setDebouncedText]=useState(text);
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebouncedText(text);
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
            if(inLang.value!==data.data.detections[0][0].language && debouncedText!==""){
                document.getElementById("suggestion").style.display="block";
                document.getElementById("detect").innerHTML=options.map(option=>{return (option.value===data.data.detections[0][0].language?option.label:"")}).filter((n)=>{return n!==","?n:""});
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
            setResult(data.data.translations[0].translatedText);
        };
        doTranslation();
    },[debouncedText, inLang,outLang]);
    translatedText(result);

    if(result===""){
        return(<div className="m-4 text-muted"><h2>Translate</h2></div>);
    }
    // translatedText({result});
    return(<div className="m-4" style={{ color: "black"}}><h2>{result}</h2></div>); 

}


export default Convert;