"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPatient from "@/components/Modal/AddPatient/AddPatient";
import style from "./PatientList.module.scss";
import { Button } from "@mui/material";
import { Button as AppButon } from "@/components";
import { ADD_PATIENT } from "@/lib/reducers/patientSlice";
import Modal from "@/components/Modal/Modal";
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
  const [modal, setModal] = useState<any>({
    open: false,
  });
  const openModal = () => {
    setModal({ ...modal, open: true });
  };

  const closeModal = () => {
    setModal({ ...modal, open: false });

    const timeout = setTimeout(() => {
      setModal({ open: false });
    });

    return () => {
      clearTimeout(timeout);
    };
  };
  return (
    <>
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

          <Button
            variant="contained"
            onClick={openModal}
            className={style.MuiButton}
          >
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
              <li
                key={index + 1}
                style={{ animationDelay: `${index * 0.11}s` }}
              >
                <div>{patient.firstName}</div>
                <div>{patient.lastName}</div>
                <div>{patient.age}</div>
                <div>{patient.complaint}</div>
                <div>{patient.diagnose}</div>
                <div className={style.actions}>
                  <AppButon className={style.button} onClick={() => {}}>
                    <Visibility />
                  </AppButon>
                  <AppButon className={style.button} onClick={() => {}}>
                    <Edit />
                  </AppButon>
                  <AppButon className={style.button} onClick={() => {}}>
                    <Delete />
                  </AppButon>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <Modal open={modal.open} onClose={closeModal}>
        <AddPatient />
      </Modal>
    </>
  );
}
