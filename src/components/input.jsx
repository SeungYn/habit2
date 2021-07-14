

import React, { memo } from 'react';

const Input = memo ((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();
  const onSubmit = event =>{
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  }
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" className="add-input" placeholder="habit" name="" id="" />
      <button className="button add-button" >Add</button>
    </form>
  );
});

export default Input;

