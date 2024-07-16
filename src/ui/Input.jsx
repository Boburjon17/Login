import React from "react";

const Input = ({ type , id, placeholder, label, state, setState }) => {
  return (
    <div className="form-floating">
      <input
        type={type}
        className="form-control mt-3"
        id={id}
        placeholder={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />

      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
