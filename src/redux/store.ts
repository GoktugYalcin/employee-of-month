import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "./employeesSlice";
import pageSlice from "./pageSlice";

export const store = configureStore({
  reducer: {
    employees: employeesSlice,
    page: pageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
