import { configureStore } from "@reduxjs/toolkit";
import billsReducer from "./bills/billsSlice";
import authReducer from "./auth/auth.slice";
import invoicesReducer from "./invoices/invoicesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bills: billsReducer,
    invoices: invoicesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
