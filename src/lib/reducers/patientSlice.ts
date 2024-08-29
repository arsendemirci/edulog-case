import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const patientSlice = createSlice({
  name: "patient",
  initialState: {
    patients: ["Arsen", "Murat", "Cemre", "Ender"],
  },
  reducers: {
    ADD_PATIENT: (state, { payload }) => {
      state.patients.push(payload);
    },
  },
});

export const { ADD_PATIENT } = patientSlice.actions;
export default patientSlice.reducer;
