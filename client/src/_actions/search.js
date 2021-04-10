import { search as API } from '../api/posts';
export const search = (query) => async (dispatch) => {
  const { data } = await API(query);
  dispatch({ type: 'SEARCH_RESULTS', payload: data });
};
