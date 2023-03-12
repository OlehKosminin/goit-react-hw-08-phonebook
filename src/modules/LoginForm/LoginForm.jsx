import styled from './LoginForm.module.scss';
import initialState from './initialState';
import useForm from 'hooks/useForm';
import fields from './fields';
import Button from 'components/Button/Button';
import TextField from 'components/TextField/TextField';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styled.form}>
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

export default LoginForm;
