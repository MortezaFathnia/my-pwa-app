import _ from "lodash";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action:any) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload.slice(30);
        default:
            return state;
    }
};