import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import './styles.css';

function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <label htmlFor={fieldName} className="label-unform">{label}</label>}

      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        className="input-unform"
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </>
  );
}

export default Input;
