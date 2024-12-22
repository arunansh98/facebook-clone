import {
  FETCH_POSTS,
  UPDATE_POST,
  ADD_POST,
  FETCH_USER_DETAILS,
} from "../../constants/apiConstants";
import { DELETE, GET, POST, PUT, PATCH } from "../../constants/methodTypes";
import { getBearerToken } from "../../utils/sessionStorageUtils";
import { landingApi } from "./landingApi";

const homeApi = landingApi.injectEndpoints({
  endpoints(builder) {
    return {
      fetchUserDetails: builder.query({
        providesTags: ["fetchUserDetails"],
        query: (id) => {
          console.log("id", id);
          return {
            url: `${FETCH_USER_DETAILS}/${id}`,
            method: GET,
            headers: {
              Authorization: getBearerToken(),
            },
          };
        },
      }),
      updateUserDetails: builder.mutation({
        invalidatesTags: ["fetchUserDetails"],
        query: (userDetails) => {
          const { id, ...rest } = userDetails;
          return {
            url: `${FETCH_USER_DETAILS}/${id}`,
            method: PATCH,
            headers: {
              Authorization: getBearerToken(),
            },
            body: {
              ...rest,
            },
          };
        },
      }),
      fetchPosts: builder.query({
        providesTags: ["fetchPosts"],
        query: (userId) => {
          return {
            url: FETCH_POSTS,
            method: GET,
            headers: {
              Authorization: getBearerToken(),
            },
            params: {
              userId,
            },
          };
        },
      }),
      addPost: builder.mutation({
        invalidatesTags: ["fetchPosts"],
        query: (post) => {
          return {
            url: ADD_POST,
            method: POST,
            headers: {
              Authorization: getBearerToken(),
            },
            body: {
              ...post,
            },
          };
        },
      }),
      updatePost: builder.mutation({
        invalidatesTags: ["fetchPosts"],
        query: (post) => {
          const { id, ...body } = post;
          return {
            url: `${UPDATE_POST}/${id}`,
            method: PUT,
            headers: {
              Authorization: getBearerToken(),
            },
            body: {
              ...body,
            },
          };
        },
      }),
      deletePost: builder.mutation({
        invalidatesTags: ["fetchPosts"],
        query: (post) => {
          const { id } = post;
          return {
            url: `${UPDATE_POST}/${id}`,
            method: DELETE,
            headers: {
              Authorization: getBearerToken(),
            },
          };
        },
      }),
    };
  },
  overrideExisting: false,
});

export const {
  useFetchUserDetailsQuery,
  useUpdateUserDetailsMutation,
  useFetchPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = homeApi;
export { homeApi };

export const useFetchProfileDetailsQuery = (userId) => {
  return {
    userDetails: useFetchUserDetailsQuery(userId),
    postDetails: useFetchPostsQuery(userId),
  };
};
