const textReducer=(state={inputText: "", outputText: ""}, action)=>{
    switch (action.type) {
        case "INPUT_TEXT":
            return {...state,inputText: action.payload.inputText};
        case "OUTPUT_TEXT":
            return  {...state,outputText: action.payload.outputText};
        
        default:
            return state;
    }
}

export default textReducer;