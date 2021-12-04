import jsonPlaceholder from '../apis/jsonplaceholder';
import reqres from '../apis/reqres';

export const fetchPosts =
  () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data,
    });
  };

export const login = ({ token }:any) => ({
  type: 'SIGN_IN',
  payload: {
    isSignedIn: true,
    token,
  },
});

export const deletePost =
  (id: number) =>
  async (
    dispatch: (arg0: { type: any; payload: any }) => void,
    getState: any
  ) => {
    dispatch({
      type: 'DELETE_POST',
      payload: id,
    });
  };
