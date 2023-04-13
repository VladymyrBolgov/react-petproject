import css from "./Alert.module.css";
export const Alert = ({ variant, children }) => {
  return <p className={css[variant]}>{children}</p>;
};