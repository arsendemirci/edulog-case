import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { AddPatientFormType } from "@/types";

import { addPatientFormValidation as validation } from "@/constant/form";
import s from "./AddPatient.module.scss";
const AddPatient = () => {
  const {
    register: registerPatientForm,
    handleSubmit: handlePatientForm,
    formState: { errors: submitErrors },
    reset: resetForm,
  } = useForm<AddPatientFormType>({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const submitPatientForm = (data: AddPatientFormType) => {
    resetForm();
  };

  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handlePatientForm(submitPatientForm)}>
        <h2> Patient Form</h2>
        <div className={s.formcontrol}>
          <TextField
            fullWidth
            label="First Name *"
            type="text"
            variant="outlined"
            error={!!submitErrors?.firstName}
            helperText={submitErrors?.firstName?.message}
            {...registerPatientForm("firstName", validation.firstName)}
          />
        </div>
        <div className={s.formcontrol}>
          <TextField
            fullWidth
            label="Last Name *"
            variant="outlined"
            error={!!submitErrors?.lastName}
            helperText={submitErrors?.lastName?.message}
            {...registerPatientForm("lastName", validation.lastName)}
          />
        </div>
        <div className={s.formcontrol}>
          <TextField
            fullWidth
            label="Age *"
            type="number"
            variant="outlined"
            error={!!submitErrors?.age}
            helperText={submitErrors?.age?.message}
            {...registerPatientForm("age", validation.age)}
          />
        </div>
        <div className={s.formcontrol}>
          <TextField
            fullWidth
            label="Complaint *"
            variant="outlined"
            multiline
            error={!!submitErrors?.complaint}
            helperText={submitErrors?.complaint?.message}
            {...registerPatientForm("complaint", validation.complaint)}
          />
        </div>
        <div className={s.formaction}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddPatient;
