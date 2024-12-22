import { configureStore } from "@reduxjs/toolkit";
import { landingApi } from "./apis/landingApi";
import { homeApi } from "./apis/homeApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [landingApi.reducerPath]: landingApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(landingApi.middleware);
  },
});

setupListeners(store.dispatch);

export { landingApi };
export { useLoginMutation, useSignupMutation } from "./apis/landingApi";

export { homeApi };
export {
  useFetchProfileDetailsQuery,
  useUpdateUserDetailsMutation,
  useFetchUserDetailsQuery,
  useFetchPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "./apis/homeApi";
