import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PatientType } from "@/types";
const patientSlice = createSlice({
  name: "patient",
  initialState: {
    patients: [
      {
        firstName: "Serdar",
        lastName: "Seri",
        age: 39,
        complaint: "often tiredness and head ache",
        diagnose: "",
      },
      {
        firstName: "Murat",
        lastName: "Erkan",
        age: 25,
        complaint: "pain in the back and bruises",
        diagnose: "early hernia",
      },
      {
        firstName: "Erman",
        lastName: "Ender",
        age: 34,
        complaint: "pain in the left arm and numbness",
        diagnose: "",
      },
      {
        firstName: "Sevilay",
        lastName: "Gencay",
        age: 32,
        complaint: "stomach ache and dizzyness",
        diagnose: "possible urtiker",
      },
      {
        firstName: "Melike",
        lastName: "Kolay",
        age: 42,
        complaint: "pain in the finger tips of right hand",
        diagnose: "Allergic reaction",
      },
      {
        firstName: "Necati",
        lastName: "Gulyuz",
        age: 52,
        complaint: "sweatening and tiredness",
        diagnose: "lack of vitamin D",
      },
    ] as PatientType[],
  },
  reducers: {
    ADD_PATIENT: (state, { payload }) => {
      state.patients.push(payload);
    },
  },
});

export const { ADD_PATIENT } = patientSlice.actions;
export default patientSlice.reducer;
