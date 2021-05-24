import s from "./button.module.scss";
import Link from "next/link";

function CustomButton(props) {
  return (
    <Link href="/">
      <a>
        <button className={s.btn}>{props.children}</button>
      </a>
    </Link>
  );
}

export default CustomButton;
