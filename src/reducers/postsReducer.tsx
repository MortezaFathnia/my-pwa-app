// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action:any) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};