"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PATIENT } from "@/lib/reducers/patientSlice";

export default function PatientList() {
  const { patients } = useSelector((store: any) => store.patient);

  return (
    <div>
      <ul>
        {patients.map((patient, index) => (
          <li key={index + 1}> {patient}</li>
        ))}
      </ul>
    </div>
  );
}
