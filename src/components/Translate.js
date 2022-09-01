import React, { useEffect, useState } from "react";
import { inputText, inputLang, detectLang } from "../redux/actions";
import Convert from "./Convert";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
const options = [ { label: "Afrikaans", value: "af" }, { label: "Albanian", value: "sq" }, { label: "Amharic", value: "am" }, { label: "Arabic", value: "ar" }, { label: "Armenian", value: "hy" }, { label: "Azerbaijani", value: "az" }, { label: "Basque", value: "eu" }, { label: "Belarusian", value: "be" }, { label: "Bengali", value: "bn" }, { label: "Bosnian", value: "bs" }, { label: "Bulgarian", value: "bg" }, { label: "Catalan", value: "ca" }, { label: "Cebuano", value: "ceb" }, { label: "Chinese (Simplified)", value: "zh" }, { label: "Chinese (Traditional)", value: "zh-TW" }, { label: "Corsican", value: "co" }, { label: "Croatian", value: "hr" }, { label: "Czech", value: "cs" }, { label: "Danish", value: "da" }, { label: "Dutch", value: "nl" }, { label: "English", value: "en" }, { label: "Esperanto", value: "eo" }, { label: "Estonian", value: "et" }, { label: "Finnish", value: "fi" }, { label: "French", value: "fr" }, { label: "Frisian", value: "fy" }, { label: "Galician", value: "gl" }, { label: "Georgian", value: "ka" }, { label: "German", value: "de" }, { label: "Greek", value: "el" }, { label: "Gujarati", value: "gu" }, { label: "Haitian Creole", value: "ht" }, { label: "Hausa", value: "ha" }, { label: "Hawaiian", value: "haw" }, { label: "Hebrew", value: "he " }, { label: "Hindi", value: "hi" }, { label: "Hmong", value: "hmn" }, { label: "Hungarian", value: "hu" }, { label: "Icelandic", value: "is" }, { label: "Igbo", value: "ig" }, { label: "Indonesian", value: "id" }, { label: "Irish", value: "ga" }, { label: "Italian", value: "it" }, { label: "Japanese", value: "ja" }, { label: "Javanese", value: "jv" }, { label: "Kannada", value: "kn" }, { label: "Kazakh", value: "kk" }, { label: "Khmer", value: "km" }, { label: "Kinyarwanda", value: "rw" }, { label: "Korean", value: "ko" }, { label: "Kurdish", value: "ku" }, { label: "Kyrgyz", value: "ky" }, { label: "Lao", value: "lo" }, { label: "Latin", value: "la" }, { label: "Latvian", value: "lv" }, { label: "Lithuanian", value: "lt" }, { label: "Luxembourgish", value: "lb" }, { label: "Macedonian", value: "mk" }, { label: "Malagasy", value: "mg" }, { label: "Malay", value: "ms" }, { label: "Malayalam", value: "ml" }, { label: "Maltese", value: "mt" }, { label: "Maori", value: "mi" }, { label: "Marathi", value: "mr" }, { label: "Mongolian", value: "mn" }, { label: "Myanmar (Burmese)", value: "my" }, { label: "Nepali", value: "ne" }, { label: "Norwegian", value: "no" }, { label: "Nyanja (Chichewa)", value: "ny" }, { label: "Odia (Oriya)", value: "or" }, { label: "Pashto", value: "ps" }, { label: "Persian", value: "fa" }, { label: "Polish", value: "pl" }, { label: "Portuguese (Portugal, Brazil)", value: "pt" }, { label: "Punjabi", value: "pa" }, { label: "Romanian", value: "ro" }, { label: "Russian", value: "ru" }, { label: "Samoan", value: "sm" }, { label: "Scots Gaelic", value: "gd" }, { label: "Serbian", value: "sr" }, { label: "Sesotho", value: "st" }, { label: "Shona", value: "sn" }, { label: "Sindhi", value: "sd" }, { label: "Sinhala (Sinhalese)", value: "si" }, { label: "Slovak", value: "sk" }, { label: "Slovenian", value: "sl" }, { label: "Somali", value: "so" }, { label: "Spanish", value: "es" }, { label: "Sundanese", value: "su" }, { label: "Swahili", value: "sw" }, { label: "Swedish", value: "sv" }, { label: "Tagalog (Filipino)", value: "tl" }, { label: "Tajik", value: "tg" }, { label: "Tamil", value: "ta" }, { label: "Tatar", value: "tt" }, { label: "Telugu", value: "te" }, { label: "Thai", value: "th" }, { label: "Turkish", value: "tr" }, { label: "Turkmen", value: "tk" }, { label: "Ukrainian", value: "uk" }, { label: "Urdu", value: "ur" }, { label: "Uyghur", value: "ug" }, { label: "Uzbek", value: "uz" }, { label: "Vietnamese", value: "vi" }, { label: "Welsh", value: "cy" }, { label: "Xhosa", value: "xh" }, { label: "Yiddish", value: "yi" }, { label: "Yoruba", value: "yo" }, { label: "Zulu", value: "zu" } ]

const Translate = () => {
    const dispatch=useDispatch();
    const text=useSelector(state=>state.text.inputText);
    const translatedText=useSelector(state=>state.text.outputText);
    const isActive=useSelector(state=>state.dropdown.isActive);
    const detectLang=useSelector(state=>state.language.detectLang);
    const [copiedElement, setCopiedElement]=useState("");
    const onC = (event) => {
        // setText(event.target.value);
        dispatch(inputText(event.currentTarget.textContent));
    };

    // document.getElementById("input").addEventListener("input",(e)=>console.log(e.currentTarget.textContent), false);
    
    const copyToClipboard=()=>{
        navigator.clipboard.writeText(translatedText);        
        setCopiedElement(translatedText);


    }


    return (
        <div style={{ boxShadow: "0 0 3px 2px rgb(0 0 0 / 10%)", borderRadius: "10px" }}>

            
                    <Dropdown
                        options={options}
                        // onChangedOption={setInLang}
                    />
            
            <div className={`row no-gutters ${isActive?"d-none":""}`} >
                <div className="col-6 inp">
                    <div contentEditable onInput={(e)=>onC(e)} style={{ fontSize: "24px", outline: "none", marginBottom:"45px" }} className="p-4" id="input"></div>
                    <div className="m-4" id="suggestion"><i class="fa-solid fa-wand-magic-sparkles mx-3 d-none"></i>Translate from: <span onClick={() => dispatch(inputLang(detectLang))} id="detect">{detectLang.label}</span></div>
                    <div className="row m-4">
                        <button className="btn voice mr-3"><i className="fa-solid fa-microphone text-secondary"></i></button>
                        <button className={`btn voice ${text===""?"d-none":""}`}><i className='fas fa-volume-up text-secondary'></i></button>
                    </div>
                </div>
                <div className="col-6 out" style={{ borderRadius: "0 0 8px 0", background: "white" }}>
                    <div id="out"><Convert options={options}/></div>
                    <div style={{ position: "absolute", bottom: "0", right: "0" }} className={`m-4 ${text===""?"d-none":""}`}>
                        <button className="btn voice float-right"><i style={{ fontSize: "24px" }} className="fa-solid fa-share-nodes text-secondary"></i></button>
                        <button className="btn voice float-right"><i style={{ fontSize: "24px" }} className="fa-regular fa-thumbs-up text-secondary"></i></button>
                        <button onClick={()=>copyToClipboard()} className="btn voice float-right"><i style={{ fontSize: "24px" }} className="fa-regular fa-clipboard text-secondary"></i></button>
                    </div>
                </div>
            </div>
            
        </div>

    )
}



export default Translate;