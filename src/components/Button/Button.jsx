import styled from './Button.module.scss';

const Button = ({ children, type = 'submit' }) => {
  return (
    <button type={type} className={styled.button}>
      {children}
    </button>
  );
};
export default Button;
