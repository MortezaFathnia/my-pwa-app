import _ from 'lodash';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action: any) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return { ...state, ..._.mapKeys(action.payload.slice(30), 'id') };
    case 'DELETE_POST':
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
