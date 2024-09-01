import style from "./Button.module.scss";
import { ButtonProps } from "@/types/props";

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className || ""} ${style.wrapper}`}>
      {children}
    </button>
  );
};

export default Button;
