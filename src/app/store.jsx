import {configureStore} from '@reduxjs/toolkit';
import urlReducer from "../features/dashboard/state/urlSlice";

export const store = configureStore ({
  reducer: {
    url: urlReducer,
  },
});
