// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action:any) => {
    switch(action.type){
        case 'LOGIN':
            return action.payload;
        default:
            return state;
    }
};