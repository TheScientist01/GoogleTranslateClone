


const languageReducer = (state = { inLang: {value: "en", label: "English"}, outLang: {value: "fr", label: "French"}, detectLang: {value: "", label: ""}}, action) => {
    switch (action.type) {
        case "INPUT_LANGUAGE":
            return {...state,inLang: action.payload.inLang};
        case "DETECT_LANGUAGE":
            return {...state,detectLang: action.payload.detectLang};
        case "OUTPUT_LANGUAGE":
            return {...state,outLang: action.payload.outLang};
        case "SWITCH":
            return {...state, inLang: state.outLang, outLang: state.inLang};
        default:
            return state;
    }
}

export default languageReducer;