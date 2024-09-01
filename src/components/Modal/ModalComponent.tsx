import { Button } from "@/components";
import { Close } from "@mui/icons-material";
// import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const ModalComponent = (props: any) => {
  const closeModal = () => {
    props.onClose();
  };

  return (
    <>
      <div className={`${s.backdrop} ${props.open && s.open}`}></div>
      <div className={`${s.modalwrap} ${props.open && s.open}`}>
        <div className={`${s.modal} ${props.open && s.open}`}>
          <Button className={s.buttonclose} onClick={closeModal}>
            <Close />
          </Button>
          <div className={s.container}>{props.children}</div>
        </div>
      </div>
    </>
  );
  // Check if document is finally loaded
};
export default ModalComponent;
