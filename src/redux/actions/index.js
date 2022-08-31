export const inputLang=(inLang={label: "English", value: "en"})=>{
    return{
        type: "INPUT_LANGUAGE",
        payload: {inLang:inLang}
    }
}

export const detectLang=(detectLang={label: "English", value: "en"})=>{
    return{
        type: "DETECT_LANGUAGE",
        payload: {detectLang: detectLang}
    }
}

export const outputLang=(outLang={label: "French", value: "fr"})=>{
    return{
        type: "OUTPUT_LANGUAGE",
        payload: {outLang:outLang}
    }
}

export const dropdownActiveIn=()=>{
    return{
        type: "ACTIVATE_IN",
    }
}

export const dropdownActiveOut=()=>{
    return{
        type: "ACTIVATE_OUT",
    }
}

export const dropdownDeactive=()=>{
    return{
        type: "DEACTIVATE"
    }
}

export const inputText=(text)=>{
    return{
        type: "INPUT_TEXT",
        payload: {inputText: text}
    }
}

export const outputText=(text)=>{
    return{
        type: "OUTPUT_TEXT",
        payload: {outputText: text}
    }
}