import style from "./Button.module.scss";
import { ButtonProps } from "@/types/props";

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={style.wrapper}>
      {children}
    </button>
  );
};

export default Button;
