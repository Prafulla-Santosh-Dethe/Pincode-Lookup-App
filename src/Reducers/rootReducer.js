const initialState = {
    userDetails: null,
    };
    
    const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_USER_DETAILS':
    return { ...state, userDetails: action.payload };
    default:
    return state;
    }
    };
    
    export default rootReducer;