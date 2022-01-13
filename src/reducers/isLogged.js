
const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SING_IN':
            return true;
        default: return false;
    }
};

export default loggedReducer;