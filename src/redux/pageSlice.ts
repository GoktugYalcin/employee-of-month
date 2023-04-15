import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import pageProps from "../interfaces/Page";
import eventManager from "../logger";

const initialState: pageProps = {
  page: "home",
  selectedEmployee: null,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<pageProps>) => {
      if (action.payload.selectedEmployee) {
        state.selectedEmployee = action.payload.selectedEmployee;
      } else {
        state.selectedEmployee = null;
      }

      eventManager.logEvent(`Page changed to ${action.payload.page}`);
      state.page = action.payload.page;
    },
  },
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
