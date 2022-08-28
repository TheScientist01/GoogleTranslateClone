import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [{ label: "Afrikaans", value: "af" }, { label: "Albanian", value: "sq" }, { label: "Amharic", value: "am" }, { label: "Arabic", value: "ar" }, { label: "Armenian", value: "hy" }, { label: "Azerbaijani", value: "az" }, { label: "Basque", value: "eu" }, { label: "Belarusian", value: "be" }, { label: "Bengali", value: "bn" }, { label: "Bosnian", value: "bs" }, { label: "Bulgarian", value: "bg" }, { label: "Catalan", value: "ca" }, { label: "Cebuano", value: "ceb" }, { label: "Chinese (Simplified)", value: "zh-CN" }, { label: "Chinese (Traditional)", value: "zh-TW" }, { label: "Corsican", value: "co" }, { label: "Croatian", value: "hr" }, { label: "Czech", value: "cs" }, { label: "Danish", value: "da" }, { label: "Dutch", value: "nl" }, { label: "English", value: "en" }, { label: "Esperanto", value: "eo" }, { label: "Estonian", value: "et" }, { label: "Finnish", value: "fi" }, { label: "French", value: "fr" }, { label: "Frisian", value: "fy" }, { label: "Galician", value: "gl" }, { label: "Georgian", value: "ka" }, { label: "German", value: "de" }, { label: "Greek", value: "el" }, { label: "Gujarati", value: "gu" }, { label: "Haitian Creole", value: "ht" }, { label: "Hausa", value: "ha" }, { label: "Hawaiian", value: "haw" }, { label: "Hebrew", value: "iw" }, { label: "Hindi", value: "hi" }, { label: "Hmong", value: "hmn" }, { label: "Hungarian", value: "hu" }, { label: "Icelandic", value: "is" }, { label: "Igbo", value: "ig" }, { label: "Indonesian", value: "id" }, { label: "Irish", value: "ga" }, { label: "Italian", value: "it" }, { label: "Japanese", value: "ja" }, { label: "Javanese", value: "jw" }, { label: "Kannada", value: "kn" }, { label: "Kazakh", value: "kk" }, { label: "Khmer", value: "km" }, { label: "Korean", value: "ko" }, { label: "Kurdish", value: "ku" }, { label: "Kyrgyz", value: "ky" }, { label: "Lao", value: "lo" }, { label: "Latin", value: "la" }, { label: "Latvian", value: "lv" }, { label: "Lithuanian", value: "lt" }, { label: "Luxembourgish", value: "lb" }, { label: "Macedonian", value: "mk" }, { label: "Malagasy", value: "mg" }, { label: "Malay", value: "ms" }, { label: "Malayalam", value: "ml" }, { label: "Maltese", value: "mt" }, { label: "Maori", value: "mi" }, { label: "Marathi", value: "mr" }, { label: "Mongolian", value: "mn" }, { label: "Myanmar (Burmese)", value: "my" }, { label: "Nepali", value: "ne" }, { label: "Norwegian", value: "no" }, { label: "Nyanja (Chichewa)", value: "ny" }, { label: "Pashto", value: "ps" }, { label: "Persian", value: "fa" }, { label: "Polish", value: "pl" }, { label: "Portuguese (Portugal, Brazil)", value: "pt" }, { label: "Punjabi", value: "pa" }, { label: "Romanian", value: "ro" }, { label: "Russian", value: "ru" }, { label: "Samoan", value: "sm" }, { label: "Scots Gaelic", value: "gd" }, { label: "Serbian", value: "sr" }, { label: "Sesotho", value: "st" }, { label: "Shona", value: "sn" }, { label: "Sindhi", value: "sd" }, { label: "Sinhala (Sinhalese)", value: "si" }, { label: "Slovak", value: "sk" }, { label: "Slovenian", value: "sl" }, { label: "Somali", value: "so" }, { label: "Spanish", value: "es" }, { label: "Sundanese", value: "su" }, { label: "Swahili", value: "sw" }, { label: "Swedish", value: "sv" }, { label: "Tagalog (Filipino)", value: "tl" }, { label: "Tajik", value: "tg" }, { label: "Tamil", value: "ta" }, { label: "Telugu", value: "te" }, { label: "Thai", value: "th" }, { label: "Turkish", value: "tr" }, { label: "Ukrainian", value: "uk" }, { label: "Urdu", value: "ur" }, { label: "Uzbek", value: "uz" }, { label: "Vietnamese", value: "vi" }, { label: "Welsh", value: "cy" }, { label: "Xhosa", value: "xh" }, { label: "Yiddish", value: "yi" }, { label: "Yoruba", value: "yo" }, { label: "Zulu", value: "zu" }]

const Translate = () => {

    const [inLang, setInLang] = useState({ label: "English", value: "en" });
    const [outLang, setOutLang] = useState({ label: "French", value: "fr" });
    const [text, setText] = useState("");
    const [translatedText, setTranslatedText]=useState("");
    // const [translatedText, setTranslatedText]=useState("");
    const onC = (event) => {
        setText(event.target.value);
    };
    
    const copyToClipboard=()=>{
        navigator.clipboard.writeText(translatedText);
        document.getElementById("message").innerHTML="Translation copied";        
    }

    return (
        <div style={{ boxShadow: "0 0 3px 2px rgb(0 0 0 / 10%)", borderRadius: "10px" }}>

            <div className="row no-gutters" style={{ borderRadius: "10px 10px 0 0" }}>
                <div className="col-6" style={{ borderRadius: "inherit" }}>
                    <Dropdown
                        options={options}
                        selected={inLang}
                        onChangedOption={setInLang}
                    />
                </div>
                <div className="col-6">
                    <Dropdown
                        options={options}
                        selected={outLang}
                        onChangedOption={setOutLang}
                    />
                </div>
            </div>
            <div className="row no-gutters" >
                <div className="col-6 inp">
                    <textarea onChange={(e) => onC(e)} style={{ resize: "none", fontSize: "24px", outline: "none" }} className="p-4"></textarea>
                    <div className="m-4" id="suggestion"><i class="fa-solid fa-wand-magic-sparkles mx-3"></i>Translate from: <span onClick={() => console.log("Ae")} id="detect"></span></div>
                    <div className="row m-4">
                        <button className="btn voice mr-3"><i className="fa-solid fa-microphone text-secondary"></i></button>
                        <button className="btn voice"><i className='fas fa-volume-up text-secondary'></i></button>
                    </div>
                </div>
                <div className="col-6 out" style={{ borderRadius: "0 0 8px 0", background: "white" }}>
                    <div id="out"><Convert options={options} inLang={inLang} outLang={outLang} text={text} translatedText={setTranslatedText}/></div>
                    <div style={{ position: "absolute", bottom: "0", right: "0" }} className={`m-4 ${text===""?"d-none":""}`}>
                        <button className="btn voice float-right"><i style={{ fontSize: "24px" }} className="fa-solid fa-share-nodes text-secondary"></i></button>
                        <button className="btn voice float-right"><i style={{ fontSize: "24px" }} className="fa-regular fa-thumbs-up text-secondary"></i></button>
                        <button onClick={()=>copyToClipboard()} className="btn voice float-right"><i style={{ fontSize: "24px" }} className="fa-regular fa-clipboard text-secondary"></i></button>
                    </div>
                </div>
            </div>
            {/* <div id="message" className="p-4"></div> */}
        </div>

    )
}



export default Translate;