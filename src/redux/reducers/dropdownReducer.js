const dropdownReducer = (state = { isActive: false, isActiveIn: false, isActiveOut: false }, action) => {
    switch (action.type) {
        case "ACTIVATE_IN":
            return { ...state, isActive: true,  isActiveIn: true};
        case "ACTIVATE_OUT":
            return { ...state, isActive: true, isActiveOut: true};
        case "DEACTIVATE":
            return { ...state, isActive: false, isActiveIn: false, isActiveOut: false };
        default:
            return state;
    }
}

export default dropdownReducer;