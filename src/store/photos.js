import createAsyncSlice from "./helper/createAsyncSlice";

const photos = createAsyncSlice({
  name: 'photos',
  initialState: {
    list: [],
    page: 0,
    infinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      return {
        ...state,
        list: [...state.list, ...action.payload],
        page: state.page + 1,
        infinite: action.payload.length === 0 ? false : true   
      }
    },
    removePhotos(state) {
      return {
        list: [],
        page: 0,
        infinite: true,
        data: null
      }
    }
  },
  fetchConfig(page = 1) {
    return {
      url: `https://apidogs.murilothom.com/json/api/photo/?_page=${page}&_total=5&_user=0`,
      options: {
        method: 'GET',
        cache: 'no-store',
      },
    }
  },
})

export const { addPhotos, removePhotos } = photos.actions
export const fetchPhotos = photos.asyncAction

export const loadNewPhotos = (page = 1) => async (dispatch) => {
  const { payload } = await dispatch(fetchPhotos(page))
  dispatch(addPhotos(payload))
}

export default photos.reducer