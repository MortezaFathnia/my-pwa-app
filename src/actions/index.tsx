import jsonPlaceholder from "../apis/jsonplaceholder";
import reqres from "../apis/reqres";
export const fetchPosts = () => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const login = (body:any) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    const response = await reqres.post('/login', body);
    dispatch({
        type: 'LOGIN',
        payload: response.data
    })
}