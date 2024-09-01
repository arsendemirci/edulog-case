"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./PatientList.module.scss";
import { Button } from "@/components";
import { ADD_PATIENT } from "@/lib/reducers/patientSlice";
import {
  Visibility,
  Edit,
  Delete,
  PersonAdd,
  Search,
} from "@mui/icons-material";
import { TextField, InputAdornment } from "@mui/material";
export default function PatientList() {
  const [search, setSearch] = useState<string>();
  const { patients } = useSelector((store: any) => store.patient);

  return (
    <div className={style.wrapper}>
      <div className={style.titlebar}>
        <h3>Patient List</h3>
        <div className={style.search}>
          <TextField
            label="Search"
            size="small"
            onChange={(e) => setSearch(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>

        <Button onClick={() => {}}>
          <PersonAdd /> Add Patient
        </Button>
      </div>
      <ul>
        <li className={style.header}>
          <div>First Name</div>
          <div>Last Name</div>
          <div>Age</div>
          <div>Complaint</div>
          <div>Diagnose</div>
          <div>Actions</div>
        </li>
        <hr />
        {patients
          .filter(
            (pat) =>
              !search ||
              pat.firstName.toLowerCase().includes(search.toLowerCase()) ||
              pat.lastName.toLowerCase().includes(search.toLowerCase())
          )
          .map((patient, index) => (
            <li key={index + 1}>
              <div>{patient.firstName}</div>
              <div>{patient.lastName}</div>
              <div>{patient.age}</div>
              <div>{patient.complaint}</div>
              <div>{patient.diagnose}</div>
              <div className={style.actions}>
                <Button className={style.button} onClick={() => {}}>
                  <Visibility />
                </Button>
                <Button className={style.button} onClick={() => {}}>
                  <Edit />
                </Button>
                <Button className={style.button} onClick={() => {}}>
                  <Delete />
                </Button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
