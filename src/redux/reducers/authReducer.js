const INITIAL_STATE = {
    isSignedIn: false,
    userId: null,
    mail: null,
    name: null,
    surname: null,
    pp: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload.userId,
                mail: action.payload.mail,
                name: action.payload.name,
                surname: action.payload.surname,
                pp: action.payload.pp,
            };
        case 'SIGN_OUT':
            return {
                ...state,
                isSignedIn: false,
                userId: null,
                mail: null,
                name: null,
                surname: null
            };
        default:
            return state;
    }
};
