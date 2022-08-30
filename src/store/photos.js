import createAsyncSlice from "./helper/createAsyncSlice";

const photos = createAsyncSlice({
  name: 'photos',
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

export const fetchPhotos = photos.asyncAction

export default photos.reducer