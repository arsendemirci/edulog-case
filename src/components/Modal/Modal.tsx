// "use client";
// import s from "./Modal.module.scss";
// import { Button } from "@/components";
// import { Close } from "@mui/icons-material";
// import { createPortal } from "react-dom";
import dynamic from "next/dynamic";

const Modal = dynamic(
  () => {
    return import("./ModalComponent");
  },
  { ssr: false }
);

export default Modal;
