import useForm from 'hooks/useForm';
import TextField from 'components/TextField/TextField';
import { initialState } from './initialState';
import fields from './fields';
import Button from 'components/Button/Button';
import styles from './RegisterForm.module.scss';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        value={name}
        handleChange={handleChange}
        {...fields.name}
      ></TextField>
      <TextField
        value={email}
        handleChange={handleChange}
        {...fields.email}
      ></TextField>
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      ></TextField>
      <Button> Button</Button>
    </form>
  );
};

export default RegisterForm;
