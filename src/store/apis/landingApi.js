import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LOGIN, REGISTER } from "../../constants/apiConstants";
import { POST } from "../../constants/methodTypes";

const landingApi = createApi({
  reducerPath: "landing",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      login: builder.mutation({
        invalidatesTags: ["fetchPosts"],
        query: (body) => {
          return {
            url: LOGIN,
            method: POST,
            body: { ...body },
          };
        },
      }),
      signup: builder.mutation({
        invalidatesTags: ["fetchPosts"],
        query: (body) => {
          return {
            url: REGISTER,
            method: POST,
            body: { ...body },
          };
        },
      }),
    };
  },
});

export const { useLoginMutation, useSignupMutation } = landingApi;
export { landingApi };
