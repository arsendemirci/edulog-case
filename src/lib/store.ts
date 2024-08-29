import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "@/lib/reducers/patientSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      patient: patientReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
