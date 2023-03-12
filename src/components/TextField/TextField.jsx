import styled from './TextField.module.scss';
import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      <label htmlFor={id}> {label}</label>
      <input onChange={handleChange} {...props} className={styled.input} />
    </div>
  );
};
export default TextField;
